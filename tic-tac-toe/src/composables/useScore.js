import { ref, reactive } from 'vue'

export function useScore() {
  // Scores object
  const scores = reactive({
    player1: { wins: 0, losses: 0 },
    player2: { wins: 0, losses: 0 },
    draws: 0
  })
  
  // Player names
  const playerNames = reactive({
    player1: 'Player 1',
    player2: 'Player 2'
  })
  
  // Set player names
  const setPlayerNames = (name1, name2) => {
    playerNames.player1 = name1 || 'Player 1'
    playerNames.player2 = name2 || 'Player 2'
  }
  
  // Record a win
  const recordWin = (winner) => {
    if (winner === 'X') {
      scores.player1.wins++
      scores.player2.losses++
    } else if (winner === 'O') {
      scores.player2.wins++
      scores.player1.losses++
    }
  }
  
  // Record a draw
  const recordDraw = () => {
    scores.draws++
  }
  
  // Reset all scores
  const resetScores = () => {
    scores.player1.wins = 0
    scores.player1.losses = 0
    scores.player2.wins = 0
    scores.player2.losses = 0
    scores.draws = 0
  }
  
  // Get winner name
  const getWinnerName = (winner) => {
    if (winner === 'X') return playerNames.player1
    if (winner === 'O') return playerNames.player2
    return null
  }
  
  return {
    scores,
    playerNames,
    setPlayerNames,
    recordWin,
    recordDraw,
    resetScores,
    getWinnerName
  }
}

