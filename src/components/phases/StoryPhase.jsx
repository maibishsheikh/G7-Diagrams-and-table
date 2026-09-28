// src/components/phases/StoryPhase.jsx
import React, { useEffect } from 'react';
import './StoryPhase.css';
import { STORY_PANELS } from '../../data/storyContent.js';
import { StorySlideArt } from '../StorySlideArt.jsx';
import { useAudio } from '../../hooks/useAudio.js';
import { AUDIO_MAP } from '../../utils/audioMap.js';

export default function StoryPhase({ state, dispatch }) {
  const panelIndex = state?.storyPanel || 0;
  const panel = STORY_PANELS[panelIndex] || STORY_PANELS[0];
  const totalPanels = STORY_PANELS.length;
  const isLastPanel = panelIndex >= totalPanels - 1;

  const { narrate, stopAll } = useAudio(state?.audioEnabled ?? true);

  useEffect(() => {
    stopAll();
    const audioKey = panel.audioKey || `story_${panelIndex + 1}`;
    if (AUDIO_MAP[audioKey]) {
      const timer = setTimeout(() => narrate([AUDIO_MAP[audioKey]]), 300);
      return () => {
        clearTimeout(timer);
        stopAll();
      };
    }
  }, [panelIndex, panel.audioKey, narrate, stopAll]);

  function handleNext() {
    stopAll();
    dispatch({ type: 'NEXT_STORY_PANEL' });
  }

  function handlePrev() {
    stopAll();
    dispatch({ type: 'PREV_STORY_PANEL' });
  }

  function replayAudio() {
    stopAll();
    const audioKey = panel.audioKey || `story_${panelIndex + 1}`;
    if (AUDIO_MAP[audioKey]) {
      narrate([AUDIO_MAP[audioKey]]);
    }
  }

  return (
    <div className="story-wrap">
      <div className="story-container anim-slide-up" key={panelIndex}>
        {/* Top Progress Bar Row */}
        <div className="story-progress-bar-row">
          <div className="story-track">
            <div
              className="story-fill"
              style={{ width: `${((panelIndex + 1) / totalPanels) * 100}%` }}
            />
          </div>
          <span className="story-counter-text">{panelIndex + 1} / {totalPanels}</span>
        </div>

        {/* Main Horizontal Story Card */}
        <div className="story-main-card">
          {/* Left: Complete Image in full original frame */}
          <div className="story-image-section">
            <div className="story-image-container">
              <StorySlideArt type={panel.art} />
            </div>
          </div>

          {/* Right: Story Content */}
          <div className="story-content-section">
            <div className="story-title-row">
              <h2 className="story-title">{panel.title}</h2>
              <button
                className="btn btn-outline btn-sm story-audio-replay-btn"
                onClick={replayAudio}
                title="Replay Audio Narration"
              >
                🔊 Replay
              </button>
            </div>

            <p className="story-text">{panel.text}</p>

            {panel.highlight && (
              <div className="story-prompt-pill">
                <span className="prompt-icon">💡</span>
                <span className="prompt-text">{panel.highlight}</span>
              </div>
            )}

            {panel.bubble && (
              <div className="story-quote-box">
                <span className="quote-star">✨</span>
                <span className="quote-text">"{panel.bubble}"</span>
              </div>
            )}

            {/* Character Badge */}
            <div className="story-character-badge">
              <div className="character-avatar-circle">
                <span className="character-emoji">{panel.characterEmoji || '👦'}</span>
              </div>
              <span className="character-name">{panel.character || 'Leo & Emma'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Centered Dots + Action Buttons */}
        <div className="story-footer-nav">
          <div className="story-dots-center">
            {STORY_PANELS.map((_, i) => (
              <span
                key={i}
                className={`story-nav-dot ${i === panelIndex ? 'active' : ''} ${i < panelIndex ? 'done' : ''}`}
                onClick={() => {
                  stopAll();
                  if (i > panelIndex) {
                    for (let step = 0; step < i - panelIndex; step++) dispatch({ type: 'NEXT_STORY_PANEL' });
                  } else if (i < panelIndex) {
                    for (let step = 0; step < panelIndex - i; step++) dispatch({ type: 'PREV_STORY_PANEL' });
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Jump to panel ${i + 1}`}
              />
            ))}
          </div>

          <div className="story-nav-actions">
            {panelIndex > 0 && (
              <button
                type="button"
                id="story-prev-btn"
                className="btn btn-outline btn-sm story-prev-btn"
                onClick={handlePrev}
                aria-label="Previous story"
              >
                ← Back
              </button>
            )}
            <button
              type="button"
              id="story-next-btn"
              className="btn btn-primary btn-sm story-next-btn"
              onClick={handleNext}
              aria-label={isLastPanel ? 'Start Simulating' : 'Next story'}
            >
              {!isLastPanel ? 'Next →' : 'Simulate! 🧪'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
