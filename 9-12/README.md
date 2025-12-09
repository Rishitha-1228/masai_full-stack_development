# Firebase Book Management Web App

A clean, responsive CRUD web app using **Firebase Firestore** with **real-time** updates.

## Features
- Add books (title, author, price, image URL)
- List books in 3-per-row responsive grid
- Update Author (inline via prompt)
- Delete book
- View Details (modal)
- Real-time sync via Firestore `onSnapshot`
- Optional seed script to insert 5–6 dummy books
- Client-side search (title/author)

## Tech
- HTML, CSS, Vanilla JS
- Firebase Firestore (compat SDK for simplicity)

## Setup
1. Create a Firebase project at https://console.firebase.google.com
2. Enable **Firestore** (test mode for local dev is fine).
3. Create `firebaseConfig.js` using your project config (already included here as an example).
4. Serve files (open `index.html` directly or use a local server).

## Run locally
Just open `index.html` in your browser.  
(Or `npx serve` / VSCode Live Server for CORS-safe local server.)

## Insert Dummy Data
Click **“Insert Dummy Books”** button in the sidebar (run once).  
You can remove the button before submission.

## Firestore Rules (Dev)
For quick testing you can use rules like:
