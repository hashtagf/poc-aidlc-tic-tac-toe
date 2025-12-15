// AI Logic for Tic-Tac-Toe
// Supports Easy (random), Medium (basic strategy), Hard (minimax/unbeatable)

const WINNING_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
]

export function useAI() {
  
  // Easy AI: Random move
  const getEasyMove = (board) => {
    const available = board
      .map((cell, index) => cell === null ? index : null)
      .filter(index => index !== null)
    
    if (available.length === 0) return null
    return available[Math.floor(Math.random() * available.length)]
  }
  
  // Medium AI: Block wins, take wins, prefer center/corners
  const getMediumMove = (board, aiPlayer = 'O') => {
    const humanPlayer = aiPlayer === 'O' ? 'X' : 'O'
    const available = board
      .map((cell, index) => cell === null ? index : null)
      .filter(index => index !== null)
    
    if (available.length === 0) return null
    
    // 1. Check if AI can win
    for (const move of available) {
      const testBoard = [...board]
      testBoard[move] = aiPlayer
      if (checkWin(testBoard, aiPlayer)) {
        return move
      }
    }
    
    // 2. Block human from winning
    for (const move of available) {
      const testBoard = [...board]
      testBoard[move] = humanPlayer
      if (checkWin(testBoard, humanPlayer)) {
        return move
      }
    }
    
    // 3. Prefer center
    if (board[4] === null) return 4
    
    // 4. Prefer corners
    const corners = [0, 2, 6, 8].filter(i => board[i] === null)
    if (corners.length > 0) {
      return corners[Math.floor(Math.random() * corners.length)]
    }
    
    // 5. Take any available edge
    return available[Math.floor(Math.random() * available.length)]
  }
  
  // Hard AI: Minimax algorithm (unbeatable)
  const getHardMove = (board, aiPlayer = 'O') => {
    const humanPlayer = aiPlayer === 'O' ? 'X' : 'O'
    
    const minimax = (boardState, depth, isMaximizing, alpha, beta) => {
      // Check terminal states
      if (checkWin(boardState, aiPlayer)) return 10 - depth
      if (checkWin(boardState, humanPlayer)) return depth - 10
      if (boardState.every(cell => cell !== null)) return 0
      
      const available = boardState
        .map((cell, index) => cell === null ? index : null)
        .filter(index => index !== null)
      
      if (isMaximizing) {
        let maxEval = -Infinity
        for (const move of available) {
          const newBoard = [...boardState]
          newBoard[move] = aiPlayer
          const evalScore = minimax(newBoard, depth + 1, false, alpha, beta)
          maxEval = Math.max(maxEval, evalScore)
          alpha = Math.max(alpha, evalScore)
          if (beta <= alpha) break
        }
        return maxEval
      } else {
        let minEval = Infinity
        for (const move of available) {
          const newBoard = [...boardState]
          newBoard[move] = humanPlayer
          const evalScore = minimax(newBoard, depth + 1, true, alpha, beta)
          minEval = Math.min(minEval, evalScore)
          beta = Math.min(beta, evalScore)
          if (beta <= alpha) break
        }
        return minEval
      }
    }
    
    const available = board
      .map((cell, index) => cell === null ? index : null)
      .filter(index => index !== null)
    
    if (available.length === 0) return null
    
    // First move optimization: just pick a corner or center
    if (available.length === 9) {
      const firstMoves = [0, 2, 4, 6, 8]
      return firstMoves[Math.floor(Math.random() * firstMoves.length)]
    }
    
    let bestMove = available[0]
    let bestScore = -Infinity
    
    for (const move of available) {
      const newBoard = [...board]
      newBoard[move] = aiPlayer
      const score = minimax(newBoard, 0, false, -Infinity, Infinity)
      if (score > bestScore) {
        bestScore = score
        bestMove = move
      }
    }
    
    return bestMove
  }
  
  // Helper: Check if player has won
  const checkWin = (board, player) => {
    return WINNING_COMBOS.some(combo => {
      return combo.every(index => board[index] === player)
    })
  }
  
  // Get AI move based on difficulty
  const getAIMove = (board, difficulty = 'medium', aiPlayer = 'O') => {
    switch (difficulty) {
      case 'easy':
        return getEasyMove(board)
      case 'medium':
        return getMediumMove(board, aiPlayer)
      case 'hard':
        return getHardMove(board, aiPlayer)
      default:
        return getMediumMove(board, aiPlayer)
    }
  }
  
  return {
    getAIMove,
    getEasyMove,
    getMediumMove,
    getHardMove
  }
}

