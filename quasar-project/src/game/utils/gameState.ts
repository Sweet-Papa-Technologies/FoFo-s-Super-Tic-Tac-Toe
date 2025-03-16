import { IGameState, AIDifficulty, GameStatus } from '../interfaces/IGameState';
import { Player } from '../objects/Player';

// Initial/default game state
const createDefaultState = (): IGameState => {
  const defaultState: IGameState = {
    board: Array(9).fill(null),
    currentPlayer: null as unknown as Player, // Will be set during game initialization
    players: [],
    currentMiniGame: null,
    selectedSquare: null,
    gameStatus: 'menu',
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

  return defaultState;
};

// Singleton instance for game state management
class GameStateManager {
  private state: IGameState = createDefaultState();
  private listeners: ((state: IGameState) => void)[] = [];

  // Get current state (read-only)
  getState(): IGameState {
    return { ...this.state };
  }

  // Update state (partial update)
  updateState(updates: Partial<IGameState>): void {
    this.state = { ...this.state, ...updates };
    this.notifyListeners();
  }

  // Reset state to default
  resetState(): void {
    this.state = createDefaultState();
    this.notifyListeners();
  }

  // Start a new game
  startGame(players: Player[]): void {
    const updatedState = createDefaultState();
    updatedState.players = players;
    updatedState.currentPlayer = players[0];
    updatedState.gameStatus = 'playing';
    updatedState.statistics.gamesPlayed++;

    // Update stats for AI difficulty if playing against AI
    const aiPlayer = players.find(p => p.type === 'ai');
    if (aiPlayer && aiPlayer.aiDifficulty) {
      updatedState.statistics.byDifficulty[aiPlayer.aiDifficulty].played++;
    }

    this.state = updatedState;
    this.notifyListeners();
  }

  // Update board state with player move
  makeMove(squareIndex: number, symbol: 'X' | 'O'): void {
    if (squareIndex < 0 || squareIndex >= 9 || this.state.board[squareIndex] !== null) {
      return; // Invalid move
    }

    const newBoard = [...this.state.board];
    newBoard[squareIndex] = symbol;

    this.updateState({
      board: newBoard,
      selectedSquare: null
    });
  }

  // Switch to next player
  switchPlayer(): void {
    const currentIndex = this.state.players.findIndex(p => p.id === this.state.currentPlayer.id);
    const nextIndex = (currentIndex + 1) % this.state.players.length;
    
    this.updateState({
      currentPlayer: this.state.players[nextIndex]
    });
  }

  // Set game as over
  setGameOver(winnerSymbol: 'X' | 'O' | null): void {
    const updatedState = { ...this.state };
    updatedState.gameStatus = 'game-over';

    if (winnerSymbol === null) {
      // It's a draw
      updatedState.statistics.gamesTied++;
    } else {
      // Someone won
      const winner = this.state.players.find(p => p.symbol === winnerSymbol);
      const humanPlayer = this.state.players.find(p => p.type === 'human');

      if (winner && humanPlayer) {
        if (winner.type === 'human') {
          updatedState.statistics.gamesWon++;
          // Update win stats for AI difficulty
          const aiPlayer = this.state.players.find(p => p.type === 'ai');
          if (aiPlayer && aiPlayer.aiDifficulty) {
            updatedState.statistics.byDifficulty[aiPlayer.aiDifficulty].won++;
          }
        } else {
          updatedState.statistics.gamesLost++;
        }
      }
    }

    this.state = updatedState;
    this.notifyListeners();
  }

  // Start a mini-game
  startMiniGame(gameType: string, squareIndex: number): void {
    this.updateState({
      currentMiniGame: gameType,
      selectedSquare: squareIndex,
      gameStatus: 'mini-game'
    });
  }

  // End a mini-game with result
  endMiniGame(winner: Player | null): void {
    const updatedState = { ...this.state };
    
    // Update mini-game statistics
    if (this.state.currentMiniGame) {
      updatedState.statistics.miniGameStats[this.state.currentMiniGame].played++;
      
      if (winner && winner.type === 'human') {
        updatedState.statistics.miniGameStats[this.state.currentMiniGame].won++;
      }
    }

    // Place marker on board if there's a winner
    if (winner && this.state.selectedSquare !== null) {
      const newBoard = [...this.state.board];
      newBoard[this.state.selectedSquare] = winner.symbol;
      updatedState.board = newBoard;
    }

    // Reset mini-game state
    updatedState.currentMiniGame = null;
    updatedState.gameStatus = 'playing';

    // Switch to next player
    const currentIndex = this.state.players.findIndex(p => p.id === this.state.currentPlayer.id);
    const nextIndex = (currentIndex + 1) % this.state.players.length;
    updatedState.currentPlayer = this.state.players[nextIndex];

    this.state = updatedState;
    this.notifyListeners();
  }

  // Update game settings
  updateSettings(settings: Partial<IGameState['settings']>): void {
    this.updateState({
      settings: { ...this.state.settings, ...settings }
    });
  }

  // Subscribe to state changes
  subscribe(listener: (state: IGameState) => void): () => void {
    this.listeners.push(listener);
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  // Notify all listeners of state change
  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.getState()));
  }
}

// Export singleton instance
export const gameState = new GameStateManager();
