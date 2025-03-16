<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storageService } from './services/storage';

// Initialize storage service
onMounted(() => {
  // Load any saved data from storage
  const gameData = storageService.getGameData();
  
  // Additional initialization can be added here if needed
});
</script>

<style>
/* Global styles */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>