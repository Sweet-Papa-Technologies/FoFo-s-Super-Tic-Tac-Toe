import BaseScene from './BaseScene';
import { SCENE_KEYS, AUDIO_KEYS, MINI_GAMES } from '../utils/constants';
import { Board } from '../objects/Board';
import { gameState } from '../utils/gameState';
import { Player } from '../objects/Player';

export default class BoardScene extends BaseScene {
  private board!: Board;
  private currentPlayerText!: Phaser.GameObjects.Text;
  private miniGameSelectionContainer!: Phaser.GameObjects.Container;
  private gameOverContainer!: Phaser.GameObjects.Container;
  private playerTurnIndicator!: Phaser.GameObjects.Container;
  private selectedSquare: number = -1;
  
  constructor() {
    super(SCENE_KEYS.BOARD);
  }
  
  create(): void {
    super.create();
    
    // Play background music
    this.playMusic(AUDIO_KEYS.MUSIC.MAIN_THEME);
    
    // Add background
    this.add.image(0, 0, 'board-bg')
      .setOrigin(0, 0)
      .setDisplaySize(this.cameras.main.width, this.cameras.main.height);
    
    // Create game board
    this.createBoard();
    
    // Create UI elements
    this.createUI();
    
    // Initialize scene with fade-in
    this.initScene();
    
    // Play game start sound
    this.playSound(AUDIO_KEYS.VOICE.GAME_START);
    
    // If the first player is AI, trigger its move after a delay
    const currentPlayer = gameState.getState().currentPlayer;
    if (currentPlayer.type === 'ai') {
      this.time.delayedCall(1000, () => this.handleAITurn());
    }
    
    // Subscribe to game state changes
    gameState.subscribe((state) => {
      // Update UI based on state changes
      this.updateUI();
      
      // Check for game end conditions
      if (state.gameStatus === 'game-over') {
        this.showGameOverScreen();
      }
    });
  }
  
  private createBoard(): void {
    // Create board with initial state from game state
    const state = gameState.getState();
    this.board = new Board(this, state.board);
    this.board.create(this.cameras.main.centerX, this.cameras.main.centerY);
    
    // Set callback for square selection
    this.board.setSquareSelectCallback((index) => {
      this.handleSquareSelection(index);
    });
  }
  
  private createUI(): void {
    // Create current player indicator
    this.createPlayerTurnIndicator();
    
    // Create mini-game selection panel (hidden initially)
    this.createMiniGameSelectionPanel();
    
    // Create game over container (hidden initially)
    this.createGameOverContainer();
    
    // Update UI based on initial state
    this.updateUI();
  }
  
  private createPlayerTurnIndicator(): void {
    const state = gameState.getState();
    const currentPlayer = state.currentPlayer;
    
    // Create container
    this.playerTurnIndicator = this.add.container(
      this.cameras.main.centerX,
      80
    );
    
    // Background panel
    const panel = this.createPanel(0, 0, 400, 80);
    
    // Player text
    this.currentPlayerText = this.add.text(0, 0, `Player ${currentPlayer.symbol}'s Turn`, {
      fontSize: '28px',
      color: '#ffffff',
      fontStyle: 'bold'
    });
    this.currentPlayerText.setOrigin(0.5);
    
    // Add to container
    this.playerTurnIndicator.add([panel, this.currentPlayerText]);
  }
  
  private createMiniGameSelectionPanel(): void {
    // Create container
    this.miniGameSelectionContainer = this.add.container(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );
    
    // Background panel
    const panel = this.createPanel(0, 0, 500, 400);
    
    // Title
    const title = this.add.text(0, -150, 'Select Mini-Game', {
      fontSize: '32px',
      color: '#ffffff',
      fontStyle: 'bold'
    });
    title.setOrigin(0.5);
    
    // Mini-game buttons
    const reactionBtn = this.createMiniGameButton(-150, -50, 'Reaction Challenge', MINI_GAMES.REACTION);
    const memoryBtn = this.createMiniGameButton(150, -50, 'Memory Match', MINI_GAMES.MEMORY);
    const runnerBtn = this.createMiniGameButton(-150, 50, 'Speed Runner', MINI_GAMES.RUNNER);
    const mathBtn = this.createMiniGameButton(150, 50, 'Quick Math', MINI_GAMES.MATH);
    const shooterBtn = this.createMiniGameButton(0, 150, 'Target Shooter', MINI_GAMES.SHOOTER);
    
    // Add to container
    this.miniGameSelectionContainer.add([
      panel,
      title,
      reactionBtn,
      memoryBtn,
      runnerBtn,
      mathBtn,
      shooterBtn
    ]);
    
    // Hide initially
    this.miniGameSelectionContainer.setVisible(false);
  }
  
  private createMiniGameButton(x: number, y: number, text: string, gameType: string): Phaser.GameObjects.Container {
    const container = this.add.container(x, y);
    
    // Button background
    const bg = this.add.rectangle(0, 0, 180, 70, 0x333333);
    bg.setStrokeStyle(2, 0xffffff);
    bg.setInteractive({ useHandCursor: true });
    
    // Icon
    const icon = this.add.image(-60, 0, `${gameType}-icon`);
    icon.setScale(0.5);
    
    // Button text
    const textObj = this.add.text(0, 0, text, {
      fontSize: '18px',
      color: '#ffffff',
      align: 'center',
      wordWrap: { width: 120 }
    });
    textObj.setOrigin(0.5);
    
    container.add([bg, icon, textObj]);
    
    // Events
    bg.on('pointerover', () => {
      bg.setFillStyle(0x555555);
      this.playSound(AUDIO_KEYS.UI.BUTTON_HOVER);
    });
    
    bg.on('pointerout', () => {
      bg.setFillStyle(0x333333);
    });
    
    bg.on('pointerdown', () => {
      bg.setFillStyle(0x777777);
    });
    
    bg.on('pointerup', () => {
      bg.setFillStyle(0x555555);
      this.playSound(AUDIO_KEYS.UI.BUTTON_CLICK);
      this.startMiniGame(gameType);
    });
    
    return container;
  }
  
  private createGameOverContainer(): void {
    // Create container
    this.gameOverContainer = this.add.container(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );
    
    // Background panel
    const panel = this.createPanel(0, 0, 500, 300);
    
    // Title (will be set when showing)
    const title = this.add.text(0, -100, '', {
      fontSize: '36px',
      color: '#ffffff',
      fontStyle: 'bold'
    });
    title.setOrigin(0.5);
    title.setName('title');
    
    // Play again button
    const playAgainBtn = this.createButton(0, 0, 'Play Again', () => {
      this.restartGame();
    });
    
    // Main menu button
    const mainMenuBtn = this.createButton(0, 80, 'Main Menu', () => {
      this.transitionToScene(SCENE_KEYS.MAIN_MENU);
    });
    
    // Add to container
    this.gameOverContainer.add([panel, title, playAgainBtn, mainMenuBtn]);
    
    // Hide initially
    this.gameOverContainer.setVisible(false);
  }
  
  private updateUI(): void {
    const state = gameState.getState();
    
    // Update current player text
    if (state.currentPlayer) {
      this.currentPlayerText.setText(`Player ${state.currentPlayer.symbol}'s Turn`);
      this.currentPlayerText.setColor(state.currentPlayer.symbol === 'X' ? '#4a7afe' : '#ff5252');
    }
  }
  
  private handleSquareSelection(index: number): void {
    const state = gameState.getState();
    
    // Only allow selection during player's turn
    if (state.gameStatus !== 'playing' || state.currentPlayer.type !== 'human') {
      return;
    }
    
    // Store selected square
    this.selectedSquare = index;
    
    // Play sound
    this.playSound(AUDIO_KEYS.BOARD.SQUARE_SELECT);
    
    // Show mini-game selection
    this.showMiniGameSelection();
  }
  
  private showMiniGameSelection(): void {
    // Animate in the mini-game selection panel
    this.miniGameSelectionContainer.setVisible(true);
    this.miniGameSelectionContainer.setScale(0.8);
    this.miniGameSelectionContainer.setAlpha(0);
    
    this.tweens.add({
      targets: this.miniGameSelectionContainer,
      scale: 1,
      alpha: 1,
      duration: 300,
      ease: 'Back.out'
    });
  }
  
  private hideMiniGameSelection(): void {
    // Animate out the mini-game selection panel
    this.tweens.add({
      targets: this.miniGameSelectionContainer,
      scale: 0.8,
      alpha: 0,
      duration: 300,
      ease: 'Back.in',
      onComplete: () => {
        this.miniGameSelectionContainer.setVisible(false);
      }
    });
  }
  
  private startMiniGame(gameType: string): void {
    // Hide selection panel
    this.hideMiniGameSelection();
    
    // Start the mini-game in game state
    gameState.startMiniGame(gameType, this.selectedSquare);
    
    // Transition to the mini-game scene
    const sceneKey = this.getMiniGameSceneKey(gameType);
    if (sceneKey) {
      this.transitionToScene(sceneKey, { squareIndex: this.selectedSquare });
    }
  }
  
  private getMiniGameSceneKey(gameType: string): string {
    switch (gameType) {
      case MINI_GAMES.REACTION:
        return SCENE_KEYS.MINI_GAMES.REACTION;
      case MINI_GAMES.MEMORY:
        return SCENE_KEYS.MINI_GAMES.MEMORY;
      case MINI_GAMES.RUNNER:
        return SCENE_KEYS.MINI_GAMES.RUNNER;
      case MINI_GAMES.MATH:
        return SCENE_KEYS.MINI_GAMES.MATH;
      case MINI_GAMES.SHOOTER:
        return SCENE_KEYS.MINI_GAMES.SHOOTER;
      default:
        return '';
    }
  }
  
  private handleAITurn(): void {
    const state = gameState.getState();
    
    // Only proceed if it's AI's turn
    if (state.gameStatus !== 'playing' || state.currentPlayer.type !== 'ai') {
      return;
    }
    
    // Get AI player
    const aiPlayer = state.currentPlayer as Player;
    
    // Select a square
    const squareIndex = aiPlayer.selectSquare(state.board);
    if (squareIndex === -1) {
      return; // No valid move
    }
    
    // Show thinking animation
    this.showAIThinking(() => {
      // Store selected square
      this.selectedSquare = squareIndex;
      
      // Play sound
      this.playSound(AUDIO_KEYS.BOARD.SQUARE_SELECT);
      
      // Select a mini-game
      const miniGame = aiPlayer.selectMiniGame();
      
      // Start the mini-game
      gameState.startMiniGame(miniGame, this.selectedSquare);
      
      // Transition to the mini-game scene
      const sceneKey = this.getMiniGameSceneKey(miniGame);
      if (sceneKey) {
        this.transitionToScene(sceneKey, { squareIndex: this.selectedSquare });
      }
    });
  }
  
  private showAIThinking(onComplete: () => void): void {
    // Create thinking indicator
    const thinkingContainer = this.add.container(
      this.cameras.main.centerX,
      this.cameras.main.centerY + 150
    );
    
    // Background
    const bg = this.add.rectangle(0, 0, 250, 60, 0x000000, 0.7);
    bg.setStrokeStyle(2, 0xffffff);
    
    // Text
    const text = this.add.text(-50, 0, 'Thinking...', {
      fontSize: '24px',
      color: '#ffffff'
    });
    text.setOrigin(0, 0.5);
    
    // Spinner
    const spinner = this.add.sprite(60, 0, 'loading-spinner');
    spinner.setScale(0.5);
    spinner.play('spinner');
    
    thinkingContainer.add([bg, text, spinner]);
    
    // Show for a short time to simulate "thinking"
    this.time.delayedCall(1000, () => {
      // Fade out
      this.tweens.add({
        targets: thinkingContainer,
        alpha: 0,
        duration: 300,
        onComplete: () => {
          thinkingContainer.destroy();
          onComplete();
        }
      });
    });
  }
  
  private showGameOverScreen(): void {
    const state = gameState.getState();
    
    // Check win condition
    const [hasWinner, winnerSymbol, pattern] = this.board.checkWinCondition();
    
    // Get title text
    let titleText = 'Game Over!';
    let titleColor = '#ffffff';
    
    if (hasWinner) {
      const winner = state.players.find(p => p.symbol === winnerSymbol);
      
      if (winner) {
        if (winner.type === 'human') {
          titleText = 'You Win!';
          titleColor = '#4CAF50'; // Green
          this.playSound(AUDIO_KEYS.VOICE.YOU_WIN);
        } else {
          titleText = 'You Lose!';
          titleColor = '#F44336'; // Red
          this.playSound(AUDIO_KEYS.VOICE.YOU_LOSE);
        }
        
        // Show win line
        this.board.showWinLine(pattern);
      }
    } else {
      titleText = 'It\'s a Draw!';
      titleColor = '#FFC107'; // Yellow
      this.playSound(AUDIO_KEYS.VOICE.DRAW);
    }
    
    // Update title text
    const title = this.gameOverContainer.getByName('title') as Phaser.GameObjects.Text;
    title.setText(titleText);
    title.setColor(titleColor);
    
    // Show game over container
    this.gameOverContainer.setVisible(true);
    this.gameOverContainer.setScale(0.8);
    this.gameOverContainer.setAlpha(0);
    
    this.tweens.add({
      targets: this.gameOverContainer,
      scale: 1,
      alpha: 1,
      duration: 500,
      ease: 'Back.out'
    });
  }
  
  private restartGame(): void {
    // Restart with the same players
    const state = gameState.getState();
    gameState.resetState();
    gameState.startGame(state.players);
    
    // Reset board
    this.board.resetBoard();
    
    // Hide game over screen
    this.gameOverContainer.setVisible(false);
    
    // Update UI
    this.updateUI();
    
    // Play game start sound
    this.playSound(AUDIO_KEYS.VOICE.GAME_START);
    
    // If the first player is AI, trigger its move after a delay
    const currentPlayer = gameState.getState().currentPlayer;
    if (currentPlayer.type === 'ai') {
      this.time.delayedCall(1000, () => this.handleAITurn());
    }
  }
  
  update(): void {
    // Check for mini-game completion
    const state = gameState.getState();
    
    // If the current player is AI and it's their turn, trigger AI move
    if (state.gameStatus === 'playing' && state.currentPlayer.type === 'ai') {
      this.handleAITurn();
    }
  }
}