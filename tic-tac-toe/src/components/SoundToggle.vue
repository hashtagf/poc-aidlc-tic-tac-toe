<template>
  <div class="sound-toggle">
    <button 
      class="pixel-btn sound-btn" 
      :class="{ muted: isMuted }"
      @click="$emit('toggle')"
      :title="isMuted ? 'Unmute' : 'Mute'"
    >
      {{ isMuted ? '🔇' : '🔊' }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  isMuted: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle'])
</script>

