<template>
  <div class="theme-toggle">
    <button 
      class="pixel-btn theme-btn"
      :class="{ 'christmas-active': isChristmas }"
      @click="handleToggle"
      :aria-label="isChristmas ? 'Switch to Retro theme' : 'Switch to Christmas theme'"
      type="button"
    >
      {{ isChristmas ? '🎄' : '🎮' }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  isChristmas: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle'])

const handleToggle = () => {
  emit('toggle')
}
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 100;
}

.theme-btn {
  width: 48px;
  height: 48px;
  font-size: 20px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.theme-btn.christmas-active {
  background: #c41e3a;
  box-shadow:
    inset -4px -4px 0 0 #8b0000,
    inset 4px 4px 0 0 #ff6b6b;
}

.theme-btn:hover {
  transform: scale(1.1) rotate(10deg);
}
</style>

