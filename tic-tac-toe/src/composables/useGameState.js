import { ref, computed } from 'vue'

// Winning combinations (indices of the 3x3 board)
const WINNING_COMBOS = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal top-left to bottom-right
  [2, 4, 6], // Diagonal top-right to bottom-left
]

export function useGameState() {
  // Board state: array of 9 cells, each can be null, 'X', or 'O'
  const board = ref(Array(9).fill(null))
  
  // Current player: 'X' or 'O'
  const currentPlayer = ref('X')
  
  // Game status: 'playing', 'won', 'draw'
  const gameStatus = ref('playing')
  
  // Winner: null, 'X', or 'O'
  const winner = ref(null)
  
  // Winning cells (indices)
  const winningCells = ref([])
  
  // Check for winner
  const checkWinner = () => {
    for (const combo of WINNING_COMBOS) {
      const [a, b, c] = combo
      if (
        board.value[a] &&
        board.value[a] === board.value[b] &&
        board.value[a] === board.value[c]
      ) {
        return { winner: board.value[a], cells: combo }
      }
    }
    return null
  }
  
  // Check for draw
  const isDraw = computed(() => {
    return board.value.every(cell => cell !== null) && !winner.value
  })
  
  // Make a move
  const makeMove = (index) => {
    // Can't move if game is over or cell is occupied
    if (gameStatus.value !== 'playing' || board.value[index]) {
      return false
    }
    
    // Place the mark
    board.value[index] = currentPlayer.value
    
    // Check for winner
    const result = checkWinner()
    if (result) {
      winner.value = result.winner
      winningCells.value = result.cells
      gameStatus.value = 'won'
      return true
    }
    
    // Check for draw
    if (board.value.every(cell => cell !== null)) {
      gameStatus.value = 'draw'
      return true
    }
    
    // Switch player
    currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X'
    return true
  }
  
  // Reset game
  const resetGame = () => {
    board.value = Array(9).fill(null)
    currentPlayer.value = 'X'
    gameStatus.value = 'playing'
    winner.value = null
    winningCells.value = []
  }
  
  // Get available moves (empty cell indices)
  const getAvailableMoves = () => {
    return board.value
      .map((cell, index) => cell === null ? index : null)
      .filter(index => index !== null)
  }
  
  return {
    board,
    currentPlayer,
    gameStatus,
    winner,
    winningCells,
    isDraw,
    makeMove,
    resetGame,
    getAvailableMoves,
    WINNING_COMBOS
  }
}

