import { Player } from '../objects/Player';

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

export interface GameStatistics {
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
}
