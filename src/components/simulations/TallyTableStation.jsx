// src/components/simulations/TallyTableStation.jsx
import React, { useState, useEffect } from 'react';
import './Stations.css';
import { TallyMarks } from '../TallyMarks.jsx';
import { DataDiagram } from '../DataDiagram.jsx';
import { SIMULATION_STATIONS } from '../../data/simulationData.js';
import { useAudio } from '../../hooks/useAudio.js';
import { AUDIO_MAP } from '../../utils/audioMap.js';

export default function TallyTableStation({ onComplete, audioEnabled }) {
  const stationData = SIMULATION_STATIONS[0];
  const activities = stationData.activities;
  const [actIdx, setActIdx] = useState(0);
  const [tallyCount, setTallyCount] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const act = activities[actIdx];
  const { narrate, sounds, stopAll } = useAudio(audioEnabled);

  useEffect(() => {
    setTallyCount(0);
    setConfirmed(false);
    setShowHint(false);
    stopAll();
    if (act?.audioDescKey && AUDIO_MAP[act.audioDescKey]) {
      narrate([AUDIO_MAP[act.audioDescKey]]);
    }
  }, [actIdx, act, narrate, stopAll]);

  function handleConfirm() {
    stopAll();
    setConfirmed(true);
    if (tallyCount === act.target) {
      sounds.correct();
    } else {
      sounds.click();
    }
  }

  function handleHint() {
    setShowHint(true);
    if (act?.audioHintKey && AUDIO_MAP[act.audioHintKey]) {
      narrate([AUDIO_MAP[act.audioHintKey]]);
    }
  }

  function handleNext() {
    if (actIdx < activities.length - 1) {
      setActIdx(i => i + 1);
    } else {
      sounds.badge();
      onComplete && onComplete();
    }
  }

  const isMatched = tallyCount === act.target;

  // Build table data
  const tableValues = act.categories.map((c, i) => {
    if (i === act.targetIdx) return confirmed ? tallyCount : '?';
    return act.fixed[i];
  });

  return (
    <div className="station-wrap">
      {/* Station Header */}
      <div className="station-header">
        <h3 className="station-title">
          <span>{stationData.icon}</span> {act.title}
        </h3>
        <div className="station-target-box">
          <span className="station-target-label">Target:</span>
          <span className="station-target-num">{act.target} {act.unit} ({act.icon} {act.categories[act.targetIdx]})</span>
        </div>
      </div>

      {/* 2-Column Content */}
      <div className="station-grid-2col">
        {/* Left: Interactive Controls */}
        <div className="station-col-left">
          <div className="station-box">
            <div className="station-box-title">📋 Activity Description</div>
            <p className="station-desc-text">{act.desc}</p>
          </div>

          <div className="station-box">
            <div className="slider-group">
              <div className="slider-label-row">
                <span>Slide to Add Tallies ({act.categories[act.targetIdx]}):</span>
                <span style={{ color: 'var(--gold)' }}>{tallyCount} / {act.target}</span>
              </div>
              <input
                type="range"
                min="0"
                max={act.max}
                value={tallyCount}
                onChange={(e) => {
                  const parsed = parseInt(e.target.value, 10);
                  setTallyCount(isNaN(parsed) ? 0 : parsed);
                  setConfirmed(false);
                }}
                className="station-slider"
              />
            </div>

            <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center' }}>
              <TallyMarks count={tallyCount} />
            </div>
          </div>

          <div className="station-btn-row">
            <button className="btn btn-primary" onClick={handleConfirm}>
              ✓ Count Tallies &amp; Build Table
            </button>
            <button className="btn btn-outline btn-sm" onClick={handleHint}>
              💡 Hint
            </button>
            {confirmed && (
              <button className="btn btn-green" onClick={handleNext}>
                {actIdx < activities.length - 1 ? 'Next Activity ➔' : 'Complete Station A ✅'}
              </button>
            )}
          </div>

          {showHint && (
            <div className="station-feedback-banner hint anim-slide-up">
              <span>💡</span>
              <span>{act.hint}</span>
            </div>
          )}

          {confirmed && (
            <div className={`station-feedback-banner ${isMatched ? 'success' : 'hint'} anim-slide-up`}>
              <span>{isMatched ? '🎉' : 'ℹ️'}</span>
              <span>
                {isMatched
                  ? `Perfect match! ${tallyCount} ${act.unit} counted correctly into the frequency table!`
                  : `You recorded ${tallyCount} ${act.unit} (Target was ${act.target}). Frequency table updated!`}
              </span>
            </div>
          )}
        </div>

        {/* Right: Live Table Display */}
        <div className="station-col-right">
          <div className="station-box" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="station-box-title" style={{ alignSelf: 'flex-start' }}>
              📊 Frequency Table Output
            </div>
            <DataDiagram
              diagramData={{
                mode: 'table',
                data: {
                  categories: act.categories,
                  values: tableValues,
                  unit: act.unit
                },
                highlight: confirmed ? act.targetIdx : null
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
