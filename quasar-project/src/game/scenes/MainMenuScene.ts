import BaseScene from './BaseScene';
import { SCENE_KEYS, AUDIO_KEYS, PLAYER_COLORS } from '../utils/constants';
import { AIDifficulty } from '../interfaces/IGameState';
import { Player } from '../objects/Player';
import { gameState } from '../utils/gameState';
import { storageService } from '../../services/storage';

export default class MainMenuScene extends BaseScene {
  private logo!: Phaser.GameObjects.Image;
  private menuContainer!: Phaser.GameObjects.Container;
  private difficultyText!: Phaser.GameObjects.Text;
  private currentDifficulty: AIDifficulty = AIDifficulty.Medium;
  
  constructor() {
    super(SCENE_KEYS.MAIN_MENU);
  }
  
  create(): void {
    super.create();
    
    // Load stored settings
    const data = storageService.getGameData();
    this.currentDifficulty = data.settings.aiDifficulty;
    
    // Start background music
    this.playMusic(AUDIO_KEYS.MUSIC.MAIN_THEME);
    
    // Add background
    this.add.image(0, 0, 'main-menu-bg')
      .setOrigin(0, 0)
      .setDisplaySize(this.cameras.main.width, this.cameras.main.height);
    
    // Add logo
    this.logo = this.add.image(
      this.cameras.main.centerX, 
      this.cameras.main.height * 0.2, 
      'game-logo'
    );
    this.logo.setOrigin(0.5);
    
    // Add menu container
    this.createMenu();
    
    // Initialize scene with fade-in
    this.initScene();
  }
  
  private createMenu(): void {
    this.menuContainer = this.add.container(
      this.cameras.main.centerX,
      this.cameras.main.centerY + 50
    );
    
    // Create main menu panel
    const panel = this.createPanel(0, 0, 400, 350);
    this.menuContainer.add(panel);
    
    // Single player button
    const singlePlayerBtn = this.createButton(
      0, -100, 
      'Single Player', 
      () => this.startSinglePlayerGame(),
      { fontSize: '28px' }
    );
    
    // Difficulty selection
    const difficultyLabel = this.add.text(-120, -40, 'AI Difficulty:', {
      fontSize: '22px',
      color: '#ffffff'
    });
    difficultyLabel.setOrigin(0, 0.5);
    
    this.difficultyText = this.add.text(120, -40, this.getDifficultyText(), {
      fontSize: '22px',
      color: this.getDifficultyColor(),
      fontStyle: 'bold'
    });
    this.difficultyText.setOrigin(1, 0.5);
    
    const decreaseDiffBtn = this.createButton(-70, -40, '<', () => this.decreaseDifficulty());
    const increaseDiffBtn = this.createButton(70, -40, '>', () => this.increaseDifficulty());
    
    // Settings button
    const settingsBtn = this.createButton(0, 20, 'Settings', () => this.goToSettings());
    
    // High scores button
    const highScoresBtn = this.createButton(0, 80, 'High Scores', () => this.goToHighScores());
    
    // Add buttons to container
    this.menuContainer.add([
      singlePlayerBtn,
      difficultyLabel,
      this.difficultyText,
      decreaseDiffBtn,
      increaseDiffBtn,
      settingsBtn,
      highScoresBtn
    ]);
    
    // Animate menu appearance
    this.menuContainer.setAlpha(0);
    this.tweens.add({
      targets: this.menuContainer,
      alpha: 1,
      duration: 500,
      delay: 300,
      ease: 'Power2'
    });
  }
  
  private decreaseDifficulty(): void {
    switch (this.currentDifficulty) {
      case AIDifficulty.Medium:
        this.currentDifficulty = AIDifficulty.Easy;
        break;
      case AIDifficulty.Hard:
        this.currentDifficulty = AIDifficulty.Medium;
        break;
    }
    
    this.updateDifficultyText();
    this.saveDifficultySetting();
  }
  
  private increaseDifficulty(): void {
    switch (this.currentDifficulty) {
      case AIDifficulty.Easy:
        this.currentDifficulty = AIDifficulty.Medium;
        break;
      case AIDifficulty.Medium:
        this.currentDifficulty = AIDifficulty.Hard;
        break;
    }
    
    this.updateDifficultyText();
    this.saveDifficultySetting();
  }
  
  private updateDifficultyText(): void {
    this.difficultyText.setText(this.getDifficultyText());
    this.difficultyText.setColor(this.getDifficultyColor());
  }
  
  private getDifficultyText(): string {
    switch (this.currentDifficulty) {
      case AIDifficulty.Easy:
        return 'Easy';
      case AIDifficulty.Medium:
        return 'Medium';
      case AIDifficulty.Hard:
        return 'Hard';
      default:
        return 'Medium';
    }
  }
  
  private getDifficultyColor(): string {
    switch (this.currentDifficulty) {
      case AIDifficulty.Easy:
        return '#2ecc71'; // Green
      case AIDifficulty.Medium:
        return '#f39c12'; // Orange
      case AIDifficulty.Hard:
        return '#e74c3c'; // Red
      default:
        return '#f39c12';
    }
  }
  
  private saveDifficultySetting(): void {
    storageService.updateSettings({
      aiDifficulty: this.currentDifficulty
    });
  }
  
  private startSinglePlayerGame(): void {
    // Create players
    const humanPlayer = new Player('human', 'X', PLAYER_COLORS.X);
    const aiPlayer = new Player('ai', 'O', PLAYER_COLORS.O, this.currentDifficulty);
    
    // Initialize game state
    gameState.startGame([humanPlayer, aiPlayer]);
    
    // Transition to the board scene
    this.transitionToScene(SCENE_KEYS.BOARD);
  }
  
  private goToSettings(): void {
    this.transitionToScene(SCENE_KEYS.SETTINGS);
  }
  
  private goToHighScores(): void {
    this.transitionToScene(SCENE_KEYS.HIGH_SCORE);
  }
}