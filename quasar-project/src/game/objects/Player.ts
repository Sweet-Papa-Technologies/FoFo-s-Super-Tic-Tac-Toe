import { v4 as uuidv4 } from 'uuid';
import { IPlayer } from '../interfaces/IPlayer';
import { AIDifficulty, BoardState } from '../interfaces/IGameState';
import { MINI_GAMES } from '../utils/constants';

export class Player implements IPlayer {
  id: string;
  type: 'human' | 'ai';
  symbol: 'X' | 'O';
  color: number;
  score: number;
  aiDifficulty?: AIDifficulty;
  
  constructor(type: 'human' | 'ai', symbol: 'X' | 'O', color: number, aiDifficulty?: AIDifficulty) {
    this.id = uuidv4();
    this.type = type;
    this.symbol = symbol;
    this.color = color;
    this.score = 0;
    this.aiDifficulty = aiDifficulty;
  }
  
  selectSquare(board: BoardState): number {
    // Human players select squares via UI interaction
    // This method is primarily used for AI logic
    if (this.type === 'human') {
      return -1; // UI will override this
    }
    
    // For AI players, apply strategy based on difficulty
    return this.getAIMove(board);
  }
  
  selectMiniGame(): string {
    // Human players select mini-games via UI
    if (this.type === 'human') {
      return ''; // UI will override this
    }
    
    // AI randomly selects a mini-game
    const miniGames = [
      MINI_GAMES.REACTION,
      MINI_GAMES.MEMORY,
      MINI_GAMES.RUNNER,
      MINI_GAMES.MATH,
      MINI_GAMES.SHOOTER
    ];
    
    return miniGames[Math.floor(Math.random() * miniGames.length)];
  }
  
  private getAIMove(board: BoardState): number {
    if (!this.aiDifficulty) {
      return this.getRandomEmptySquare(board);
    }
    
    // Based on difficulty, either make strategic or random moves
    const makeRandomMove = this.aiDifficulty === AIDifficulty.Easy ? 
      Math.random() < 0.4 : 
      (this.aiDifficulty === AIDifficulty.Medium ? Math.random() < 0.2 : Math.random() < 0.05);
      
    if (makeRandomMove) {
      return this.getRandomEmptySquare(board);
    }
    
    // Try to win
    const winningMove = this.findWinningMove(board, this.symbol);
    if (winningMove !== -1) return winningMove;
    
    // Try to block opponent
    const opponentSymbol = this.symbol === 'X' ? 'O' : 'X';
    const blockingMove = this.findWinningMove(board, opponentSymbol);
    if (blockingMove !== -1) return blockingMove;
    
    // Take center if available
    if (board[4] === null) return 4;
    
    // Take corner
    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter(i => board[i] === null);
    if (availableCorners.length > 0) {
      return availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }
    
    // Fall back to random move
    return this.getRandomEmptySquare(board);
  }
  
  private getRandomEmptySquare(board: BoardState): number {
    const emptySquares = board.map((square, index) => (square === null ? index : -1)).filter(index => index !== -1);
    
    if (emptySquares.length === 0) {
      return -1; // No empty squares
    }
    
    return emptySquares[Math.floor(Math.random() * emptySquares.length)];
  }
  
  private findWinningMove(board: BoardState, symbol: 'X' | 'O'): number {
    // Check rows
    for (let row = 0; row < 3; row++) {
      const result = this.checkLine(board, row * 3, row * 3 + 1, row * 3 + 2, symbol);
      if (result !== -1) return result;
    }
    
    // Check columns
    for (let col = 0; col < 3; col++) {
      const result = this.checkLine(board, col, col + 3, col + 6, symbol);
      if (result !== -1) return result;
    }
    
    // Check diagonals
    const diag1 = this.checkLine(board, 0, 4, 8, symbol);
    if (diag1 !== -1) return diag1;
    
    const diag2 = this.checkLine(board, 2, 4, 6, symbol);
    if (diag2 !== -1) return diag2;
    
    return -1; // No winning move found
  }
  
  private checkLine(board: BoardState, a: number, b: number, c: number, symbol: 'X' | 'O'): number {
    // If two of three squares have the symbol and the third is empty, return the empty square
    if (board[a] === symbol && board[b] === symbol && board[c] === null) return c;
    if (board[a] === symbol && board[c] === symbol && board[b] === null) return b;
    if (board[b] === symbol && board[c] === symbol && board[a] === null) return a;
    
    return -1; // No winning move in this line
  }
}
