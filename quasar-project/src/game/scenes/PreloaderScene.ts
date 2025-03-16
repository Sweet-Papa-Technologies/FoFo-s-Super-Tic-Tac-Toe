import BaseScene from './BaseScene';
import { SCENE_KEYS } from '../utils/constants';
import { AssetLoader } from '../utils/assetLoader';

export default class PreloaderScene extends BaseScene {
  private loader: AssetLoader;
  private progressBar!: Phaser.GameObjects.Graphics;
  private progressBox!: Phaser.GameObjects.Graphics;
  private loadingText!: Phaser.GameObjects.Text;
  private percentText!: Phaser.GameObjects.Text;
  private assetText!: Phaser.GameObjects.Text;
  
  constructor() {
    super(SCENE_KEYS.PRELOADER);
    this.loader = new AssetLoader(this);
  }
  
  preload(): void {
    this.createProgressBar();
    
    // Load minimal assets needed for loading screen
    this.load.image('game-logo', 'assets/images/logo/game-logo.png');
    
    // Setup loading event handlers
    this.load.on('progress', this.updateProgressBar, this);
    this.load.on('fileprogress', this.updateFileProgress, this);
    this.load.on('complete', this.loadComplete, this);
    
    // Load all game assets
    this.loader.loadAll();
  }
  
  create(): void {
    super.create();
    
    // Create loading animations
    this.createLoadingAnimations();
    
    // When loading is complete, transition to main menu after a short delay
    this.time.delayedCall(1000, () => {
      this.transitionToScene(SCENE_KEYS.MAIN_MENU);
    });
  }
  
  private createProgressBar(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    
    // Progress bar container
    this.progressBox = this.add.graphics();
    this.progressBox.fillStyle(0x222222, 0.8);
    this.progressBox.fillRect(width / 2 - 160, height / 2 - 30, 320, 50);
    
    // Progress bar
    this.progressBar = this.add.graphics();
    
    // Loading text
    this.loadingText = this.add.text(width / 2, height / 2 - 50, 'Loading...', { 
      font: '20px Arial',
      color: '#ffffff'
    });
    this.loadingText.setOrigin(0.5);
    
    // Percentage text
    this.percentText = this.add.text(width / 2, height / 2 + 70, '0%', { 
      font: '18px Arial',
      color: '#ffffff'
    });
    this.percentText.setOrigin(0.5);
    
    // Asset text
    this.assetText = this.add.text(width / 2, height / 2 + 100, '', { 
      font: '16px Arial',
      color: '#ffffff'
    });
    this.assetText.setOrigin(0.5);
  }
  
  private updateProgressBar(value: number): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    
    // Clear previous progress
    this.progressBar.clear();
    
    // Draw new progress
    this.progressBar.fillStyle(0xffffff, 1);
    this.progressBar.fillRect(width / 2 - 150, height / 2 - 20, 300 * value, 30);
    
    // Update percentage text
    this.percentText.setText(`${Math.floor(value * 100)}%`);
  }
  
  private updateFileProgress(file: { key: string }): void {
    // Update asset text
    this.assetText.setText(`Loading asset: ${file.key}`);
  }
  
  private loadComplete(): void {
    // Clear progress events
    this.load.off('progress', this.updateProgressBar);
    this.load.off('fileprogress', this.updateFileProgress);
    this.load.off('complete', this.loadComplete);
    
    // Update loading text
    this.loadingText.setText('Load Complete!');
    this.assetText.setText('Starting game...');
  }
  
  private createLoadingAnimations(): void {
    // Create any animations based on loaded spritesheets
    
    // X marker animation
    this.anims.create({
      key: 'x-place',
      frames: this.anims.generateFrameNumbers('x-marker', { start: 0, end: 5 }),
      frameRate: 12,
      repeat: 0
    });
    
    // O marker animation
    this.anims.create({
      key: 'o-place',
      frames: this.anims.generateFrameNumbers('o-marker', { start: 0, end: 5 }),
      frameRate: 12,
      repeat: 0
    });
    
    // Loading spinner animation
    this.anims.create({
      key: 'spinner',
      frames: this.anims.generateFrameNumbers('loading-spinner', { start: 0, end: 7 }),
      frameRate: 12,
      repeat: -1
    });
    
    // Memory card flip animation
    this.anims.create({
      key: 'card-flip',
      frames: this.anims.generateFrameNumbers('memory-symbols', { start: 0, end: 3 }),
      frameRate: 12,
      repeat: 0
    });
    
    // Runner character animations
    this.anims.create({
      key: 'x-run',
      frames: this.anims.generateFrameNumbers('runner-char-x', { start: 0, end: 5 }),
      frameRate: 12,
      repeat: -1
    });
    
    this.anims.create({
      key: 'o-run',
      frames: this.anims.generateFrameNumbers('runner-char-o', { start: 0, end: 5 }),
      frameRate: 12,
      repeat: -1
    });
    
    // Target shooter animations
    this.anims.create({
      key: 'target-appear',
      frames: this.anims.generateFrameNumbers('shooter-target', { start: 0, end: 3 }),
      frameRate: 12,
      repeat: 0
    });
    
    this.anims.create({
      key: 'target-hit',
      frames: this.anims.generateFrameNumbers('shooter-target', { start: 4, end: 7 }),
      frameRate: 16,
      repeat: 0
    });
  }
}