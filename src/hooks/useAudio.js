// src/hooks/useAudio.js
// Audio Engine supporting static pre-recorded MP3s, Web Audio SFX, and SpeechSynthesis fallback
import { useRef, useCallback, useEffect } from 'react';
import { AUDIO_MAP } from '../utils/audioMap.js';

let ttsVoice = null;
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  const loadVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return;
    ttsVoice =
      voices.find((v) => /female|alice|zira|samantha|victoria|google us english/i.test(v.name)) ||
      voices.find((v) => v.lang && v.lang.startsWith('en')) ||
      voices[0];
  };
  window.speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();
}

export function useAudio(audioEnabled = true) {
  const currentAudioRef = useRef(null);
  const narrateIdRef    = useRef(0);

  useEffect(() => {
    if (!audioEnabled) {
      stopAll();
    }
  }, [audioEnabled]);

  const stopAll = useCallback(() => {
    narrateIdRef.current++;
    if (currentAudioRef.current) {
      try {
        currentAudioRef.current.pause();
        currentAudioRef.current.currentTime = 0;
        currentAudioRef.current.onended = null;
        currentAudioRef.current.onerror = null;
      } catch (e) {}
      currentAudioRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  }, []);

  const playSegment = useCallback(async (seg, expectedId) => {
    if (!audioEnabled || narrateIdRef.current !== expectedId || !seg) return;

    // Check if seg has an audio file or matches AUDIO_MAP
    let audioFile = seg.file;
    if (!audioFile && seg.audioKey && AUDIO_MAP[seg.audioKey]) {
      audioFile = AUDIO_MAP[seg.audioKey].file;
    }

    if (audioFile) {
      const played = await new Promise((resolve) => {
        try {
          const audio = new Audio(audioFile);
          currentAudioRef.current = audio;
          audio.onended = () => {
            if (currentAudioRef.current === audio) currentAudioRef.current = null;
            resolve(true);
          };
          audio.onerror = () => {
            if (currentAudioRef.current === audio) currentAudioRef.current = null;
            resolve(false);
          };
          const p = audio.play();
          if (p !== undefined) {
            p.catch(() => resolve(false));
          }
        } catch (e) {
          resolve(false);
        }
      });
      if (played || narrateIdRef.current !== expectedId) return;
    }

    // Fallback to SpeechSynthesis if text is present
    const textToSpeak = typeof seg === 'string' ? seg : seg.text;
    if (!textToSpeak || !audioEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    await new Promise((resolve) => {
      if (narrateIdRef.current !== expectedId) return resolve();
      try {
        const utter = new SpeechSynthesisUtterance(textToSpeak);
        if (ttsVoice) utter.voice = ttsVoice;
        utter.rate = 1.0;
        utter.pitch = 1.05;
        utter.volume = 1;
        utter.onend = () => resolve();
        utter.onerror = () => resolve();
        window.speechSynthesis.speak(utter);
      } catch (e) {
        resolve();
      }
    });
  }, [audioEnabled]);

  const narrate = useCallback(async (segments) => {
    if (!audioEnabled || !segments) return;
    stopAll();
    const currentId = ++narrateIdRef.current;
    const segList = Array.isArray(segments) ? segments : [segments];

    for (const seg of segList) {
      if (narrateIdRef.current !== currentId || !audioEnabled) break;
      await playSegment(seg, currentId);
      if (narrateIdRef.current !== currentId || !audioEnabled) break;
      await new Promise((r) => setTimeout(r, 160));
    }
  }, [audioEnabled, stopAll, playSegment]);

  // Tone-based sound synthesizer for instant zero-latency feedback
  const playTone = useCallback((frequencies, durations) => {
    if (!audioEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      let offset = 0;
      frequencies.forEach((freq, i) => {
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.22, ctx.currentTime + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + offset + (durations[i] || 150) / 1000 + 0.15);
        osc.start(ctx.currentTime + offset);
        osc.stop(ctx.currentTime + offset + (durations[i] || 150) / 1000 + 0.15);
        offset += (durations[i] || 150) / 1000;
      });
    } catch (e) { /* ignore WebAudio errors */ }
  }, [audioEnabled]);

  const sounds = {
    correct: () => playTone([880, 1100, 1320], [100, 100, 200]),
    wrong:   () => playTone([220, 180], [180, 220]),
    badge:   () => playTone([523, 659, 784, 1047], [90, 90, 90, 260]),
    streak:  () => playTone([440, 880, 1100], [70, 70, 180]),
    levelUp: () => playTone([523, 659, 784, 1047, 1319], [60, 60, 60, 60, 260]),
    click:   () => playTone([440], [50]),
    defeat:  () => playTone([300, 240, 180], [120, 120, 260]),
  };

  return {
    narrate,
    stopAll,
    sounds,
    say:       (text) => ({ text, style: 'statement' }),
    ask:       (text) => ({ text, style: 'question' }),
    cheer:     (text) => ({ text, style: 'celebration' }),
    emphasize: (text) => ({ text, style: 'emphasis' }),
    think:     (text) => ({ text, style: 'thinking' }),
    instruct:  (text) => ({ text, style: 'instruction' }),
    encourage: (text) => ({ text, style: 'encouragement' }),
  };
}

export default useAudio;
