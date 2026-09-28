/* =========================================================================
   AUDIO CLEANUP SCRIPT
   Deletes any .mp3 file in public/assets/audio/ that is no longer
   referenced by src/audioMap.js, keeping the repo tidy after edits.
   Usage: npm run clean-audio
   ========================================================================= */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { AUDIO_MAP } from '../src/audioMap.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../public/assets/audio');

function slugify(key) {
  return key.replace(/[^a-z0-9_-]/gi, '_').toLowerCase();
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.log('No audio directory found — nothing to clean.');
    return;
  }

  const validFiles = new Set(Object.keys(AUDIO_MAP).map(k => `${slugify(k)}.mp3`));
  const existing = fs.readdirSync(OUT_DIR).filter(f => f.endsWith('.mp3'));

  let removed = 0;
  for (const file of existing) {
    if (!validFiles.has(file)) {
      fs.unlinkSync(path.join(OUT_DIR, file));
      console.log(`🗑 Removed orphaned file: ${file}`);
      removed++;
    }
  }

  console.log(`Done. ${removed} orphaned file(s) removed, ${validFiles.size} active file(s) kept.`);
}

main();
