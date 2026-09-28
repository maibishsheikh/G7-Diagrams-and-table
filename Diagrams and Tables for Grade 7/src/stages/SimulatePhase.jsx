import React, { useState, useEffect } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { DataDiagram } from '../components/DataDiagram.jsx';
import { TallyMarks } from '../components/TallyMarks.jsx';
import { AUDIO_MAP } from '../audioMap.js';
import { narrate, stopNarration, cheer } from '../audio.js';

/* 3 Interactive Activities per Station (Grade 7 Friendly) */
const STATION_ACTIVITIES = {
  // STATION 1: TALLY & FREQUENCY TABLE LAB
  1: [
    {
      id: 1,
      title: "Activity 1: Favourite Fruit Survey",
      desc: "Nova is counting votes for the class fruit survey. Slide to add tally marks for Apples, then click Count Tallies to build the frequency table!",
      audioDescKey: "sim_1_act_1_desc",
      audioHintKey: "sim_1_act_1_hint",
      categories: ["Apples", "Bananas", "Grapes"],
      fixed: [null, 7, 5],
      targetIdx: 0,
      target: 12,
      max: 20,
      unit: "students",
      icon: "🍎",
      hint: "Every group of 5 tallies gets one diagonal line. Count the full groups of 5, then add any leftovers!"
    },
    {
      id: 2,
      title: "Activity 2: Weekend Weather Log",
      desc: "The class kept a tally of the weather all month. Slide to set how many Rainy days were tallied, then confirm the count!",
      audioDescKey: "sim_1_act_2_desc",
      audioHintKey: "sim_1_act_2_hint",
      categories: ["Sunny", "Rainy", "Cloudy"],
      fixed: [6, null, 4],
      targetIdx: 1,
      target: 9,
      max: 18,
      unit: "days",
      icon: "🌦️",
      hint: "Match the tally count to the target shown in the activity card!"
    },
    {
      id: 3,
      title: "Activity 3: Book Club Sign-ups",
      desc: "New members are signing up for reading groups. Slide to tally the Non-fiction sign-ups, then reveal the full frequency table!",
      audioDescKey: "sim_1_act_3_desc",
      audioHintKey: "sim_1_act_3_hint",
      categories: ["Fiction", "Comics", "Non-fiction"],
      fixed: [10, 6, null],
      targetIdx: 2,
      target: 15,
      max: 24,
      unit: "members",
      icon: "📚",
      hint: "The frequency is simply the total tally count for that row!"
    }
  ],
  // STATION 2: GRAPH BUILDER LAB
  2: [
    {
      id: 1,
      title: "Activity 1: Sports Vote Bar Graph",
      desc: "120 students voted for their favourite sport. Drag the bar height slider until the Football bar matches the survey result of 8 votes!",
      audioDescKey: "sim_2_act_1_desc",
      audioHintKey: "sim_2_act_1_hint",
      type: "bar",
      categories: ["Football", "Basketball", "Tennis", "Swimming"],
      fixed: [null, 6, 3, 5],
      targetIdx: 0,
      target: 8,
      max: 12,
      unit: "votes",
      icon: "⚽",
      hint: "Slide the bar up until it aligns with 8 on the vertical scale!"
    },
    {
      id: 2,
      title: "Activity 2: Library Pictograph",
      desc: "Each picture symbol represents 5 books. Drag the slider to place enough symbols to show that the Library read a total of 30 books this week!",
      audioDescKey: "sim_2_act_2_desc",
      audioHintKey: "sim_2_act_2_hint",
      type: "pictograph",
      categories: ["Week 1", "Week 2", "Week 3"],
      fixed: [4, null, 5],
      targetIdx: 1,
      target: 30,
      scale: 5,
      maxSymbols: 8,
      unit: "books",
      icon: "📖",
      hint: "Divide 30 books by 5 books per symbol. You need 6 symbols!"
    },
    {
      id: 3,
      title: "Activity 3: Snack Choice — Boys vs Girls",
      desc: "Build a double bar graph! Drag each slider so Boys = 7 votes and Girls = 10 votes for Chips.",
      audioDescKey: "sim_2_act_3_desc",
      audioHintKey: "sim_2_act_3_hint",
      type: "doublebar",
      categories: ["Chips", "Fruit", "Cookies"],
      fixedA: [null, 5, 4],
      fixedB: [null, 8, 6],
      targetIdx: 0,
      targetA: 7,
      targetB: 10,
      max: 12,
      unit: "votes",
      icon: "🍪",
      hint: "Set the cyan slider for Boys to 7 and the pink slider for Girls to 10!"
    }
  ],
  // STATION 3: PIE CHART & INVERSE SOLVER LAB
  3: [
    {
      id: 1,
      title: "Activity 1: Movie Genre Poll",
      desc: "180 students voted for their favourite movie genre. The Comedy slice represents 45 votes. Work backwards to find its angle!",
      audioDescKey: "sim_3_act_1_desc",
      audioHintKey: "sim_3_act_1_hint",
      value: 45,
      total: 180,
      ask: "angle in degrees (°)",
      targetD: 90,
      unit: "°",
      icon: "🎬",
      pieMode: "angle",
      hint: "Angle = (value ÷ total) × 360° = (45 ÷ 180) × 360° = 90°"
    },
    {
      id: 2,
      title: "Activity 2: Recycling Survey",
      desc: "A school recycling pie chart's Paper slice measures 120° out of a total of 90 kg collected. Work backwards to find its value!",
      audioDescKey: "sim_3_act_2_desc",
      audioHintKey: "sim_3_act_2_hint",
      angle: 120,
      total: 90,
      ask: "value (kg)",
      targetD: 30,
      unit: "kg",
      icon: "♻️",
      pieMode: "value",
      hint: "Value = (angle ÷ 360°) × total = (120 ÷ 360) × 90 = 30 kg"
    },
    {
      id: 3,
      title: "Activity 3: Snack Survey Percentage",
      desc: "Out of 80 students surveyed, 20 chose Popcorn as their favourite snack. Work backwards to find the percentage!",
      audioDescKey: "sim_3_act_3_desc",
      audioHintKey: "sim_3_act_3_hint",
      value: 20,
      total: 80,
      ask: "percentage (%)",
      targetD: 25,
      unit: "%",
      icon: "🍿",
      pieMode: "percent",
      hint: "Percentage = (value ÷ total) × 100% = (20 ÷ 80) × 100% = 25%"
    }
  ]
};

export function SimulatePhase({ muted, onNext }) {
  const [station, setStation] = useState(1);
  const [actIdx, setActIdx] = useState(0);

  // Station 1 state
  const [tallyCount, setTallyCount] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  // Station 2 state
  const [barValue, setBarValue] = useState(0);
  const [symbolCount, setSymbolCount] = useState(0);
  const [boysVal, setBoysVal] = useState(0);
  const [girlsVal, setGirlsVal] = useState(0);

  // Station 3 state
  const [reverseAnswer, setReverseAnswer] = useState('');
  const [reverseFeedback, setReverseFeedback] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const currentActivity = STATION_ACTIVITIES[station][actIdx];

  useEffect(() => {
    stopNarration();
    setTallyCount(0);
    setConfirmed(false);
    setBarValue(0);
    setSymbolCount(0);
    setBoysVal(0);
    setGirlsVal(0);
    setReverseAnswer('');
    setReverseFeedback(null);
    setShowHint(false);

    const key = currentActivity.audioDescKey || `sim_${station}`;
    if (AUDIO_MAP[key]) {
      narrate(AUDIO_MAP[key], !muted);
    }

    return () => stopNarration();
  }, [station, actIdx, muted]);

  const toggleHint = () => {
    setShowHint(h => {
      const next = !h;
      if (next && currentActivity.audioHintKey && AUDIO_MAP[currentActivity.audioHintKey]) {
        narrate(AUDIO_MAP[currentActivity.audioHintKey], !muted);
      } else if (!next) {
        stopNarration();
      }
      return next;
    });
  };

  const handleConfirmTally = () => {
    stopNarration();
    setConfirmed(true);
    cheer("Awesome! Frequency table built from your tally marks!");
  };

  const handleReverseCheck = () => {
    stopNarration();
    const num = parseFloat(reverseAnswer);
    if (num === currentActivity.targetD) {
      setReverseFeedback({ success: true, text: `🎉 Amazing job! ${currentActivity.ask} = ${currentActivity.targetD}${currentActivity.unit === '°' || currentActivity.unit === '%' ? currentActivity.unit : ' ' + currentActivity.unit}!` });
      cheer("Awesome inverse solving!");
    } else {
      setReverseFeedback({ success: false, text: `Try again! Hint: ${currentActivity.ask} = ${currentActivity.targetD}${currentActivity.unit === '°' || currentActivity.unit === '%' ? currentActivity.unit : ' ' + currentActivity.unit}` });
    }
  };

  const nextActivity = () => {
    stopNarration();
    if (actIdx < 2) {
      setActIdx(i => i + 1);
    } else if (station < 3) {
      setStation(s => s + 1);
      setActIdx(0);
    } else {
      onNext();
    }
  };

  const prevActivity = () => {
    stopNarration();
    if (actIdx > 0) {
      setActIdx(i => i - 1);
    } else if (station > 1) {
      setStation(s => s - 1);
      setActIdx(2);
    }
  };

  // Build the live table dataset for Station 1
  const tallyValues = station === 1
    ? currentActivity.fixed.map((v, i) => (i === currentActivity.targetIdx ? tallyCount : v))
    : [];

  // Build live bar dataset for Station 2 activity "bar"
  const barValues = station === 2 && currentActivity.type === 'bar'
    ? currentActivity.fixed.map((v, i) => (i === currentActivity.targetIdx ? barValue : v))
    : [];

  // Build live pictograph dataset
  const pictoSymbolCounts = station === 2 && currentActivity.type === 'pictograph'
    ? currentActivity.fixed.map((v, i) => (i === currentActivity.targetIdx ? symbolCount : v))
    : [];

  // Build live pie dataset for Station 3
  let pieData = null;
  if (station === 3) {
    if (currentActivity.pieMode === 'angle') {
      pieData = { categories: ["This slice", "Everything else"], values: [currentActivity.value, currentActivity.total - currentActivity.value], unit: currentActivity.unit };
    } else if (currentActivity.pieMode === 'value') {
      const val = Math.round((currentActivity.angle / 360) * currentActivity.total);
      pieData = { categories: ["This slice", "Everything else"], values: [val, currentActivity.total - val], unit: currentActivity.unit };
    } else {
      pieData = { categories: ["This slice", "Everything else"], values: [currentActivity.value, currentActivity.total - currentActivity.value], unit: currentActivity.unit };
    }
  }

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Simulation Stations Glass Card Container */}
      <div className="w-full max-w-6xl max-h-[94vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md flex flex-col items-center fade-in-up z-20 my-auto overflow-hidden">
        <div className="w-24 h-2 bg-cyan-400 rounded-full mb-2.5 shadow-[0_0_18px_rgba(56,189,248,0.85)] shrink-0" />

        <h2 className="font-display font-900 text-2xl sm:text-3xl text-white flex items-center gap-3 mb-3.5 shrink-0">
          <span className="text-3xl sm:text-4xl">🧪</span>
          <span>Simulation Stations</span>
        </h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 w-full items-stretch flex-1 min-h-0 overflow-hidden">
          {/* Left Column: Station Sidebar Tabs */}
          <div className="md:col-span-4 flex flex-col justify-between gap-3 shrink-0">
            <div className="flex flex-col gap-3.5">
              <button
                onClick={() => { stopNarration(); setStation(1); setActIdx(0); }}
                className={`p-4 sm:p-5 rounded-2xl border-2 flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                  station === 1 ? 'border-cyan-400 bg-[#1e2852] text-white shadow-[0_0_22px_rgba(56,189,248,0.4)] scale-[1.02]' : 'border-purple-500/25 bg-[#13082b]/80 text-slate-300 hover:border-cyan-400/50'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 ${station === 1 ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/10 text-white'}`}>📋</div>
                  <div>
                    <p className="font-display font-900 text-base sm:text-lg leading-tight">Station 1: Tally Lab</p>
                    <p className="text-xs font-extrabold text-slate-300 mt-0.5">Count tallies into a table</p>
                  </div>
                </div>
                <span className="text-base">🔓</span>
              </button>

              <button
                onClick={() => { stopNarration(); setStation(2); setActIdx(0); }}
                className={`p-4 sm:p-5 rounded-2xl border-2 flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                  station === 2 ? 'border-cyan-400 bg-[#1e2852] text-white shadow-[0_0_22px_rgba(56,189,248,0.4)] scale-[1.02]' : 'border-purple-500/25 bg-[#13082b]/80 text-slate-300 hover:border-cyan-400/50'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 ${station === 2 ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/10 text-white'}`}>📊</div>
                  <div>
                    <p className="font-display font-900 text-base sm:text-lg leading-tight">Station 2: Graph Builder</p>
                    <p className="text-xs font-extrabold text-slate-300 mt-0.5">Build bars, symbols & pairs</p>
                  </div>
                </div>
                <span className="text-base">🔓</span>
              </button>

              <button
                onClick={() => { stopNarration(); setStation(3); setActIdx(0); }}
                className={`p-4 sm:p-5 rounded-2xl border-2 flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                  station === 3 ? 'border-cyan-400 bg-[#1e2852] text-white shadow-[0_0_22px_rgba(56,189,248,0.4)] scale-[1.02]' : 'border-purple-500/25 bg-[#13082b]/80 text-slate-300 hover:border-cyan-400/50'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 ${station === 3 ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/10 text-white'}`}>🥧</div>
                  <div>
                    <p className="font-display font-900 text-base sm:text-lg leading-tight">Station 3: Inverse Solver</p>
                    <p className="text-xs font-extrabold text-slate-300 mt-0.5">Find angle, value or %</p>
                  </div>
                </div>
                <span className="text-base">🔓</span>
              </button>
            </div>

            <button
              onClick={() => {
                stopNarration();
                onNext();
              }}
              className="btn-gold font-display font-900 text-base sm:text-lg py-4 px-6 shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:scale-105 transition mt-2 w-full flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Go to Practice Phase!</span>
              <span>→</span>
            </button>
          </div>

          {/* Right Column: Interactive Simulation Box */}
          <div className="md:col-span-8 bg-[#13092e]/95 border-2 border-purple-400/35 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-inner flex-1 min-h-0 overflow-hidden">
            <div className="flex flex-col flex-1 min-h-0 justify-between">
              <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3 shrink-0">
                <h3 className="font-display font-900 text-2xl sm:text-3xl text-cyan-300 flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">{currentActivity.icon}</span>
                  <span>{currentActivity.title}</span>
                </h3>
                <span className="font-display font-900 text-xs sm:text-sm text-slate-200 bg-white/10 px-4 py-1 rounded-full border border-white/15">
                  Activity {actIdx + 1} of 3
                </span>
              </div>

              <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-extrabold mb-3 shrink-0">
                {currentActivity.desc}
              </p>

              {/* STATION 1: TALLY LAB */}
              {station === 1 && (
                <div className="flex flex-col items-center gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-4 sm:p-5 shadow-xl flex-1 min-h-0 justify-between overflow-y-auto">
                  <div className="flex items-center gap-4 bg-[#14082c] px-4 py-2 rounded-xl border border-cyan-400/30 w-full justify-center shrink-0">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-200">Tally count for "{currentActivity.categories[currentActivity.targetIdx]}":</span>
                    <input
                      type="range"
                      min="0"
                      max={currentActivity.max}
                      value={tallyCount}
                      onChange={e => { setTallyCount(Number(e.target.value)); setConfirmed(false); }}
                      className="w-40 accent-cyan-400 cursor-pointer"
                    />
                    <span className="text-xs sm:text-sm font-black text-amber-300 bg-amber-400/10 px-3 py-1 rounded-lg border border-amber-400/30">
                      {tallyCount} tallies
                    </span>
                  </div>

                  <div className="w-full flex items-center justify-center bg-[#14082c]/70 rounded-xl border border-white/10 py-3">
                    <TallyMarks count={tallyCount} />
                  </div>

                  <div className="text-center text-sm sm:text-base font-extrabold text-slate-100 shrink-0">
                    🎯 Target: <span className="text-amber-300 font-900">{currentActivity.target} {currentActivity.unit}</span>
                  </div>

                  {confirmed ? (
                    <div className="w-full fade-in-up shrink-0">
                      <DataDiagram diagramData={{ mode: 'table', data: { categories: currentActivity.categories, values: tallyValues, unit: currentActivity.unit }, highlight: currentActivity.targetIdx }} />
                    </div>
                  ) : (
                    <button onClick={handleConfirmTally} className="btn-gold text-sm sm:text-base font-900 px-8 py-3 shadow-lg hover:scale-105 transition cursor-pointer shrink-0">
                      📋 Count Tallies & Build Table
                    </button>
                  )}
                </div>
              )}

              {/* STATION 2: GRAPH BUILDER LAB */}
              {station === 2 && (
                <div className="flex flex-col items-center gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-4 sm:p-5 shadow-xl flex-1 min-h-0 justify-between overflow-y-auto">
                  {currentActivity.type === 'bar' && (
                    <>
                      <div className="flex items-center gap-4 bg-[#14082c] px-4 py-2 rounded-xl border border-cyan-400/30 w-full justify-center shrink-0">
                        <span className="text-xs sm:text-sm font-extrabold text-slate-200">Bar height for "{currentActivity.categories[currentActivity.targetIdx]}":</span>
                        <input type="range" min="0" max={currentActivity.max} value={barValue} onChange={e => setBarValue(Number(e.target.value))} className="w-40 accent-cyan-400 cursor-pointer" />
                        <span className="text-xs sm:text-sm font-black text-amber-300 bg-amber-400/10 px-3 py-1 rounded-lg border border-amber-400/30">{barValue} {currentActivity.unit}</span>
                      </div>
                      <DataDiagram diagramData={{ mode: 'bar', data: { categories: currentActivity.categories, values: barValues, unit: currentActivity.unit }, highlight: currentActivity.targetIdx }} />
                      <div className="text-center text-sm sm:text-base font-extrabold text-slate-100 shrink-0">
                        🎯 Target: <span className="text-amber-300 font-900">{currentActivity.target} {currentActivity.unit}</span>
                        {barValue === currentActivity.target && <span className="text-emerald-400 font-900 ml-2">✔ Matched!</span>}
                      </div>
                    </>
                  )}

                  {currentActivity.type === 'pictograph' && (
                    <>
                      <div className="flex items-center gap-4 bg-[#14082c] px-4 py-2 rounded-xl border border-cyan-400/30 w-full justify-center shrink-0">
                        <span className="text-xs sm:text-sm font-extrabold text-slate-200">Symbols for "{currentActivity.categories[currentActivity.targetIdx]}":</span>
                        <input type="range" min="0" max={currentActivity.maxSymbols} value={symbolCount} onChange={e => setSymbolCount(Number(e.target.value))} className="w-40 accent-cyan-400 cursor-pointer" />
                        <span className="text-xs sm:text-sm font-black text-amber-300 bg-amber-400/10 px-3 py-1 rounded-lg border border-amber-400/30">{symbolCount} × 🖼️</span>
                      </div>
                      <DataDiagram diagramData={{ mode: 'pictograph', data: { categories: currentActivity.categories, symbolCounts: pictoSymbolCounts, scale: currentActivity.scale, unit: currentActivity.unit }, highlight: currentActivity.targetIdx }} />
                      <div className="w-full bg-[#14082c]/90 border-2 border-amber-400/40 p-3 rounded-2xl text-center font-mono text-sm text-slate-100 shrink-0">
                        {symbolCount} symbols × {currentActivity.scale} {currentActivity.unit}/symbol = <span className="text-amber-300 font-900">{symbolCount * currentActivity.scale} {currentActivity.unit}</span>
                        {symbolCount * currentActivity.scale === currentActivity.target && <span className="text-emerald-400 font-900 ml-2">✔ Matched target of {currentActivity.target}!</span>}
                      </div>
                    </>
                  )}

                  {currentActivity.type === 'doublebar' && (
                    <>
                      <div className="flex flex-col gap-2 bg-[#14082c] px-4 py-3 rounded-xl border border-cyan-400/30 w-full shrink-0">
                        <div className="flex items-center gap-3 justify-center">
                          <span className="text-xs sm:text-sm font-extrabold text-cyan-300 w-14">Boys:</span>
                          <input type="range" min="0" max={currentActivity.max} value={boysVal} onChange={e => setBoysVal(Number(e.target.value))} className="w-40 accent-cyan-400 cursor-pointer" />
                          <span className="text-xs sm:text-sm font-black text-amber-300">{boysVal}</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                          <span className="text-xs sm:text-sm font-extrabold text-pink-300 w-14">Girls:</span>
                          <input type="range" min="0" max={currentActivity.max} value={girlsVal} onChange={e => setGirlsVal(Number(e.target.value))} className="w-40 accent-pink-400 cursor-pointer" />
                          <span className="text-xs sm:text-sm font-black text-amber-300">{girlsVal}</span>
                        </div>
                      </div>
                      <DataDiagram diagramData={{ mode: 'doublebar', data: {
                        categories: currentActivity.categories,
                        seriesA: currentActivity.fixedA.map((v, i) => (i === currentActivity.targetIdx ? boysVal : v)),
                        seriesB: currentActivity.fixedB.map((v, i) => (i === currentActivity.targetIdx ? girlsVal : v)),
                        seriesNames: ["Boys", "Girls"], unit: currentActivity.unit
                      }, highlight: currentActivity.targetIdx }} />
                      <div className="text-center text-sm sm:text-base font-extrabold text-slate-100 shrink-0">
                        🎯 Target: <span className="text-amber-300 font-900">Boys = {currentActivity.targetA}, Girls = {currentActivity.targetB}</span>
                        {boysVal === currentActivity.targetA && girlsVal === currentActivity.targetB && <span className="text-emerald-400 font-900 ml-2 block">✔ Both matched!</span>}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* STATION 3: PIE CHART & INVERSE SOLVER */}
              {station === 3 && (
                <div className="flex flex-col items-center gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-4 sm:p-5 shadow-xl flex-1 min-h-0 justify-between overflow-y-auto">
                  <div className="flex items-center justify-center gap-7 w-full flex-1 min-h-0">
                    {pieData && <DataDiagram diagramData={{ mode: 'pie', data: pieData, highlight: 0 }} size={220} />}

                    <div className="text-left text-sm sm:text-base font-extrabold text-slate-100 flex flex-col gap-2 shrink-0">
                      {currentActivity.pieMode === 'angle' && (<>
                        <p>• Slice value = <span className="text-amber-300 font-900">{currentActivity.value}</span></p>
                        <p>• Total = <span className="text-cyan-300 font-900">{currentActivity.total}</span></p>
                      </>)}
                      {currentActivity.pieMode === 'value' && (<>
                        <p>• Slice angle = <span className="text-amber-300 font-900">{currentActivity.angle}°</span></p>
                        <p>• Total = <span className="text-cyan-300 font-900">{currentActivity.total}</span></p>
                      </>)}
                      {currentActivity.pieMode === 'percent' && (<>
                        <p>• Slice value = <span className="text-amber-300 font-900">{currentActivity.value}</span></p>
                        <p>• Total surveyed = <span className="text-cyan-300 font-900">{currentActivity.total}</span></p>
                      </>)}
                      <p>• Solve for: <span className="text-white font-900">{currentActivity.ask}</span></p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 w-full justify-center shrink-0 flex-wrap">
                    <input
                      type="number"
                      placeholder={`Enter ${currentActivity.ask}`}
                      value={reverseAnswer}
                      onChange={e => setReverseAnswer(e.target.value)}
                      className="bg-[#14082c] border-2 border-cyan-400/70 rounded-xl px-5 py-3 text-white font-display font-900 text-base sm:text-lg text-center outline-none focus:border-amber-400 w-56 shadow-inner"
                    />
                    <button onClick={handleReverseCheck} className="btn-gold text-sm sm:text-base font-900 px-7 py-3 shadow-lg hover:scale-105 transition cursor-pointer">
                      Check Answer ✨
                    </button>
                    <button onClick={toggleHint} className="bg-purple-900/80 hover:bg-purple-800 border border-purple-400/50 text-purple-200 font-display font-900 text-xs sm:text-sm px-4 py-3 rounded-xl transition cursor-pointer">
                      💡 {showHint ? "Hide Hint" : "Hint"}
                    </button>
                  </div>

                  {showHint && (
                    <div className="p-3.5 bg-amber-950/90 border border-amber-400/50 text-amber-200 rounded-xl text-xs sm:text-sm font-bold w-full text-center fade-in-up shrink-0">
                      💡 {currentActivity.hint}
                    </div>
                  )}

                  {reverseFeedback && (
                    <div className={`p-4 rounded-2xl text-sm sm:text-base font-900 w-full text-center shadow-xl shrink-0 ${
                      reverseFeedback.success ? 'bg-emerald-950/90 text-emerald-300 border-2 border-emerald-400/60' : 'bg-rose-950/90 text-rose-300 border-2 border-rose-400/60'
                    }`}>
                      {reverseFeedback.text}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Activity Step Buttons */}
            <div className="flex items-center justify-between border-t border-white/15 pt-4 mt-3 shrink-0">
              <button
                onClick={prevActivity}
                disabled={station === 1 && actIdx === 0}
                className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/25 text-white font-display font-900 text-sm sm:text-base px-6 py-2.5 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
              >
                ← Previous Activity
              </button>

              <button onClick={nextActivity} className="btn-gold text-sm sm:text-base font-900 px-8 py-2.5 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition cursor-pointer">
                <span>{station === 3 && actIdx === 2 ? 'Go to Practice Phase' : 'Next Activity'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
