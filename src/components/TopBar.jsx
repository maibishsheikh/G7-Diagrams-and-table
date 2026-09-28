// src/components/TopBar.jsx
import React from 'react';

export default function TopBar({ audioEnabled, onToggleAudio, onHome, showHome = true }) {
  return (
    <>
      {/* Top-Left Action Bar: Home button only */}
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
      </div>

      {/* Top-Right Action Bar: Audio Toggle button */}
      <div className="header-top-right">
        <button
          className="nav-audio-btn"
          aria-label={audioEnabled ? 'Mute narration' : 'Unmute narration'}
          title={audioEnabled ? 'Mute narration' : 'Unmute narration'}
          onClick={onToggleAudio}
        >
          {audioEnabled ? '🔊' : '🔇'}
        </button>
      </div>
    </>
  );
}
