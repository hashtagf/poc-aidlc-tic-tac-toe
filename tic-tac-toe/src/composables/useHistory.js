import { ref, computed } from 'vue'

export function useHistory() {
  // Move history: array of { moveNumber, player, position, cell }
  const history = ref([])
  
  // Current viewing index for history navigation
  const viewingIndex = ref(-1)
  
  // Record a move
  const recordMove = (player, cellIndex) => {
    const positions = ['top-left', 'top-center', 'top-right', 
                       'middle-left', 'center', 'middle-right',
                       'bottom-left', 'bottom-center', 'bottom-right']
    
    history.value.push({
      moveNumber: history.value.length + 1,
      player,
      cell: cellIndex,
      position: positions[cellIndex],
      timestamp: Date.now()
    })
    
    // Reset viewing index when new move is made
    viewingIndex.value = -1
  }
  
  // Clear history
  const clearHistory = () => {
    history.value = []
    viewingIndex.value = -1
  }
  
  // Get board state at specific move
  const getBoardAtMove = (moveIndex) => {
    const board = Array(9).fill(null)
    
    for (let i = 0; i <= moveIndex && i < history.value.length; i++) {
      const move = history.value[i]
      board[move.cell] = move.player
    }
    
    return board
  }
  
  // Navigation
  const canGoBack = computed(() => {
    if (viewingIndex.value === -1) {
      return history.value.length > 0
    }
    return viewingIndex.value > 0
  })
  
  const canGoForward = computed(() => {
    return viewingIndex.value !== -1 && viewingIndex.value < history.value.length - 1
  })
  
  const goBack = () => {
    if (viewingIndex.value === -1) {
      viewingIndex.value = history.value.length - 2
    } else if (viewingIndex.value > 0) {
      viewingIndex.value--
    }
  }
  
  const goForward = () => {
    if (viewingIndex.value < history.value.length - 1) {
      viewingIndex.value++
    }
    if (viewingIndex.value === history.value.length - 1) {
      viewingIndex.value = -1 // Return to live state
    }
  }
  
  const goToEnd = () => {
    viewingIndex.value = -1
  }
  
  const isViewingHistory = computed(() => viewingIndex.value !== -1)
  
  return {
    history,
    viewingIndex,
    recordMove,
    clearHistory,
    getBoardAtMove,
    canGoBack,
    canGoForward,
    goBack,
    goForward,
    goToEnd,
    isViewingHistory
  }
}

