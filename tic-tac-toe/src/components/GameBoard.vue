<template>
  <div class="game-board">
    <GameCell
      v-for="(cell, index) in board"
      :key="index"
      :value="cell"
      :index="index"
      :is-winning="winningCells.includes(index)"
      :disabled="disabled"
      @click="handleCellClick"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import GameCell from './GameCell.vue'

const props = defineProps({
  board: {
    type: Array,
    required: true
  },
  winningCells: {
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['cell-click'])

const handleCellClick = (index) => {
  emit('cell-click', index)
}
</script>

