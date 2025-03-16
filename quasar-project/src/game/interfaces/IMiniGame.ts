import { Player } from '../objects/Player';
import { AIDifficulty } from './IGameState';

export interface IMiniGameConfig {
  players: Player[];
  duration?: number;
  difficulty?: AIDifficulty;
  seed?: number; // For reproducible randomness
}

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
