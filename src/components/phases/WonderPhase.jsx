// src/components/phases/WonderPhase.jsx
import React, { useEffect } from 'react';
import './WonderPhase.css';
import Mascot from '../shared/Mascot.jsx';
import { useAudio } from '../../hooks/useAudio.js';
import { AUDIO_MAP } from '../../utils/audioMap.js';

const PARTICLES = ['📊', '📈', '📋', '🥧', '📶', '🔍', '⭐', '🦉', '✨', '360°'];

export default function WonderPhase({ state, dispatch }) {
  const { narrate, stopAll } = useAudio(state?.audioEnabled ?? true);

  useEffect(() => {
    if (AUDIO_MAP.wonder_1) {
      narrate([AUDIO_MAP.wonder_1]);
    }
    return () => stopAll();
  }, [narrate, stopAll]);

  function handleInvestigate() {
    stopAll();
    dispatch({ type: 'COMPLETE_PHASE', payload: 'wonder' });
    dispatch({ type: 'SET_PHASE', payload: 'story' });
  }

  return (
    <div className="wonder-wrap">
      {/* Floating particles */}
      <div className="wonder-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="wonder-particle"
            style={{
              left: `${5 + (i * 9.5) % 90}%`,
              top: `${5 + (i * 7.5) % 80}%`,
              animationDelay: `${i * 0.6}s`,
              fontSize: `${1.1 + (i % 3) * 0.4}rem`,
            }}
          >
            {p}
          </span>
        ))}
      </div>

      <div className="wonder-content anim-slide-up">
        {/* Main hook card */}
        <div className="wonder-card glass-card">
          <div className="wonder-stadium-icon" aria-hidden="true">📊</div>
          <h1 className="wonder-title headline">How Do Thousands of Numbers Become One Picture?</h1>

          <div className="wonder-number-display">
            <span className="number-display wonder-num">1 Glance = 1,000 Numbers! ➔ Tables, Graphs &amp; Pie Charts</span>
          </div>

          <div className="wonder-question-card">
            <p className="body-text wonder-q">
              Maya surveyed <strong className="wonder-em">120 classmates</strong> about their favourite sport. Instead of reading 120 answers one by one, she drew <span className="wonder-highlight">one bar graph</span> — and instantly saw the winner!
            </p>
            <p className="body-text wonder-q">
              How do data detectives turn messy piles of numbers into tables, pictographs, and charts that tell the whole story in one glance?
            </p>
          </div>

          {/* Mascot */}
          <div className="wonder-mascot-row">
            <Mascot mood="curious" message="Let's investigate how tables, graphs, and pie charts reveal hidden patterns!" size="sm" />
          </div>

          <button className="btn btn-primary btn-lg wonder-cta" onClick={handleInvestigate}>
            Start Investigation 🔍
          </button>
        </div>
      </div>
    </div>
  );
}
