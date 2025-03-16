# FoFo's Super Tic-Tac-Toe

A unique twist on the classic Tic-Tac-Toe game, combining mini-games to claim squares on the board. Win mini-games to claim squares and get three in a row to win the game!

## Game Features

- **Five Mini-Games**: Reaction Challenge, Memory Match, Speed Runner, Quick Math, and Target Shooter
- **Adjustable AI Difficulty**: Play against AI opponents with Easy, Medium, or Hard difficulty levels
- **Cross-Platform**: Built with Quasar, Vue, and Phaser for web, iOS, and Android platforms
- **High Scores and Statistics**: Track your progress and performance in different mini-games
- **Responsive Design**: Optimized for both mobile and desktop play

## Mini-Games

- **Reaction Challenge**: Test your reflexes by tapping at the perfect moment
- **Memory Match**: Find matching pairs faster than your opponent
- **Speed Runner**: Navigate through obstacles to reach the finish line first
- **Quick Math**: Solve math problems with speed and accuracy
- **Target Shooter**: Tap targets as they appear to score points

## Development Technologies

- **Phaser 3**: Game engine for rendering, physics, and input handling
- **Quasar Framework**: Vue-based application framework for UI and deployment
- **TypeScript**: Type-safe implementation for better code quality
- **Capacitor**: For native mobile deployment

## Project Structure

- `REQUIREMENTS_DESIGN.md`: Detailed design specifications
- `ASSETS.md`: Asset requirements and specifications
- `quasar-project/`: Main application folder
  - `src/game/`: Game implementation files
  - `src/components/`: Vue components
  - `src/pages/`: Application pages
  - `public/assets/`: Game assets (placeholder)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to project folder
cd quasar-project

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Web
npm run build

# Android (requires Android Studio)
quasar build -m capacitor -T android

# iOS (requires Xcode)
quasar build -m capacitor -T ios
```

## Asset Creation

The game is currently set up with placeholder assets. To implement the full game:

1. Review the `ASSETS.md` file for specific asset requirements
2. Create assets following the folder structure and naming conventions
3. Replace the placeholder assets with your created assets

## Credits

- Game Design & Development: FoFo Terry
- Graphics: [To be created]
- Sound Effects: [To be created]

## License

This project is licensed under the MIT License - see the LICENSE file for details.