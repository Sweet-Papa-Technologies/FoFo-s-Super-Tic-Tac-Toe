# Detailed Asset Creation Guide for FoFo's Super Tic-Tac-Toe

This document provides detailed specifications for creating the game assets, including exact sizes, color palettes, and sample prompts for AI generation tools.

## Overall Design Theme

The game uses a bright, colorful cartoon style with the following characteristics:

**Color Palette:**
- Primary Blue: #4a7afe (Player X)
- Primary Red: #ff5252 (Player O)
- Background Purple: #673ab7
- UI Green: #4caf50
- UI Orange: #ff9800
- Accent Yellow: #ffeb3b
- Dark Purple: #311b92 (for shadows and depth)
- Light Gray: #f5f5f5 (for UI elements)

**Font Style:**
- Main font: Rounded sans-serif font (like "Nunito" or "Varela Round")
- Title font: Playful, bold font (like "Fredoka One" or "Bangers")
- Score font: Monospace style (like "Press Start 2P")

---

## 1. Image Assets - Detailed Specifications

### 1.1 UI and Common Elements

#### 1.1.1 Backgrounds (1920×1080px, PNG/JPEG)

**Main Menu Background**
- File: `assets/images/backgrounds/main-menu-bg.png`
- Size: 1920×1080px
- Format: PNG or JPEG
- Description: Colorful abstract background with game elements scattered subtly
- **AI Image Prompt**: "Bright colorful cartoon style game background for a tic-tac-toe board game with mini-games. Abstract patterns with subtle X and O shapes scattered around, vibrant purple to blue gradient, playful and child-friendly design, vector style with bold outlines."

**Board Background**
- File: `assets/images/backgrounds/board-bg.png`
- Size: 1920×1080px
- Description: Subtle pattern that doesn't distract from the game board
- **AI Image Prompt**: "Clean, subtle background for a digital tic-tac-toe game. Soft purple gradient with very faint geometric patterns, non-distracting, appropriate for gameplay focus, cartoon style with minimal elements."

**Settings Background**
- File: `assets/images/backgrounds/settings-bg.png`
- Size: 1920×1080px
- Description: Slightly darker version of main menu background with UI/settings-themed elements
- **AI Image Prompt**: "Settings screen background for cartoon game. Dark purple gradient background with faint gear/cog icons and slider elements in blue tones. Clean, non-distracting pattern suitable for a settings menu."

**High Scores Background**
- File: `assets/images/backgrounds/high-scores-bg.png`
- Size: 1920×1080px
- Description: Trophy/achievement themed background with stars and celebration elements
- **AI Image Prompt**: "Vibrant high score screen background for cartoon mobile game. Purple to blue gradient with subtle trophy silhouettes, star bursts, and confetti elements. Cheerful and celebratory mood, vector style with bold outlines."

#### 1.1.2 Logo and Branding

**Game Logo**
- File: `assets/images/logo/game-logo.png`
- Size: 800×400px
- Format: PNG with transparency
- Description: Bold, colorful logo featuring "FoFo's Super Tic-Tac-Toe" text with playful X and O elements
- **AI Image Prompt**: "Cartoon style game logo for 'FoFo's Super Tic-Tac-Toe'. Bold, colorful text with blue X and red O characters integrated into the design. Playful, fun typography with slight 3D effect, transparent background, suitable for a mobile game."

**App Icon**
- File: `assets/images/logo/game-icon.png`
- Size: 512×512px
- Format: PNG with transparency (also save a square version without transparency)
- Description: Simplified version of the logo, recognizable at small sizes
- **AI Image Prompt**: "App icon for a tic-tac-toe mini-game. Square format with rounded corners. Blue X and red O overlapping in a fun cartoon style on purple background. Bold, colorful, instantly recognizable at small sizes. Clean vector style with slight drop shadow."

#### 1.1.3 UI Elements

**Buttons Sprite Sheet**
- File: `assets/images/ui/buttons-sprite.png`
- Size: 600×200px (3 buttons states, each 200×60px)
- Format: PNG with transparency
- Description: Sheet with 3 button states: normal, hover, pressed
- Layout: 3 buttons horizontally, states are:
  1. Normal (left): Blue rounded rectangle with slight gradient
  2. Hover (middle): Brighter blue with subtle glow
  3. Pressed (right): Darker blue with inset shadow effect
- **AI Image Prompt**: "Cartoon game UI button sprite sheet with three states: normal, hover, and pressed. Blue rounded rectangle buttons (200x60px each) on transparent background. First button normal blue (#4a7afe), second button brighter blue for hover state, third button darker blue with inset shadow for pressed state. Clean vector style with slight gradient."

**Icons Sprite Sheet**
- File: `assets/images/ui/icons-sprite.png`
- Size: 512×512px (8×8 grid of 64×64px icons)
- Format: PNG with transparency
- Description: Common UI icons: settings, sound on/off, music on/off, home, play, pause, left/right arrows, etc.
- **AI Image Prompt**: "Game UI icons sprite sheet on transparent background. 8x8 grid of simple white icons (64×64px each) including: settings gear, sound on, sound off, music note, muted music note, home, play button, pause, left arrow, right arrow, star, trophy, info, question mark, refresh, and close X. Clean, bold, easily recognizable white icons with consistent stroke width."

**Panel Backgrounds**
- File: `assets/images/ui/panel-backgrounds.png`
- Size: 400×400px
- Format: PNG with transparency
- Description: Rounded rectangle panel with slight gradient and subtle border
- **AI Image Prompt**: "Game UI panel background with rounded corners and subtle border. Dark blue-purple semi-transparent rectangle (400x400px) with light border, slight inner gradient, and subtle shadow. Clean modern style for dialog boxes and information panels, on transparent background."

**Loading Spinner**
- File: `assets/images/ui/loading-spinner.png`
- Size: 512×64px (8 frames, each 64×64px)
- Format: PNG with transparency
- Description: Spinning circular loading indicator with 8 animation frames
- **AI Image Prompt**: "Loading spinner animation sheet with 8 frames for a cartoon game. Simple blue circular loading spinner with 8 states showing rotation progress. Each frame 64×64px, total sheet 512×64px. Clean vector style on transparent background."

**Progress Bar**
- File: `assets/images/ui/progress-bar.png`
- Size: 400×30px
- Format: PNG with transparency
- Description: Simple horizontal progress bar with rounded ends
- **AI Image Prompt**: "Game UI progress bar on transparent background. Simple horizontal blue (#4a7afe) rounded rectangle bar (400×30px) with subtle gradient and light border. Clean, modern style for loading progress."

**Toggle Switch**
- Files: 
  - `assets/images/ui/toggle-on.png`
  - `assets/images/ui/toggle-off.png`
- Size: 80×40px each
- Format: PNG with transparency
- Description: Modern toggle switch in ON (blue) and OFF (gray) states
- **AI Image Prompt**: "Two toggle switch buttons for game UI: one ON and one OFF state. ON state shows blue (#4a7afe) rounded rectangle with white circle on right side. OFF state shows gray rounded rectangle with white circle on left side. Modern, clean style with subtle shadow. Each toggle 80×40px on transparent background."

**Slider Elements**
- Files:
  - `assets/images/ui/slider-track.png` (200×10px)
  - `assets/images/ui/slider-thumb.png` (30×30px)
- Format: PNG with transparency
- Description: Horizontal slider track and draggable thumb
- **AI Image Prompt**: "Game UI slider elements on transparent background: 1) Slider track: horizontal gray rounded rectangle (200×10px) with subtle groove effect; 2) Slider thumb: blue (#4a7afe) circle button (30×30px) with subtle shadow and highlight. Clean, modern style."

#### 1.1.4 Game Board

**Board Grid**
- File: `assets/images/board/board-grid.png`
- Size: 600×600px
- Format: PNG with transparency
- Description: Classic tic-tac-toe grid with 3×3 cells
- **AI Image Prompt**: "Tic-tac-toe game board grid on transparent background. Clean white 3×3 grid with rounded line edges, substantial line thickness (10-15px). Slightly cartoony style with subtle shadow. 600×600px square grid with equal cells."

**X Marker Sprite**
- File: `assets/images/board/x-marker.png`
- Size: 960×160px (6 frames, each 160×160px)
- Format: PNG with transparency
- Description: Blue X marker with 6 animation frames for appearing effect
- **AI Image Prompt**: "Blue X marker sprite sheet for tic-tac-toe game with 6 animation frames. Shows X appearing with scaling and slight bounce effect. Bright blue (#4a7afe) X with bold cartoon style and white outline. Each frame 160×160px, total sheet 960×160px on transparent background."

**O Marker Sprite**
- File: `assets/images/board/o-marker.png`
- Size: 960×160px (6 frames, each 160×160px)
- Format: PNG with transparency
- Description: Red O marker with 6 animation frames for appearing effect
- **AI Image Prompt**: "Red O marker sprite sheet for tic-tac-toe game with 6 animation frames. Shows O appearing with scaling and slight bounce effect. Bright red (#ff5252) circle with bold cartoon style and white outline. Each frame 160×160px, total sheet 960×160px on transparent background."

**Highlight Square**
- File: `assets/images/board/highlight-square.png`
- Size: 180×180px
- Format: PNG with transparency
- Description: Subtle glow effect for highlighting available or selected squares
- **AI Image Prompt**: "Square highlight effect for tic-tac-toe board on transparent background. Subtle yellow glow effect (180×180px) to indicate selected or available square. Soft edges, semi-transparent, suitable for overlaying on game board cells."

**Win Line**
- File: `assets/images/board/win-line.png`
- Size: 600×20px
- Format: PNG with transparency
- Description: Animated line that crosses winning combinations
- **AI Image Prompt**: "Win line indicator for tic-tac-toe game on transparent background. Bright yellow-green horizontal line with glowing effect and rounded ends. 600×20px, bold enough to clearly show victory pattern when drawn across board."

### 1.2 Mini-Game Assets

#### 1.2.1 Reaction Challenge

**Background**
- File: `assets/images/mini-games/reaction/background.png`
- Size: 1920×1080px
- Format: PNG/JPEG
- Description: Clean background focused on the reaction timing elements
- **AI Image Prompt**: "Clean game background for a reaction-timing mini-game. Simple gradient from dark blue to purple with subtle abstract shapes suggesting speed and reflexes. Minimalist design leaving space for gameplay elements. 1920×1080px."

**Marker**
- File: `assets/images/mini-games/reaction/marker.png`
- Size: 60×60px
- Format: PNG with transparency
- Description: Distinct moving marker that players try to align with the target
- **AI Image Prompt**: "Small bright blue circular marker on transparent background. Clean, solid 60×60px circle with slight gradient and thin white outline. Simple design for a moving indicator in a reaction timing game."

**Target Zone**
- File: `assets/images/mini-games/reaction/target-zone.png`
- Size: 40×100px
- Format: PNG with transparency
- Description: Highlighted area that players aim to hit
- **AI Image Prompt**: "Target zone rectangle for reaction mini-game on transparent background. Bright red vertical rectangle (40×100px) with pulsing glow effect to indicate target area. Semi-transparent design to overlay on game track."

**Tap Effect**
- File: `assets/images/mini-games/reaction/tap-effect.png`
- Size: 200×200px
- Format: PNG with transparency
- Description: Circular burst effect showing where the player tapped
- **AI Image Prompt**: "Circular tap feedback effect on transparent background. Colorful expanding rings effect (200×200px) to show where player tapped. Bright blue center fading to transparent edges, energetic and satisfying visual feedback."

**Result Display**
- File: `assets/images/mini-games/reaction/result-display.png`
- Size: 400×200px
- Format: PNG with transparency
- Description: Frame for displaying timing results
- **AI Image Prompt**: "Result display panel for reaction mini-game on transparent background. Rounded rectangle frame (400×200px) with space for showing player scores and timing results. Semi-transparent dark blue with highlight border and subtle glow."

**Icon**
- File: `assets/images/mini-games/reaction/icon.png`
- Size: 128×128px
- Format: PNG with transparency
- Description: Identifying icon for the reaction mini-game
- **AI Image Prompt**: "Icon for 'Reaction Time' mini-game on transparent background. 128×128px circular icon showing a stopwatch or timer with lightning bolt symbol. Bright blue and yellow colors, cartoon style with white outline. Should clearly represent quick reflexes and timing."

#### 1.2.2 Memory Match

**Background**
- File: `assets/images/mini-games/memory/background.png`
- Size: 1920×1080px
- Format: PNG/JPEG
- Description: Themed background suitable for a memory card game
- **AI Image Prompt**: "Background for memory card matching mini-game. Subtle purple gradient with faint pattern of question marks and memory-related symbols. Soft, non-distracting design that suggests puzzle and memory challenge. 1920×1080px."

**Card Back**
- File: `assets/images/mini-games/memory/card-back.png`
- Size: 120×120px
- Format: PNG with transparency
- Description: Decorative back design for memory cards
- **AI Image Prompt**: "Memory card back design on transparent background. 120×120px square card with rounded corners showing decorative pattern. Purple background with question mark or brain icon in center. Cartoon style with white border and subtle texture."

**Card Frame**
- File: `assets/images/mini-games/memory/card-frame.png`
- Size: 130×130px
- Format: PNG with transparency
- Description: Decorative frame around each card
- **AI Image Prompt**: "Decorative frame for memory cards on transparent background. 130×130px square frame with rounded corners and ornate edges. Gold/yellow color with subtle gradient and shadow effect. Should look like a fancy border around game cards."

**Symbols Sheet**
- File: `assets/images/mini-games/memory/symbols-sheet.png`
- Size: 1000×500px (10×5 grid, each 100×100px)
- Format: PNG with transparency
- Description: Grid of 16 different symbols for card matching (8 pairs)
- **AI Image Prompt**: "Memory matching card symbols sprite sheet on transparent background. 10×5 grid of 16 different cartoon symbols (with extra animation frames), each 100×100px. Include common objects like star, heart, moon, sun, apple, house, car, flower, etc. Bold, colorful designs with consistent style and white outlines."

**Match Effect**
- File: `assets/images/mini-games/memory/match-effect.png`
- Size: 200×200px
- Format: PNG with transparency
- Description: Visual effect when a match is found
- **AI Image Prompt**: "Visual effect for successful match in memory game on transparent background. 200×200px starburst or sparkle effect with bright yellow and white particles. Energetic, celebratory design to indicate correctly matched cards."

**Board Frame**
- File: `assets/images/mini-games/memory/board-frame.png`
- Size: 650×650px
- Format: PNG with transparency
- Description: Decorative frame around the entire card grid
- **AI Image Prompt**: "Decorative frame for memory card game board on transparent background. 650×650px square frame with rounded corners and elegant design. Dark blue/purple gradient with subtle pattern and highlight edges. Should frame the entire 4×4 grid of memory cards."

**Icon**
- File: `assets/images/mini-games/memory/icon.png`
- Size: 128×128px
- Format: PNG with transparency
- Description: Identifying icon for the memory mini-game
- **AI Image Prompt**: "Icon for 'Memory Match' mini-game on transparent background. 128×128px circular icon showing two matching cards or a brain symbol. Purple and gold colors, cartoon style with white outline. Should clearly represent memory and matching concept."

#### 1.2.3 Speed Runner

**Background Layers**
- File: `assets/images/mini-games/runner/background-layers.png`
- Size: 3840×1080px (3 layers, each 1920×360px stacked vertically)
- Format: PNG with transparency
- Description: Three layers for parallax scrolling (far, mid, close)
- **AI Image Prompt**: "Parallax background layers for side-scrolling runner game. Three horizontal layers (each 1920×360px, stacked vertically in one 3840×1080px image): 1) Far background: blue sky with clouds; 2) Middle layer: distant hills or cityscape; 3) Close layer: detailed ground elements. Cartoon style with bold outlines consistent with platform game aesthetics."

**Character X Spritesheet**
- File: `assets/images/mini-games/runner/character-x-spritesheet.png`
- Size: 480×360px (6 frames for running, 3 frames for jumping, each 80×120px)
- Format: PNG with transparency
- Description: Blue X character with running and jumping animations
- **AI Image Prompt**: "Character sprite sheet for runner game on transparent background. Blue X-shaped character with arms and legs (humanoid). 480×360px sheet with 6 frames of running animation and 3 frames of jumping animation, each frame 80×120px. Cartoon style with white outline, showing fluid motion for side-scrolling game."

**Character O Spritesheet**
- File: `assets/images/mini-games/runner/character-o-spritesheet.png`
- Size: 480×360px (6 frames for running, 3 frames for jumping, each 80×120px)
- Format: PNG with transparency
- Description: Red O character with running and jumping animations
- **AI Image Prompt**: "Character sprite sheet for runner game on transparent background. Red O-shaped character with arms and legs (humanoid). 480×360px sheet with 6 frames of running animation and 3 frames of jumping animation, each frame 80×120px. Cartoon style with white outline, showing fluid motion for side-scrolling game."

**Obstacles Sheet**
- File: `assets/images/mini-games/runner/obstacles-sheet.png`
- Size: 400×400px (5×5 grid, each 80×80px)
- Format: PNG with transparency
- Description: Various obstacles like rocks, spikes, bushes, etc.
- **AI Image Prompt**: "Obstacle sprite sheet for runner game on transparent background. 5×5 grid of different obstacles (each 80×80px, total 400×400px) including: rocks, spikes, bushes, small gaps, barriers, and hazards. Cartoon style with consistent colors and white outlines. Various sizes and shapes for game difficulty variety."

**Platform Tiles**
- File: `assets/images/mini-games/runner/platform-tiles.png`
- Size: 320×80px (4 tiles, each 80×80px)
- Format: PNG with transparency
- Description: Repeatable ground tiles for the running track
- **AI Image Prompt**: "Platform tiles for runner game on transparent background. 320×80px strip showing 4 connected ground/platform tiles (each 80×80px). Grass or dirt top surface with underground/soil visible below. Cartoon style with brown/green colors and white outlines. Tiles should be designed to repeat seamlessly."

**Finish Line**
- File: `assets/images/mini-games/runner/finish-line.png`
- Size: 100×360px
- Format: PNG with transparency
- Description: Checkered finish line marker
- **AI Image Prompt**: "Finish line for runner game on transparent background. 100×360px vertical checkered flag or finish line banner with black and white pattern. Cartoon style with slight waving animation and 'FINISH' text. Should clearly indicate the race end point."

**Dust Particles**
- File: `assets/images/mini-games/runner/dust-particles.png`
- Size: 200×50px (4 particles, each 50×50px)
- Format: PNG with transparency
- Description: Dust cloud effects for running and landing
- **AI Image Prompt**: "Dust particle effects for runner game on transparent background. 200×50px strip with 4 different dust cloud particles (each 50×50px). White/brown semi-transparent clouds in different shapes to show character movement, running and landing impacts. Simple cartoon style with soft edges."

**Icon**
- File: `assets/images/mini-games/runner/icon.png`
- Size: 128×128px
- Format: PNG with transparency
- Description: Identifying icon for the runner mini-game
- **AI Image Prompt**: "Icon for 'Speed Runner' mini-game on transparent background. 128×128px circular icon showing running character and finish line or speed lines. Green and blue colors, cartoon style with white outline. Should clearly represent racing and speed."

#### 1.2.4 Quick Math

**Background**
- File: `assets/images/mini-games/math/background.png`
- Size: 1920×1080px
- Format: PNG/JPEG
- Description: Math-themed background with numbers/symbols
- **AI Image Prompt**: "Educational math game background. Light blue gradient with subtle floating numbers and math symbols. Clean, slightly playful design appropriate for a math quiz game. 1920×1080px."

**Number Buttons**
- File: `assets/images/mini-games/math/number-buttons.png`
- Size: 600×120px (10 buttons, each 60×60px)
- Format: PNG with transparency
- Description: 0-9 digit buttons for math answers
- **AI Image Prompt**: "Number buttons sprite sheet for math game on transparent background. 600×120px strip with 10 circular buttons (each 60×60px) showing digits 0-9. Blue circles with white numbers, cartoon style with slight 3D effect and white outlines. Consistent design for game UI."

**Operator Symbols**
- File: `assets/images/mini-games/math/operator-symbols.png`
- Size: 240×60px (4 symbols, each 60×60px)
- Format: PNG with transparency
- Description: Math operators (+, -, ×, ÷)
- **AI Image Prompt**: "Math operator symbols sprite sheet on transparent background. 240×60px strip with 4 circular buttons (each 60×60px) showing +, -, ×, and ÷ symbols. Orange circles with white symbols, cartoon style with slight 3D effect and white outlines. Matching the number buttons style."

**Answer Box**
- File: `assets/images/mini-games/math/answer-box.png`
- Size: 300×80px
- Format: PNG with transparency
- Description: Box where math problem answers appear
- **AI Image Prompt**: "Answer input box for math game on transparent background. 300×80px rounded rectangle with subtle border and slight inner shadow. White/light gray background designed to display player's numeric answer input. Clean, simple design with slight 3D effect."

**Correct Effect**
- File: `assets/images/mini-games/math/correct-effect.png`
- Size: 200×200px
- Format: PNG with transparency
- Description: Green checkmark or similar "correct" indicator
- **AI Image Prompt**: "Correct answer effect for math game on transparent background. 200×200px green checkmark with circular glow/particle effect. Energetic, positive feedback animation. Bright green (#4caf50) with white highlights and subtle motion blur."

**Wrong Effect**
- File: `assets/images/mini-games/math/wrong-effect.png`
- Size: 200×200px
- Format: PNG with transparency
- Description: Red X or similar "incorrect" indicator
- **AI Image Prompt**: "Wrong answer effect for math game on transparent background. 200×200px red X with circular pulse effect. Clear negative feedback animation. Bright red (#ff5252) with white details and subtle shake motion blur."

**Icon**
- File: `assets/images/mini-games/math/icon.png`
- Size: 128×128px
- Format: PNG with transparency
- Description: Identifying icon for the math mini-game
- **AI Image Prompt**: "Icon for 'Quick Math' mini-game on transparent background. 128×128px circular icon showing calculator or math equation symbols. Orange and blue colors, cartoon style with white outline. Should clearly represent mathematics and calculations."

#### 1.2.5 Target Shooter

**Background**
- File: `assets/images/mini-games/shooter/background.png`
- Size: 1920×1080px
- Format: PNG/JPEG
- Description: Target range themed background
- **AI Image Prompt**: "Target shooting game background. Subtle purple to blue gradient with abstract circular patterns suggesting targets in the distance. Clean design with slight depth effect, leaving space for gameplay elements. 1920×1080px."

**Target Spritesheet**
- File: `assets/images/mini-games/shooter/target-spritesheet.png`
- Size: 800×200px (8 frames, each 100×100px)
- Format: PNG with transparency
- Description: Animated targets with appearance and hit states
- **AI Image Prompt**: "Target sprite sheet for shooting game on transparent background. 800×200px strip with 8 frames (each 100×100px): 4 frames showing target appearing/growing, 4 frames showing target being hit and disappearing. Classic bullseye design with red and white rings. Cartoon style with slight 3D effect and smooth animation transitions."

**Hit Effect**
- File: `assets/images/mini-games/shooter/hit-effect.png`
- Size: 200×200px
- Format: PNG with transparency
- Description: Explosion/sparkle effect when target is hit
- **AI Image Prompt**: "Hit effect for target shooting game on transparent background. 200×200px starburst explosion with bright yellow center and orange/red edges. Energetic particle effect suggesting successful hit on target. Cartoon style with dynamic, radiating design."

**Crosshair**
- File: `assets/images/mini-games/shooter/crosshair.png`
- Size: 64×64px
- Format: PNG with transparency
- Description: Aiming crosshair for desktop version
- **AI Image Prompt**: "Simple crosshair cursor for shooting game on transparent background. 64×64px crosshair design with thin white lines and subtle red dot in center. Clean, precise aiming reticle that's visible but not obstructive against gameplay background."

**Score Popup**
- File: `assets/images/mini-games/shooter/score-popup.png`
- Size: 100×50px
- Format: PNG with transparency
- Description: Small popup showing points earned
- **AI Image Prompt**: "Score popup for shooting game on transparent background. 100×50px small bubble or rectangle designed to show points earned when hitting targets. Yellow text area with subtle glow and slight 3D effect. Should be able to display '+ 10' or similar point values."

**Icon**
- File: `assets/images/mini-games/shooter/icon.png`
- Size: 128×128px
- Format: PNG with transparency
- Description: Identifying icon for the shooter mini-game
- **AI Image Prompt**: "Icon for 'Target Shooter' mini-game on transparent background. 128×128px circular icon showing bullseye target with arrow or hit mark. Red and white colors, cartoon style with white outline. Should clearly represent aiming and target shooting."

### 1.3 Effect Assets

**Particle Sheet**
- File: `assets/images/effects/particle-sheet.png`
- Size: 512×128px (16 particles, each 32×32px)
- Format: PNG with transparency
- Description: Various particle effects (sparkles, smoke, etc.)
- **AI Image Prompt**: "Game particle effects sprite sheet on transparent background. 512×128px sheet with 16 different particles (each 32×32px): including sparkles, smoke puffs, tiny stars, dots, flame bits, bubble, and various shapes. White/bright colored simple elements for building particle systems in game."

**Win Celebration**
- File: `assets/images/effects/win-celebration.png`
- Size: 600×600px
- Format: PNG with transparency
- Description: Large celebratory effect for winning the game
- **AI Image Prompt**: "Win celebration effect for game on transparent background. 600×600px elaborate starburst pattern with stars, light rays, and sparkles. Bright gold and yellow colors radiating from center. Energetic, festive design to celebrate player victory."

**Confetti**
- File: `assets/images/effects/confetti.png`
- Size: 512×128px (16 pieces, each 32×32px)
- Format: PNG with transparency
- Description: Confetti pieces in various colors and shapes
- **AI Image Prompt**: "Confetti particle sheet on transparent background. 512×128px sheet with 16 different confetti pieces (each 32×32px): small squares, rectangles, circles, and triangle shapes in various bright colors (red, blue, green, yellow, pink). Simple flat design for celebration particle effects."

**Screen Flash**
- File: `assets/images/effects/screen-flash.png`
- Size: 1920×1080px
- Format: PNG with transparency
- Description: White/yellow flash effect overlay
- **AI Image Prompt**: "Screen flash effect on transparent background. 1920×1080px white to transparent radial gradient with bright center and completely transparent edges. Should be used as overlay to create flash effect for transitions or impacts. Subtle yellow tint for warmth."

---

## 2. Audio Assets - Detailed Specifications

### 2.1 Music

**Main Theme**
- File: `assets/audio/music/main-theme.mp3`
- Duration: 1-2 minutes (loopable)
- Format: MP3, 128-192kbps
- Description: Upbeat, playful theme with catchy melody
- **AI Audio Prompt (Suno)**: "Create an upbeat, playful game theme music for a cartoon tic-tac-toe game with mini-games. Cheerful melody with synthesizer and light percussion. Modern, child-friendly tune with about 100-120 BPM. Should loop seamlessly and have a memorable, catchy main theme. Duration around 1-2 minutes."

**Mini-Game Theme**
- File: `assets/audio/music/mini-game-theme.mp3`
- Duration: 45-60 seconds (loopable)
- Format: MP3, 128-192kbps
- Description: Faster-paced, exciting variation of main theme
- **AI Audio Prompt (Suno)**: "Create energetic mini-game background music that's faster-paced than the main theme for a cartoon mobile game. Higher tempo (140-160 BPM), exciting feel with driving beat. Should maintain similar melodic elements to the main theme but more intense. Duration around 45-60 seconds, seamlessly loopable."

**Tension Theme**
- File: `assets/audio/music/tension-theme.mp3`
- Duration: 30 seconds (loopable)
- Format: MP3, 128-192kbps
- Description: Increasing tension/urgency for countdown situations
- **AI Audio Prompt (Suno)**: "Create a tension-building countdown music snippet for a game's final seconds. Starting calm but rapidly building tension and urgency with increasing tempo and intensity. Should create time pressure feeling with ticking clock sounds or pulsing beats. Around 30 seconds, suitable for looping during time-limited challenges."

**Victory Theme**
- File: `assets/audio/music/victory-theme.mp3`
- Duration: 5-10 seconds
- Format: MP3, 128-192kbps
- Description: Triumphant short jingle for winning
- **AI Audio Prompt (Suno)**: "Create a short 5-10 second victory fanfare for a casual mobile game. Triumphant, celebratory feeling with bright brass, rising notes, and resolving to a satisfying conclusion. Similar style to classic video game 'level complete' jingles. Should feel rewarding and positive."

### 2.2 UI Sounds

**Button Click**
- File: `assets/audio/ui/button-click.mp3`
- Duration: 0.2-0.5 seconds
- Format: MP3, 128-192kbps
- Description: Satisfying button click sound
- **AI Audio Prompt (ElevenLabs)**: "A short, satisfying button click sound effect for a mobile game interface. Clean, digital 'pop' sound with slight bounce or springiness. Should be quick (under half a second) and pleasant for repeated use."

**Button Hover**
- File: `assets/audio/ui/button-hover.mp3`
- Duration: 0.1-0.3 seconds
- Format: MP3, 128-192kbps
- Description: Subtle hover sound
- **AI Audio Prompt (ElevenLabs)**: "A very subtle hover sound for UI interaction. Gentle, high-pitched 'tick' or soft 'whoosh' that's noticeable but not intrusive. Extremely short duration (under 0.3 seconds) and quieter than button click sound."

**Menu Open**
- File: `assets/audio/ui/menu-open.mp3`
- Duration: 0.5-1 second
- Format: MP3, 128-192kbps
- Description: Swoosh/expand sound for opening menus
- **AI Audio Prompt (ElevenLabs)**: "A menu opening sound effect for a mobile game. Smooth upward swoosh or expansion sound that suggests a panel appearing or sliding in. Clean, digital quality around 0.7 seconds long with slight reverb at end."

**Menu Close**
- File: `assets/audio/ui/menu-close.mp3`
- Duration: 0.5-1 second
- Format: MP3, 128-192kbps
- Description: Reverse of menu open sound
- **AI Audio Prompt (ElevenLabs)**: "A menu closing sound effect for a mobile game. Downward swoosh or contraction sound that's essentially the reverse of a menu opening. Clean, digital quality about 0.6 seconds long with quick fadeout."

**Toggle On/Off**
- Files:
  - `assets/audio/ui/toggle-on.mp3`
  - `assets/audio/ui/toggle-off.mp3`
- Duration: 0.2-0.5 seconds each
- Format: MP3, 128-192kbps
- Description: Switch sounds for toggle controls
- **AI Audio Prompt (ElevenLabs)**: "Two toggle switch sound effects for a mobile game: 1) Toggle ON: Satisfying upward 'click-thunk' with subtle electronic sound suggesting activation; 2) Toggle OFF: Downward 'clunk' sound with slight power-down feel. Both should be short (under 0.5 seconds) and clearly distinct from each other."

**Slider Move**
- File: `assets/audio/ui/slider-move.mp3`
- Duration: 0.5-1 second
- Format: MP3, 128-192kbps
- Description: Subtle sliding/scraping sound
- **AI Audio Prompt (ElevenLabs)**: "A slider movement sound effect for a game settings interface. Smooth, continuous sliding or soft scraping sound that can be looped while user adjusts a slider control. Subtle mechanical quality without being harsh. Base version about 1 second long."

### 2.3 Game Board Sounds

**Square Select**
- File: `assets/audio/board/square-select.mp3`
- Duration: 0.2-0.5 seconds
- Format: MP3, 128-192kbps
- Description: Highlight/selection sound for board squares
- **AI Audio Prompt (ElevenLabs)**: "A square selection sound for a tic-tac-toe game. Clean, short 'pop' or 'click' with slight reverb. Distinct from button click sound, more hollow and resonant. About 0.3 seconds long with quick attack and short decay."

**X/O Place Sounds**
- Files:
  - `assets/audio/board/x-place.mp3`
  - `assets/audio/board/o-place.mp3`
- Duration: 0.5-1 second each
- Format: MP3, 128-192kbps
- Description: Distinct sounds for placing X and O markers
- **AI Audio Prompt (ElevenLabs)**: "Two distinct marker placement sounds for a tic-tac-toe game: 1) X marker: Sharp, two-tone 'X' sound with slight metallic quality and bounce, slightly higher pitch; 2) O marker: Rounded, hollow 'whoosh' sound with resonant ring-like quality, slightly lower pitch. Both about 0.7 seconds with satisfying weight to them."

**Game Win**
- File: `assets/audio/board/game-win.mp3`
- Duration: 2-3 seconds
- Format: MP3, 128-192kbps
- Description: Celebratory win sound
- **AI Audio Prompt (ElevenLabs)**: "A winning sound effect for a casual mobile game. Triumphant ascending notes with sparkle effects and positive resolution. Celebratory without being overwhelming, about 2-3 seconds long with bright, cheerful character."

**Game Draw**
- File: `assets/audio/board/game-draw.mp3`
- Duration: 1-2 seconds
- Format: MP3, 128-192kbps
- Description: Neutral sound for a tied game
- **AI Audio Prompt (ElevenLabs)**: "A game draw or tie result sound effect. Neutral tone with slight comedic 'wah-wah' quality or descending notes that suggest stalemate. Neither positive nor negative feeling, just indicating game completion without victory. About 1.5 seconds long."

**Turn Change**
- File: `assets/audio/board/turn-change.mp3`
- Duration: 0.5-1 second
- Format: MP3, 128-192kbps
- Description: Short sound indicating player turn switch
- **AI Audio Prompt (ElevenLabs)**: "A turn change sound effect for a board game. Quick transition sound with slight 'whoosh' quality and gentle bell-like note. Should indicate passing of turn from one player to another. Clean, short (under 1 second) and notice without being distracting."

### 2.4 Mini-Game Sounds

#### 2.4.1 Reaction Challenge

**Countdown**
- File: `assets/audio/mini-games/reaction/countdown.mp3`
- Duration: 0.5 seconds per count (3 counts total)
- Format: MP3, 128-192kbps
- Description: 3-2-1 countdown beeps
- **AI Audio Prompt (ElevenLabs)**: "A 3-2-1 countdown sound for a reaction game. Three distinct beeps at 0.5 second intervals, with the final beep higher pitched and more emphasizing than the first two. Digital, clean beeps that create anticipation."

**Tap**
- File: `assets/audio/mini-games/reaction/tap.mp3`
- Duration: 0.2-0.4 seconds
- Format: MP3, 128-192kbps
- Description: Basic tap/click sound
- **AI Audio Prompt (ElevenLabs)**: "A tap sound effect for a reaction timing game. Quick, sharp 'tap' sound with slight resonance. Should feel responsive and satisfying for repeated tapping. Very short duration (under 0.3 seconds) and clear attack."

**Perfect Tap**
- File: `assets/audio/mini-games/reaction/perfect-tap.mp3`
- Duration: 0.5-1 second
- Format: MP3, 128-192kbps
- Description: Special sound for perfect timing
- **AI Audio Prompt (ElevenLabs)**: "A special 'perfect timing' sound effect for a reaction game. High-pitched, cheerful chime or ding with sparkle effect. Should feel clearly rewarding and distinct from normal tap sound. About 0.7 seconds with bright, positive character."

**Win/Lose**
- Files:
  - `assets/audio/mini-games/reaction/win.mp3`
  - `assets/audio/mini-games/reaction/lose.mp3`
- Duration: 1-2 seconds each
- Format: MP3, 128-192kbps
- Description: Result sounds for the mini-game
- **AI Audio Prompt (ElevenLabs)**: "Two result sound effects for a reaction mini-game: 1) Win sound: Upbeat, rising notes with cheerful resolution and slight sparkle effect, about 1.5 seconds; 2) Lose sound: Downward notes with slight 'deflating' quality, not too negative but clearly indicating failure, about 1.3 seconds. Both should be appropriate for casual gaming."

#### 2.4.2 Memory Match

**Card Flip**
- File: `assets/audio/mini-games/memory/card-flip.mp3`
- Duration: 0.3-0.5 seconds
- Format: MP3, 128-192kbps
- Description: Sound of card being flipped over
- **AI Audio Prompt (ElevenLabs)**: "A card flip sound effect for a memory matching game. Quick, papery 'flip' with slight whoosh and landing sound. Should feel light but tangible, suggesting a playing card turning over. About 0.4 seconds long with clear beginning and end."

**Match Found**
- File: `assets/audio/mini-games/memory/match-found.mp3`
- Duration: 0.5-1 second
- Format: MP3, 128-192kbps
- Description: Positive chime for successful match
- **AI Audio Prompt (ElevenLabs)**: "A successful match sound effect for a memory card game. Bright, happy chime or bell sequence that clearly indicates positive result. Should feel rewarding without being too long or distracting. About 0.8 seconds with playful character."

**No Match**
- File: `assets/audio/mini-games/memory/no-match.mp3`
- Duration: 0.5-1 second
- Format: MP3, 128-192kbps
- Description: Negative sound for incorrect match
- **AI Audio Prompt (ElevenLabs)**: "An incorrect match sound effect for a memory card game. Gentle 'wrong' sound with low tone and slight descending notes. Should indicate failure without being harsh or frustrating. About 0.7 seconds, suitable for frequent hearing during gameplay."

**Time Low**
- File: `assets/audio/mini-games/memory/time-low.mp3`
- Duration: 0.5-1 second (loopable)
- Format: MP3, 128-192kbps
- Description: Warning sound when time is running out
- **AI Audio Prompt (ElevenLabs)**: "A time running out warning sound for a memory game. Urgent, pulsing beep or ticking that creates time pressure. Should loop seamlessly and gradually increase tension. Base loop about 1 second long, designed to repeat until time expires."

**Complete**
- File: `assets/audio/mini-games/memory/complete.mp3`
- Duration: 2-3 seconds
- Format: MP3, 128-192kbps
- Description: Celebratory sound for completing all matches
- **AI Audio Prompt (ElevenLabs)**: "A level complete sound effect for a memory matching game. Triumphant sequence with rising notes and cheerful resolution. Should feel like a bigger reward than individual matches. About 2-3 seconds long with fanfare quality and distinct beginning, middle, and end."

#### 2.4.3 Speed Runner

**Jump**
- File: `assets/audio/mini-games/runner/jump.mp3`
- Duration: 0.3-0.5 seconds
- Format: MP3, 128-192kbps
- Description: Character jump sound
- **AI Audio Prompt (ElevenLabs)**: "A character jump sound effect for a platformer-style runner game. Quick 'spring' or 'boing' sound with upward movement quality. Light, bouncy feel without being cartoonish. Very short (about 0.4 seconds) with clear beginning and quick fade."

**Land**
- File: `assets/audio/mini-games/runner/land.mp3`
- Duration: 0.2-0.4 seconds
- Format: MP3, 128-192kbps
- Description: Landing impact sound
- **AI Audio Prompt (ElevenLabs)**: "A landing sound effect for a character in a runner game. Soft impact or 'thud' with slight bounce quality. Should feel like character weight without being heavy. Very short (about 0.3 seconds) with quick attack and short sustain."

**Hit Obstacle**
- File: `assets/audio/mini-games/runner/hit-obstacle.mp3`
- Duration: 0.5-1 second
- Format: MP3, 128-192kbps
- Description: Collision/impact sound
- **AI Audio Prompt (ElevenLabs)**: "A collision sound effect for hitting an obstacle in a runner game. Sharp impact with slight 'bounce-back' quality. Should clearly indicate obstacle contact without being harsh. About 0.6 seconds long with distinctive impact moment and quick recovery sound."

**Running Loop**
- File: `assets/audio/mini-games/runner/running-loop.mp3`
- Duration: 1-2 seconds (loopable)
- Format: MP3, 128-192kbps
- Description: Repeating footsteps sound
- **AI Audio Prompt (ElevenLabs)**: "A running footsteps sound loop for a side-scrolling game. Quick, rhythmic footstep pattern on generic ground surface. Should loop seamlessly for continuous running animation. Base loop about 1-2 seconds containing 4-6 individual steps at medium-fast pace."

**Finish**
- File: `assets/audio/mini-games/runner/finish.mp3`
- Duration: 1-2 seconds
- Format: MP3, 128-192kbps
- Description: Sound for crossing finish line
- **AI Audio Prompt (ElevenLabs)**: "A finish line crossing sound effect for a runner game. Triumphant 'goal achieved' sound with celebratory character. Could include crowd cheer element or victory bell/whistle. About 1.5 seconds long with clear, energetic conclusion."

#### 2.4.4 Quick Math

**Number Input**
- File: `assets/audio/mini-games/math/number-input.mp3`
- Duration: 0.2-0.3 seconds
- Format: MP3, 128-192kbps
- Description: Button press sound for number input
- **AI Audio Prompt (ElevenLabs)**: "A number button press sound for a math game calculator interface. Clean, digital 'blip' or 'click' sound that's satisfying for repeated presses. Very short (about 0.2 seconds) with slight electronic quality. Should be distinct from regular UI button sounds."

**Correct Answer**
- File: `assets/audio/mini-games/math/correct-answer.mp3`
- Duration: 0.5-1 second
- Format: MP3, 128-192kbps
- Description: Positive feedback for correct answers
- **AI Audio Prompt (ElevenLabs)**: "A correct answer sound effect for a math quiz game. Bright, positive chime or bell sequence indicating success. Should feel clearly rewarding and encouraging. About 0.8 seconds long with cheerful, uplifting character suitable for educational context."

**Wrong Answer**
- File: `assets/audio/mini-games/math/wrong-answer.mp3`
- Duration: 0.5-1 second
- Format: MP3, 128-192kbps
- Description: Negative feedback for wrong answers
- **AI Audio Prompt (ElevenLabs)**: "A wrong answer sound effect for a math quiz game. Gentle 'incorrect' tone with slight downward movement. Should indicate error without being discouraging or harsh. About 0.7 seconds long, appropriate for educational children's game."

**Question Appear**
- File: `assets/audio/mini-games/math/question-appear.mp3`
- Duration: 0.5-1 second
- Format: MP3, 128-192kbps
- Description: Sound for new question appearing
- **AI Audio Prompt (ElevenLabs)**: "A sound effect for a new question appearing in a math game. Light 'pop-in' or 'appear' sound with slight bell tone. Should feel fresh and attention-grabbing without being startling. About 0.6 seconds long with clean beginning and end."

**Thinking**
- File: `assets/audio/mini-games/math/thinking.mp3`
- Duration: 3-5 seconds (loopable)
- Format: MP3, 128-192kbps
- Description: Gentle "ticking" to create time pressure
- **AI Audio Prompt (ElevenLabs)**: "A 'thinking time' countdown sound for a math quiz game. Gentle but persistent ticking or pulsing that creates mild time pressure. Should loop seamlessly and convey passing time without being stressful. Base loop about 3-4 seconds that can repeat as needed during question countdown."

#### 2.4.5 Target Shooter

**Target Appear**
- File: `assets/audio/mini-games/shooter/target-appear.mp3`
- Duration: 0.3-0.5 seconds
- Format: MP3, 128-192kbps
- Description: Pop/appear sound for targets
- **AI Audio Prompt (ElevenLabs)**: "A target appearance sound effect for a shooting game. Quick 'pop' or 'whoosh' sound as target materializes or slides into view. Light, attention-grabbing quality without being startling. About 0.4 seconds long with clear beginning."

**Target Hit**
- File: `assets/audio/mini-games/shooter/target-hit.mp3`
- Duration: 0.3-0.5 seconds
- Format: MP3, 128-192kbps
- Description: Impact sound for successful hits
- **AI Audio Prompt (ElevenLabs)**: "A target hit sound effect for a shooting gallery game. Satisfying impact sound with slight 'ding' or bell quality to indicate successful hit. Should feel rewarding and distinct. About 0.4 seconds long with clear impact moment and quick decay."

**Target Miss**
- File: `assets/audio/mini-games/shooter/target-miss.mp3`
- Duration: 0.3-0.5 seconds
- Format: MP3, 128-192kbps
- Description: Swoosh/miss sound
- **AI Audio Prompt (ElevenLabs)**: "A target miss sound effect for a shooting game. Quick 'whoosh' or 'swish' sound indicating near-miss. Should clearly convey failure without being harsh or disappointing. About 0.4 seconds long with subtle, non-punishing character."

**Combo**
- File: `assets/audio/mini-games/shooter/combo.mp3`
- Duration: 0.5-1 second
- Format: MP3, 128-192kbps
- Description: Special sound for hitting multiple targets in sequence
- **AI Audio Prompt (ElevenLabs)**: "A combo success sound effect for hitting multiple targets in quick succession. Escalating tone or chord that builds on the regular hit sound. Should feel more rewarding than single hits and indicate player is doing well. About 0.8 seconds long with rising, energetic character."

**Time Warning**
- File: `assets/audio/mini-games/shooter/time-warning.mp3`
- Duration: 0.5-1 second (loopable)
- Format: MP3, 128-192kbps
- Description: Alert sound when time is running low
- **AI Audio Prompt (ElevenLabs)**: "A time running out warning sound for a target shooting game. Urgent, pulsing alarm or beep pattern that creates time pressure. Should loop seamlessly and convey countdown urgency. Base loop about 1 second long, designed to repeat until time expires."

### 2.5 Voice and Announcer

**Game Start**
- File: `assets/audio/voice/game-start.mp3`
- Duration: 1-2 seconds
- Format: MP3, 128-192kbps
- Description: Enthusiastic "Game Start!" voice clip
- **AI Audio Prompt (ElevenLabs)**: "An enthusiastic game announcer saying 'Game Start!' clearly and energetically. Male or female voice with upbeat, engaging tone suitable for a family-friendly game. About 1.5 seconds long with clear enunciation."

**Player X/O Turn**
- Files:
  - `assets/audio/voice/player-x-turn.mp3`
  - `assets/audio/voice/player-o-turn.mp3`
- Duration: 1-2 seconds each
- Format: MP3, 128-192kbps
- Description: Voice announcing player turns
- **AI Audio Prompt (ElevenLabs)**: "Two game announcer voice clips: 1) 'Player X's turn!' and 2) 'Player O's turn!' spoken clearly and enthusiastically. Same voice character for both, energetic but not overly excited. Each about 1.5 seconds long with consistent tone and volume."

**Result Announcements**
- Files:
  - `assets/audio/voice/you-win.mp3`
  - `assets/audio/voice/you-lose.mp3`
  - `assets/audio/voice/draw.mp3`
- Duration: 1-2 seconds each
- Format: MP3, 128-192kbps
- Description: Voice announcing game results
- **AI Audio Prompt (ElevenLabs)**: "Three game result announcements: 1) 'You Win!' - enthusiastic and celebratory; 2) 'You Lose!' - disappointed but encouraging, not too negative; 3) 'It's a Draw!' - neutral but interesting tone. All by same announcer voice, each about 1.5 seconds with clear enunciation."

**Ready/Go**
- Files:
  - `assets/audio/voice/ready.mp3`
  - `assets/audio/voice/go.mp3`
- Duration: 0.5-1 second each
- Format: MP3, 128-192kbps
- Description: Voice countdown for mini-games
- **AI Audio Prompt (ElevenLabs)**: "Two short game announcer clips: 1) 'Ready?' - questioning tone with anticipation; 2) 'Go!' - short, energetic command to start. Both by same announcer, 'Ready?' about 0.7 seconds and 'Go!' about 0.5 seconds. Enthusiastic delivery suitable for starting mini-games."

---

## 3. Font Assets

**Main Font**
- File: `assets/fonts/main-font.woff2`
- Description: Primary game text font, readable sans-serif
- Suggestion: Use Google Fonts like "Nunito" or "Quicksand" and convert to WOFF2

**Title Font**
- File: `assets/fonts/title-font.woff2`
- Description: Bold, decorative font for headings and titles
- Suggestion: Use Google Fonts like "Fredoka One" or "Bangers" and convert to WOFF2

**Score Font**
- File: `assets/fonts/score-font.woff2`
- Description: Monospace font for scores and numbers
- Suggestion: Use Google Fonts like "Press Start 2P" or "Roboto Mono" and convert to WOFF2

**Bitmap Font**
- Files:
  - `assets/fonts/bitmap-font.png`
  - `assets/fonts/bitmap-font.xml`
- Description: Specially formatted font for Phaser 3 text
- Process: Use tools like "Littera" or "BMFont" to generate from one of the above fonts

## Asset Creation Quick-Start Tips

1. **Using Google Fonts** instead of creating custom fonts:
   - Visit [Google Fonts](https://fonts.google.com/)
   - Download the suggested fonts (Nunito, Fredoka One, Press Start 2P)
   - Convert them to WOFF2 format using [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)

2. **Creating placeholder art** until you can make final versions:
   - Use [Figma](https://www.figma.com/) (free) to create simple shapes and UI elements
   - Export as PNG with transparency when needed
   - For buttons/UI: Create simple rounded rectangles with gradients

3. **For AI image generation**:
   - Use [Google ImageFX](https://aitestkitchen.withgoogle.com/tools/image-fx) or other AI tools
   - Copy the provided prompts and adjust as needed for your style preferences
   - Request 1:1 aspect ratio for icons, 16:9 for backgrounds
   - Add "game asset, vector style, transparent background" for clean results
   - Download at the highest resolution available and resize

4. **For AI audio generation**:
   - Use [ElevenLabs](https://elevenlabs.io/) for voice and sound effects
   - Use [Suno](https://www.suno.ai/) for background music
   - Copy the provided prompts and adjust as needed
   - Use sound editing software (like free [Audacity](https://www.audacityteam.org/)) to:
     - Trim beginnings/endings
     - Normalize volume levels
     - Create seamless loops when needed
     - Export as MP3 at 128-192kbps

5. **Creating sprite sheets**:
   - Create individual frames first
   - Arrange them in rows using an image editor
   - Save as PNG with transparency
   - For animation frames, maintain consistent sizes and spacing

6. **Asset naming and organization**:
   - Follow the exact file paths and names in this document
   - Keep the folder structure organized as outlined
   - Test assets in-game to ensure they load correctly

7. **Image optimization**:
   - Use tools like [TinyPNG](https://tinypng.com/) to compress images without quality loss
   - Aim for files under 1MB when possible
   - Use appropriate compression levels for different asset types