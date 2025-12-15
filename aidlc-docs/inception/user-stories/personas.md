# User Personas

## Project: Tic-Tac-Toe Game

---

## Persona 1: Casual Solo Player

| Attribute | Description |
|-----------|-------------|
| **Name** | Solo Player |
| **Type** | Single-player mode user |
| **Goal** | Quick entertainment during breaks, stress relief |
| **Behavior** | Plays short sessions, prefers Easy/Medium AI |
| **Frustrations** | Games that take too long to start, confusing interfaces |
| **Key Needs** | Fast game start, clear UI, satisfying feedback |

### Relevant Game Modes
- Single Player vs AI (Easy, Medium)
- Quick restart functionality
- Score tracking for personal progress

---

## Persona 2: Strategy Enthusiast

| Attribute | Description |
|-----------|-------------|
| **Name** | Strategy Player |
| **Type** | Competitive single-player user |
| **Goal** | Master the game, beat the unbeatable AI |
| **Behavior** | Plays Hard AI repeatedly, analyzes moves |
| **Frustrations** | Predictable AI, lack of challenge |
| **Key Needs** | Smart AI (minimax), game history to review moves |

### Relevant Game Modes
- Single Player vs AI (Hard)
- Game history review
- Move-by-move analysis

---

## Persona 3: Competitive Duo

| Attribute | Description |
|-----------|-------------|
| **Name** | Local Multiplayer |
| **Type** | Two players on same device |
| **Goal** | Fun competition with friend/family |
| **Behavior** | Takes turns, celebrates wins, rematch often |
| **Frustrations** | Unclear whose turn it is, accidental wrong moves |
| **Key Needs** | Clear turn indicator, player names, score tracking |

### Relevant Game Modes
- Two Player (Local)
- Player name input
- Score tracking (win/loss between players)
- Quick rematch

---

## Persona-Feature Matrix

| Feature | Solo Player | Strategy Player | Competitive Duo |
|---------|:-----------:|:---------------:|:---------------:|
| Single Player Mode | ✅ Primary | ✅ Primary | ❌ |
| Two Player Mode | ❌ | ❌ | ✅ Primary |
| Easy AI | ✅ | ❌ | ❌ |
| Medium AI | ✅ | ⚪ Occasional | ❌ |
| Hard AI | ⚪ Occasional | ✅ | ❌ |
| Score Tracking | ✅ | ✅ | ✅ |
| Game History | ⚪ Optional | ✅ | ⚪ Optional |
| Animations | ✅ | ⚪ Optional | ✅ |
| Sound Effects | ✅ | ⚪ Optional | ✅ |
| Responsive Design | ✅ | ✅ | ✅ |
| Retro/Pixel Art Style | ✅ | ✅ | ✅ |

**Legend**: ✅ Essential | ⚪ Nice-to-have | ❌ Not applicable

