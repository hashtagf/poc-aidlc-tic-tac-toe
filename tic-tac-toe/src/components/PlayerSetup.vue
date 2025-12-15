<template>
  <div class="menu-container game-container">
    <h2>{{ isSinglePlayer ? '🤖 VS COMPUTER' : '👥 2 PLAYERS' }}</h2>
    
    <div style="margin-top: 20px;">
      <!-- Player 1 Name -->
      <div class="input-group">
        <label>PLAYER 1 NAME (X)</label>
        <input 
          type="text" 
          class="pixel-input"
          v-model="player1Name"
          placeholder="Enter name..."
          maxlength="15"
        />
      </div>
      
      <!-- Player 2 Name (two-player mode only) -->
      <div class="input-group" v-if="!isSinglePlayer">
        <label>PLAYER 2 NAME (O)</label>
        <input 
          type="text" 
          class="pixel-input"
          v-model="player2Name"
          placeholder="Enter name..."
          maxlength="15"
        />
      </div>
      
      <!-- Difficulty Selection (single player only) -->
      <div v-if="isSinglePlayer" style="margin-top: 24px;">
        <label style="display: block; font-size: 10px; margin-bottom: 12px;">
          SELECT DIFFICULTY
        </label>
        <div class="difficulty-options">
          <button 
            v-for="diff in difficulties"
            :key="diff.value"
            class="pixel-btn difficulty-btn"
            :class="{ selected: selectedDifficulty === diff.value }"
            @click="selectedDifficulty = diff.value"
          >
            {{ diff.icon }} {{ diff.label }}
          </button>
        </div>
      </div>
      
      <!-- Start Button -->
      <div style="margin-top: 24px; text-align: center;">
        <button class="pixel-btn" @click="startGame">
          ▶️ START GAME
        </button>
        <button class="pixel-btn secondary" style="margin-top: 12px;" @click="$emit('back')">
          ← BACK
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  isSinglePlayer: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['start', 'back'])

const player1Name = ref('')
const player2Name = ref('')
const selectedDifficulty = ref('medium')

const difficulties = [
  { value: 'easy', label: 'EASY', icon: '😊' },
  { value: 'medium', label: 'MEDIUM', icon: '🤔' },
  { value: 'hard', label: 'HARD', icon: '🤯' }
]

const startGame = () => {
  emit('start', {
    player1Name: player1Name.value || 'Player 1',
    player2Name: props.isSinglePlayer ? 'Computer' : (player2Name.value || 'Player 2'),
    difficulty: selectedDifficulty.value,
    isSinglePlayer: props.isSinglePlayer
  })
}
</script>

