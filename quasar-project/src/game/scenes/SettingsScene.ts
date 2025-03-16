import BaseScene from './BaseScene';
import { SCENE_KEYS } from '../utils/constants';
import { storageService } from '../../services/storage';

export default class SettingsScene extends BaseScene {
  private settingsContainer!: Phaser.GameObjects.Container;
  
  constructor() {
    super(SCENE_KEYS.SETTINGS);
  }
  
  create(): void {
    super.create();
    
    // Add background
    this.add.image(0, 0, 'settings-bg')
      .setOrigin(0, 0)
      .setDisplaySize(this.cameras.main.width, this.cameras.main.height);
    
    // Create settings container
    this.createSettingsPanel();
    
    // Initialize scene with fade-in
    this.initScene();
  }
  
  private createSettingsPanel(): void {
    // Get current settings
    const data = storageService.getGameData();
    const settings = data.settings;
    
    // Create panel
    this.settingsContainer = this.add.container(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );
    
    const panel = this.createPanel(0, 0, 500, 400);
    this.settingsContainer.add(panel);
    
    // Title
    const title = this.add.text(0, -150, 'Settings', {
      fontSize: '36px',
      color: '#ffffff',
      fontStyle: 'bold'
    });
    title.setOrigin(0.5);
    this.settingsContainer.add(title);
    
    // Sound toggle
    const soundToggle = this.createToggle(
      0, -70,
      settings.soundEnabled,
      (value) => {
        this.isSoundEnabled = value;
        storageService.updateSettings({ soundEnabled: value });
      },
      'Sound Effects:'
    );
    
    // Music toggle
    const musicToggle = this.createToggle(
      0, -10,
      settings.musicEnabled,
      (value) => {
        this.isMusicEnabled = value;
        storageService.updateSettings({ musicEnabled: value });
        
        // Update music immediately
        if (value && !this.currentMusic?.isPlaying) {
          this.playMusic('main-theme');
        } else if (!value && this.currentMusic?.isPlaying) {
          this.stopMusic();
        }
      },
      'Background Music:'
    );
    
    // Reset data button
    const resetBtn = this.createButton(
      0, 60,
      'Reset Statistics',
      () => this.confirmResetStats()
    );
    
    // Back button
    const backBtn = this.createButton(
      0, 130,
      'Back to Menu',
      () => this.transitionToScene(SCENE_KEYS.MAIN_MENU)
    );
    
    // Add all elements to container
    this.settingsContainer.add([
      soundToggle,
      musicToggle,
      resetBtn,
      backBtn
    ]);
    
    // Animation
    this.settingsContainer.setAlpha(0);
    this.tweens.add({
      targets: this.settingsContainer,
      alpha: 1,
      duration: 500,
      ease: 'Power2'
    });
  }
  
  private confirmResetStats(): void {
    // Create confirmation dialog
    const dialogContainer = this.add.container(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );
    
    // Add background panel
    const panel = this.createPanel(0, 0, 400, 200, 0x000000, 0.9);
    dialogContainer.add(panel);
    
    // Confirmation text
    const confirmText = this.add.text(0, -50, 'Reset all game statistics?', {
      fontSize: '24px',
      color: '#ffffff',
      align: 'center'
    });
    confirmText.setOrigin(0.5);
    
    const warningText = this.add.text(0, -10, 'This cannot be undone!', {
      fontSize: '18px',
      color: '#ff6666',
      align: 'center'
    });
    warningText.setOrigin(0.5);
    
    // Yes button
    const yesBtn = this.createButton(
      -70, 50,
      'Yes',
      () => {
        storageService.resetStatistics();
        dialogContainer.destroy();
        
        // Show confirmation
        this.showToast('Statistics have been reset!');
      }
    );
    
    // No button
    const noBtn = this.createButton(
      70, 50,
      'No',
      () => dialogContainer.destroy()
    );
    
    dialogContainer.add([confirmText, warningText, yesBtn, noBtn]);
    
    // Animation
    dialogContainer.setScale(0.8);
    this.tweens.add({
      targets: dialogContainer,
      scale: 1,
      duration: 200,
      ease: 'Back.out'
    });
  }
  
  private showToast(message: string, duration: number = 2000): void {
    // Create toast container
    const toast = this.add.container(
      this.cameras.main.centerX,
      this.cameras.main.centerY - 100
    );
    
    // Background
    const bg = this.add.rectangle(0, 0, 400, 60, 0x333333, 0.9);
    bg.setStrokeStyle(2, 0xffffff);
    
    // Message
    const text = this.add.text(0, 0, message, {
      fontSize: '20px',
      color: '#ffffff'
    });
    text.setOrigin(0.5);
    
    toast.add([bg, text]);
    
    // Animation
    toast.setAlpha(0);
    this.tweens.add({
      targets: toast,
      alpha: 1,
      y: this.cameras.main.centerY - 150,
      duration: 300,
      ease: 'Power2',
      onComplete: () => {
        this.time.delayedCall(duration, () => {
          this.tweens.add({
            targets: toast,
            alpha: 0,
            y: this.cameras.main.centerY - 200,
            duration: 300,
            ease: 'Power2',
            onComplete: () => toast.destroy()
          });
        });
      }
    });
  }
}