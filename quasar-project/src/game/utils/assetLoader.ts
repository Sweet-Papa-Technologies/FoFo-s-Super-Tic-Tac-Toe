import { ASSET_PATHS, AUDIO_KEYS } from './constants';

// Asset manager to handle loading all game assets
export class AssetLoader {
  private scene: Phaser.Scene;
  
  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  // Load UI assets
  loadUIAssets(): void {
    // Backgrounds
    this.scene.load.image('main-menu-bg', `${ASSET_PATHS.BACKGROUNDS}main-menu-bg.png`);
    this.scene.load.image('board-bg', `${ASSET_PATHS.BACKGROUNDS}board-bg.png`);
    this.scene.load.image('settings-bg', `${ASSET_PATHS.BACKGROUNDS}settings-bg.png`);
    this.scene.load.image('high-scores-bg', `${ASSET_PATHS.BACKGROUNDS}high-scores-bg.png`);
    
    // Logo and branding
    this.scene.load.image('game-logo', `${ASSET_PATHS.LOGO}game-logo.png`);
    this.scene.load.image('game-icon', `${ASSET_PATHS.LOGO}game-icon.png`);
    
    // UI elements
    this.scene.load.spritesheet('buttons', `${ASSET_PATHS.UI}buttons-sprite.png`, { 
      frameWidth: 200, 
      frameHeight: 60 
    });
    this.scene.load.spritesheet('icons', `${ASSET_PATHS.UI}icons-sprite.png`, { 
      frameWidth: 64, 
      frameHeight: 64 
    });
    this.scene.load.image('panel-bg', `${ASSET_PATHS.UI}panel-backgrounds.png`);
    this.scene.load.spritesheet('loading-spinner', `${ASSET_PATHS.UI}loading-spinner.png`, { 
      frameWidth: 64, 
      frameHeight: 64 
    });
    this.scene.load.image('progress-bar', `${ASSET_PATHS.UI}progress-bar.png`);
    this.scene.load.image('toggle-on', `${ASSET_PATHS.UI}toggle-on.png`);
    this.scene.load.image('toggle-off', `${ASSET_PATHS.UI}toggle-off.png`);
    this.scene.load.image('slider-track', `${ASSET_PATHS.UI}slider-track.png`);
    this.scene.load.image('slider-thumb', `${ASSET_PATHS.UI}slider-thumb.png`);
  }

  // Load game board assets
  loadBoardAssets(): void {
    this.scene.load.image('board-grid', `${ASSET_PATHS.BOARD}board-grid.png`);
    this.scene.load.spritesheet('x-marker', `${ASSET_PATHS.BOARD}x-marker.png`, {
      frameWidth: 160,
      frameHeight: 160
    });
    this.scene.load.spritesheet('o-marker', `${ASSET_PATHS.BOARD}o-marker.png`, {
      frameWidth: 160,
      frameHeight: 160
    });
    this.scene.load.image('highlight-square', `${ASSET_PATHS.BOARD}highlight-square.png`);
    this.scene.load.image('win-line', `${ASSET_PATHS.BOARD}win-line.png`);
  }

  // Load mini-game assets
  loadMiniGameAssets(): void {
    // Reaction Challenge
    this.scene.load.image('reaction-bg', `${ASSET_PATHS.MINI_GAMES}reaction/background.png`);
    this.scene.load.image('reaction-marker', `${ASSET_PATHS.MINI_GAMES}reaction/marker.png`);
    this.scene.load.image('reaction-target', `${ASSET_PATHS.MINI_GAMES}reaction/target-zone.png`);
    this.scene.load.image('reaction-tap', `${ASSET_PATHS.MINI_GAMES}reaction/tap-effect.png`);
    this.scene.load.image('reaction-result', `${ASSET_PATHS.MINI_GAMES}reaction/result-display.png`);
    this.scene.load.image('reaction-icon', `${ASSET_PATHS.MINI_GAMES}reaction/icon.png`);
    
    // Memory Match
    this.scene.load.image('memory-bg', `${ASSET_PATHS.MINI_GAMES}memory/background.png`);
    this.scene.load.image('memory-card-back', `${ASSET_PATHS.MINI_GAMES}memory/card-back.png`);
    this.scene.load.image('memory-card-frame', `${ASSET_PATHS.MINI_GAMES}memory/card-frame.png`);
    this.scene.load.spritesheet('memory-symbols', `${ASSET_PATHS.MINI_GAMES}memory/symbols-sheet.png`, {
      frameWidth: 100,
      frameHeight: 100
    });
    this.scene.load.image('memory-match-effect', `${ASSET_PATHS.MINI_GAMES}memory/match-effect.png`);
    this.scene.load.image('memory-board-frame', `${ASSET_PATHS.MINI_GAMES}memory/board-frame.png`);
    this.scene.load.image('memory-icon', `${ASSET_PATHS.MINI_GAMES}memory/icon.png`);
    
    // Speed Runner
    this.scene.load.image('runner-bg', `${ASSET_PATHS.MINI_GAMES}runner/background-layers.png`);
    this.scene.load.spritesheet('runner-char-x', `${ASSET_PATHS.MINI_GAMES}runner/character-x-spritesheet.png`, {
      frameWidth: 80,
      frameHeight: 120
    });
    this.scene.load.spritesheet('runner-char-o', `${ASSET_PATHS.MINI_GAMES}runner/character-o-spritesheet.png`, {
      frameWidth: 80,
      frameHeight: 120
    });
    this.scene.load.spritesheet('runner-obstacles', `${ASSET_PATHS.MINI_GAMES}runner/obstacles-sheet.png`, {
      frameWidth: 80,
      frameHeight: 80
    });
    this.scene.load.image('runner-platform', `${ASSET_PATHS.MINI_GAMES}runner/platform-tiles.png`);
    this.scene.load.image('runner-finish', `${ASSET_PATHS.MINI_GAMES}runner/finish-line.png`);
    this.scene.load.image('runner-dust', `${ASSET_PATHS.MINI_GAMES}runner/dust-particles.png`);
    this.scene.load.image('runner-icon', `${ASSET_PATHS.MINI_GAMES}runner/icon.png`);
    
    // Quick Math
    this.scene.load.image('math-bg', `${ASSET_PATHS.MINI_GAMES}math/background.png`);
    this.scene.load.spritesheet('math-numbers', `${ASSET_PATHS.MINI_GAMES}math/number-buttons.png`, {
      frameWidth: 60,
      frameHeight: 60
    });
    this.scene.load.spritesheet('math-operators', `${ASSET_PATHS.MINI_GAMES}math/operator-symbols.png`, {
      frameWidth: 60,
      frameHeight: 60
    });
    this.scene.load.image('math-answer-box', `${ASSET_PATHS.MINI_GAMES}math/answer-box.png`);
    this.scene.load.image('math-correct', `${ASSET_PATHS.MINI_GAMES}math/correct-effect.png`);
    this.scene.load.image('math-wrong', `${ASSET_PATHS.MINI_GAMES}math/wrong-effect.png`);
    this.scene.load.image('math-icon', `${ASSET_PATHS.MINI_GAMES}math/icon.png`);
    
    // Target Shooter
    this.scene.load.image('shooter-bg', `${ASSET_PATHS.MINI_GAMES}shooter/background.png`);
    this.scene.load.spritesheet('shooter-target', `${ASSET_PATHS.MINI_GAMES}shooter/target-spritesheet.png`, {
      frameWidth: 100,
      frameHeight: 100
    });
    this.scene.load.image('shooter-hit', `${ASSET_PATHS.MINI_GAMES}shooter/hit-effect.png`);
    this.scene.load.image('shooter-crosshair', `${ASSET_PATHS.MINI_GAMES}shooter/crosshair.png`);
    this.scene.load.image('shooter-score', `${ASSET_PATHS.MINI_GAMES}shooter/score-popup.png`);
    this.scene.load.image('shooter-icon', `${ASSET_PATHS.MINI_GAMES}shooter/icon.png`);
  }

  // Load audio assets
  loadAudioAssets(): void {
    // Music
    this.scene.load.audio(AUDIO_KEYS.MUSIC.MAIN_THEME, `${ASSET_PATHS.AUDIO.MUSIC}main-theme.mp3`);
    this.scene.load.audio(AUDIO_KEYS.MUSIC.MINI_GAME_THEME, `${ASSET_PATHS.AUDIO.MUSIC}mini-game-theme.mp3`);
    this.scene.load.audio(AUDIO_KEYS.MUSIC.TENSION_THEME, `${ASSET_PATHS.AUDIO.MUSIC}tension-theme.mp3`);
    this.scene.load.audio(AUDIO_KEYS.MUSIC.VICTORY_THEME, `${ASSET_PATHS.AUDIO.MUSIC}victory-theme.mp3`);
    
    // UI sounds
    this.scene.load.audio(AUDIO_KEYS.UI.BUTTON_CLICK, `${ASSET_PATHS.AUDIO.UI}button-click.mp3`);
    this.scene.load.audio(AUDIO_KEYS.UI.BUTTON_HOVER, `${ASSET_PATHS.AUDIO.UI}button-hover.mp3`);
    this.scene.load.audio(AUDIO_KEYS.UI.MENU_OPEN, `${ASSET_PATHS.AUDIO.UI}menu-open.mp3`);
    this.scene.load.audio(AUDIO_KEYS.UI.MENU_CLOSE, `${ASSET_PATHS.AUDIO.UI}menu-close.mp3`);
    this.scene.load.audio(AUDIO_KEYS.UI.TOGGLE_ON, `${ASSET_PATHS.AUDIO.UI}toggle-on.mp3`);
    this.scene.load.audio(AUDIO_KEYS.UI.TOGGLE_OFF, `${ASSET_PATHS.AUDIO.UI}toggle-off.mp3`);
    this.scene.load.audio(AUDIO_KEYS.UI.SLIDER_MOVE, `${ASSET_PATHS.AUDIO.UI}slider-move.mp3`);
    
    // Board sounds
    this.scene.load.audio(AUDIO_KEYS.BOARD.SQUARE_SELECT, `${ASSET_PATHS.AUDIO.BOARD}square-select.mp3`);
    this.scene.load.audio(AUDIO_KEYS.BOARD.X_PLACE, `${ASSET_PATHS.AUDIO.BOARD}x-place.mp3`);
    this.scene.load.audio(AUDIO_KEYS.BOARD.O_PLACE, `${ASSET_PATHS.AUDIO.BOARD}o-place.mp3`);
    this.scene.load.audio(AUDIO_KEYS.BOARD.GAME_WIN, `${ASSET_PATHS.AUDIO.BOARD}game-win.mp3`);
    this.scene.load.audio(AUDIO_KEYS.BOARD.GAME_DRAW, `${ASSET_PATHS.AUDIO.BOARD}game-draw.mp3`);
    this.scene.load.audio(AUDIO_KEYS.BOARD.TURN_CHANGE, `${ASSET_PATHS.AUDIO.BOARD}turn-change.mp3`);
    
    // Voice
    this.scene.load.audio(AUDIO_KEYS.VOICE.GAME_START, `${ASSET_PATHS.AUDIO.VOICE}game-start.mp3`);
    this.scene.load.audio(AUDIO_KEYS.VOICE.PLAYER_X_TURN, `${ASSET_PATHS.AUDIO.VOICE}player-x-turn.mp3`);
    this.scene.load.audio(AUDIO_KEYS.VOICE.PLAYER_O_TURN, `${ASSET_PATHS.AUDIO.VOICE}player-o-turn.mp3`);
    this.scene.load.audio(AUDIO_KEYS.VOICE.YOU_WIN, `${ASSET_PATHS.AUDIO.VOICE}you-win.mp3`);
    this.scene.load.audio(AUDIO_KEYS.VOICE.YOU_LOSE, `${ASSET_PATHS.AUDIO.VOICE}you-lose.mp3`);
    this.scene.load.audio(AUDIO_KEYS.VOICE.DRAW, `${ASSET_PATHS.AUDIO.VOICE}draw.mp3`);
    this.scene.load.audio(AUDIO_KEYS.VOICE.READY, `${ASSET_PATHS.AUDIO.VOICE}ready.mp3`);
    this.scene.load.audio(AUDIO_KEYS.VOICE.GO, `${ASSET_PATHS.AUDIO.VOICE}go.mp3`);
    
    // Mini-game sounds
    // Reaction Challenge sounds
    this.scene.load.audio('reaction-countdown', `${ASSET_PATHS.AUDIO.MINI_GAMES}reaction/countdown.mp3`);
    this.scene.load.audio('reaction-tap', `${ASSET_PATHS.AUDIO.MINI_GAMES}reaction/tap.mp3`);
    this.scene.load.audio('reaction-perfect', `${ASSET_PATHS.AUDIO.MINI_GAMES}reaction/perfect-tap.mp3`);
    this.scene.load.audio('reaction-win', `${ASSET_PATHS.AUDIO.MINI_GAMES}reaction/win.mp3`);
    this.scene.load.audio('reaction-lose', `${ASSET_PATHS.AUDIO.MINI_GAMES}reaction/lose.mp3`);
    
    // Memory Match sounds
    this.scene.load.audio('memory-flip', `${ASSET_PATHS.AUDIO.MINI_GAMES}memory/card-flip.mp3`);
    this.scene.load.audio('memory-match', `${ASSET_PATHS.AUDIO.MINI_GAMES}memory/match-found.mp3`);
    this.scene.load.audio('memory-no-match', `${ASSET_PATHS.AUDIO.MINI_GAMES}memory/no-match.mp3`);
    this.scene.load.audio('memory-time-low', `${ASSET_PATHS.AUDIO.MINI_GAMES}memory/time-low.mp3`);
    this.scene.load.audio('memory-complete', `${ASSET_PATHS.AUDIO.MINI_GAMES}memory/complete.mp3`);
    
    // Speed Runner sounds
    this.scene.load.audio('runner-jump', `${ASSET_PATHS.AUDIO.MINI_GAMES}runner/jump.mp3`);
    this.scene.load.audio('runner-land', `${ASSET_PATHS.AUDIO.MINI_GAMES}runner/land.mp3`);
    this.scene.load.audio('runner-hit', `${ASSET_PATHS.AUDIO.MINI_GAMES}runner/hit-obstacle.mp3`);
    this.scene.load.audio('runner-steps', `${ASSET_PATHS.AUDIO.MINI_GAMES}runner/running-loop.mp3`);
    this.scene.load.audio('runner-finish', `${ASSET_PATHS.AUDIO.MINI_GAMES}runner/finish.mp3`);
    
    // Quick Math sounds
    this.scene.load.audio('math-input', `${ASSET_PATHS.AUDIO.MINI_GAMES}math/number-input.mp3`);
    this.scene.load.audio('math-correct', `${ASSET_PATHS.AUDIO.MINI_GAMES}math/correct-answer.mp3`);
    this.scene.load.audio('math-wrong', `${ASSET_PATHS.AUDIO.MINI_GAMES}math/wrong-answer.mp3`);
    this.scene.load.audio('math-question', `${ASSET_PATHS.AUDIO.MINI_GAMES}math/question-appear.mp3`);
    this.scene.load.audio('math-thinking', `${ASSET_PATHS.AUDIO.MINI_GAMES}math/thinking.mp3`);
    
    // Target Shooter sounds
    this.scene.load.audio('shooter-appear', `${ASSET_PATHS.AUDIO.MINI_GAMES}shooter/target-appear.mp3`);
    this.scene.load.audio('shooter-hit', `${ASSET_PATHS.AUDIO.MINI_GAMES}shooter/target-hit.mp3`);
    this.scene.load.audio('shooter-miss', `${ASSET_PATHS.AUDIO.MINI_GAMES}shooter/target-miss.mp3`);
    this.scene.load.audio('shooter-combo', `${ASSET_PATHS.AUDIO.MINI_GAMES}shooter/combo.mp3`);
    this.scene.load.audio('shooter-warning', `${ASSET_PATHS.AUDIO.MINI_GAMES}shooter/time-warning.mp3`);
  }

  // Load data files
  loadDataFiles(): void {
    this.scene.load.json('difficulty-settings', `${ASSET_PATHS.DATA}difficulty-settings.json`);
    this.scene.load.json('mini-game-configs', `${ASSET_PATHS.DATA}mini-game-configs.json`);
    this.scene.load.json('tutorial-data', `${ASSET_PATHS.DATA}tutorial-data.json`);
    this.scene.load.json('achievements', `${ASSET_PATHS.DATA}achievements.json`);
  }

  // Load all assets
  loadAll(): void {
    this.loadUIAssets();
    this.loadBoardAssets();
    this.loadMiniGameAssets();
    this.loadAudioAssets();
    this.loadDataFiles();
  }
}
