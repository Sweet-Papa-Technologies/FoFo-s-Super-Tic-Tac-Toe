import Phaser from 'phaser';
import { AUDIO_KEYS } from '../utils/constants';
import { storageService } from '../../services/storage';

export default class BaseScene extends Phaser.Scene {
  protected isMusicEnabled: boolean = true;
  protected isSoundEnabled: boolean = true;
  protected currentMusic?: Phaser.Sound.BaseSound;
  
  constructor(key: string, config?: Phaser.Types.Scenes.SettingsConfig) {
    super(config ?? { key });
  }
  
  create(): void {
    // Load settings
    const gameData = storageService.getGameData();
    this.isMusicEnabled = gameData.settings.musicEnabled;
    this.isSoundEnabled = gameData.settings.soundEnabled;
  }
  
  /**
   * Plays a sound effect if sound is enabled
   */
  protected playSound(key: string, config?: Phaser.Types.Sound.SoundConfig): Phaser.Sound.BaseSound | null {
    if (!this.isSoundEnabled) return null;
    return this.sound.play(key, config);
  }
  
  /**
   * Plays background music if music is enabled
   */
  protected playMusic(key: string, config?: Phaser.Types.Sound.SoundConfig): Phaser.Sound.BaseSound | null {
    if (!this.isMusicEnabled) return null;
    
    // Stop current music if playing
    if (this.currentMusic && this.currentMusic.isPlaying) {
      this.currentMusic.stop();
    }
    
    const music = this.sound.add(key, { loop: true, volume: 0.5, ...config });
    music.play();
    this.currentMusic = music;
    return music;
  }
  
  /**
   * Stops the current background music
   */
  protected stopMusic(): void {
    if (this.currentMusic && this.currentMusic.isPlaying) {
      this.currentMusic.stop();
    }
  }
  
  /**
   * Creates a button with proper hover and click effects
   */
  protected createButton(
    x: number, 
    y: number, 
    text: string, 
    onClick: () => void, 
    style: Phaser.Types.GameObjects.Text.TextStyle = {}
  ): Phaser.GameObjects.Container {
    const container = this.add.container(x, y);
    
    // Button background
    const bg = this.add.image(0, 0, 'buttons', 0); // Frame 0 for normal state
    
    // Button text
    const textObj = this.add.text(0, 0, text, {
      color: '#ffffff',
      fontSize: '24px',
      fontFamily: 'Arial',
      ...style
    });
    textObj.setOrigin(0.5);
    
    container.add([bg, textObj]);
    
    // Make interactive
    bg.setInteractive({ useHandCursor: true });
    
    // Events
    bg.on('pointerover', () => {
      bg.setFrame(1); // Frame 1 for hover state
      this.playSound(AUDIO_KEYS.UI.BUTTON_HOVER);
    });
    
    bg.on('pointerout', () => {
      bg.setFrame(0); // Frame 0 for normal state
    });
    
    bg.on('pointerdown', () => {
      bg.setFrame(2); // Frame 2 for pressed state
    });
    
    bg.on('pointerup', () => {
      bg.setFrame(1); // Back to hover state
      this.playSound(AUDIO_KEYS.UI.BUTTON_CLICK);
      onClick();
    });
    
    return container;
  }
  
  /**
   * Creates a toggle switch with proper effects
   */
  protected createToggle(
    x: number, 
    y: number, 
    initialState: boolean, 
    onChange: (value: boolean) => void,
    label?: string
  ): Phaser.GameObjects.Container {
    const container = this.add.container(x, y);
    
    // Create the toggle button
    const toggle = this.add.image(0, 0, initialState ? 'toggle-on' : 'toggle-off');
    toggle.setInteractive({ useHandCursor: true });
    
    // Label if provided
    if (label) {
      const labelText = this.add.text(-toggle.width / 2 - 10, 0, label, {
        color: '#ffffff',
        fontSize: '20px',
        fontFamily: 'Arial'
      });
      labelText.setOrigin(1, 0.5);
      container.add(labelText);
    }
    
    // Add to container
    container.add(toggle);
    
    // Current state
    let isOn = initialState;
    
    // Events
    toggle.on('pointerup', () => {
      isOn = !isOn;
      toggle.setTexture(isOn ? 'toggle-on' : 'toggle-off');
      this.playSound(isOn ? AUDIO_KEYS.UI.TOGGLE_ON : AUDIO_KEYS.UI.TOGGLE_OFF);
      onChange(isOn);
    });
    
    return container;
  }
  
  /**
   * Creates a panel with background
   */
  protected createPanel(
    x: number, 
    y: number, 
    width: number, 
    height: number, 
    color: number = 0x000000, 
    alpha: number = 0.7
  ): Phaser.GameObjects.Container {
    const container = this.add.container(x, y);
    
    // Create panel background
    const bg = this.add.rectangle(0, 0, width, height, color, alpha);
    bg.setOrigin(0.5);
    container.add(bg);
    
    return container;
  }
  
  /**
   * Transitions to another scene with a fade effect
   */
  protected transitionToScene(key: string, data?: object): void {
    this.cameras.main.fadeOut(500);
    this.cameras.main.once('camerafadeoutcomplete', () => {
      this.scene.start(key, data);
    });
  }
  
  /**
   * Handles scene initialization with a fade-in effect
   */
  protected initScene(): void {
    this.cameras.main.fadeIn(500);
  }
}