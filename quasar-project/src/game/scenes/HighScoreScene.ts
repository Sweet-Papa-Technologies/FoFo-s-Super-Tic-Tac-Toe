import BaseScene from './BaseScene';
import { SCENE_KEYS } from '../utils/constants';
import { storageService } from '../../services/storage';
import { AIDifficulty } from '../interfaces/IGameState';

export default class HighScoreScene extends BaseScene {
  private statsContainer!: Phaser.GameObjects.Container;
  
  constructor() {
    super(SCENE_KEYS.HIGH_SCORE);
  }
  
  create(): void {
    super.create();
    
    // Add background
    this.add.image(0, 0, 'high-scores-bg')
      .setOrigin(0, 0)
      .setDisplaySize(this.cameras.main.width, this.cameras.main.height);
    
    // Create high scores/stats panel
    this.createStatsPanel();
    
    // Initialize scene with fade-in
    this.initScene();
  }
  
  private createStatsPanel(): void {
    // Get statistics
    const data = storageService.getGameData();
    const stats = data.statistics;
    
    // Create container
    this.statsContainer = this.add.container(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );
    
    // Add background panel
    const panel = this.createPanel(0, 0, 600, 500);
    this.statsContainer.add(panel);
    
    // Title
    const title = this.add.text(0, -220, 'Statistics', {
      fontSize: '36px',
      color: '#ffffff',
      fontStyle: 'bold'
    });
    title.setOrigin(0.5);
    
    // Overall stats
    const overallTitle = this.add.text(-250, -170, 'Game Stats:', {
      fontSize: '24px',
      color: '#ffffff',
      fontStyle: 'bold'
    });
    overallTitle.setOrigin(0, 0.5);
    
    const gameStats = [
      `Games Played: ${stats.gamesPlayed}`,
      `Games Won: ${stats.gamesWon}`,
      `Games Lost: ${stats.gamesLost}`,
      `Games Tied: ${stats.gamesTied}`,
      `Win Rate: ${stats.gamesPlayed > 0 ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) : 0}%`
    ];
    
    const gameStatsText = this.add.text(-230, -130, gameStats, {
      fontSize: '20px',
      color: '#ffffff',
      lineSpacing: 10
    });
    
    // Difficulty stats
    const difficultyTitle = this.add.text(50, -170, 'By Difficulty:', {
      fontSize: '24px',
      color: '#ffffff',
      fontStyle: 'bold'
    });
    difficultyTitle.setOrigin(0, 0.5);
    
    const easyColor = '#2ecc71'; // Green
    const mediumColor = '#f39c12'; // Orange
    const hardColor = '#e74c3c'; // Red
    
    const easyStats = stats.byDifficulty[AIDifficulty.Easy];
    const mediumStats = stats.byDifficulty[AIDifficulty.Medium];
    const hardStats = stats.byDifficulty[AIDifficulty.Hard];
    
    const easyText = this.add.text(50, -130, `Easy: ${easyStats.won}/${easyStats.played} (${easyStats.played > 0 ? Math.round((easyStats.won / easyStats.played) * 100) : 0}%)`, {
      fontSize: '20px',
      color: easyColor
    });
    
    const mediumText = this.add.text(50, -100, `Medium: ${mediumStats.won}/${mediumStats.played} (${mediumStats.played > 0 ? Math.round((mediumStats.won / mediumStats.played) * 100) : 0}%)`, {
      fontSize: '20px',
      color: mediumColor
    });
    
    const hardText = this.add.text(50, -70, `Hard: ${hardStats.won}/${hardStats.played} (${hardStats.played > 0 ? Math.round((hardStats.won / hardStats.played) * 100) : 0}%)`, {
      fontSize: '20px',
      color: hardColor
    });
    
    // Mini-game stats
    const miniGameTitle = this.add.text(0, 0, 'Mini-Game Performance:', {
      fontSize: '24px',
      color: '#ffffff',
      fontStyle: 'bold'
    });
    miniGameTitle.setOrigin(0.5);
    
    const miniGameStats = [
      `Reaction Challenge: ${stats.miniGameStats.reaction.won}/${stats.miniGameStats.reaction.played} (${stats.miniGameStats.reaction.played > 0 ? Math.round((stats.miniGameStats.reaction.won / stats.miniGameStats.reaction.played) * 100) : 0}%)`,
      `Memory Match: ${stats.miniGameStats.memory.won}/${stats.miniGameStats.memory.played} (${stats.miniGameStats.memory.played > 0 ? Math.round((stats.miniGameStats.memory.won / stats.miniGameStats.memory.played) * 100) : 0}%)`,
      `Speed Runner: ${stats.miniGameStats['speed-runner'].won}/${stats.miniGameStats['speed-runner'].played} (${stats.miniGameStats['speed-runner'].played > 0 ? Math.round((stats.miniGameStats['speed-runner'].won / stats.miniGameStats['speed-runner'].played) * 100) : 0}%)`,
      `Quick Math: ${stats.miniGameStats['quick-math'].won}/${stats.miniGameStats['quick-math'].played} (${stats.miniGameStats['quick-math'].played > 0 ? Math.round((stats.miniGameStats['quick-math'].won / stats.miniGameStats['quick-math'].played) * 100) : 0}%)`,
      `Target Shooter: ${stats.miniGameStats['target-shooter'].won}/${stats.miniGameStats['target-shooter'].played} (${stats.miniGameStats['target-shooter'].played > 0 ? Math.round((stats.miniGameStats['target-shooter'].won / stats.miniGameStats['target-shooter'].played) * 100) : 0}%)`
    ];
    
    const miniGameStatsText = this.add.text(0, 40, miniGameStats, {
      fontSize: '20px',
      color: '#ffffff',
      lineSpacing: 10,
      align: 'center'
    });
    miniGameStatsText.setOrigin(0.5, 0);
    
    // Back button
    const backBtn = this.createButton(0, 200, 'Back to Menu', () => {
      this.transitionToScene(SCENE_KEYS.MAIN_MENU);
    });
    
    // Add all elements to container
    this.statsContainer.add([
      title,
      overallTitle,
      gameStatsText,
      difficultyTitle,
      easyText,
      mediumText,
      hardText,
      miniGameTitle,
      miniGameStatsText,
      backBtn
    ]);
    
    // Animation
    this.statsContainer.setAlpha(0);
    this.tweens.add({
      targets: this.statsContainer,
      alpha: 1,
      duration: 500,
      ease: 'Power2'
    });
  }
}