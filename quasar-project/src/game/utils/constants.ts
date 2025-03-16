// Game configuration constants
export const GAME_CONFIG = {
  width: 1280,
  height: 720,
  backgroundColor: 0x000000,
  parent: 'game-container',
  scene: [],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scale: {
    mode: 3, // Phaser.Scale.FIT
    autoCenter: 1, // Phaser.Scale.CENTER_BOTH
  }
};

// Mini-game identifiers
export const MINI_GAMES = {
  REACTION: 'reaction',
  MEMORY: 'memory',
  RUNNER: 'speed-runner',
  MATH: 'quick-math',
  SHOOTER: 'target-shooter'
};

// Board configuration
export const BOARD_CONFIG = {
  size: 3, // 3x3 grid
  cellSize: 180,
  padding: 20,
  winPatterns: [
    // Rows
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    // Columns
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8],
    // Diagonals
    [0, 4, 8], 
    [2, 4, 6]
  ]
};

// Screen transition times
export const TRANSITION_TIME = 500; // ms

// Asset paths
export const ASSET_PATHS = {
  BACKGROUNDS: 'assets/images/backgrounds/',
  LOGO: 'assets/images/logo/',
  UI: 'assets/images/ui/',
  BOARD: 'assets/images/board/',
  MINI_GAMES: 'assets/images/mini-games/',
  EFFECTS: 'assets/images/effects/',
  AUDIO: {
    MUSIC: 'assets/audio/music/',
    UI: 'assets/audio/ui/',
    BOARD: 'assets/audio/board/',
    MINI_GAMES: 'assets/audio/mini-games/',
    VOICE: 'assets/audio/voice/'
  },
  FONTS: 'assets/fonts/',
  DATA: 'assets/data/'
};

// Audio keys
export const AUDIO_KEYS = {
  MUSIC: {
    MAIN_THEME: 'main-theme',
    MINI_GAME_THEME: 'mini-game-theme',
    TENSION_THEME: 'tension-theme',
    VICTORY_THEME: 'victory-theme'
  },
  UI: {
    BUTTON_CLICK: 'button-click',
    BUTTON_HOVER: 'button-hover',
    MENU_OPEN: 'menu-open',
    MENU_CLOSE: 'menu-close',
    TOGGLE_ON: 'toggle-on',
    TOGGLE_OFF: 'toggle-off',
    SLIDER_MOVE: 'slider-move'
  },
  BOARD: {
    SQUARE_SELECT: 'square-select',
    X_PLACE: 'x-place',
    O_PLACE: 'o-place',
    GAME_WIN: 'game-win',
    GAME_DRAW: 'game-draw',
    TURN_CHANGE: 'turn-change'
  },
  VOICE: {
    GAME_START: 'game-start',
    PLAYER_X_TURN: 'player-x-turn',
    PLAYER_O_TURN: 'player-o-turn',
    YOU_WIN: 'you-win',
    YOU_LOSE: 'you-lose',
    DRAW: 'draw',
    READY: 'ready',
    GO: 'go'
  }
};

// Scene keys
export const SCENE_KEYS = {
  PRELOADER: 'PreloaderScene',
  MAIN_MENU: 'MainMenuScene',
  BOARD: 'BoardScene',
  SETTINGS: 'SettingsScene',
  HIGH_SCORE: 'HighScoreScene',
  MINI_GAMES: {
    REACTION: 'ReactionScene',
    MEMORY: 'MemoryMatchScene',
    RUNNER: 'SpeedRunnerScene',
    MATH: 'QuickMathScene',
    SHOOTER: 'TargetShooterScene'
  }
};

// Player colors
export const PLAYER_COLORS = {
  X: 0x4a7afe, // Blue
  O: 0xff5252  // Red
};

// AI settings
export const AI_SETTINGS = {
  DELAY: {
    EASY: 1000,
    MEDIUM: 700,
    HARD: 400
  }
};
