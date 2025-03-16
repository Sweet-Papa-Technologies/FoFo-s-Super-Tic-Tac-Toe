<template>
  <q-page class="game-page">
    <game-canvas />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameCanvas from '../components/GameCanvas.vue';

export default defineComponent({
  name: 'GamePage',
  components: {
    GameCanvas
  }
});
</script>

<style scoped>
.game-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  background-color: #000;
}
</style>