# Tic-Tac-Toe Mini-Game Variant – Comprehensive Requirements & Design Document

## 1. Executive Summary
This document outlines the technical requirements and design specifications for a Tic-Tac-Toe variant game incorporating mini-games. Players compete in mini-games to claim squares on a tic-tac-toe board, with the goal of aligning three claimed squares to win. The game targets mobile and web platforms, using Phaser 3 for core game functionality and Quasar Framework (Vue.js) for application architecture.

### 1.1 Key Features
- **Five Mini-Games**: Reaction Challenge, Memory Match, Speed Runner, Quick Math, and Target Shooter
- **Configurable AI Difficulty**: Easy, Medium, and Hard levels for single-player
- **Cross-Platform**: Mobile and web using responsive design 
- **Extensible Architecture**: Designed for future online multiplayer expansion
- **TypeScript Implementation**: Type-safe code with modern ES6+ features
- **i18n Support**: Internationalization for multi-language support (Just English for now, but we will use Quasar's i18n support so we can easily add other languages later)
- **Mobile Optimized**: Responsive design for optimal mobile experience, touch and haptic support

### 1.2 Important Paths:
Capacitor, Quasar, and Vue have already been setup, and exist at these paths:
- Quasar: `quasar-project/`
- Vue: `quasar-project/src`
- Capacitor: `quasar-project/src-capacitor`

### 1.3 Promotional Website
- When run in web mode, the promotional website will be displayed, and it will be a simple landing page that explains the game and links to the app store (ios and android) and a web version of the game. This site will also have a simple placeholder page for the ToS and Privacy Policy.

## 2. Technical Stack & Environment

### 2.1 Core Technologies
| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| Game Engine | Phaser 3 | 3.60+ | Core game rendering, physics, input handling |
| Application Framework | Quasar/Vue.js | Latest stable | Application structure, UI components, deployment |
| Language | TypeScript | 4.5+ | Type-safe development |
| Build System | Webpack/Vite | Via Quasar | Asset bundling, transpilation |
| Deployment | Web (SPA/PWA), Mobile (Cordova/Capacitor) | - | Cross-platform delivery |

### 2.2 Development Environment
- **IDE**: Any TypeScript-compatible editor (VS Code recommended)
- **Version Control**: Git repository with feature branching workflow
- **Testing**: Device/browser testing for UI/UX, performance testing on target devices
- **Asset Management**: Organized folder structure for sprites, sounds, etc.

### 2.3 Technical Dependencies
- Phaser 3 core library
- Quasar Framework
- Vue.js (via Quasar)
- TypeScript compiler
- WebGL support in target browsers
- Touch input capabilities on mobile
- LocalStorage for game state persistence

## 3. Game Architecture

### 3.1 High-Level Application Structure
The application follows a hybrid architecture that combines Phaser 3 for game rendering and Quasar/Vue for application framework:

```
[Quasar/Vue Application]
       |
       ├── [Vue Components for UI/Menus]
       |
       └── [Phaser Game Container]
              |
              ├── [Main Game Scene]
              |
              ├── [Mini-Game Scenes]
              |
              └── [UI Overlay Scene]
```

### 3.2 Project Folder Structure
```
Inside the `quasar-project` folder, the structure is as follows:
src/
 ├─ assets/
 │   ├─ images/  (sprite sheets, backgrounds, UI elements)
 │   ├─ audio/   (background music, sound effects)
 │   └─ data/    (configuration, level data)
 ├─ game/
 │   ├─ scenes/
 │   │    ├─ MainMenuScene.ts
 │   │    ├─ BoardScene.ts
 │   │    ├─ mini-games/
 │   │    │    ├─ ReactionScene.ts
 │   │    │    ├─ MemoryMatchScene.ts
 │   │    │    ├─ SpeedRunnerScene.ts
 │   │    │    ├─ QuickMathScene.ts
 │   │    │    └─ TargetShooterScene.ts
 │   │    ├─ SettingsScene.ts
 │   │    ├─ HighScoreScene.ts
 │   │    └─ PreloaderScene.ts
 │   ├─ objects/
 │   │    ├─ Board.ts
 │   │    ├─ Player.ts
 │   │    └─ AI.ts
 │   ├─ interfaces/
 │   │    ├─ IMiniGame.ts
 │   │    ├─ IGameState.ts
 │   │    └─ IPlayer.ts
 │   └─ utils/
 │        ├─ constants.ts
 │        ├─ gameState.ts
 │        └─ assetLoader.ts
 ├─ components/
 │       ├─ GameCanvas.vue
 │       └─ (other Vue components)
 ├─ services/
 │       ├─ storage.ts
 │       └─ (future) network.ts
 └─ pages/
         ├─ GamePage.vue
         └─ (other app pages)
```

### 3.3 Core Interfaces

#### 3.3.1 IMiniGame Interface
```typescript
export interface IMiniGame {
  // Core methods
  initialize(config: IMiniGameConfig): void;
  start(): void;
  end(): void;
  
  // Event callbacks
  onWin(callback: (winner: Player) => void): void;
  onDraw(callback: () => void): void;
  
  // State
  isRunning(): boolean;
  getDuration(): number;
  
  // AI methods
  setAIDifficulty(difficulty: AIDifficulty): void;
}

export interface IMiniGameConfig {
  players: Player[];
  duration?: number;
  difficulty?: AIDifficulty;
  seed?: number; // For reproducible randomness
}
```

#### 3.3.2 IGameState Interface
```typescript
export interface IGameState {
  board: BoardState;
  currentPlayer: Player;
  players: Player[];
  currentMiniGame: string | null;
  selectedSquare: number | null;
  gameStatus: GameStatus;
  settings: GameSettings;
  statistics: GameStatistics;
}

export type BoardState = ('X' | 'O' | null)[];
export type GameStatus = 'menu' | 'playing' | 'mini-game' | 'game-over';

export interface GameSettings {
  aiDifficulty: AIDifficulty;
  soundEnabled: boolean;
  musicEnabled: boolean;
}

export enum AIDifficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}
```

#### 3.3.3 IPlayer Interface
```typescript
export interface IPlayer {
  id: string;
  type: 'human' | 'ai';
  symbol: 'X' | 'O';
  color: number; // Hex color
  score: number;
  aiDifficulty?: AIDifficulty;
  
  // Methods
  selectSquare(board: BoardState): number;
  selectMiniGame(): string;
}
```

## 4. Game Flow & Core Mechanics

### 4.1 Game Flow Diagram
```
[Main Menu] → [Settings/High Scores] → [Game Board]
                                        ↓
[Game Over] ← [Check Win Condition] ← [Player Turn] → [Mini-Game] 
    ↓                                      ↑             ↓
[Play Again?] → [Yes] → ------------------- [Update Board State]
    ↓
    [No]
    ↓
[Main Menu]
```

### 4.2 Game Loop Pseudo-Code
```typescript
// Simplified game loop for BoardScene
class BoardScene extends Phaser.Scene {
  update() {
    switch(gameState.status) {
      case 'waiting_for_player_input':
        // Wait for player to select a square
        break;
        
      case 'mini_game_selected':
        // Launch mini-game scene
        this.scene.launch('MiniGameScene', { 
          gameType: selectedMiniGame,
          square: selectedSquare 
        });
        gameState.status = 'mini_game_in_progress';
        break;
        
      case 'mini_game_completed':
        // Update board with result
        this.board.markSquare(selectedSquare, miniGameWinner);
        
        // Check win condition
        if (this.board.checkWinCondition()) {
          gameState.status = 'game_over';
        } else if (this.board.isFull()) {
          gameState.status = 'draw';
        } else {
          // Switch player
          this.switchPlayer();
          gameState.status = 'waiting_for_player_input';
        }
        break;
        
      case 'game_over':
      case 'draw':
        // Show end game UI
        this.showGameOverScreen();
        break;
    }
  }
}
```

### 4.3 Turn-Based Mechanics
1. Player selects an empty square on the tic-tac-toe board
2. Player selects a mini-game to determine ownership of the square
3. Both players compete in the mini-game
4. Winner claims the selected square with their symbol
5. Check for three-in-a-row win condition
6. If no win, control passes to other player

### 4.4 Win Conditions
- Align three symbols (X or O) horizontally, vertically, or diagonally
- The game ends in a draw if all squares are filled with no winning line

## 5. Mini-Games Specification

### 5.1 Common Mini-Game Structure
All mini-games share common implementation patterns:
- Extend the base `Phaser.Scene` class
- Implement the `IMiniGame` interface
- Have consistent start/end animations
- Return clear win/loss/draw results
- Support AI opponents with difficulty levels

Each mini-game is implemented as a separate scene that reports its result back to the main board scene.

### 5.2 Reaction Challenge
**Objective**: Tap at precisely the right moment when a moving indicator aligns with a target.

**Implementation Details**:
```typescript
class ReactionScene extends Phaser.Scene implements IMiniGame {
  private marker: Phaser.GameObjects.Sprite;
  private targetZone: Phaser.GameObjects.Zone;
  private players: Player[];
  private playerInputs: Map<Player, number> = new Map();
  private markerTween: Phaser.Tweens.Tween;
  
  initialize(config: IMiniGameConfig) {
    this.players = config.players;
  }
  
  create() {
    // Create visual elements
    this.createBackground();
    this.marker = this.add.sprite(400, 300, 'marker');
    this.targetZone = this.add.zone(600, 300, 20, 100);
    
    // Setup input handlers
    this.input.on('pointerdown', this.handlePlayerInput);
    
    // Set up AI behavior based on difficulty
    if (this.players.some(p => p.type === 'ai')) {
      this.setupAI();
    }
    
    // Create marker animation
    this.markerTween = this.tweens.add({
      targets: this.marker,
      x: 800,
      duration: 2000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
    
    // Add countdown and instructions
    this.showCountdown(3).then(() => this.startGame());
  }
  
  handlePlayerInput(pointer, player) {
    if (!this.isRunning()) return;
    
    // Record timing of player input
    const distance = Math.abs(this.marker.x - this.targetZone.x);
    this.playerInputs.set(player, distance);
    
    // Visual feedback
    this.showInputFeedback(player, distance);
    
    // If all players have input, determine winner
    if (this.playerInputs.size === this.players.length) {
      this.determineWinner();
    }
  }
  
  determineWinner() {
    // Find player with smallest distance (best timing)
    let bestPlayer = null;
    let bestDistance = Infinity;
    
    for (const [player, distance] of this.playerInputs.entries()) {
      if (distance < bestDistance) {
        bestDistance = distance;
        bestPlayer = player;
      }
    }
    
    this.endGame(bestPlayer);
  }
  
  setupAI() {
    // AI timing based on difficulty
    const aiPlayer = this.players.find(p => p.type === 'ai');
    if (!aiPlayer) return;
    
    const difficulty = aiPlayer.aiDifficulty || 'medium';
    let errorMargin;
    
    switch (difficulty) {
      case 'easy':
        errorMargin = 50; // Larger error
        break;
      case 'medium':
        errorMargin = 25;
        break;
      case 'hard':
        errorMargin = 5; // Small error
        break;
    }
    
    // AI will "tap" when marker is near target with some error
    this.time.addEvent({
      delay: 100,
      callback: () => {
        if (!this.isRunning()) return;
        
        // Check if marker is near target
        const distance = Math.abs(this.marker.x - this.targetZone.x);
        if (distance < 20) {
          // Add some randomness based on difficulty
          const aiDistance = distance + Phaser.Math.Between(-errorMargin, errorMargin);
          this.playerInputs.set(aiPlayer, Math.max(0, aiDistance));
          
          // Show visual feedback
          this.showInputFeedback(aiPlayer, aiDistance);
          
          // If human has also input, determine winner
          if (this.playerInputs.size === this.players.length) {
            this.determineWinner();
          }
        }
      },
      loop: true
    });
  }
}
```

**Duration**: 5-10 seconds per challenge

### 5.3 Memory Match
**Objective**: Find matching pairs of cards faster than your opponent.

**Implementation Details**:
- Board of 4x4 cards (8 matching pairs)
- Each player has their own identical board to solve
- Cards are flipped with animations on tap
- Match tracking and timer countdown
- Winner is first to find all pairs or has most pairs when time expires

**AI Implementation**:
- Easy AI: Randomly selects cards with occasional "memory" of seen cards
- Medium AI: Remembers most seen cards but makes occasional mistakes
- Hard AI: Near-perfect memory with optimal play strategy

**Duration**: 20-30 seconds

### 5.4 Speed Runner
**Objective**: Navigate a character through obstacles to reach the finish line first.

**Implementation Details**:
- Side-scrolling runner with jumping mechanics
- Procedurally generated obstacle course
- Physics-based collision detection
- Parallax background for depth effect

**AI Implementation**:
- Easy AI: Jumps too early or late sometimes, slower speed
- Medium AI: Generally good timing but occasional mistakes
- Hard AI: Near-perfect obstacle avoidance, maximum speed

**Duration**: 15-20 seconds

### 5.5 Quick Math
**Objective**: Solve simple math problems faster than your opponent.

**Implementation Details**:
- Randomized math equations of appropriate difficulty
- Multiple-choice answer buttons on mobile
- Direct number input on desktop
- Visual feedback for correct/incorrect answers

**AI Implementation**:
- Easy AI: 1-2 second delay, occasional wrong answers
- Medium AI: 0.5-1 second delay, rarely wrong
- Hard AI: 0.1-0.3 second delay, always correct

**Duration**: 5-10 seconds per question

### 5.6 Target Shooter
**Objective**: Tap targets that appear on screen to score points.

**Implementation Details**:
- Targets spawn in random locations with timed animations
- Hit detection based on touch/click position
- Score tracking and visual effects
- Difficulty scaling with smaller/faster targets over time

**AI Implementation**:
- Easy AI: Hits 50-60% of targets with delay
- Medium AI: Hits 70-80% of targets with shorter delay
- Hard AI: Hits 90-95% of targets almost immediately

**Duration**: 15 seconds

## 6. User Interface & Experience

### 6.1 Screen Flow
```
[Splash Screen] → [Main Menu] → [Game Board] → [Mini-Game] → [Results] → [Game Board]
                    ↓
                 [Settings]
                    ↓
               [High Scores]
```

### 6.2 UI Components & Screens

#### 6.2.1 Main Menu Screen
- Game title and logo
- Single Player button
- Settings button
- High Scores button
- Animated background with mini-game previews

#### 6.2.2 Game Board Screen
- 3x3 Tic-Tac-Toe grid
- Current player indicator
- Mini-game selection UI
- Score display
- Pause button

#### 6.2.3 Mini-Game Selection UI
- Visual icons for each mini-game
- Brief description on selection
- Confirmation button

#### 6.2.4 Settings Screen
- AI difficulty selector (Easy, Medium, Hard)
- Music toggle (On/Off)
- Sound effects toggle (On/Off)
- Control scheme options
- Back button

#### 6.2.5 High Scores Screen
- Best win records by difficulty
- Mini-game performance statistics
- Reset scores button
- Back button

### 6.3 Visual Style & Theme
- Bright, colorful cartoon style
- Consistent color palette across all screens
- Smooth animations for transitions and feedback
- Responsive layout for different screen sizes

### 6.4 Audio Design
- Background music loop during gameplay
- Distinct sound effects for:
  - Button interactions
  - Mini-game actions
  - Winning/losing
  - Square claiming
  - Game over
- Audio feedback for correct/incorrect actions

### 6.5 Responsive Design Considerations
- Adapt to landscape and portrait orientations
- Scale UI elements based on screen size
- Touch-friendly button sizes (minimum 48px)
- Alternative control schemes for desktop vs mobile

## 7. AI Implementation

### 7.1 AI Architecture
The AI system has two main components:
1. **Board AI**: Handles tic-tac-toe strategy
2. **Mini-Game AI**: Provides competitive gameplay in each mini-game

```typescript
// AI difficulty settings
export interface AIDifficultySettings {
  // Board AI
  strategicDepth: number;  // How many moves ahead to consider
  mistakeChance: number;   // Probability of making a non-optimal move
  
  // Mini-Game AI settings
  reactionError: number;   // Timing error in Reaction game
  memoryError: number;     // Memory failure rate
  runnerSpeed: number;     // Runner speed multiplier
  mathDelay: number;       // Delay before answering math
  shooterAccuracy: number; // Percentage of targets hit
}

// AI difficulty presets
export const AI_SETTINGS: Record<AIDifficulty, AIDifficultySettings> = {
  [AIDifficulty.Easy]: {
    strategicDepth: 1,
    mistakeChance: 0.4,
    reactionError: 50,
    memoryError: 0.5,
    runnerSpeed: 0.8,
    mathDelay: 2000,
    shooterAccuracy: 0.5
  },
  [AIDifficulty.Medium]: {
    strategicDepth: 2,
    mistakeChance: 0.2,
    reactionError: 25,
    memoryError: 0.25,
    runnerSpeed: 0.9,
    mathDelay: 1000,
    shooterAccuracy: 0.75
  },
  [AIDifficulty.Hard]: {
    strategicDepth: 3,
    mistakeChance: 0.05,
    reactionError: 10,
    memoryError: 0.1,
    runnerSpeed: 1.0,
    mathDelay: 300,
    shooterAccuracy: 0.9
  }
};
```

### 7.2 Board AI Implementation
```typescript
class BoardAI {
  constructor(private difficulty: AIDifficulty) {}
  
  selectSquare(board: BoardState): number {
    const settings = AI_SETTINGS[this.difficulty];
    
    // Random chance to make a mistake based on difficulty
    if (Math.random() < settings.mistakeChance) {
      return this.selectRandomEmptySquare(board);
    }
    
    // Try to win
    const winningMove = this.findWinningMove(board);
    if (winningMove !== -1) return winningMove;
    
    // Try to block opponent
    const blockingMove = this.findBlockingMove(board);
    if (blockingMove !== -1) return blockingMove;
    
    // Take center if available
    if (board[4] === null) return 4;
    
    // Take corner if available
    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter(i => board[i] === null);
    if (availableCorners.length > 0) {
      return availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }
    
    // Take any available square
    return this.selectRandomEmptySquare(board);
  }
  
  // Helper methods for finding winning/blocking moves, etc.
  // ...
}
```

### 7.3 Mini-Game AI
Each mini-game implements its own AI logic as described in the mini-games section. The AI difficulty settings affect parameters like:

- Reaction timing errors
- Memory reliability
- Movement speed
- Response delays
- Accuracy percentages

These settings create a noticeable progression from Easy (beatable for beginners) to Hard (challenging for experienced players).

## 8. Performance Optimization

### 8.1 Asset Optimization
- Use texture atlases for sprites
- Compress audio files appropriately
- Implement asset preloading with progress indicators
- Lazy-load assets for mini-games when first accessed

### 8.2 Rendering Optimization
- Utilize WebGL rendering
- Implement object pooling for frequently created/destroyed objects
- Control particle effect density based on device capability
- Use sprite sheets for animations

### 8.3 Memory Management
- Clean up event listeners and timers when scenes exit
- Properly destroy objects no longer needed
- Monitor memory usage during development
- Implement garbage collection-friendly patterns

### 8.4 Mobile Considerations
- Test on low-end target devices
- Implement optional "low graphics" mode
- Optimize touch input handling
- Manage battery usage (frame rate, background processing)

## 9. Data Management

### 9.1 Local Storage Schema
```typescript
interface GameStorageData {
  settings: {
    aiDifficulty: AIDifficulty;
    soundEnabled: boolean;
    musicEnabled: boolean;
  };
  statistics: {
    gamesPlayed: number;
    gamesWon: number;
    gamesLost: number;
    gamesTied: number;
    byDifficulty: Record<AIDifficulty, {
      played: number;
      won: number;
    }>;
    miniGameStats: Record<string, {
      played: number;
      won: number;
    }>;
  };
}
```

### 9.2 Storage Service
```typescript
// Storage service for saving/loading game data
export class StorageService {
  private readonly STORAGE_KEY = 'tic_tac_toe_minigame_data';
  
  getGameData(): GameStorageData {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    if (!storedData) return this.getDefaultGameData();
    
    try {
      return JSON.parse(storedData) as GameStorageData;
    } catch (e) {
      console.error('Failed to parse stored game data', e);
      return this.getDefaultGameData();
    }
  }
  
  saveGameData(data: GameStorageData): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save game data', e);
    }
  }
  
  updateStatistics(result: GameResult): void {
    const data = this.getGameData();
    // Update statistics based on game result
    // ...
    this.saveGameData(data);
  }
  
  private getDefaultGameData(): GameStorageData {
    // Return default settings and empty stats
    // ...
  }
}
```

## 10. Future Expansion: Online Multiplayer

### 10.1 Architecture Overview
The future online multiplayer will follow a client-server model:

```
[Client 1] ←→ [Game Server] ←→ [Client 2]
```

### 10.2 Key Components
- **Client**: Implements networking layer over existing game
- **Server**: Node.js with WebSockets (Socket.io) or dedicated game server
- **Matchmaking**: Player pairing system
- **State Synchronization**: Ensures both players see the same game state
- **Turn Validation**: Prevents cheating and enforces rules

### 10.3 Technical Considerations
- Network latency handling for real-time mini-games
- Fallback mechanisms for disconnections
- Security to prevent client-side manipulation
- Scalability for multiple concurrent games

### 10.4 Implementation Strategy
1. Refactor single-player code to abstract input sources
2. Add networking layer with WebSockets
3. Implement server-side validation
4. Add matchmaking and lobby system
5. Deploy server infrastructure

## 11. Development Roadmap

### 11.1 Phase 1: Core Game
- Initial project setup with Phaser and Quasar
- Main menu and basic navigation
- Tic-Tac-Toe board implementation
- Settings and storage service

### 11.2 Phase 2: Mini-Games
- Implement all five mini-games
- Integrate mini-games with main board
- Add visual effects and audio

### 11.3 Phase 3: AI Implementation
- Board AI strategy
- Mini-game AI behaviors
- Difficulty levels and balancing

### 11.4 Phase 4: Polish & Testing
- UI/UX refinement
- Performance optimization
- Cross-platform testing
- Bug fixes and balancing

### 11.5 Phase 5: Future Expansion
- Online multiplayer foundation
- Additional mini-games
- Advanced visual effects
- Expanded customization options

## 12. Testing Plan

### 12.1 Functional Testing
- Verify all game mechanics work as expected
- Test AI at all difficulty levels
- Confirm win/lose/draw conditions
- Validate settings persistence

### 12.2 Compatibility Testing
- Test on target browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile devices (iOS, Android)
- Verify responsive layout at different screen sizes
- Check touch and keyboard input

### 12.3 Performance Testing
- Monitor frame rate during gameplay
- Check memory usage over extended sessions
- Validate loading times on different devices
- Test battery impact on mobile

## 13. Asset Requirements

### 13.1 Graphic Assets
- Sprite sheets for all game elements
- UI components (buttons, icons, menus)
- Background images
- Animation frames
- Effects (particles, transitions)

### 13.2 Audio Assets
- Background music track
- UI sound effects
- Mini-game sound effects
- Win/lose jingles
- Ambient sounds

### 13.3 Asset File Paths:
Refer to `ASSETS.md` for asset file paths.

## 14. Conclusion
This document provides comprehensive specifications for implementing a Tic-Tac-Toe variant with mini-games using Phaser 3 and Quasar Framework. By following this design, developers can create an engaging cross-platform game with a clear architecture and extensible codebase ready for future enhancements.

The design prioritizes:
- Clean, modular code structure
- Smooth, responsive gameplay
- Scalable difficulty through AI
- Cross-platform compatibility
- Future expandability

Implementation should proceed according to the defined roadmap, with regular testing to ensure quality and performance across all target platforms.