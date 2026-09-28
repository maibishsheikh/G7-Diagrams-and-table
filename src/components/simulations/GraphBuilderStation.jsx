// src/components/simulations/GraphBuilderStation.jsx
import React, { useState, useEffect } from 'react';
import './Stations.css';
import { DataDiagram } from '../DataDiagram.jsx';
import { SIMULATION_STATIONS } from '../../data/simulationData.js';
import { useAudio } from '../../hooks/useAudio.js';
import { AUDIO_MAP } from '../../utils/audioMap.js';

export default function GraphBuilderStation({ onComplete, audioEnabled }) {
  const stationData = SIMULATION_STATIONS[1];
  const activities = stationData.activities;
  const [actIdx, setActIdx] = useState(0);
  const [val, setVal] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const act = activities[actIdx];
  const { narrate, sounds, stopAll } = useAudio(audioEnabled);

  useEffect(() => {
    setVal(0);
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
    if (val === act.target) {
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

  const isMatched = val === act.target;

  // Build diagram data
  const values = act.categories.map((c, i) => {
    if (i === act.targetIdx) return val;
    return act.fixed[i];
  });

  const diagramPayload = act.type === 'bar' ? {
    mode: 'bar',
    data: {
      categories: act.categories,
      values: values,
      unit: act.unit
    },
    highlight: act.targetIdx
  } : {
    mode: 'pictograph',
    data: {
      categories: act.categories,
      values: values,
      unit: act.unit,
      symbol: act.icon,
      scale: act.scale
    },
    highlight: act.targetIdx
  };

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
        {/* Left: Controls */}
        <div className="station-col-left">
          <div className="station-box">
            <div className="station-box-title">📊 Activity Goal</div>
            <p className="station-desc-text">{act.desc}</p>
          </div>

          <div className="station-box">
            <div className="slider-group">
              <div className="slider-label-row">
                <span>Drag to Adjust {act.categories[act.targetIdx]}:</span>
                <span style={{ color: 'var(--gold)' }}>
                  {val} {act.unit} {act.scale ? `(${Math.round(val / act.scale)} symbols)` : ''}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={act.type === 'pictograph' ? act.maxSymbols * act.scale : act.max}
                step={act.type === 'pictograph' ? act.scale : 1}
                value={val}
                onChange={(e) => {
                  setVal(parseInt(e.target.value));
                  setConfirmed(false);
                }}
                className="station-slider"
              />
            </div>
          </div>

          <div className="station-btn-row">
            <button className="btn btn-primary" onClick={handleConfirm}>
              ✓ Verify Graph Alignment
            </button>
            <button className="btn btn-outline btn-sm" onClick={handleHint}>
              💡 Hint
            </button>
            {confirmed && (
              <button className="btn btn-green" onClick={handleNext}>
                {actIdx < activities.length - 1 ? 'Next Activity ➔' : 'Complete Station B ✅'}
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
                  ? `Spot on! The ${act.type} graph aligns with ${act.target} ${act.unit}!`
                  : `Current value is ${val} ${act.unit}. Target is ${act.target} ${act.unit}.`}
              </span>
            </div>
          )}
        </div>

        {/* Right: Live Graph Display */}
        <div className="station-col-right">
          <div className="station-box" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="station-box-title" style={{ alignSelf: 'flex-start' }}>
              📈 Interactive Graph Output
            </div>
            <DataDiagram diagramData={diagramPayload} />
          </div>
        </div>
      </div>
    </div>
  );
}
