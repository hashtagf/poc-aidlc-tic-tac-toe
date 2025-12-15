<template>
  <div class="game-result" :class="{ win: winner, draw: !winner }">
    <h2 v-if="winner">🏆 WINNER!</h2>
    <h2 v-else>🤝 DRAW!</h2>
    
    <p v-if="winner" class="winner-name">
      {{ winnerName }} ({{ winner }}) wins!
    </p>
    <p v-else class="winner-name">
      It's a tie game!
    </p>
    
    <div class="result-buttons">
      <button class="pixel-btn" @click="$emit('restart')">
        🔄 PLAY AGAIN
      </button>
      <button class="pixel-btn secondary" @click="$emit('menu')">
        🏠 MENU
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  winner: {
    type: String,
    default: null
  },
  winnerName: {
    type: String,
    default: ''
  }
})

defineEmits(['restart', 'menu'])
</script>

