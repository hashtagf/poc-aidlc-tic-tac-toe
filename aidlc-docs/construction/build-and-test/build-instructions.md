# Build Instructions

## Project: Tic-Tac-Toe Game

---

## Prerequisites

| Requirement | Version | Notes |
|-------------|---------|-------|
| **Node.js** | 18.x or higher | [Download](https://nodejs.org/) |
| **npm** | 9.x or higher | Comes with Node.js |
| **OS** | Windows/macOS/Linux | Any modern OS |
| **Browser** | Chrome/Firefox/Safari/Edge | For testing |

---

## Build Steps

### 1. Navigate to Project Directory

```bash
cd tic-tac-toe
```

### 2. Install Dependencies

```bash
npm install
```

**Expected Output:**
```
added XX packages in Xs
```

**Dependencies installed:**
- `vue` - Vue.js 3 framework
- `vite` - Build tool
- `@vitejs/plugin-vue` - Vue plugin for Vite

### 3. Start Development Server

```bash
npm run dev
```

**Expected Output:**
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 4. Open in Browser

Open `http://localhost:5173` in your browser.

**Expected Result:**
- Game title "TIC-TAC-TOE" displays
- Retro pixel art styling visible
- Sound toggle button in top-right corner
- Two buttons: "VS COMPUTER" and "2 PLAYERS"

---

## Build for Production

### 1. Build the Project

```bash
npm run build
```

**Expected Output:**
```
vite v5.x.x building for production...
✓ XX modules transformed.
dist/index.html                   0.XX kB │ gzip: 0.XX kB
dist/assets/index-XXXXX.css       X.XX kB │ gzip: X.XX kB
dist/assets/index-XXXXX.js       XX.XX kB │ gzip: X.XX kB
✓ built in XXXms
```

### 2. Preview Production Build

```bash
npm run preview
```

**Expected Output:**
```
  ➜  Local:   http://localhost:4173/
  ➜  Network: use --host to expose
```

---

## Build Artifacts

After running `npm run build`:

```
tic-tac-toe/
└── dist/
    ├── index.html
    └── assets/
        ├── index-XXXXX.css
        └── index-XXXXX.js
```

---

## Troubleshooting

### Error: "npm command not found"
- **Cause**: Node.js is not installed or not in PATH
- **Solution**: Install Node.js from https://nodejs.org/

### Error: "ENOENT: no such file or directory, open 'package.json'"
- **Cause**: Not in the correct directory
- **Solution**: Run `cd tic-tac-toe` first

### Error: Port 5173 already in use
- **Cause**: Another process is using the port
- **Solution**: Kill the process or use a different port:
  ```bash
  npm run dev -- --port 3000
  ```

### Blank screen in browser
- **Cause**: JavaScript error
- **Solution**: Open browser DevTools (F12) → Console tab to see errors

