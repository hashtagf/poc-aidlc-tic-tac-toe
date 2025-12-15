import { ref, computed } from 'vue'

const THEME_KEY = 'tic-tac-toe-theme'
const THEMES = {
  RETRO: 'retro',
  CHRISTMAS: 'christmas'
}

// Load initial theme from localStorage
const getInitialTheme = () => {
  try {
    const savedTheme = localStorage.getItem(THEME_KEY)
    if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
      return savedTheme
    }
  } catch (e) {
    console.log('localStorage not available:', e)
  }
  return THEMES.RETRO
}

// Shared state across components (initialized once)
const currentTheme = ref(getInitialTheme())

export function useTheme() {
  // Save theme to localStorage
  const saveTheme = (theme) => {
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch (e) {
      console.log('localStorage not available:', e)
    }
  }
  
  // Toggle between themes
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === THEMES.RETRO 
      ? THEMES.CHRISTMAS 
      : THEMES.RETRO
    saveTheme(currentTheme.value)
  }
  
  // Set specific theme
  const setTheme = (theme) => {
    if (Object.values(THEMES).includes(theme)) {
      currentTheme.value = theme
      saveTheme(theme)
    }
  }
  
  // Computed properties
  const isChristmas = computed(() => currentTheme.value === THEMES.CHRISTMAS)
  const isRetro = computed(() => currentTheme.value === THEMES.RETRO)
  
  // Theme class for root element
  const themeClass = computed(() => {
    return currentTheme.value === THEMES.CHRISTMAS ? 'christmas-theme' : ''
  })
  
  // Get symbol based on theme
  const getSymbol = (player) => {
    if (currentTheme.value === THEMES.CHRISTMAS) {
      return player === 'X' ? '🎄' : '⭐'
    }
    return player
  }
  
  return {
    currentTheme,
    isChristmas,
    isRetro,
    themeClass,
    toggleTheme,
    setTheme,
    getSymbol,
    THEMES
  }
}

