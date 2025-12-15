<template>
  <div id="game-app">
    <!-- Sound Toggle -->
    <SoundToggle :is-muted="sound.isMuted.value" @toggle="sound.toggleMute" />
    
    <!-- Main Menu -->
    <MainMenu 
      v-if="currentScreen === 'menu'" 
      @select-mode="handleModeSelect"
    />
    
    <!-- Player Setup -->
    <PlayerSetup 
      v-else-if="currentScreen === 'setup'"
      :is-single-player="gameSettings.isSinglePlayer"
      @start="startGame"
      @back="currentScreen = 'menu'"
    />
    
    <!-- Game Screen -->
    <div v-else-if="currentScreen === 'game'" class="game-container">
      <h2>{{ gameSettings.isSinglePlayer ? '🤖 VS COMPUTER' : '👥 2 PLAYERS' }}</h2>
      
      <!-- Score Board -->
      <ScoreBoard 
        :scores="score.scores"
        :player1-name="score.playerNames.player1"
        :player2-name="score.playerNames.player2"
      />
      
      <!-- Turn Indicator -->
      <div class="turn-indicator" v-if="game.gameStatus.value === 'playing'">
        <span>TURN: </span>
        <span class="current-player" :class="game.currentPlayer.value.toLowerCase()">
          {{ getCurrentPlayerName() }} ({{ game.currentPlayer.value }})
        </span>
      </div>
      
      <!-- Game Board -->
      <GameBoard 
        :board="game.board.value"
        :winning-cells="game.winningCells.value"
        :disabled="game.gameStatus.value !== 'playing' || isAITurn"
        @cell-click="handleCellClick"
      />
      
      <!-- Game Result -->
      <GameResult 
        v-if="game.gameStatus.value !== 'playing'"
        :winner="game.winner.value"
        :winner-name="score.getWinnerName(game.winner.value)"
        @restart="restartGame"
        @menu="goToMenu"
      />
      
      <!-- Game Controls (during game) -->
      <div class="game-controls" v-if="game.gameStatus.value === 'playing'">
        <button class="pixel-btn secondary" @click="restartGame">
          🔄 RESTART
        </button>
        <button class="pixel-btn secondary" @click="goToMenu">
          🏠 MENU
        </button>
      </div>
      
      <!-- Game History -->
      <GameHistory :history="history.history.value" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, nextTick } from 'vue'
import MainMenu from './components/MainMenu.vue'
import PlayerSetup from './components/PlayerSetup.vue'
import GameBoard from './components/GameBoard.vue'
import ScoreBoard from './components/ScoreBoard.vue'
import GameHistory from './components/GameHistory.vue'
import GameResult from './components/GameResult.vue'
import SoundToggle from './components/SoundToggle.vue'

import { useGameState } from './composables/useGameState'
import { useAI } from './composables/useAI'
import { useScore } from './composables/useScore'
import { useHistory } from './composables/useHistory'
import { useSound } from './composables/useSound'

// Initialize composables
const game = useGameState()
const ai = useAI()
const score = useScore()
const history = useHistory()
const sound = useSound()

// Screen navigation
const currentScreen = ref('menu')

// Game settings
const gameSettings = reactive({
  isSinglePlayer: true,
  difficulty: 'medium'
})

// AI turn indicator
const isAITurn = ref(false)

// Handle mode selection
const handleModeSelect = (mode) => {
  gameSettings.isSinglePlayer = mode === 'single'
  currentScreen.value = 'setup'
  sound.playClick()
}

// Start the game
const startGame = (settings) => {
  gameSettings.isSinglePlayer = settings.isSinglePlayer
  gameSettings.difficulty = settings.difficulty
  
  score.setPlayerNames(settings.player1Name, settings.player2Name)
  
  game.resetGame()
  history.clearHistory()
  
  currentScreen.value = 'game'
  sound.playClick()
}

// Handle cell click
const handleCellClick = async (index) => {
  // Ignore if it's AI's turn or game is over
  if (isAITurn.value || game.gameStatus.value !== 'playing') {
    sound.playError()
    return
  }
  
  // Make the move
  const moved = game.makeMove(index)
  
  if (moved) {
    // Record the move in history
    const player = game.board.value[index]
    history.recordMove(player, index)
    sound.playMove()
    
    // Check game end
    if (game.gameStatus.value === 'won') {
      sound.playWin()
      score.recordWin(game.winner.value)
      return
    }
    
    if (game.gameStatus.value === 'draw') {
      sound.playDraw()
      score.recordDraw()
      return
    }
    
    // If single player and game continues, AI makes a move
    if (gameSettings.isSinglePlayer && game.gameStatus.value === 'playing') {
      await makeAIMove()
    }
  } else {
    sound.playError()
  }
}

// AI move
const makeAIMove = async () => {
  isAITurn.value = true
  
  // Small delay for better UX
  await new Promise(resolve => setTimeout(resolve, 300))
  
  const aiMove = ai.getAIMove(
    game.board.value, 
    gameSettings.difficulty, 
    'O'
  )
  
  if (aiMove !== null && game.gameStatus.value === 'playing') {
    game.makeMove(aiMove)
    history.recordMove('O', aiMove)
    sound.playMove()
    
    // Check game end after AI move
    if (game.gameStatus.value === 'won') {
      await nextTick()
      sound.playWin()
      score.recordWin(game.winner.value)
    } else if (game.gameStatus.value === 'draw') {
      await nextTick()
      sound.playDraw()
      score.recordDraw()
    }
  }
  
  isAITurn.value = false
}

// Get current player name
const getCurrentPlayerName = () => {
  if (game.currentPlayer.value === 'X') {
    return score.playerNames.player1
  }
  return score.playerNames.player2
}

// Restart game
const restartGame = () => {
  game.resetGame()
  history.clearHistory()
  sound.playClick()
}

// Go to menu
const goToMenu = () => {
  currentScreen.value = 'menu'
  game.resetGame()
  history.clearHistory()
  sound.playClick()
}
</script>

<style scoped>
#game-app {
  width: 100%;
}
</style>

