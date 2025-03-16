# FoFo's Super Tic-Tac-Toe - Quasar Project

This folder contains the Quasar/Vue implementation of FoFo's Super Tic-Tac-Toe game. It integrates Phaser 3 for the game logic and rendering, with Quasar Framework for the overall application structure and UI components.

## Project Structure

- `src/`: Source code
  - `game/`: Game implementation using Phaser 3
    - `scenes/`: Game scenes, including main game and mini-games
    - `objects/`: Game object classes (Board, Player, AI, etc.)
    - `interfaces/`: TypeScript interfaces for the game
    - `utils/`: Utility functions and constants
  - `components/`: Vue components
  - `pages/`: Application pages (game, promotional, etc.)
  - `services/`: Service classes (storage, etc.)
  - `assets/`: Local assets
  - `boot/`: Quasar boot files
  - `css/`: Global CSS
  - `i18n/`: Internationalization files
  - `layouts/`: Vue layout components
  - `router/`: Vue Router configuration
  - `stores/`: Pinia stores (if used)
- `public/`: Static assets
  - `assets/`: Game assets (images, audio, etc.)
- `src-capacitor/`: Capacitor configuration for mobile builds

## Setup and Development

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

This will start a development server at `http://localhost:9000`.

### Build for Production

```bash
npm run build
```

### Mobile Development

```bash
# Add Capacitor platforms
npx cap add android
npx cap add ios

# Build and sync with Capacitor
quasar build -m capacitor -T [android|ios]
npx cap sync

# Open native IDE
npx cap open android
npx cap open ios
```

## Available Routes

- `/`: Promotional landing page
- `/game`: Main game page
- `/privacy`: Privacy policy
- `/terms`: Terms of service

## Missing Assets

The project currently uses placeholder descriptions for assets. To complete the game:

1. Create all assets as specified in the root `ASSETS.md` file
2. Place them in the corresponding folders under `public/assets/`
3. Ensure they match the expected file names in the code

## Extending the Game

### Adding New Mini-Games

1. Create a new scene class in `src/game/scenes/mini-games/`
2. Implement the `IMiniGame` interface
3. Add the scene to the game configuration in `src/components/GameCanvas.vue`
4. Update the mini-game selection in `BoardScene.ts`

### Modifying Game Logic

Most game logic is in the following files:
- `src/game/objects/Board.ts`: Board logic
- `src/game/objects/Player.ts`: Player/AI behavior
- `src/game/utils/gameState.ts`: Game state management

## Resources

- [Phaser 3 Documentation](https://photonstorm.github.io/phaser3-docs/)
- [Quasar Framework Documentation](https://quasar.dev/)
- [Vue.js Documentation](https://vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)