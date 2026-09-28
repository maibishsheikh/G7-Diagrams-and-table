// src/components/TopBar.jsx
import React from 'react';

export default function TopBar({ audioEnabled, onToggleAudio, onHome, showHome = true }) {
  return (
    <div className="header-top-left">
      {showHome && (
        <button
          className="home-btn"
          aria-label="Go to home screen"
          onClick={onHome}
        >
          <span>🏠</span>
          <span className="home-text">Home</span>
        </button>
      )}
      <button
        className={`top-left-audio-btn ${!showHome ? 'top-left-alone' : ''}`}
        aria-label={audioEnabled ? 'Mute narration' : 'Unmute narration'}
        title={audioEnabled ? 'Mute narration' : 'Unmute narration'}
        onClick={onToggleAudio}
      >
        {audioEnabled ? '🔊' : '🔇'}
      </button>
    </div>
  );
}
