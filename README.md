# Diagrams & Tables Quest — Grade 7 Maths

An interactive Grade 7 lesson on **Diagrams and Tables** — tally marks & frequency
tables, pictographs, bar graphs, double bar graphs, line graphs, and pie charts —
built on the exact same UI/UX, layout, viewport, phase architecture (Wonder →
Story → Simulate → Practice → Reflect), colour system, and audio pipeline as the
original Circumference module, with entirely new content, activities, and
illustrations for the new topic.

## What changed vs. the original module
- **Content only.** Every phase, component, colour token, font, button style,
  spacing scale, and the 5‑phase capsule nav is unchanged.
- **New topic content**: story slides, simulation stations & activities,
  procedural practice questions, and the 10 practice "worlds" are all new and
  specific to diagrams & tables.
- **New illustrations**: the story slides now use crisp inline SVG diagrams
  (tables, pictographs, bar/line/pie charts) instead of static PNG images —
  this keeps the visuals perfectly on‑topic and avoids shipping any image
  assets.
- **Station activities were redesigned** (not just re-skinned) while keeping
  the same three‑station teach → try‑it‑yourself → apply/reverse‑engineer flow:
  - Station 1 — Tally & Frequency Table Lab
  - Station 2 — Graph Builder Lab (bar graph, pictograph, double bar graph)
  - Station 3 — Pie Chart & Inverse Solver Lab

## Running it locally
```bash
npm install
npm run dev
```
Then open the printed local URL (defaults to http://localhost:3000).

## Audio / narration
The app narrates itself using the same architecture as the original module:
- `src/audioMap.js` holds the exact narration text + style for every
  spoken line, plus the expected filename of a pre-generated `.mp3`.
- `src/audio.js` first tries to play that `.mp3` file. If it isn't present
  (which is the case out of the box), it **automatically falls back to the
  browser's built-in speech synthesis**, so narration works immediately with
  zero setup.
- `scripts/generate_audio.js` is the offline pipeline that calls the
  ElevenLabs API (voice **Alice**, `eleven_multilingual_v2`) to pre-render
  every line in `audioMap.js` into real `.mp3` files under
  `public/assets/audio/`, for zero-latency, higher-quality narration.

To generate the real ElevenLabs audio files:
```bash
npm install
npm run generate-audio
```

### ⚠️ About the API key you shared
Your ElevenLabs API key has been placed in **`.env.local`** so
`npm run generate-audio` works immediately on your machine. A few important
notes:
- `.env.local` is only read by the Node.js script above; it is **never**
  bundled into the browser app, so visitors to the deployed site cannot see it.
- `.env.local` is listed in `.gitignore`, so it won't be committed if you
  push this project to GitHub — but **this zip file itself contains the raw
  key**, so treat the zip the same way you'd treat a password: don't upload
  it anywhere public, and don't attach it to a public support ticket, chat, or
  repo.
- If you ever paste this project into a public repository, chat, or hosting
  dashboard, please **rotate/regenerate the key in your ElevenLabs account
  first**, and only add the new key as a private environment variable there —
  never hard-code it into a file that ships to the browser.

## Rebuilding for deployment
```bash
npm run build
```
Outputs a static site into `dist/`, ready to host anywhere.
