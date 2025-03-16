import { AIDifficulty, GameSettings, GameStatistics } from '../game/interfaces/IGameState';

export interface GameStorageData {
  settings: GameSettings;
  statistics: GameStatistics;
}

export class StorageService {
  private readonly STORAGE_KEY = 'fofo_super_tic_tac_toe_data';
  
  constructor() {}
  
  getGameData(): GameStorageData {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    if (!storedData) return this.getDefaultGameData();
    
    try {
      return JSON.parse(storedData) as GameStorageData;
    } catch (e) {
      console.error('Failed to parse stored game data', e);
      return this.getDefaultGameData();
    }
  }
  
  saveGameData(data: GameStorageData): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save game data', e);
    }
  }
  
  updateSettings(settings: Partial<GameSettings>): void {
    const data = this.getGameData();
    data.settings = { ...data.settings, ...settings };
    this.saveGameData(data);
  }
  
  updateStatistics(statistics: Partial<GameStatistics>): void {
    const data = this.getGameData();
    data.statistics = { ...data.statistics, ...statistics };
    this.saveGameData(data);
  }
  
  resetStatistics(): void {
    const data = this.getGameData();
    data.statistics = this.getDefaultGameData().statistics;
    this.saveGameData(data);
  }
  
  clearAllData(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
  
  private getDefaultGameData(): GameStorageData {
    return {
      settings: {
        aiDifficulty: AIDifficulty.Medium,
        soundEnabled: true,
        musicEnabled: true
      },
      statistics: {
        gamesPlayed: 0,
        gamesWon: 0,
        gamesLost: 0,
        gamesTied: 0,
        byDifficulty: {
          [AIDifficulty.Easy]: { played: 0, won: 0 },
          [AIDifficulty.Medium]: { played: 0, won: 0 },
          [AIDifficulty.Hard]: { played: 0, won: 0 }
        },
        miniGameStats: {
          'reaction': { played: 0, won: 0 },
          'memory': { played: 0, won: 0 },
          'speed-runner': { played: 0, won: 0 },
          'quick-math': { played: 0, won: 0 },
          'target-shooter': { played: 0, won: 0 }
        }
      }
    };
  }
}

// Export a singleton instance
export const storageService = new StorageService();