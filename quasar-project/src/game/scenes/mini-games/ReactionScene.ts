import BaseScene from '../BaseScene';
import { SCENE_KEYS, AUDIO_KEYS } from '../../utils/constants';
import { IMiniGame, IMiniGameConfig } from '../../interfaces/IMiniGame';
import { Player } from '../../objects/Player';
import { AIDifficulty } from '../../interfaces/IGameState';
import { gameState } from '../../utils/gameState';

export default class ReactionScene extends BaseScene implements IMiniGame {
  private marker!: Phaser.GameObjects.Sprite;
  private targetZone!: Phaser.GameObjects.Rectangle;
  private players: Player[] = [];
  private playerInputs: Map<string, number> = new Map();
  private markerTween!: Phaser.Tweens.Tween;
  private running: boolean = false;
  private winCallback: ((winner: Player) => void) | null = null;
  private drawCallback: (() => void) | null = null;
  private aiDifficulty: AIDifficulty = AIDifficulty.Medium;
  private squareIndex: number = -1;
  private duration: number = 5000;
  private countdownText!: Phaser.GameObjects.Text;
  private resultContainer!: Phaser.GameObjects.Container;
  
  constructor() {
    super(SCENE_KEYS.MINI_GAMES.REACTION);
  }
  
  init(data: { squareIndex: number }): void {
    // Store square index from board scene
    this.squareIndex = data.squareIndex;
  }
  
  create(): void {
    super.create();
    
    // Play mini-game music
    this.playMusic(AUDIO_KEYS.MUSIC.MINI_GAME_THEME);
    
    // Add background
    this.add.image(0, 0, 'reaction-bg')
      .setOrigin(0, 0)
      .setDisplaySize(this.cameras.main.width, this.cameras.main.height);
    
    // Create the game elements
    this.createGameElements();
    
    // Create result display (hidden initially)
    this.createResultDisplay();
    
    // Initialize from game state
    const state = gameState.getState();
    this.initialize({
      players: state.players,
      difficulty: state.settings.aiDifficulty,
      duration: 5000
    });
    
    // Initialize scene with fade-in
    this.initScene();
    
    // Start countdown
    this.startCountdown(3);
  }
  
  // IMiniGame implementation
  initialize(config: IMiniGameConfig): void {
    this.players = config.players;
    this.aiDifficulty = config.difficulty || AIDifficulty.Medium;
    this.duration = config.duration || 5000;
  }
  
  start(): void {
    this.running = true;
    
    // Start marker animation
    this.startMarkerAnimation();
    
    // Setup AI player if present
    const aiPlayer = this.players.find(p => p.type === 'ai');
    if (aiPlayer) {
      this.setupAI(aiPlayer);
    }
    
    // Play start sound
    this.playSound(AUDIO_KEYS.VOICE.GO);
  }
  
  end(): void {
    this.running = false;
    
    // Stop marker animation
    if (this.markerTween) {
      this.markerTween.stop();
    }
    
    // Determine winner
    this.determineWinner();
  }
  
  onWin(callback: (winner: Player) => void): void {
    this.winCallback = callback;
  }
  
  onDraw(callback: () => void): void {
    this.drawCallback = callback;
  }
  
  isRunning(): boolean {
    return this.running;
  }
  
  getDuration(): number {
    return this.duration;
  }
  
  setAIDifficulty(difficulty: AIDifficulty): void {
    this.aiDifficulty = difficulty;
  }
  
  // Scene implementation
  private createGameElements(): void {
    const centerX = this.cameras.main.centerX;
    const centerY = this.cameras.main.centerY;
    
    // Create instructions text
    const instructions = this.add.text(centerX, 100, 'Tap when the marker aligns with the target zone!', {
      fontSize: '24px',
      color: '#ffffff',
      align: 'center'
    });
    instructions.setOrigin(0.5);
    
    // Create track
    const track = this.add.rectangle(centerX, centerY, 600, 20, 0x333333);
    track.setStrokeStyle(2, 0xffffff);
    
    // Create target zone
    this.targetZone = this.add.rectangle(centerX + 150, centerY, 40, 60, 0xff0000);
    
    // Create marker
    this.marker = this.add.sprite(centerX - 250, centerY, 'reaction-marker');
    
    // Create countdown text (hidden initially)
    this.countdownText = this.add.text(centerX, centerY - 100, '', {
      fontSize: '64px',
      color: '#ffffff',
      fontStyle: 'bold'
    });
    this.countdownText.setOrigin(0.5);
    this.countdownText.setVisible(false);
    
    // Setup input handler for the entire screen
    this.input.on('pointerdown', this.handlePlayerInput, this);
  }
  
  private createResultDisplay(): void {
    // Create container for results
    this.resultContainer = this.add.container(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );
    
    // Background panel
    const panel = this.createPanel(0, 0, 400, 300);
    
    // Title
    const title = this.add.text(0, -100, 'Results', {
      fontSize: '36px',
      color: '#ffffff',
      fontStyle: 'bold'
    });
    title.setOrigin(0.5);
    
    // Results text (will be filled later)
    const resultsText = this.add.text(0, 0, '', {
      fontSize: '24px',
      color: '#ffffff',
      align: 'center'
    });
    resultsText.setOrigin(0.5);
    resultsText.setName('results');
    
    // Continue button
    const continueBtn = this.createButton(0, 100, 'Continue', () => {
      this.transitionToScene(SCENE_KEYS.BOARD);
    });
    
    // Add to container
    this.resultContainer.add([panel, title, resultsText, continueBtn]);
    
    // Hide initially
    this.resultContainer.setVisible(false);
  }
  
  private startCountdown(seconds: number): void {
    this.countdownText.setVisible(true);
    
    let timeLeft = seconds;
    
    const updateCountdown = () => {
      this.countdownText.setText(timeLeft.toString());
      this.playSound('reaction-countdown');
      
      if (timeLeft <= 0) {
        this.countdownText.setVisible(false);
        this.start();
      } else {
        timeLeft--;
        this.time.delayedCall(1000, updateCountdown);
      }
    };
    
    updateCountdown();
  }
  
  private startMarkerAnimation(): void {
    // Randomize direction for unpredictability
    const startPosition = this.cameras.main.centerX - 250;
    const endPosition = this.cameras.main.centerX + 250;
    
    // Create tween to move marker back and forth
    this.markerTween = this.tweens.add({
      targets: this.marker,
      x: endPosition,
      duration: 2000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }
  
  private handlePlayerInput(): void {
    // Only process input if game is running and human player hasn't already input
    if (!this.running) return;
    
    const humanPlayer = this.players.find(p => p.type === 'human');
    if (!humanPlayer || this.playerInputs.has(humanPlayer.id)) return;
    
    // Calculate accuracy (distance from target)
    const distance = Math.abs(this.marker.x - this.targetZone.x);
    this.playerInputs.set(humanPlayer.id, distance);
    
    // Visual feedback
    this.showInputFeedback(humanPlayer, distance);
    
    // Play sound
    if (distance < 20) {
      this.playSound('reaction-perfect');
    } else {
      this.playSound('reaction-tap');
    }
    
    // Check if all players have input
    if (this.playerInputs.size === this.players.length) {
      this.end();
    }
  }
  
  private setupAI(aiPlayer: Player): void {
    // Get AI reaction time based on difficulty
    let errorMargin;
    
    switch (this.aiDifficulty) {
      case AIDifficulty.Easy:
        errorMargin = 50; // Larger error
        break;
      case AIDifficulty.Medium:
        errorMargin = 25;
        break;
      case AIDifficulty.Hard:
        errorMargin = 5; // Small error
        break;
      default:
        errorMargin = 25;
    }
    
    // AI will "tap" when marker is near target with some error
    const checkForAIInput = () => {
      if (!this.running) return;
      
      // Check if marker is near target
      const distance = Math.abs(this.marker.x - this.targetZone.x);
      
      // AI attempts to tap when marker is close to target
      if (distance < 20) {
        // Add some randomness based on difficulty
        const aiDistance = distance + Phaser.Math.Between(-errorMargin, errorMargin);
        this.playerInputs.set(aiPlayer.id, Math.max(0, aiDistance));
        
        // Show visual feedback
        this.showInputFeedback(aiPlayer, aiDistance);
        
        // Play sound
        if (aiDistance < 20) {
          this.playSound('reaction-perfect');
        } else {
          this.playSound('reaction-tap');
        }
        
        // Check if all players have input
        if (this.playerInputs.size === this.players.length) {
          this.end();
        }
      }
    };
    
    // Check every 100ms
    this.time.addEvent({
      delay: 100,
      callback: checkForAIInput,
      loop: true
    });
  }
  
  private showInputFeedback(player: Player, distance: number): void {
    // Create visual feedback at marker position
    const effect = this.add.image(this.marker.x, this.marker.y, 'reaction-tap');
    effect.setTint(player.color);
    
    // Animate and fade out
    this.tweens.add({
      targets: effect,
      scale: 2,
      alpha: 0,
      duration: 500,
      onComplete: () => effect.destroy()
    });
    
    // Show accuracy text
    let accuracyText;
    if (distance < 10) {
      accuracyText = 'Perfect!';
    } else if (distance < 30) {
      accuracyText = 'Good!';
    } else if (distance < 60) {
      accuracyText = 'OK';
    } else {
      accuracyText = 'Miss!';
    }
    
    const text = this.add.text(this.marker.x, this.marker.y - 50, accuracyText, {
      fontSize: '24px',
      color: player.symbol === 'X' ? '#4a7afe' : '#ff5252',
      fontStyle: 'bold'
    });
    text.setOrigin(0.5);
    
    // Animate text
    this.tweens.add({
      targets: text,
      y: text.y - 50,
      alpha: 0,
      duration: 1000,
      onComplete: () => text.destroy()
    });
  }
  
  private determineWinner(): void {
    // Find player with smallest distance (best timing)
    let bestPlayer: Player | null = null;
    let bestDistance = Infinity;
    
    for (const [playerId, distance] of this.playerInputs.entries()) {
      const player = this.players.find(p => p.id === playerId);
      if (player && distance < bestDistance) {
        bestDistance = distance;
        bestPlayer = player;
      }
    }
    
    // Show results
    this.showResults(bestPlayer, bestDistance);
    
    // Trigger callback
    if (bestPlayer && this.winCallback) {
      this.winCallback(bestPlayer);
      
      // Update game state
      gameState.endMiniGame(bestPlayer);
    } else if (!bestPlayer && this.drawCallback) {
      this.drawCallback();
      
      // Update game state
      gameState.endMiniGame(null);
    }
  }
  
  private showResults(winner: Player | null, bestDistance: number): void {
    // Update results text
    const resultsText = this.resultContainer.getByName('results') as Phaser.GameObjects.Text;
    
    if (winner) {
      const accuracy = this.getAccuracyText(bestDistance);
      const isHuman = winner.type === 'human';
      
      if (isHuman) {
        resultsText.setText(`You won!\n\nYour accuracy: ${accuracy}`);
        this.playSound('reaction-win');
      } else {
        resultsText.setText(`You lost!\n\nAI accuracy: ${accuracy}`);
        this.playSound('reaction-lose');
      }
      
      resultsText.setColor(winner.symbol === 'X' ? '#4a7afe' : '#ff5252');
    } else {
      resultsText.setText('It\'s a draw!');
      resultsText.setColor('#ffffff');
    }
    
    // Show results container
    this.resultContainer.setVisible(true);
    this.resultContainer.setAlpha(0);
    this.resultContainer.setScale(0.8);
    
    this.tweens.add({
      targets: this.resultContainer,
      alpha: 1,
      scale: 1,
      duration: 500,
      ease: 'Back.out'
    });
  }
  
  private getAccuracyText(distance: number): string {
    if (distance < 10) {
      return 'Perfect!';
    } else if (distance < 30) {
      return 'Good';
    } else if (distance < 60) {
      return 'Average';
    } else {
      return 'Poor';
    }
  }
}