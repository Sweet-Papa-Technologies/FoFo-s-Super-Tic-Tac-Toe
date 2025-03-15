# Complete Asset File Path List

This document outlines all assets required for the Tic-Tac-Toe Mini-Game Variant project. All paths are relative to the project's `public` folder, which will be served as static content by the Quasar application.

## 1. Image Assets

### 1.1 UI and Common Elements

#### 1.1.1 Backgrounds
- `assets/images/backgrounds/main-menu-bg.png` - Main menu background (1920×1080px, colorful game-themed design)
- `assets/images/backgrounds/board-bg.png` - Tic-tac-toe board background (1920×1080px)
- `assets/images/backgrounds/settings-bg.png` - Settings screen background (1920×1080px)
- `assets/images/backgrounds/high-scores-bg.png` - High scores screen background (1920×1080px)

#### 1.1.2 Logo and Branding
- `assets/images/logo/game-logo.png` - Game logo (800×400px, transparent background)
- `assets/images/logo/game-icon.png` - App icon (512×512px for stores/PWA)

#### 1.1.3 UI Elements
- `assets/images/ui/buttons-sprite.png` - Button sprite sheet (various states: normal, hover, pressed)
- `assets/images/ui/icons-sprite.png` - UI icons sprite sheet (settings, sound, music, home, etc.)
- `assets/images/ui/panel-backgrounds.png` - Various UI panels and windows backgrounds
- `assets/images/ui/loading-spinner.png` - Loading animation sprite
- `assets/images/ui/progress-bar.png` - Progress bar for loading screens
- `assets/images/ui/toggle-on.png` - Toggle switch ON state
- `assets/images/ui/toggle-off.png` - Toggle switch OFF state
- `assets/images/ui/slider-track.png` - Slider track background
- `assets/images/ui/slider-thumb.png` - Slider handle/thumb

#### 1.1.4 Game Board
- `assets/images/board/board-grid.png` - Tic-tac-toe grid (empty board)
- `assets/images/board/x-marker.png` - X marker sprite (with animation frames)
- `assets/images/board/o-marker.png` - O marker sprite (with animation frames)
- `assets/images/board/highlight-square.png` - Highlight effect for selectable squares
- `assets/images/board/win-line.png` - Line animation for winning combinations

### 1.2 Mini-Game Assets

#### 1.2.1 Reaction Challenge
- `assets/images/mini-games/reaction/background.png` - Game-specific background
- `assets/images/mini-games/reaction/marker.png` - Moving marker sprite
- `assets/images/mini-games/reaction/target-zone.png` - Target zone indicator
- `assets/images/mini-games/reaction/tap-effect.png` - Visual effect for player tap
- `assets/images/mini-games/reaction/result-display.png` - Result display frame
- `assets/images/mini-games/reaction/icon.png` - Mini-game selection icon

#### 1.2.2 Memory Match
- `assets/images/mini-games/memory/background.png` - Game-specific background
- `assets/images/mini-games/memory/card-back.png` - Card back design
- `assets/images/mini-games/memory/card-frame.png` - Card frame/border
- `assets/images/mini-games/memory/symbols-sheet.png` - Sprite sheet of all card symbols (8 unique pairs)
- `assets/images/mini-games/memory/match-effect.png` - Effect when a match is found
- `assets/images/mini-games/memory/board-frame.png` - Frame around the memory board
- `assets/images/mini-games/memory/icon.png` - Mini-game selection icon

#### 1.2.3 Speed Runner
- `assets/images/mini-games/runner/background-layers.png` - Parallax background layers
- `assets/images/mini-games/runner/character-x-spritesheet.png` - X character run/jump animation
- `assets/images/mini-games/runner/character-o-spritesheet.png` - O character run/jump animation
- `assets/images/mini-games/runner/obstacles-sheet.png` - Various obstacles sprite sheet
- `assets/images/mini-games/runner/platform-tiles.png` - Platform/ground tiles
- `assets/images/mini-games/runner/finish-line.png` - Finish line marker
- `assets/images/mini-games/runner/dust-particles.png` - Running dust particle effects
- `assets/images/mini-games/runner/icon.png` - Mini-game selection icon

#### 1.2.4 Quick Math
- `assets/images/mini-games/math/background.png` - Game-specific background
- `assets/images/mini-games/math/number-buttons.png` - Number input buttons (0-9)
- `assets/images/mini-games/math/operator-symbols.png` - Math operators (+, -, ×, ÷)
- `assets/images/mini-games/math/answer-box.png` - Answer input box
- `assets/images/mini-games/math/correct-effect.png` - Effect for correct answer
- `assets/images/mini-games/math/wrong-effect.png` - Effect for wrong answer
- `assets/images/mini-games/math/icon.png` - Mini-game selection icon

#### 1.2.5 Target Shooter
- `assets/images/mini-games/shooter/background.png` - Game-specific background
- `assets/images/mini-games/shooter/target-spritesheet.png` - Target appearance/pop animation
- `assets/images/mini-games/shooter/hit-effect.png` - Effect when target is hit
- `assets/images/mini-games/shooter/crosshair.png` - Optional crosshair for desktop
- `assets/images/mini-games/shooter/score-popup.png` - Point score popup
- `assets/images/mini-games/shooter/icon.png` - Mini-game selection icon

### 1.3 Effect Assets
- `assets/images/effects/particle-sheet.png` - Common particle effects (sparkles, smoke, etc.)
- `assets/images/effects/win-celebration.png` - Win celebration effects
- `assets/images/effects/confetti.png` - Confetti particles for victories
- `assets/images/effects/screen-flash.png` - Screen flash effect

## 2. Audio Assets

### 2.1 Music
- `assets/audio/music/main-theme.mp3` - Main background music
- `assets/audio/music/mini-game-theme.mp3` - Alternative music for mini-games
- `assets/audio/music/tension-theme.mp3` - Music for last few seconds of mini-games
- `assets/audio/music/victory-theme.mp3` - Short victory music snippet

### 2.2 UI Sounds
- `assets/audio/ui/button-click.mp3` - Button click sound
- `assets/audio/ui/button-hover.mp3` - Button hover sound
- `assets/audio/ui/menu-open.mp3` - Menu opening sound
- `assets/audio/ui/menu-close.mp3` - Menu closing sound
- `assets/audio/ui/toggle-on.mp3` - Toggle switch on
- `assets/audio/ui/toggle-off.mp3` - Toggle switch off
- `assets/audio/ui/slider-move.mp3` - Sound for slider movement

### 2.3 Game Board Sounds
- `assets/audio/board/square-select.mp3` - Sound when selecting a square
- `assets/audio/board/x-place.mp3` - Sound when X marker is placed
- `assets/audio/board/o-place.mp3` - Sound when O marker is placed
- `assets/audio/board/game-win.mp3` - Sound for winning the game
- `assets/audio/board/game-draw.mp3` - Sound for game ending in draw
- `assets/audio/board/turn-change.mp3` - Sound for turn changing

### 2.4 Mini-Game Sounds

#### 2.4.1 Reaction Challenge
- `assets/audio/mini-games/reaction/countdown.mp3` - Countdown sound
- `assets/audio/mini-games/reaction/tap.mp3` - Player tap sound
- `assets/audio/mini-games/reaction/perfect-tap.mp3` - Sound for perfect timing
- `assets/audio/mini-games/reaction/win.mp3` - Win result sound
- `assets/audio/mini-games/reaction/lose.mp3` - Lose result sound

#### 2.4.2 Memory Match
- `assets/audio/mini-games/memory/card-flip.mp3` - Card flip sound
- `assets/audio/mini-games/memory/match-found.mp3` - Sound when match is found
- `assets/audio/mini-games/memory/no-match.mp3` - Sound when cards don't match
- `assets/audio/mini-games/memory/time-low.mp3` - Sound when time is running out
- `assets/audio/mini-games/memory/complete.mp3` - Sound when all matches found

#### 2.4.3 Speed Runner
- `assets/audio/mini-games/runner/jump.mp3` - Jump sound
- `assets/audio/mini-games/runner/land.mp3` - Landing sound
- `assets/audio/mini-games/runner/hit-obstacle.mp3` - Collision with obstacle
- `assets/audio/mini-games/runner/running-loop.mp3` - Running footsteps loop
- `assets/audio/mini-games/runner/finish.mp3` - Crossing finish line

#### 2.4.4 Quick Math
- `assets/audio/mini-games/math/number-input.mp3` - Number button press
- `assets/audio/mini-games/math/correct-answer.mp3` - Correct answer chime
- `assets/audio/mini-games/math/wrong-answer.mp3` - Wrong answer buzzer
- `assets/audio/mini-games/math/question-appear.mp3` - New question appears
- `assets/audio/mini-games/math/thinking.mp3` - Optional "thinking" time pressure sound

#### 2.4.5 Target Shooter
- `assets/audio/mini-games/shooter/target-appear.mp3` - Target pop-up sound
- `assets/audio/mini-games/shooter/target-hit.mp3` - Target hit sound
- `assets/audio/mini-games/shooter/target-miss.mp3` - Missed tap sound
- `assets/audio/mini-games/shooter/combo.mp3` - Sound for hitting multiple targets quickly
- `assets/audio/mini-games/shooter/time-warning.mp3` - Warning when time is low

### 2.5 Voice and Announcer
- `assets/audio/voice/game-start.mp3` - "Game Start!" voice
- `assets/audio/voice/player-x-turn.mp3` - "Player X's turn" voice
- `assets/audio/voice/player-o-turn.mp3` - "Player O's turn" voice
- `assets/audio/voice/you-win.mp3` - "You Win!" voice
- `assets/audio/voice/you-lose.mp3` - "You Lose!" voice
- `assets/audio/voice/draw.mp3` - "It's a Draw!" voice
- `assets/audio/voice/ready.mp3` - "Ready?" voice
- `assets/audio/voice/go.mp3` - "Go!" voice

## 3. Font Assets
- `assets/fonts/main-font.woff2` - Main game font (WOFF2 format for web)
- `assets/fonts/title-font.woff2` - Title/header font
- `assets/fonts/score-font.woff2` - Special font for scores and numbers
- `assets/fonts/bitmap-font.png` - Bitmap font texture for Phaser
- `assets/fonts/bitmap-font.xml` - Bitmap font XML definition

## 4. Data Files
- `assets/data/difficulty-settings.json` - AI difficulty parameters
- `assets/data/mini-game-configs.json` - Configuration for mini-games
- `assets/data/tutorial-data.json` - Tutorial text and sequences
- `assets/data/achievements.json` - Achievement definitions

## 5. Asset Specifications

### 5.1 Image Asset Requirements
- UI elements: PNG format with transparency
- Backgrounds: JPEG or PNG, 1920×1080px (16:9 ratio)
- Sprite sheets: Power-of-two dimensions (1024×1024, 2048×2048, etc.)
- Game icons: PNG with transparency, at least 512×512px
- Animation frames: 60 FPS for smooth animations
- All assets should be optimized for file size

### 5.2 Audio Asset Requirements
- Background music: MP3 format, 128-192kbps, loopable
- Sound effects: MP3 format, short duration (0.5-2 seconds)
- Voice clips: MP3 format, clear pronunciations
- All audio should be normalized to consistent volume levels

### 5.3 Sprite Sheet Organization
- Character animations: 8-12 frames per animation cycle
- UI elements: Organized by function (all buttons together, all icons together)
- Effects: Multiple variations for randomized visuals

### 5.4 Responsive Design Assets
- Provide @2x versions of critical UI elements for high-DPI displays
- Design background elements to work with different aspect ratios
- Include scalable UI elements where possible

## 6. Asset Creation Guidelines

### 6.1 Art Style
- Bright, cartoony style with bold outlines
- Consistent color palette across all assets
- Readable UI elements with clear contrast
- Animations should be smooth and playful

### 6.2 Audio Style
- Upbeat, energetic music
- Satisfying, arcade-style sound effects
- Clear voice recordings if using announcer
- Consistent audio levels and mastering

### 6.3 Technical Requirements
- Optimize all assets for mobile performance
- Keep individual file sizes under 1MB where possible
- Use texture atlases for related sprites
- Ensure audio files are compressed appropriately

---

This asset list covers all the visual and audio elements needed for implementing the Tic-Tac-Toe Mini-Game Variant. Developers should ensure all assets follow the project's art style guidelines and technical specifications.