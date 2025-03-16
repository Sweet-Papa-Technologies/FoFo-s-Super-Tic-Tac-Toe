import { AIDifficulty, BoardState } from './IGameState';

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
