<template>
  <div class="menu-container game-container">
    <h1>🎮 TIC-TAC-TOE</h1>
    <p style="font-size: 10px; opacity: 0.7; margin-bottom: 24px;">
      RETRO PIXEL EDITION
    </p>
    
    <div class="menu-options">
      <button class="pixel-btn" @click="$emit('select-mode', 'single')">
        🤖 VS COMPUTER
      </button>
      <button class="pixel-btn" @click="$emit('select-mode', 'two-player')">
        👥 2 PLAYERS
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

defineEmits(['select-mode'])
</script>

