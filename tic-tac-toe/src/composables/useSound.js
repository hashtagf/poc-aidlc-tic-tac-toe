import { ref } from 'vue'

export function useSound() {
  const isMuted = ref(false)
  
  // Audio context for generating sounds
  let audioContext = null
  
  const getAudioContext = () => {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)()
    }
    return audioContext
  }
  
  // Generate 8-bit style sounds using Web Audio API
  const playTone = (frequency, duration, type = 'square') => {
    if (isMuted.value) return
    
    try {
      const ctx = getAudioContext()
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      
      oscillator.type = type
      oscillator.frequency.setValueAtTime(frequency, ctx.currentTime)
      
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration)
      
      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)
      
      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + duration)
    } catch (e) {
      console.log('Audio not supported:', e)
    }
  }
  
  // Sound effects
  const playMove = () => {
    playTone(440, 0.1, 'square') // A4 note
  }
  
  const playWin = () => {
    if (isMuted.value) return
    
    try {
      const ctx = getAudioContext()
      
      // Victory fanfare - ascending notes
      const notes = [523, 659, 784, 1047] // C5, E5, G5, C6
      notes.forEach((freq, i) => {
        setTimeout(() => {
          playTone(freq, 0.2, 'square')
        }, i * 150)
      })
    } catch (e) {
      console.log('Audio not supported:', e)
    }
  }
  
  const playDraw = () => {
    if (isMuted.value) return
    
    // Descending notes for draw
    playTone(400, 0.15, 'triangle')
    setTimeout(() => playTone(350, 0.15, 'triangle'), 150)
    setTimeout(() => playTone(300, 0.2, 'triangle'), 300)
  }
  
  const playError = () => {
    playTone(200, 0.1, 'sawtooth')
  }
  
  const playClick = () => {
    playTone(800, 0.05, 'square')
  }
  
  // Toggle mute
  const toggleMute = () => {
    isMuted.value = !isMuted.value
    if (!isMuted.value) {
      playClick()
    }
  }
  
  return {
    isMuted,
    playMove,
    playWin,
    playDraw,
    playError,
    playClick,
    toggleMute
  }
}

