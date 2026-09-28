// src/components/simulations/PieChartStation.jsx
import React, { useState, useEffect } from 'react';
import './Stations.css';
import { DataDiagram } from '../DataDiagram.jsx';
import { SIMULATION_STATIONS } from '../../data/simulationData.js';
import { useAudio } from '../../hooks/useAudio.js';
import { AUDIO_MAP } from '../../utils/audioMap.js';

export default function PieChartStation({ onComplete, audioEnabled }) {
  const stationData = SIMULATION_STATIONS[3];
  const activities = stationData.activities;
  const [actIdx, setActIdx] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const act = activities[actIdx];
  const { narrate, sounds, stopAll } = useAudio(audioEnabled);

  useEffect(() => {
    setInputVal('');
    setConfirmed(false);
    setShowHint(false);
    stopAll();
    if (act?.audioDescKey && AUDIO_MAP[act.audioDescKey]) {
      narrate([AUDIO_MAP[act.audioDescKey]]);
    }
  }, [actIdx, act, narrate, stopAll]);

  function handleCheck() {
    stopAll();
    const num = parseFloat(inputVal);
    setConfirmed(true);
    if (num === act.targetD) {
      sounds.correct();
    } else {
      sounds.wrong();
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

  const isMatched = parseFloat(inputVal) === act.targetD;

  // Pie chart preview data
  const pieCategories = ['Target Sector', 'Other Responses'];
  const pieValues = act.pieMode === 'angle'
    ? [act.targetD, 360 - act.targetD]
    : act.pieMode === 'percent'
    ? [act.targetD, 100 - act.targetD]
    : [act.targetD, act.total - act.targetD];

  return (
    <div className="station-wrap">
      {/* Station Header */}
      <div className="station-header">
        <h3 className="station-title">
          <span>{stationData.icon}</span> {act.title}
        </h3>
        <div className="station-target-box">
          <span className="station-target-label">Target:</span>
          <span className="station-target-num">{act.ask}</span>
        </div>
      </div>

      {/* 2-Column Content */}
      <div className="station-grid-2col">
        {/* Left: Input & Calculation */}
        <div className="station-col-left">
          <div className="station-box">
            <div className="station-box-title">🥧 Inverse Solver Goal</div>
            <p className="station-desc-text">{act.desc}</p>
          </div>

          <div className="station-box">
            <div className="slider-group">
              <label className="slider-label-row" htmlFor="pie-input">
                <span>Enter Calculated {act.ask}:</span>
                <span style={{ color: 'var(--gold)' }}>Unit: {act.unit}</span>
              </label>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '6px' }}>
                <input
                  id="pie-input"
                  type="number"
                  placeholder={`e.g. ${act.targetD}`}
                  value={inputVal}
                  onChange={(e) => {
                    setInputVal(e.target.value);
                    setConfirmed(false);
                  }}
                  className="station-slider"
                  style={{
                    height: '42px',
                    padding: '8px 14px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1.5px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.2rem', color: 'var(--gold)' }}>
                  {act.unit}
                </span>
              </div>
            </div>
          </div>

          <div className="station-btn-row">
            <button className="btn btn-primary" onClick={handleCheck}>
              ✓ Verify Calculation
            </button>
            <button className="btn btn-outline btn-sm" onClick={handleHint}>
              💡 Hint
            </button>
            {confirmed && (
              <button className={isMatched ? "btn btn-green" : "btn btn-outline"} onClick={handleNext}>
                {actIdx < activities.length - 1 ? 'Next Activity ➔' : 'Complete All Stations! 🧪'}
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
              <span>{isMatched ? '🎉' : '⚠️'}</span>
              <span>
                {isMatched
                  ? `Brilliant inverse math! Correct answer is indeed ${act.targetD}${act.unit}!`
                  : `Not quite! Check the formula: ${act.hint}`}
              </span>
            </div>
          )}
        </div>

        {/* Right: Pie Chart Display */}
        <div className="station-col-right">
          <div className="station-box" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="station-box-title" style={{ alignSelf: 'flex-start' }}>
              🥧 Circle Graph Sector Model
            </div>
            <DataDiagram
              diagramData={{
                mode: 'pie',
                data: {
                  categories: pieCategories,
                  values: pieValues,
                  unit: act.unit
                },
                highlight: 0
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
