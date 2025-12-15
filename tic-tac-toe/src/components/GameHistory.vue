<template>
  <div class="game-history" v-if="history.length > 0">
    <h3>📜 MOVE HISTORY</h3>
    <ul class="history-list">
      <li 
        v-for="move in history" 
        :key="move.moveNumber"
        class="history-item"
      >
        <span class="move-number">#{{ move.moveNumber }}</span>
        <span class="player" :class="move.player.toLowerCase()">
          {{ move.player }}
        </span>
        → {{ move.position }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  history: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.history-item .player.x {
  color: var(--accent);
}
.history-item .player.o {
  color: var(--accent-secondary);
}
</style>

