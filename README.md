# The React Quiz

A timed React fundamentals quiz built to show predictable state management, async data loading, scoring, and responsive UI behavior.

## Recruiter Quick View

- **What to look for:** `useReducer` state transitions, async public JSON loading, timer-driven UI updates, answer feedback, persisted high score, and conditional rendering.
- **Production:** Built for Vercel from the `main` branch.
- **Data:** Questions are served from `public/questions.json`, so the deployed app works without a local JSON server.

## Features

- Loads quiz questions from a static JSON file.
- Manages loading, ready, active, finished, and error states with a reducer.
- Tracks score, progress, answer selection, timer, and high score.
- Persists high score in localStorage.
- Responsive recruiter-facing header and start screen.
- Clean result summary with restart flow.

## Tech Stack

- React 19
- Create React App
- `useReducer`
- localStorage
- Static JSON data
- CSS responsive layout

## Run Locally

```bash
npm install
npm start
```

Build for production:

```bash
npm run build
```

## Notes

The original course-style JSON-server dependency is no longer required for the deployed experience. The app now reads from `public/questions.json`, which is included in the production build and works cleanly on Vercel.
