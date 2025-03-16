import { AIDifficulty } from '../interfaces/IGameState';

export class AI {
  private difficulty: AIDifficulty;
  
  constructor(difficulty: AIDifficulty = AIDifficulty.Medium) {
    this.difficulty = difficulty;
  }
  
  setDifficulty(difficulty: AIDifficulty): void {
    this.difficulty = difficulty;
  }
  
  getDifficulty(): AIDifficulty {
    return this.difficulty;
  }
  
  // Mini-game specific AI behaviors
  
  // Reaction Challenge AI
  getReactionTime(): number {
    // Base perfect time (ms)
    const perfectTime = 1000;
    
    // Add error based on difficulty
    let error;
    switch (this.difficulty) {
      case AIDifficulty.Easy:
        error = Math.random() * 300 - 150; // -150 to 150ms error
        break;
      case AIDifficulty.Medium:
        error = Math.random() * 200 - 100; // -100 to 100ms error
        break;
      case AIDifficulty.Hard:
        error = Math.random() * 100 - 30; // -30 to 70ms error
        break;
      default:
        error = 0;
    }
    
    return perfectTime + error;
  }
  
  // Memory Match AI
  calculateMemoryAccuracy(): number {
    // Return the chance that AI will remember a card
    switch (this.difficulty) {
      case AIDifficulty.Easy:
        return 0.5; // 50% chance to remember
      case AIDifficulty.Medium:
        return 0.75; // 75% chance to remember
      case AIDifficulty.Hard:
        return 0.9; // 90% chance to remember
      default:
        return 0.5;
    }
  }
  
  // Speed Runner AI
  getRunnerSpeed(): number {
    // Speed multiplier
    switch (this.difficulty) {
      case AIDifficulty.Easy:
        return 0.8; // 80% of max speed
      case AIDifficulty.Medium:
        return 0.9; // 90% of max speed
      case AIDifficulty.Hard:
        return 1.0; // 100% of max speed
      default:
        return 0.8;
    }
  }
  
  getJumpTiming(): number {
    // Return jump timing error (lower is better)
    switch (this.difficulty) {
      case AIDifficulty.Easy:
        return Math.random() * 0.4 - 0.2; // -0.2 to 0.2 seconds error
      case AIDifficulty.Medium:
        return Math.random() * 0.2 - 0.1; // -0.1 to 0.1 seconds error
      case AIDifficulty.Hard:
        return Math.random() * 0.1 - 0.05; // -0.05 to 0.05 seconds error
      default:
        return 0;
    }
  }
  
  // Quick Math AI
  getMathAnswerDelay(): number {
    // Time in ms for AI to answer
    switch (this.difficulty) {
      case AIDifficulty.Easy:
        return 1500 + Math.random() * 1000; // 1.5-2.5 seconds
      case AIDifficulty.Medium:
        return 800 + Math.random() * 700; // 0.8-1.5 seconds
      case AIDifficulty.Hard:
        return 300 + Math.random() * 300; // 0.3-0.6 seconds
      default:
        return 1000;
    }
  }
  
  getMathAccuracy(): number {
    // Chance that AI will answer correctly
    switch (this.difficulty) {
      case AIDifficulty.Easy:
        return 0.7; // 70% correct
      case AIDifficulty.Medium:
        return 0.85; // 85% correct
      case AIDifficulty.Hard:
        return 0.95; // 95% correct
      default:
        return 0.7;
    }
  }
  
  // Target Shooter AI
  getTargetAccuracy(): number {
    // Chance of hitting a target
    switch (this.difficulty) {
      case AIDifficulty.Easy:
        return 0.5; // 50% accuracy
      case AIDifficulty.Medium:
        return 0.75; // 75% accuracy
      case AIDifficulty.Hard:
        return 0.9; // 90% accuracy
      default:
        return 0.5;
    }
  }
  
  getTargetReactionTime(): number {
    // Time in ms for AI to react to a target
    switch (this.difficulty) {
      case AIDifficulty.Easy:
        return 600 + Math.random() * 400; // 0.6-1.0 seconds
      case AIDifficulty.Medium:
        return 400 + Math.random() * 300; // 0.4-0.7 seconds
      case AIDifficulty.Hard:
        return 200 + Math.random() * 200; // 0.2-0.4 seconds
      default:
        return 500;
    }
  }
}
