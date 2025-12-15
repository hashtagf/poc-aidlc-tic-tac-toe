<template>
  <button 
    class="game-cell" 
    :class="{ 
      occupied: value !== null,
      winning: isWinning 
    }"
    @click="handleClick"
    :aria-label="cellLabel"
    :disabled="disabled || value !== null"
    type="button"
  >
    <span 
      v-if="value" 
      class="mark" 
      :class="value.toLowerCase()"
    >
      {{ displayValue }}
    </span>
  </button>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  value: {
    type: String,
    default: null
  },
  index: {
    type: Number,
    required: true
  },
  isWinning: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  isChristmas: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const positions = ['top-left', 'top-center', 'top-right', 
                   'middle-left', 'center', 'middle-right',
                   'bottom-left', 'bottom-center', 'bottom-right']

// Display Christmas symbols when theme is active
const displayValue = computed(() => {
  if (!props.value) return null
  if (props.isChristmas) {
    return props.value === 'X' ? '🎄' : '⭐'
  }
  return props.value
})

const cellLabel = computed(() => {
  const pos = positions[props.index]
  if (props.value) {
    const symbol = props.isChristmas 
      ? (props.value === 'X' ? 'Christmas Tree' : 'Star')
      : props.value
    return `Cell ${pos}: ${symbol}`
  }
  return `Cell ${pos}: empty`
})

const handleClick = () => {
  if (!props.value && !props.disabled) {
    emit('click', props.index)
  }
}
</script>

