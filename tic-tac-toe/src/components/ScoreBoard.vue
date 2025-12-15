<template>
  <div class="score-board">
    <div class="score-item player1">
      <div class="label">{{ player1Name }} (X)</div>
      <div class="value">{{ scores.player1.wins }}</div>
    </div>
    <div class="score-item draws">
      <div class="label">DRAWS</div>
      <div class="value">{{ scores.draws }}</div>
    </div>
    <div class="score-item player2">
      <div class="label">{{ player2Name }} (O)</div>
      <div class="value">{{ scores.player2.wins }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  scores: {
    type: Object,
    required: true
  },
  player1Name: {
    type: String,
    default: 'Player 1'
  },
  player2Name: {
    type: String,
    default: 'Player 2'
  }
})
</script>

