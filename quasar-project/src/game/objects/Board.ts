import { BoardState } from '../interfaces/IGameState';
import { BOARD_CONFIG } from '../utils/constants';

export class Board {
  private scene: Phaser.Scene;
  private state: BoardState;
  private squares: Phaser.GameObjects.Rectangle[];
  private markers: Phaser.GameObjects.Sprite[];
  private winLine: Phaser.GameObjects.Image | null = null;
  private gridContainer: Phaser.GameObjects.Container;
  private onSquareSelected: (index: number) => void;
  
  constructor(scene: Phaser.Scene, initialState: BoardState = Array(9).fill(null)) {
    this.scene = scene;
    this.state = [...initialState];
    this.squares = [];
    this.markers = [];
    this.gridContainer = this.scene.add.container(0, 0);
    this.onSquareSelected = () => {}; // Default empty callback
  }
  
  create(x: number, y: number): void {
    // Create background grid
    const boardGrid = this.scene.add.image(x, y, 'board-grid');
    this.gridContainer.add(boardGrid);
    this.gridContainer.setPosition(x, y);
    
    // Calculate positions for squares
    const startX = -BOARD_CONFIG.cellSize - BOARD_CONFIG.padding;
    const startY = -BOARD_CONFIG.cellSize - BOARD_CONFIG.padding;
    
    // Create interactive squares
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const index = row * 3 + col;
        const squareX = startX + (col * (BOARD_CONFIG.cellSize + BOARD_CONFIG.padding));
        const squareY = startY + (row * (BOARD_CONFIG.cellSize + BOARD_CONFIG.padding));
        
        // Create invisible interactive rectangle
        const square = this.scene.add.rectangle(
          squareX + BOARD_CONFIG.cellSize / 2,
          squareY + BOARD_CONFIG.cellSize / 2,
          BOARD_CONFIG.cellSize,
          BOARD_CONFIG.cellSize,
          0xffffff,
          0 // Alpha set to 0 (invisible)
        );
        
        square.setInteractive();
        square.on('pointerdown', () => this.handleSquareClick(index));
        square.on('pointerover', () => this.handleSquareHover(square, index));
        square.on('pointerout', () => this.handleSquareExit(square, index));
        
        this.squares.push(square);
        this.gridContainer.add(square);
        
        // If there's already a marker in the initial state, show it
        if (this.state[index] !== null) {
          this.placeMarker(index, this.state[index] as 'X' | 'O');
        }
      }
    }
  }
  
  setSquareSelectCallback(callback: (index: number) => void): void {
    this.onSquareSelected = callback;
  }
  
  handleSquareClick(index: number): void {
    // Only allow clicking empty squares
    if (this.state[index] === null) {
      this.onSquareSelected(index);
    }
  }
  
  handleSquareHover(square: Phaser.GameObjects.Rectangle, index: number): void {
    // Only highlight empty squares
    if (this.state[index] === null) {
      const highlight = this.scene.add.image(
        square.x,
        square.y,
        'highlight-square'
      );
      highlight.setName(`highlight-${index}`);
      this.gridContainer.add(highlight);
    }
  }
  
  handleSquareExit(square: Phaser.GameObjects.Rectangle, index: number): void {
    // Remove highlight if it exists
    const highlight = this.gridContainer.getByName(`highlight-${index}`);
    if (highlight) {
      highlight.destroy();
    }
  }
  
  placeMarker(index: number, symbol: 'X' | 'O'): void {
    if (index < 0 || index >= 9 || this.state[index] !== null) {
      return; // Invalid move
    }
    
    // Update state
    this.state[index] = symbol;
    
    // Get square position
    const row = Math.floor(index / 3);
    const col = index % 3;
    const startX = -BOARD_CONFIG.cellSize - BOARD_CONFIG.padding;
    const startY = -BOARD_CONFIG.cellSize - BOARD_CONFIG.padding;
    const squareX = startX + (col * (BOARD_CONFIG.cellSize + BOARD_CONFIG.padding)) + BOARD_CONFIG.cellSize / 2;
    const squareY = startY + (row * (BOARD_CONFIG.cellSize + BOARD_CONFIG.padding)) + BOARD_CONFIG.cellSize / 2;
    
    // Create marker sprite
    const marker = this.scene.add.sprite(
      squareX,
      squareY,
      symbol === 'X' ? 'x-marker' : 'o-marker'
    );
    
    // Play placement animation
    marker.setScale(0.1);
    this.scene.tweens.add({
      targets: marker,
      scale: 1,
      duration: 300,
      ease: 'Back.out'
    });
    
    // Play sound
    this.scene.sound.play(symbol === 'X' ? 'x-place' : 'o-place');
    
    // Add to container
    this.gridContainer.add(marker);
    this.markers.push(marker);
    
    // Remove any highlight
    const highlight = this.gridContainer.getByName(`highlight-${index}`);
    if (highlight) {
      highlight.destroy();
    }
  }
  
  getState(): BoardState {
    return [...this.state];
  }
  
  setState(newState: BoardState): void {
    this.resetBoard();
    this.state = [...newState];
    
    // Place markers for the new state
    for (let i = 0; i < this.state.length; i++) {
      if (this.state[i] !== null) {
        this.placeMarker(i, this.state[i] as 'X' | 'O');
      }
    }
  }
  
  resetBoard(): void {
    // Clear state
    this.state = Array(9).fill(null);
    
    // Remove all markers
    this.markers.forEach(marker => marker.destroy());
    this.markers = [];
    
    // Remove win line if present
    if (this.winLine) {
      this.winLine.destroy();
      this.winLine = null;
    }
  }
  
  checkWinCondition(): [boolean, 'X' | 'O' | null, number[]] {
    for (const pattern of BOARD_CONFIG.winPatterns) {
      const [a, b, c] = pattern;
      if (
        this.state[a] !== null &&
        this.state[a] === this.state[b] &&
        this.state[a] === this.state[c]
      ) {
        return [true, this.state[a] as 'X' | 'O', pattern];
      }
    }
    
    return [false, null, []];
  }
  
  isFull(): boolean {
    return this.state.every(square => square !== null);
  }
  
  showWinLine(pattern: number[]): void {
    // Calculate start and end positions of the win line
    const [a, b, c] = pattern;
    
    // Get positions of squares a and c (the ends of the line)
    const posA = this.getSquarePosition(a);
    const posC = this.getSquarePosition(c);
    
    // Calculate center and rotation
    const centerX = (posA.x + posC.x) / 2;
    const centerY = (posA.y + posC.y) / 2;
    const angle = Math.atan2(posC.y - posA.y, posC.x - posA.x);
    const distance = Math.sqrt(Math.pow(posC.x - posA.x, 2) + Math.pow(posC.y - posA.y, 2));
    
    // Create and position win line
    this.winLine = this.scene.add.image(centerX, centerY, 'win-line');
    this.winLine.setOrigin(0.5, 0.5);
    this.winLine.setRotation(angle);
    this.winLine.setScale(distance / this.winLine.width, 1);
    this.winLine.setAlpha(0);
    
    // Animate win line appearance
    this.scene.tweens.add({
      targets: this.winLine,
      alpha: 1,
      duration: 500,
      ease: 'Power2'
    });
    
    this.gridContainer.add(this.winLine);
  }
  
  private getSquarePosition(index: number): { x: number, y: number } {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const startX = -BOARD_CONFIG.cellSize - BOARD_CONFIG.padding;
    const startY = -BOARD_CONFIG.cellSize - BOARD_CONFIG.padding;
    
    const x = startX + (col * (BOARD_CONFIG.cellSize + BOARD_CONFIG.padding)) + BOARD_CONFIG.cellSize / 2;
    const y = startY + (row * (BOARD_CONFIG.cellSize + BOARD_CONFIG.padding)) + BOARD_CONFIG.cellSize / 2;
    
    return { x, y };
  }
}
