import React, { useState, useEffect, useRef } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { StorySlideArt } from '../components/StorySlideArt.jsx';
import { AUDIO_MAP } from '../audioMap.js';
import { narrate, stopNarration } from '../audio.js';

const STORY_SLIDES = [
  {
    id: 1,
    title: "Why Organize Data?",
    audioKey: "story_1",
    art: "messyToTidy",
    body: "Every day we collect information — favourite snacks, weather, test scores, traffic on a road. But raw numbers scattered on paper are hard to read. How do we organize that information so anyone can understand it at a glance?",
    quote: "Data + Organization = Understanding!",
    bubble: "Let's turn messy numbers into clear diagrams and tables!"
  },
  {
    id: 2,
    title: "Tally Marks & Frequency Tables",
    audioKey: "story_2",
    art: "tally",
    body: "The first step is a frequency table. We use tally marks to count how often each item appears, then write the total as a frequency. A table turns a messy list into neat rows and columns!",
    quote: "Frequency = how many times something occurs.",
    bubble: "Every 5th tally gets a diagonal line across the group of 4!"
  },
  {
    id: 3,
    title: "Pictographs: Pictures as Data",
    audioKey: "story_3",
    art: "pictograph",
    body: "A pictograph uses small pictures or symbols to represent data. Every symbol stands for a fixed amount, shown in a key. If one symbol equals five books, then three symbols mean fifteen books in total!",
    quote: "Always check the KEY before reading a pictograph!",
    bubble: "A half symbol usually means half the key value!"
  },
  {
    id: 4,
    title: "Bar Graphs: Comparing at a Glance",
    audioKey: "story_4",
    art: "bar",
    body: "A bar graph uses rectangular bars to compare categories. Taller bars mean bigger values! We can quickly see which category is the most popular and which is the least, just by comparing bar heights.",
    quote: "Tallest bar = highest value (the mode category).",
    bubble: "Bars can stand up or lie sideways — the reading rule is the same!"
  },
  {
    id: 5,
    title: "Double Bar Graphs: Comparing Two Groups",
    audioKey: "story_5",
    art: "doublebar",
    body: "A double bar graph places two bars side by side for each category, perfect for comparing two groups, like boys and girls, or this year and last year, at the very same time!",
    quote: "Two bars, one category — instant comparison!",
    bubble: "Always check the legend to know which colour is which group!"
  },
  {
    id: 6,
    title: "Line Graphs: Change Over Time",
    audioKey: "story_6",
    art: "line",
    body: "A line graph connects data points with a line to show how something changes over time, like temperature across a week. Rising lines mean increases, falling lines mean decreases!",
    quote: "A line graph tells the STORY of a trend.",
    bubble: "The steepest part of the line means the fastest change!"
  },
  {
    id: 7,
    title: "Pie Charts: Slicing Up the Whole",
    audioKey: "story_7",
    art: "pie",
    body: "A pie chart, or circle graph, shows how a whole is divided into parts. Each slice's angle is found using a simple formula: Angle = (value ÷ total) × 360°.",
    quote: "Angle = (value ÷ total) × 360°",
    bubble: "All the slice angles in a pie chart always add up to 360°!"
  },
  {
    id: 8,
    title: "Step Into the Simulation Lab!",
    audioKey: "story_8",
    art: "lab",
    body: "Fantastic! You've learned how tables, pictographs, bar graphs, line graphs, and pie charts each tell data's story in their own way. Now step into the lab to build, read, and decode diagrams yourself!",
    quote: "Ready to test your data detective skills?",
    bubble: "Click below to enter the interactive lab!"
  }
];

export function StoryPhase({ muted, onDone, onSlideChange }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const slide = STORY_SLIDES[slideIdx];

  const onSlideChangeRef = useRef(onSlideChange);
  useEffect(() => {
    onSlideChangeRef.current = onSlideChange;
  });

  // Notify parent of slide change
  useEffect(() => {
    if (onSlideChangeRef.current) {
      onSlideChangeRef.current(slideIdx + 1, STORY_SLIDES.length);
    }
  }, [slideIdx]);

  // Handle audio narration — ONLY depends on slideIdx and muted
  useEffect(() => {
    stopNarration();
    const audioData = AUDIO_MAP[slide.audioKey];
    if (audioData) {
      narrate(audioData, !muted);
    }
    return () => stopNarration();
  }, [slideIdx, muted]);

  const replayAudio = () => {
    stopNarration();
    const audioData = AUDIO_MAP[slide.audioKey];
    if (audioData) {
      narrate(audioData, !muted);
    }
  };

  const goNext = () => {
    stopNarration();
    if (slideIdx < STORY_SLIDES.length - 1) {
      setSlideIdx(i => i + 1);
    } else {
      onDone();
    }
  };

  const goPrev = () => {
    stopNarration();
    if (slideIdx > 0) setSlideIdx(i => i - 1);
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      <div className="w-full max-w-5xl max-h-[92vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center fade-in-up z-20 my-auto overflow-hidden">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 h-80 sm:h-[420px] md:h-[450px] w-full bg-black/40 flex items-center justify-center shrink-0">
          <StorySlideArt type={slide.art} />
        </div>

        <div className="flex flex-col items-start text-left justify-center gap-4.5 overflow-y-auto max-h-full py-1">
          <div className="w-full flex items-center justify-between">
            <h2 className="font-display font-900 text-3xl sm:text-4xl md:text-5xl text-amber-400 leading-tight drop-shadow-md">
              {slide.title}
            </h2>
            <button
              onClick={replayAudio}
              className="bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/50 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-900 flex items-center gap-1.5 cursor-pointer shrink-0 transition"
              title="Replay Audio Narration"
            >
              <span>🔊 Replay</span>
            </button>
          </div>

          <p className="text-slate-100 text-xl sm:text-2xl leading-relaxed font-extrabold drop-shadow-sm">
            {slide.body}
          </p>

          <div className="w-full bg-[#1e0e45] border-2 border-amber-400/60 rounded-2xl px-6 py-3.5 text-center text-amber-300 font-display font-900 text-lg sm:text-xl flex items-center justify-center gap-3 shadow-lg">
            <span className="shrink-0 text-2xl">✨</span>
            <span className="leading-snug">"{slide.quote}"</span>
            <span className="shrink-0 text-2xl">✨</span>
          </div>

          <div className="flex items-center gap-4 w-full mt-1">
            <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-4xl shadow-lg shrink-0">
              🦉
            </div>
            <div className="bg-white text-[#0c031d] rounded-2xl px-7 py-3.5 font-display font-900 text-lg sm:text-xl shadow-xl flex-1 text-left leading-snug">
              {slide.bubble}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl flex items-center justify-between mt-3 z-20 shrink-0">
        <button
          onClick={goPrev}
          disabled={slideIdx === 0}
          className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/30 text-white font-display font-900 text-xl sm:text-2xl px-10 py-4 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-xl hover:scale-105"
        >
          ← Back
        </button>

        <div className="flex items-center gap-3.5">
          {STORY_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                stopNarration();
                setSlideIdx(i);
              }}
              className={`rounded-full transition-all cursor-pointer ${
                i === slideIdx
                  ? 'w-4.5 h-4.5 bg-amber-400 shadow-[0_0_18px_rgba(250,204,21,0.9)]'
                  : 'w-3.5 h-3.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="btn-gold text-xl sm:text-2xl px-11 py-4 font-900 flex items-center gap-2 shadow-[0_0_35px_rgba(250,204,21,0.85)] hover:scale-105"
        >
          <span>{slideIdx === STORY_SLIDES.length - 1 ? 'Enter Lab 🧪' : 'Next'}</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
