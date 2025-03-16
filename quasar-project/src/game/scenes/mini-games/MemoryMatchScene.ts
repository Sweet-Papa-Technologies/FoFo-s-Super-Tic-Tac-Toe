import BaseScene from '../BaseScene';
import { SCENE_KEYS } from '../../utils/constants';
import { IMiniGame, IMiniGameConfig } from '../../interfaces/IMiniGame';
import { Player } from '../../objects/Player';
import { AIDifficulty } from '../../interfaces/IGameState';
import { gameState } from '../../utils/gameState';

export default class MemoryMatchScene extends BaseScene implements IMiniGame {
  private players: Player[] = [];
  private running: boolean = false;
  private winCallback: ((winner: Player) => void) | null = null;
  private drawCallback: (() => void) | null = null;
  private aiDifficulty: AIDifficulty = AIDifficulty.Medium;
  private squareIndex: number = -1;
  private duration: number = 30000;
  
  constructor() {
    super(SCENE_KEYS.MINI_GAMES.MEMORY);
  }
  
  init(data: { squareIndex: number }): void {
    // Store square index from board scene
    this.squareIndex = data.squareIndex;
  }
  
  create(): void {
    super.create();
    
    // Add background
    this.add.image(0, 0, 'memory-bg')
      .setOrigin(0, 0)
      .setDisplaySize(this.cameras.main.width, this.cameras.main.height);
    
    // Initialize from game state
    const state = gameState.getState();
    this.initialize({
      players: state.players,
      difficulty: state.settings.aiDifficulty,
      duration: 30000
    });
    
    // Placeholder - Memory matching game implementation to be added later
    
    // Show placeholder message
    const placeholderText = this.add.text(
      this.cameras.main.centerX, 
      this.cameras.main.centerY,
      'Memory Match Mini-Game\nTo be implemented',
      { fontSize: '32px', color: '#ffffff', align: 'center' }
    );
    placeholderText.setOrigin(0.5);
    
    // Add continue button to return to board for now
    const continueBtn = this.createButton(
      this.cameras.main.centerX,
      this.cameras.main.centerY + 100,
      'Continue',
      () => {
        // Determine random winner for now
        const randomIndex = Math.floor(Math.random() * this.players.length);
        const winner = this.players[randomIndex];
        gameState.endMiniGame(winner);
        this.transitionToScene(SCENE_KEYS.BOARD);
      }
    );
  }
  
  // IMiniGame implementation
  initialize(config: IMiniGameConfig): void {
    this.players = config.players;
    this.aiDifficulty = config.difficulty || AIDifficulty.Medium;
    this.duration = config.duration || 30000;
  }
  
  start(): void {
    this.running = true;
  }
  
  end(): void {
    this.running = false;
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
}