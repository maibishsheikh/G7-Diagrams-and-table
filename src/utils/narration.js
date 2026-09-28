// src/utils/narration.js
// Narration script builder for Diagrams & Tables Quest (Grade 7 Data Handling)

export const say       = (text) => ({ text, style: 'statement' });
export const ask       = (text) => ({ text, style: 'question' });
export const cheer     = (text) => ({ text, style: 'celebration' });
export const emphasize = (text) => ({ text, style: 'emphasis' });
export const think     = (text) => ({ text, style: 'thinking' });
export const instruct  = (text) => ({ text, style: 'instruction' });
export const encourage = (text) => ({ text, style: 'encouragement' });

export function wonderNarration() {
  return [
    say("How do thousands of numbers become one simple picture?"),
    say("Maya surveyed 120 classmates about their favourite sport. Instead of reading 120 answers one by one, she drew one single bar graph — and instantly saw the winner!"),
    ask("How do data detectives turn a messy pile of numbers into a table, a graph, or a chart that tells the whole story in one glance?"),
  ];
}

export function storyNarration(panel) {
  const scripts = [
    [
      say("Every day we collect information — favourite snacks, weather, test scores, traffic on a road."),
      say("But raw numbers scattered on paper are hard to read. How do we organize that information so anyone can understand it at a glance?"),
      cheer("Let's turn messy numbers into clear diagrams and tables!"),
    ],
    [
      say("The first step is a frequency table. We use tally marks to count how often each item appears, then write the total as a frequency."),
      instruct("A table turns a messy list into neat rows and columns! Every fifth tally gets a diagonal line across the group of four!"),
    ],
    [
      say("A pictograph uses small pictures or symbols to represent data."),
      say("Every symbol stands for a fixed amount, shown in a key."),
      instruct("If one symbol equals five books, then three symbols mean fifteen books in total! Always check the key before reading a pictograph!"),
    ],
    [
      say("A bar graph uses rectangular bars to compare categories. Taller bars mean bigger values!"),
      say("We can quickly see which category is the most popular and which is the least, just by comparing bar heights against the scale."),
    ],
    [
      say("A double bar graph places two bars side by side for each category."),
      instruct("It's perfect for comparing two groups, like boys and girls, or this year and last year, at the very same time! Always check the legend!"),
    ],
    [
      say("A line graph connects data points with a line to show how something changes over time, like temperature across a week."),
      instruct("Rising lines mean increases, falling lines mean decreases! The steepest part means the fastest change!"),
    ],
    [
      say("A pie chart, or circle graph, shows how a whole is divided into parts."),
      instruct("Each slice's angle is found using a simple formula: Central Angle equals value divided by total, multiplied by 360 degrees. All angles sum to 360 degrees!"),
    ],
    [
      cheer("Fantastic! You've learned how tables, pictographs, bar graphs, line graphs, and pie charts tell data's story."),
      instruct("Now step into the simulation lab to build, read, and decode diagrams yourself!"),
    ],
  ];

  return scripts[panel] || scripts[0];
}

export function simStationIntro(stationIdx) {
  const intros = [
    [
      instruct("Welcome to Station A — Tally Marks and Frequency Table Lab!"),
      instruct("Slide to add tallies, group them by fives, and confirm to build complete frequency tables!"),
    ],
    [
      instruct("Welcome to Station B — Bar and Pictograph Builder!"),
      instruct("Adjust the bar heights and place symbol multipliers to match the exact survey counts!"),
    ],
    [
      instruct("Welcome to Station C — Double Bar Comparison Lab!"),
      instruct("Compare two categories side-by-side! Set the dual sliders to match both survey groups!"),
    ],
    [
      instruct("Welcome to Station D — Pie Chart and Inverse Solver Lab!"),
      instruct("Calculate slice angles, values, and circle percentages working forwards and backwards!"),
    ],
  ];

  return intros[stationIdx] || intros[0];
}

export function playQuestionNarration(questionText) {
  return [ask(questionText)];
}

export function playCorrectNarration(streak = 1) {
  const praises = [
    cheer("Brilliant work! That's correct!"),
    cheer("Excellent deduction! You nailed it!"),
    cheer("Fantastic job! Keep the momentum going!"),
    cheer("Superb! You read the data perfectly!"),
  ];
  const idx = Math.floor(Math.random() * praises.length);
  if (streak >= 5) {
    return [cheer(`Incredible! You are on a ${streak}-streak on fire! 🔥`)];
  }
  return [praises[idx]];
}

export function playWrongNarration() {
  return [
    encourage("Not quite! Take a close look at the diagram and check the hint to try again."),
  ];
}

export function playHint1Narration(text) {
  return [instruct(text || "Here is a hint: check the scale and key carefully!")];
}

export function playHint2Narration(text) {
  return [instruct(text || "Let's break down the calculation step-by-step.")];
}

export function districtCompleteNarration(worldName = 'World') {
  return [
    cheer(`Congratulations! You conquered all 10 questions in ${worldName}! Outstanding data detective skills!`),
  ];
}

export function bossStartNarration(bossName = 'World Boss') {
  return [
    say(`Warning! ${bossName} has challenged you! Answer 5 questions without losing all your lives!`),
  ];
}

export function bossWinNarration(bossName = 'World Boss') {
  return [
    cheer(`Victory! You defeated ${bossName} and claimed your Boss Slayer reward!`),
  ];
}

export function reflectNarration() {
  return [
    say("Welcome to the Reflect Phase! Take a moment to review your key learnings and check your scorecard."),
  ];
}

export function reflectCompleteNarration() {
  return [
    cheer("Trophy awarded! You have completed the Diagrams and Tables Quest! Grand Data Master!"),
  ];
}
