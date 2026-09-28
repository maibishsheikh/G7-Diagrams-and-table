// src/utils/shuffle.js
// Question sequencing and shuffling utilities

export function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generateSessionQuestions(questionBank) {
  // Return questions sorted in order across the 10 worlds
  return [...questionBank].sort((a, b) => a.id - b.id);
}
