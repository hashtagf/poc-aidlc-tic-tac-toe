# 🎮 Tic-Tac-Toe - Retro Pixel Edition

A classic Tic-Tac-Toe game with a nostalgic pixel art aesthetic, built with Vue.js 3.

![Retro Pixel Art Style](https://img.shields.io/badge/Style-Retro%20Pixel%20Art-green)
![Vue.js 3](https://img.shields.io/badge/Vue.js-3.x-brightgreen)
![Vite](https://img.shields.io/badge/Vite-5.x-purple)

## ✨ Features

### Game Modes
- 🤖 **Single Player** - Play against AI with 3 difficulty levels
- 👥 **Two Players** - Local multiplayer on the same device

### AI Difficulty Levels
- 😊 **Easy** - Random moves (great for beginners)
- 🤔 **Medium** - Basic strategy (blocks and takes wins)
- 🤯 **Hard** - Unbeatable AI using minimax algorithm

### Features
- 📊 Score tracking (wins, losses, draws)
- 📜 Game history with move-by-move record
- 🎨 Retro pixel art design with Game Boy-inspired colors
- ✨ Smooth animations for moves and wins
- 🔊 8-bit style sound effects
- 📱 Fully responsive (mobile + desktop)
- 👤 Custom player names

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to the game directory
cd tic-tac-toe

# Install dependencies
npm install

# Start development server
npm run dev
```

The game will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🎮 How to Play

1. **Select Game Mode**
   - Choose "VS COMPUTER" for single player
   - Choose "2 PLAYERS" for local multiplayer

2. **Enter Player Names** (optional)
   - Customize player names for personalization

3. **Select Difficulty** (single player only)
   - Easy, Medium, or Hard

4. **Play the Game**
   - Click/tap on empty cells to place your mark
   - First player uses X, second uses O
   - Get 3 in a row to win!

5. **Track Your Score**
   - Scores persist across games in the same session

## 🎨 Design

The game features a **retro pixel art aesthetic** inspired by:
- Classic Game Boy color palette (greens and creams)
- 8-bit typography using "Press Start 2P" font
- Pixelated animations and visual effects
- Synthesized 8-bit sound effects

## 🏗️ Project Structure

```
tic-tac-toe/
├── src/
│   ├── main.js              # App entry point
│   ├── App.vue              # Main game component
│   ├── assets/
│   │   └── styles/
│   │       └── main.css     # Pixel art styling
│   ├── components/
│   │   ├── MainMenu.vue     # Mode selection
│   │   ├── PlayerSetup.vue  # Name & difficulty setup
│   │   ├── GameBoard.vue    # 3x3 game grid
│   │   ├── GameCell.vue     # Individual cell
│   │   ├── ScoreBoard.vue   # Win/loss/draw tracker
│   │   ├── GameHistory.vue  # Move history list
│   │   ├── GameResult.vue   # Win/draw announcement
│   │   └── SoundToggle.vue  # Mute button
│   └── composables/
│       ├── useGameState.js  # Core game logic
│       ├── useAI.js         # AI opponent logic
│       ├── useScore.js      # Score management
│       ├── useHistory.js    # Move history
│       └── useSound.js      # Audio effects
├── index.html
├── package.json
└── vite.config.js
```

## 🤖 AI Implementation

### Easy Mode
- Completely random move selection
- No strategy whatsoever

### Medium Mode
1. Check for winning move → take it
2. Check for blocking move → block it
3. Prefer center position
4. Prefer corner positions
5. Take any available edge

### Hard Mode (Minimax)
- Implements the minimax algorithm with alpha-beta pruning
- Evaluates all possible game states
- Guarantees optimal play (never loses)
- Will always win or draw

## 📱 Responsive Design

The game is fully responsive and works on:
- 📱 Mobile phones (320px+)
- 📱 Tablets
- 💻 Desktops
- 🖥️ Large screens

## 🎵 Sound Effects

The game uses the Web Audio API to generate 8-bit style sounds:
- **Move sound** - Short blip when placing a mark
- **Win sound** - Victory fanfare (ascending notes)
- **Draw sound** - Descending notes
- **Error sound** - Low buzz for invalid moves
- **Click sound** - Button feedback

Sounds can be toggled on/off using the speaker button.

## 📄 License

This project was created as part of the AI-DLC (AI-Driven Development Life Cycle) demonstration.

---

**Enjoy the game! 🎮**

