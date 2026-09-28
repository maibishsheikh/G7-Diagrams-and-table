// src/data/questionBank.js
// 100 Comprehensive Questions for Diagrams & Tables Quest across 10 Themed Worlds (Grade 7 Data Handling)
import { PRACTICE_WORLDS, WORLD_QUESTIONS } from '../topicData.js';

export const DISTRICTS = PRACTICE_WORLDS.map((w, idx) => ({
  id: w.id,
  name: w.name,
  icon: w.icon,
  range: w.range,
  chartType: w.chartType,
  boss: [
    { name: 'Chief Tally Master',    emoji: '📋', reward: 'Tally Expert Badge 📋' },
    { name: 'Island Cartographer',  emoji: '🖼️', reward: 'Key Master Badge 🖼️' },
    { name: 'Admiral Bar Graph',    emoji: '📊', reward: 'Bar Champion Badge 📊' },
    { name: 'Delta Commander',      emoji: '📶', reward: 'Comparison Pro Badge 📶' },
    { name: 'Trend Warden',         emoji: '📈', reward: 'Trend Analyst Badge 📈' },
    { name: 'Sovereign of Slices',  emoji: '🥧', reward: 'Sector Master Badge 🥧' },
    { name: 'Forest Statistician',  emoji: '🌲', reward: 'Forest Ranger Badge 🌲' },
    { name: 'Summit Analyst',       emoji: '🏔️', reward: 'Summit Champion Badge 🏔️' },
    { name: 'Director Protractor',  emoji: '🧭', reward: 'Angle Genius Badge 🧭' },
    { name: 'Grand Data Detective', emoji: '🕵️', reward: 'Grand Master Badge 🏆' }
  ][idx] || { name: `${w.name} Boss`, emoji: w.icon, reward: `${w.name} Badge` }
}));

const questionsList = [];
let globalId = 1;
for (let d = 0; d < 10; d++) {
  const wQs = WORLD_QUESTIONS[d] || [];
  wQs.forEach((q) => {
    questionsList.push({
      id: globalId++,
      districtId: d,
      category: DISTRICTS[d]?.name?.toUpperCase() || 'DATA HANDLING',
      visual: 'diagram',
      questionText: q.prompt,
      prompt: q.prompt,
      options: q.options,
      correctAnswer: q.options[q.correctIndex],
      correctIndex: q.correctIndex,
      explanation: q.explanation,
      hint1: q.hint,
      hint2: (q.explanation && q.explanation.includes('.')) ? q.explanation.split('.')[0] + '.' : q.hint,
      hint: q.hint,
      visualData: q.diagramData,
      diagramData: q.diagramData,
      promptAudioKey: q.promptAudioKey,
      hintAudioKey: q.hintAudioKey
    });
  });
}

export const questionBank = questionsList;
export default questionBank;
