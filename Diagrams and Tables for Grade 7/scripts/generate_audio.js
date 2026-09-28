/* =========================================================================
   OFFLINE AUDIO GENERATION SCRIPT
   Reads every entry in src/audioMap.js and requests narration audio from
   ElevenLabs using the "Alice" voice (Xb7hH8MSUJpSbSDYk0k2), saving each
   result as a static .mp3 into public/assets/audio/.
   ========================================================================= */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { AUDIO_MAP } from '../src/audioMap.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const API_KEY = process.env.ELEVENLABS_API_KEY || process.env.VITE_ELEVENLABS_API_KEY;
const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2'; // Alice (Clear, Engaging Educator)
const MODEL_ID = 'eleven_multilingual_v2';
const OUT_DIR = path.resolve(__dirname, '../public/assets/audio');

const STYLE_SETTINGS = {
  celebration:   { stability: 0.12, similarity_boost: 0.45, style: 0.75, use_speaker_boost: true },
  encouragement: { stability: 0.16, similarity_boost: 0.50, style: 0.65, use_speaker_boost: true },
  question:      { stability: 0.20, similarity_boost: 0.55, style: 0.55, use_speaker_boost: true },
  emphasis:      { stability: 0.16, similarity_boost: 0.50, style: 0.60, use_speaker_boost: true },
  thinking:      { stability: 0.24, similarity_boost: 0.60, style: 0.35, use_speaker_boost: true },
  statement:     { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true }
};

function slugify(key) {
  return key.replace(/[^a-z0-9_-]/gi, '_').toLowerCase();
}

async function generateOne(key, entry) {
  const voiceSettings = STYLE_SETTINGS[entry.style] || STYLE_SETTINGS.statement;
  const outPath = path.join(OUT_DIR, `${slugify(key)}.mp3`);

  // Skip if file already exists and is non-empty (>1000 bytes)
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 1000) {
    console.log(`⏩ Skipping existing ${slugify(key)}.mp3`);
    return;
  }

  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
    method: 'POST',
    headers: {
      'xi-api-key': API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: entry.text,
      model_id: MODEL_ID,
      voice_settings: voiceSettings
    })
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => res.statusText);
    throw new Error(`ElevenLabs request failed for "${key}": ${res.status} ${errText}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outPath, buffer);
  console.log(`✔ Saved ${outPath} (${buffer.length} bytes)`);
}

async function main() {
  if (!API_KEY) {
    console.error('❌ Missing ELEVENLABS_API_KEY. Add it to .env.local and re-run.');
    process.exit(1);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const entries = Object.entries(AUDIO_MAP);
  console.log(`Generating ${entries.length} narration clips with ElevenLabs voice "Alice" (${VOICE_ID})...`);

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < entries.length; i++) {
    const [key, entry] = entries[i];
    process.stdout.write(`[${i + 1}/${entries.length}] "${key}" ... `);
    try {
      await generateOne(key, entry);
      successCount++;
    } catch (err) {
      console.error(`\n✖ ${err.message}`);
      failCount++;
    }
    // Rate-limiting delay: 200ms
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\n🎉 Done! Successfully processed ${successCount} clips (${failCount} failures).`);
}

main();
