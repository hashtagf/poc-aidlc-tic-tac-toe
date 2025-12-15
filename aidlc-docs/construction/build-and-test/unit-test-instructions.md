# Unit Test Instructions

## Project: Tic-Tac-Toe Game

---

## Test Strategy

For this frontend-only game, testing is done through:
1. **Manual testing** - Primary testing method
2. **Browser DevTools** - Error checking
3. **Cross-browser testing** - Compatibility verification

---

## Manual Test Cases

### TC-001: Game Board Display
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open game in browser | Title "TIC-TAC-TOE" displayed |
| 2 | Click "VS COMPUTER" | Player setup screen appears |
| 3 | Click "START GAME" | 3x3 game board displayed |
| 4 | Verify all 9 cells visible | All cells are empty and clickable |

### TC-002: Single Player - Easy AI
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Start single player game (Easy) | Game starts, player is X |
| 2 | Click any cell | X mark appears with animation |
| 3 | Wait for AI move | O mark appears in random cell |
| 4 | Continue until game ends | Win/Draw detected correctly |

### TC-003: Single Player - Hard AI
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Start single player game (Hard) | Game starts |
| 2 | Play optimally | AI should never lose |
| 3 | Try to win | Should result in draw or AI win |

### TC-004: Two Player Mode
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Select "2 PLAYERS" | Player setup for both players |
| 2 | Enter player names | Names displayed in game |
| 3 | Take turns clicking cells | X and O alternate correctly |
| 4 | Complete game | Winner or draw announced |

### TC-005: Win Detection
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Get 3 X's in top row | Win detected, cells highlighted |
| 2 | Restart, get 3 in column | Win detected correctly |
| 3 | Restart, get 3 diagonal | Win detected correctly |

### TC-006: Score Tracking
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Win a game | Player 1 wins incremented to 1 |
| 2 | Lose a game | Player 2 wins incremented to 1 |
| 3 | Draw a game | Draws incremented to 1 |
| 4 | Click "PLAY AGAIN" | Scores persist |

### TC-007: Game History
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Make several moves | Move history updates after each move |
| 2 | Complete game | All moves recorded |
| 3 | Restart game | History cleared |

### TC-008: Sound Effects
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Ensure sound is ON | Speaker icon shows 🔊 |
| 2 | Make a move | Click sound plays |
| 3 | Win a game | Victory sound plays |
| 4 | Click sound toggle | Sound mutes (icon shows 🔇) |
| 5 | Make a move | No sound plays |

### TC-009: Responsive Design
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open in desktop browser | Game displays full size |
| 2 | Resize to tablet (768px) | Game resizes appropriately |
| 3 | Resize to mobile (375px) | Game fits on mobile screen |
| 4 | All buttons touchable | Buttons have adequate size |

### TC-010: Animations
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Place a mark | Pop-in animation plays |
| 2 | Win a game | Winning cells pulse animation |
| 3 | Navigate menus | Transitions are smooth |

---

## Browser Console Check

1. Open browser DevTools (F12)
2. Go to Console tab
3. Play through the game
4. **Expected**: No red error messages
5. **Acceptable**: Warnings about audio context (user interaction required)

---

## Cross-Browser Testing

Test the game in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)

---

## Test Results Template

```markdown
## Test Run: [Date]

### Environment
- Browser: [Name and version]
- OS: [Operating system]
- Screen Size: [Width x Height]

### Test Cases
- [ ] TC-001: Game Board Display - [PASS/FAIL]
- [ ] TC-002: Single Player Easy AI - [PASS/FAIL]
- [ ] TC-003: Single Player Hard AI - [PASS/FAIL]
- [ ] TC-004: Two Player Mode - [PASS/FAIL]
- [ ] TC-005: Win Detection - [PASS/FAIL]
- [ ] TC-006: Score Tracking - [PASS/FAIL]
- [ ] TC-007: Game History - [PASS/FAIL]
- [ ] TC-008: Sound Effects - [PASS/FAIL]
- [ ] TC-009: Responsive Design - [PASS/FAIL]
- [ ] TC-010: Animations - [PASS/FAIL]

### Issues Found
[List any issues]

### Overall Status: [PASS/FAIL]
```

