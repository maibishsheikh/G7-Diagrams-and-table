// src/components/simulations/TrendLineStation.jsx
import React, { useState, useEffect } from 'react';
import './Stations.css';
import { DataDiagram } from '../DataDiagram.jsx';
import { SIMULATION_STATIONS } from '../../data/simulationData.js';
import { useAudio } from '../../hooks/useAudio.js';
import { AUDIO_MAP } from '../../utils/audioMap.js';

export default function TrendLineStation({ onComplete, audioEnabled }) {
  const stationData = SIMULATION_STATIONS[2];
  const activities = stationData.activities;
  const [actIdx, setActIdx] = useState(0);
  const [valA, setValA] = useState(0);
  const [valB, setValB] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const act = activities[actIdx];
  const { narrate, sounds, stopAll } = useAudio(audioEnabled);

  useEffect(() => {
    setValA(0);
    setValB(0);
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
    if (valA === act.targetA && valB === act.targetB) {
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

  const isMatched = valA === act.targetA && valB === act.targetB;

  const seriesA = act.categories.map((c, i) => (i === act.targetIdx ? valA : act.fixedA[i]));
  const seriesB = act.categories.map((c, i) => (i === act.targetIdx ? valB : act.fixedB[i]));

  const seriesNames = actIdx === 0 ? ['Boys', 'Girls'] : ['Term 1', 'Term 2'];

  return (
    <div className="station-wrap">
      {/* Station Header */}
      <div className="station-header">
        <h3 className="station-title">
          <span>{stationData.icon}</span> {act.title}
        </h3>
        <div className="station-target-box">
          <span className="station-target-label">Targets:</span>
          <span className="station-target-num">
            {seriesNames[0]}: {act.targetA} · {seriesNames[1]}: {act.targetB} ({act.categories[act.targetIdx]})
          </span>
        </div>
      </div>

      {/* 2-Column Content */}
      <div className="station-grid-2col">
        {/* Left: Dual Sliders */}
        <div className="station-col-left">
          <div className="station-box">
            <div className="station-box-title">📶 Double Bar Comparison Goal</div>
            <p className="station-desc-text">{act.desc}</p>
          </div>

          <div className="station-box">
            <div className="slider-group">
              <div className="slider-label-row">
                <span style={{ color: '#38bdf8' }}>{seriesNames[0]} ({act.categories[act.targetIdx]}):</span>
                <span style={{ color: '#38bdf8', fontWeight: 900 }}>{valA} / {act.targetA} {act.unit}</span>
              </div>
              <input
                type="range"
                min="0"
                max={act.max}
                value={valA}
                onChange={(e) => {
                  setValA(parseInt(e.target.value));
                  setConfirmed(false);
                }}
                className="station-slider"
                style={{ accentColor: '#38bdf8' }}
              />
            </div>

            <div className="slider-group" style={{ marginTop: 12 }}>
              <div className="slider-label-row">
                <span style={{ color: '#f472b6' }}>{seriesNames[1]} ({act.categories[act.targetIdx]}):</span>
                <span style={{ color: '#f472b6', fontWeight: 900 }}>{valB} / {act.targetB} {act.unit}</span>
              </div>
              <input
                type="range"
                min="0"
                max={act.max}
                value={valB}
                onChange={(e) => {
                  setValB(parseInt(e.target.value));
                  setConfirmed(false);
                }}
                className="station-slider"
                style={{ accentColor: '#f472b6' }}
              />
            </div>
          </div>

          <div className="station-btn-row">
            <button className="btn btn-primary" onClick={handleConfirm}>
              ✓ Verify Dual Bar Alignment
            </button>
            <button className="btn btn-outline btn-sm" onClick={handleHint}>
              💡 Hint
            </button>
            {confirmed && (
              <button className="btn btn-green" onClick={handleNext}>
                {actIdx < activities.length - 1 ? 'Next Activity ➔' : 'Complete Station C ✅'}
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
                  ? `Excellent! Both bars align perfectly with ${seriesNames[0]}=${act.targetA} and ${seriesNames[1]}=${act.targetB}!`
                  : `Currently ${seriesNames[0]}=${valA}, ${seriesNames[1]}=${valB}. Targets are ${act.targetA} and ${act.targetB}.`}
              </span>
            </div>
          )}
        </div>

        {/* Right: Live Double Bar Diagram */}
        <div className="station-col-right">
          <div className="station-box" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="station-box-title" style={{ alignSelf: 'flex-start' }}>
              📶 Side-by-Side Comparison Output
            </div>
            <DataDiagram
              diagramData={{
                mode: 'doublebar',
                data: {
                  categories: act.categories,
                  seriesA,
                  seriesB,
                  seriesNames,
                  unit: act.unit
                },
                highlight: act.targetIdx
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
