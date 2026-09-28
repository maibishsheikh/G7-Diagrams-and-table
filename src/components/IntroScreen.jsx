// src/components/IntroScreen.jsx
import React from 'react';
import './IntroScreen.css';
import { generateSessionQuestions } from '../utils/shuffle.js';
import questionBank from '../data/questionBank.js';

const JOURNEY = [
  { num: '01', icon: '🔍', label: 'Wonder',   desc: 'Curiosity Spark' },
  { num: '02', icon: '📖', label: 'Story',    desc: 'The Grand Festival' },
  { num: '03', icon: '🧪', label: 'Simulate', desc: '4 Festival Labs' },
  { num: '04', icon: '🎮', label: 'Practice', desc: '10 Worlds & Bosses' },
  { num: '05', icon: '📓', label: 'Reflect',  desc: 'Mastery & Score' },
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
      {/* Top-Right Audio Toggle button */}
      <button
        className="nav-audio-btn intro-audio-btn"
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

      {/* Main Title & Subtitle */}
      <div className="intro-header-block">
        <h1 className="intro-title">
          <span className="text-orange">Data</span> <span className="text-white">Quest</span>
          <span className="intro-title-tag"> · The Oakridge Festival</span>
        </h1>
        <h2 className="intro-subtitle">
          Master Frequency Tables, Pictographs, Bar, Line &amp; Pie Charts
        </h2>
      </div>

      {/* Mascot Speech Bubble Row */}
      <div className="intro-mascot-row">
        <div className="intro-mascot-circle" aria-hidden="true">🦉</div>
        <div className="intro-speech-bubble">
          <span className="mascot-lead">Barnaby the Data Owl:</span> "Join Leo, Emma, Alex, and Maya at the Grand School Festival! Learn to turn messy tallies into crisp tables, pictographs, dual bar charts, and pie slices!" 📊📈
        </div>
      </div>

      {/* 5-Step Single-Row Journey Card */}
      <div className="journey-card">
        <div className="journey-card-title">YOUR LEARNING PATHWAY · CLICK ANY PHASE TO JUMP IN</div>
        <div className="journey-steps-row">
          {JOURNEY.map((j, i) => (
            <React.Fragment key={j.num}>
              <div
                className="journey-step-item clickable-step"
                onClick={() => dispatch({ type: 'SET_PHASE', payload: j.label.toLowerCase() === 'practice' ? 'play' : j.label.toLowerCase() })}
                role="button"
                tabIndex={0}
                title={`Open ${j.label} phase`}
              >
                <span className="journey-icon-circle">{j.icon}</span>
                <div className="journey-text-col">
                  <span className="journey-item-num">PHASE {j.num}</span>
                  <span className="journey-item-title">{j.label}</span>
                  <span className="journey-item-desc">{j.desc}</span>
                </div>
              </div>
              {i < JOURNEY.length - 1 && (
                <span className="journey-arrow-inline" aria-hidden="true">➔</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="intro-ctas">
        <button className="btn btn-primary intro-cta-main" onClick={startFresh}>
          🚀 Begin Journey!
        </button>
        {hasSaved && (
          <button className="btn btn-outline btn-sm intro-cta-resume" onClick={resumeSession}>
            ↩ Resume Session
          </button>
        )}
      </div>

      {/* Compact Feature Ticker / Pill Bar */}
      <div className="intro-feature-pills">
        <div className="intro-pill">
          <span className="intro-pill-icon">🎯</span>
          <span>100 Quest Questions</span>
        </div>
        <div className="intro-pill">
          <span className="intro-pill-icon">🧪</span>
          <span>4 Interactive Labs</span>
        </div>
        <div className="intro-pill">
          <span className="intro-pill-icon">📖</span>
          <span>8 Story Chapters</span>
        </div>
        <div className="intro-pill">
          <span className="intro-pill-icon">🔊</span>
          <span>Full Audio Narration</span>
        </div>
      </div>
    </div>
  );
}
