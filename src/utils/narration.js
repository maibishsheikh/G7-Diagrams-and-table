// src/utils/narration.js
// Narration script builder for Diagrams & Tables Quest (Grade 7 Data Handling)
// Narrated by Barnaby the Data Owl with Leo, Emma, Alex, and Maya

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
    say("Maya surveyed 120 classmates about their favourite festival sport. Instead of reading 120 individual slips, she drew one single bar graph — and instantly saw the winner!"),
    ask("How do data detectives turn messy piles of notes into clear tables, pictographs, bar graphs, and pie charts that tell the whole story in one glance?"),
  ];
}

export function storyNarration(panel) {
  const scripts = [
    [
      say("The sun rose over Oakridge Academy for the Grand Festival! Hundreds of eager students flooded the gates."),
      say("Leo was in charge of the fruit refreshment stall, but orders were scribbled haphazardly across loose napkins. Leo gasped: 'I can't tell what to slice next!'"),
      say("Barnaby the Data Owl swooped down: 'Hoot! Don't panic, Leo. Raw data without structure is just noisy chaos. When organized into a table, data tells an instant, crystal-clear story!'"),
      cheer("Emma hurried over with a fresh chalkboard: 'Let's bring order to this festival!'"),
    ],
    [
      instruct("Emma showed Leo the secret of tallying: 'Instead of writing fruit names over and over, draw a tally stroke for each order: one, two, three, four... and on the fifth order, slash diagonally across the group to close the gate: 卌!'"),
      say("Leo counted swiftly: two bundles of five plus two singles. 'That is twelve apples!'"),
      emphasize("Barnaby hoots: 'Splendid! The count of how often an item occurs is called its FREQUENCY. In a Frequency Table, tallies convert directly into exact counts!'"),
    ],
    [
      say("Over in the festival courtyard, Alex was tracking the 3-week Reading Marathon by drawing 75 tiny book doodles. 'My fingers ache!'"),
      instruct("Barnaby perched on Alex's easel: 'Use a Pictograph, Alex! A single picture symbol represents a set quantity — we call this the KEY or SCALE.'"),
      cheer("With the key set to 1 book symbol equals 5 books, Alex cheered: 'For Week 1 with 20 books, 20 divided by 5 equals 4 symbols! The key saves hours of drawing!'"),
    ],
    [
      say("At the sports arena, Maya recorded votes for the festival tournament: Football received 8 votes, Basketball got 6, Tennis got 3, and Swimming got 5."),
      instruct("Emma grabbed colored chalk: 'We need a Bar Graph! Categories along the horizontal X-axis, and equal scale increments along the vertical Y-axis.'"),
      emphasize("Barnaby reminded them: 'Keep every bar the exact same width! The Football bar towers up to 8 — that's the MODE, the most popular choice!'"),
    ],
    [
      say("The excitement reached fever pitch during the Great House Championship: Team Blue versus Team Gold!"),
      instruct("Emma smiled: 'That's why we build a Double Bar Graph! For each event, place two bars side-by-side: cyan for Team Blue, pink for Team Gold.'"),
      emphasize("Barnaby added: 'A double bar graph must have a Legend, so everyone knows which house owns which color. The side-by-side comparison makes direct evaluation instantaneous!'"),
    ],
    [
      say("Inside the Science Pavilion, Maya set up digital sensors to track festival temperature from 9 AM to 3 PM: from 18 degrees in the morning, climbing to 28 at 1 PM, and dipping to 24 by 3 PM."),
      instruct("Barnaby explained: 'Time flows continuously! For continuous change over time, a Line Graph is supreme. Connect points with line segments. Rising slopes show warming; falling slopes show cooling!'"),
    ],
    [
      say("As sunset arrived, the student council gathered to finalize the festival budget of $360 on a circular wheel."),
      instruct("Barnaby spread his wings: 'A complete circle has 360 degrees! Use the Master Angle Formula: Central Angle equals Category Value divided by Total Value, multiplied by 360 degrees!'"),
      emphasize("If Music gets $90 out of $360: 90 divided by 360 times 360 degrees equals 90 degrees — an exact quarter-circle right angle! All slices must sum to 360 degrees!"),
    ],
    [
      cheer("Thanks to Leo, Emma, Alex, Maya, and Barnaby, the Oakridge Grand Festival was the most successful event in school history!"),
      instruct("Barnaby turned to you: 'Now it's your turn, Data Detective! Step into our 4 interactive simulation labs: tally Leo's fruit orders, build the sports bar graph and library pictograph, compare the championship teams, and slice the festival budget wheel!'"),
    ],
  ];

  return scripts[panel] || scripts[0];
}

export function simStationIntro(stationIdx) {
  const intros = [
    [
      instruct("Welcome to Station A — Leo's Fruit Stall and Tally Lab!"),
      instruct("Slide to add tallies, group them into bundles of 5, and confirm to build Leo's complete frequency tables!"),
    ],
    [
      instruct("Welcome to Station B — The Festival Showcase Arena!"),
      instruct("Adjust the bar heights and place pictograph book symbols to match the exact festival survey counts!"),
    ],
    [
      instruct("Welcome to Station C — The House Championship Comparison Lab!"),
      instruct("Compare Team Blue and Team Gold side-by-side! Set the dual sliders to match both championship houses!"),
    ],
    [
      instruct("Welcome to Station D — The Festival Council Budget Lab!"),
      instruct("Calculate slice angles, category amounts, and circle percentages working forwards and backwards!"),
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

export function playWrongNarration(explanation = '') {
  return [
    think("Not quite right! Let's check the numbers and try again."),
    ...(explanation ? [instruct(explanation)] : []),
  ];
}

export function playHint1Narration(hintText) {
  return [think(`Here's your first clue: ${hintText}`)];
}

export function playHint2Narration(hintText) {
  return [think(`Here's another helpful hint: ${hintText}`)];
}

export function districtCompleteNarration(districtName, score) {
  return [
    cheer(`World Conquered! You mastered ${districtName} with ${score} out of 10!`),
    encourage("Keep going — the Grand Festival Data Crown awaits!"),
  ];
}

export function bossStartNarration(bossName) {
  return [
    emphasize(`Boss Battle Alert! The Guardian of ${bossName || 'the Realm'} has arrived!`),
    instruct("Answer 3 consecutive questions correctly to win the World Crest! You have 3 shields!"),
  ];
}

export function bossWinNarration(bossName) {
  return [
    cheer(`Victory! You defeated ${bossName || 'the Boss'} and earned the Master Trophy!`),
  ];
}

export function reflectCompleteNarration() {
  return [
    cheer("Congratulations, Master Data Detective! You have conquered the entire Diagrams and Tables curriculum!"),
    say("Review your final scores and print your official certificate of achievement!"),
  ];
}
