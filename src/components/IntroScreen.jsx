// src/components/IntroScreen.jsx
import React from 'react';
import './IntroScreen.css';
import { generateSessionQuestions } from '../utils/shuffle.js';
import questionBank from '../data/questionBank.js';

const JOURNEY = [
  { num: '01', icon: '🔍', label: 'Wonder',   desc: 'Spark your curiosity' },
  { num: '02', icon: '📖', label: 'Story',    desc: 'How diagrams tell stories' },
  { num: '03', icon: '🧪', label: 'Simulate', desc: '4 interactive labs' },
  { num: '04', icon: '🎮', label: 'Practice', desc: '10 worlds & bosses' },
  { num: '05', icon: '📓', label: 'Reflect',  desc: 'Review & scorecard' },
];

export default function IntroScreen({ state, dispatch }) {
  const hasSaved = state?.phaseComplete && Object.values(state.phaseComplete).some(Boolean);

  function startFresh() {
    dispatch({ type: 'LOAD_QUESTIONS', payload: generateSessionQuestions(questionBank) });
    dispatch({ type: 'SET_PHASE', payload: 'wonder' });
  }

  function resumeSession() {
    dispatch({ type: 'SET_PHASE', payload: state.savedPhase || 'wonder' });
  }

  return (
    <div className="intro-wrap">
      {/* Top-Left Audio Toggle button present on Intro screen */}
      <button
        className="top-left-audio-btn intro-audio-btn"
        onClick={() => dispatch({ type: 'TOGGLE_AUDIO' })}
        aria-label={state?.audioEnabled ? 'Mute audio' : 'Unmute audio'}
        title={state?.audioEnabled ? 'Mute audio' : 'Unmute audio'}
      >
        {state?.audioEnabled ? '🔊' : '🔇'}
      </button>

      {/* Top Badge */}
      <div className="intro-top-badge">
        ✨ Grade 7 Maths Curriculum · Diagrams, Tables &amp; Data Handling
      </div>

      {/* Main Title */}
      <h1 className="intro-title">
        <span className="text-orange">Data</span> <span className="text-white">Quest</span>
      </h1>
      <h2 className="intro-subtitle">Diagrams &amp; Tables Quest · Master Frequency Tables, Bar, Line &amp; Pie Charts</h2>

      {/* Mascot Row */}
      <div className="intro-mascot-row">
        <div className="intro-mascot-circle">🦉</div>
        <div className="intro-speech-bubble">
          Hi! I'm Barnaby the Data Owl. Ready to turn scattered numbers<br />into clear diagrams, tables, and pie charts? 📊📈
        </div>
      </div>

      {/* Description */}
      <p className="intro-desc">
        Learn how to count tally marks, build frequency tables, decode pictographs, compare categories with single &amp; double bar graphs, track line trends, and calculate central angles for circle graphs!
      </p>

      {/* Journey Card */}
      <div className="journey-card">
        <div className="journey-card-title">YOUR LEARNING JOURNEY · CLICK ANY PHASE TO START</div>

        <div className="journey-steps-container">
          <div className="journey-row top-row">
            {JOURNEY.slice(0, 3).map((j, i) => (
              <React.Fragment key={j.num}>
                <div
                  className="journey-step-item clickable-step"
                  onClick={() => dispatch({ type: 'SET_PHASE', payload: j.label.toLowerCase() === 'practice' ? 'play' : j.label.toLowerCase() })}
                  role="button"
                  tabIndex={0}
                  title={`Click to open ${j.label} phase`}
                >
                  <span className="journey-icon-circle">{j.icon}</span>
                  <div className="journey-text-col">
                    <span className="journey-item-title">{j.label}</span>
                    <span className="journey-item-desc">{j.desc}</span>
                  </div>
                </div>
                <span className={`journey-arrow ${i === 2 ? 'fade-arrow' : ''}`}>→</span>
              </React.Fragment>
            ))}
          </div>

          <div className="journey-row bottom-row">
            {JOURNEY.slice(3, 5).map((j, i) => (
              <React.Fragment key={j.num}>
                <div
                  className="journey-step-item clickable-step"
                  onClick={() => dispatch({ type: 'SET_PHASE', payload: j.label.toLowerCase() === 'practice' ? 'play' : j.label.toLowerCase() })}
                  role="button"
                  tabIndex={0}
                  title={`Click to open ${j.label} phase`}
                >
                  <span className="journey-icon-circle">{j.icon}</span>
                  <div className="journey-text-col">
                    <span className="journey-item-title">{j.label}</span>
                    <span className="journey-item-desc">{j.desc}</span>
                  </div>
                </div>
                {i === 0 && <span className="journey-arrow">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="intro-ctas">
        <button className="btn btn-primary btn-lg intro-cta-main" onClick={startFresh}>
          🚀 Begin Your Journey!
        </button>
        {hasSaved && (
          <button className="btn btn-outline" onClick={resumeSession} style={{ marginTop: '10px' }}>
            ↩ Resume Session
          </button>
        )}
      </div>

      {/* Bottom Cards */}
      <div className="intro-bottom-cards">
        <div className="bottom-card">
          <div className="bottom-card-icon" style={{ color: '#ff6b6b' }}>🎯</div>
          <div>100 Questions</div>
        </div>
        <div className="bottom-card">
          <div className="bottom-card-icon" style={{ color: '#feca57' }}>📊</div>
          <div>10 Data Worlds</div>
        </div>
        <div className="bottom-card">
          <div className="bottom-card-icon" style={{ color: '#66bb6a' }}>✨</div>
          <div>Badges &amp; XP</div>
        </div>
      </div>
    </div>
  );
}
