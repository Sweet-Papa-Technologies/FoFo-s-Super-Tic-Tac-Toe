<template>
  <div class="game-container">
    <div id="game-container" ref="gameContainer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import Phaser from 'phaser';

// Import scenes
import PreloaderScene from '../game/scenes/PreloaderScene';
import MainMenuScene from '../game/scenes/MainMenuScene';
import BoardScene from '../game/scenes/BoardScene';
import SettingsScene from '../game/scenes/SettingsScene';
import HighScoreScene from '../game/scenes/HighScoreScene';

// Import mini-game scenes
import ReactionScene from '../game/scenes/mini-games/ReactionScene';
import MemoryMatchScene from '../game/scenes/mini-games/MemoryMatchScene';
import SpeedRunnerScene from '../game/scenes/mini-games/SpeedRunnerScene';
import QuickMathScene from '../game/scenes/mini-games/QuickMathScene';
import TargetShooterScene from '../game/scenes/mini-games/TargetShooterScene';

// Import game configuration
import { GAME_CONFIG } from '../game/utils/constants';

export default defineComponent({
  name: 'GameCanvas',

  setup() {
    const gameContainer = ref<HTMLElement | null>(null);
    let game: Phaser.Game | null = null;

    // Initialize game on component mount
    onMounted(() => {
      // Configure game
      const config: Phaser.Types.Core.GameConfig = {
        ...GAME_CONFIG,
        parent: 'game-container',
        scene: [
          PreloaderScene,
          MainMenuScene,
          BoardScene,
          SettingsScene,
          HighScoreScene,
          ReactionScene,
          MemoryMatchScene,
          SpeedRunnerScene,
          QuickMathScene,
          TargetShooterScene
        ],
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: 1280,
          height: 720
        },
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 0, x: 0 },
            debug: false
          }
        }
      };

      // Create new game instance
      game = new Phaser.Game(config);
    });

    // Clean up on component unmount
    onUnmounted(() => {
      if (game) {
        game.destroy(true);
        game = null;
      }
    });

    return {
      gameContainer
    };
  }
});
</script>

<style scoped>
.game-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}

#game-container {
  width: 100%;
  height: 100%;
  max-width: 1280px;
  max-height: 720px;
}

@media (max-width: 768px) {
  #game-container {
    height: 100vh;
  }
}
</style>