// src/utils/badgeEngine.js
// Badge definitions and unlock triggers for Diagrams & Tables Quest
import { BADGES } from '../config/worlds.config.js';

export { BADGES };

export function checkBadges(state) {
  const unlocked = [];

  // First correct answer
  const totalCorrect = state.districtCorrect?.reduce((s, c) => s + (c || 0), 0) || 0;
  if (totalCorrect >= 1) unlocked.push('first_data_point');

  // Streak checks
  if (state.maxStreak >= 5) unlocked.push('hot_streak');
  if (state.maxStreak >= 10) unlocked.push('super_streak');

  // Simulation completion (all 4 stations done)
  if (state.simStationsComplete && state.simStationsComplete.every(Boolean)) {
    unlocked.push('lab_champ');
  }

  // 9+ correct in any world
  if (state.districtScores && state.districtScores.some(score => score !== null && score >= 9)) {
    unlocked.push('district_champ');
  }

  // Centurion (20+ answered)
  if (state.currentQuestion >= 20 || totalCorrect >= 20) {
    unlocked.push('century_scorer');
  }

  // Boss slayer
  if (state.bossDefeated || (state.badges && state.badges.includes('boss_slayer'))) {
    unlocked.push('boss_slayer');
  }

  // Full 5-phase journey complete
  if (state.phaseComplete && Object.values(state.phaseComplete).every(Boolean)) {
    unlocked.push('data_master');
  }

  return unlocked;
}
