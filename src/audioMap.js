/* =========================================================================
   AUDIO MAP — Mapping fixed text keys to audio files or speech text
   Diagrams & Tables Quest · Grade 7 Data Handling (The Oakridge Festival)
   Characters: Leo, Emma, Alex, Maya, Barnaby the Data Owl
   Generated for ElevenLabs voice narration and fallback speech synthesis
   ========================================================================= */

import { WORLD_QUESTIONS } from './topicData.js';

export const AUDIO_MAP = {
  // WONDER PHASE
  "wonder_1": {
    text: "Ever wondered how newspapers, scientists, and sports coaches turn thousands of numbers into one simple picture you can understand in seconds? How do we organize messy data into diagrams and tables that tell a clear story?",
    style: "question",
    file: "/assets/audio/wonder_1.mp3"
  },

  // STORY PHASE — The Oakridge Festival Narrative
  "story_1": {
    text: "The sun rose over Oakridge Academy for the Grand Festival! Leo was in charge of the fruit refreshment stall, but chaos erupted immediately! Orders were scribbled randomly on scrap paper. Leo gasped: 'I can't tell how many apples or bananas to slice! It's a complete jumble!' Barnaby the Data Owl swooped down: 'Hoot! Don't panic, Leo. Raw data without structure is just noisy chaos. When organized into a table, data tells an instant, crystal-clear story!' Emma hurried over with a fresh chalkboard: 'Let's bring order to this festival!'",
    style: "statement",
    file: "/assets/audio/story_1.mp3"
  },
  "story_2": {
    text: "Emma showed Leo the time-tested secret of tallying: 'Instead of writing fruit names over and over, draw a tally stroke for each order: one, two, three, four... and on the fifth order, slash diagonally across the group to close the gate: five! Count by fives: five, ten, plus two singles is twelve apples!' Barnaby hoots: 'Splendid! The count of how often an item occurs is called its FREQUENCY. In a Frequency Table, tallies convert directly into exact numbers!'",
    style: "emphasis",
    file: "/assets/audio/story_2.mp3"
  },
  "story_3": {
    text: "Over in the festival courtyard, Alex was tracking the three-week Reading Marathon. Alex was sketching tiny book doodles on a huge board. 'My fingers ache! Week 1 had 20 books, Week 2 had 30, and Week 3 had 25. Drawing 75 doodles will take until midnight!' Barnaby perched on Alex's easel: 'Use a Pictograph, Alex! A single picture symbol represents a set quantity — we call this the KEY or SCALE.' Barnaby set the key: one book equals 5 books. Alex cheered: 'Aha! For Week 1 with 20 books, 20 divided by 5 equals 4 symbols! The key saves hours of drawing!'",
    style: "statement",
    file: "/assets/audio/story_3.mp3"
  },
  "story_4": {
    text: "At the sports arena, Maya recorded votes for the festival tournament: Football received 8 votes, Basketball got 6, Tennis got 3, and Swimming got 5. Principal Vance rushed over: 'I need to announce the champion event over the loudspeakers in ten seconds! Who won?' Emma grabbed colored chalk: 'We need a Bar Graph! Categories along the horizontal X-axis, and equal scale increments along the vertical Y-axis.' Barnaby reminded them: 'Keep every bar the exact same width! Look at that: the Football bar towers up to 8 — that's the MODE, the most popular choice!'",
    style: "emphasis",
    file: "/assets/audio/story_4.mp3"
  },
  "story_5": {
    text: "The excitement reached fever pitch during the Great House Championship: Team Blue versus Team Gold! Both houses battled in Relay, Tug-of-War, and Obstacle Course. Emma smiled: 'That's why we build a Double Bar Graph! For each event, place two bars side-by-side: cyan for Team Blue, pink for Team Gold.' Barnaby added: 'A double bar graph must have a Legend, so everyone knows which house owns which color. In Relay, Blue scored 7 and Gold scored 10. The side-by-side comparison makes direct evaluation instantaneous!'",
    style: "emphasis",
    file: "/assets/audio/story_5.mp3"
  },
  "story_6": {
    text: "Inside the Science Pavilion, Maya set up digital sensors to track festival temperature from 9 AM to 3 PM: 18 degrees in the morning, climbing to 22 at 11 AM, peaking at 28 degrees at 1 PM, and dipping to 24 by 3 PM. Leo asked: 'Should we draw bars for every hour?' Barnaby shook his head: 'Time is continuous, Leo! For continuous change over time, a Line Graph is supreme. Connect points with lines! Rising slopes show warming, falling slopes show cooling!'",
    style: "emphasis",
    file: "/assets/audio/story_6.mp3"
  },
  "story_7": {
    text: "As sunset bathed the academy in gold, the student council gathered to finalize the festival budget of 360 dollars. Maya needed to present the budget on a circular wheel. Barnaby spread his wings: 'A complete circle has 360 degrees! Use the Master Angle Formula: Central Angle equals Category Value divided by Total Value, multiplied by 360 degrees! If Music gets 90 dollars out of 360: 90 divided by 360 times 360 degrees equals 90 degrees — an exact quarter-circle right angle!'",
    style: "encouragement",
    file: "/assets/audio/story_7.mp3"
  },
  "story_8": {
    text: "Thanks to Leo, Emma, Alex, Maya, and Barnaby, the Oakridge Grand Festival was the most successful event in school history! Principal Vance awarded the team the Silver Compass of Data. Barnaby turned toward you with twinkling eyes: 'Now it's your turn, Data Detective! Step into our 4 interactive simulation labs: tally Leo's fruit orders, build the sports bar graph and library pictograph, compare the championship teams, and slice the festival budget wheel! Are you ready to simulate?'",
    style: "celebration",
    file: "/assets/audio/story_8.mp3"
  },

  // SIMULATION GUIDANCE — Aligned with the Festival Story
  "sim_1": {
    text: "Welcome to Leo's Fruit Stall and Tally Lab! Count orders in bundles of 5, build complete frequency tables, and help Leo keep the festival stall running smoothly!",
    style: "encouragement",
    file: "/assets/audio/sim_1.mp3"
  },
  "sim_1_act_1_desc": {
    text: "Hundreds of students want fruit! Slide to add tally marks for Apples to reach the target of 12 orders, then click verify to build Leo's frequency table!",
    style: "statement",
    file: "/assets/audio/sim_1_act_1_desc.mp3"
  },
  "sim_1_act_1_hint": {
    text: "Every bundle of 5 tallies has four vertical strokes and one diagonal cross-slash: 卌. 12 tallies equals two full bundles of 5 plus two single strokes!",
    style: "thinking",
    file: "/assets/audio/sim_1_act_1_hint.mp3"
  },
  "sim_1_act_2_desc": {
    text: "Maya recorded festival preparation weather all month. Slide to set how many Rainy prep days were tallied to reach the target of 9 days, then confirm the count!",
    style: "statement",
    file: "/assets/audio/sim_1_act_2_desc.mp3"
  },
  "sim_1_act_2_hint": {
    text: "Match the tally count to 9 days — that is 1 bundle of 5 plus 4 single tallies!",
    style: "thinking",
    file: "/assets/audio/sim_1_act_2_hint.mp3"
  },
  "sim_1_act_3_desc": {
    text: "Alex needs to organize reading club sign-ups for the festival. Slide to tally Non-fiction members to reach the target of 15 members, then reveal the frequency table!",
    style: "statement",
    file: "/assets/audio/sim_1_act_3_desc.mp3"
  },
  "sim_1_act_3_hint": {
    text: "15 tallies equals exactly 3 full bundles of 5!",
    style: "thinking",
    file: "/assets/audio/sim_1_act_3_hint.mp3"
  },

  "sim_2": {
    text: "Welcome to the Festival Showcase Arena! Build bar heights and pictograph symbols to display festival survey results clearly!",
    style: "statement",
    file: "/assets/audio/sim_2.mp3"
  },
  "sim_2_act_1_desc": {
    text: "Principal Vance needs the festival sports vote! Drag the slider until the Football bar matches the survey count of 8 votes!",
    style: "statement",
    file: "/assets/audio/sim_2_act_1_desc.mp3"
  },
  "sim_2_act_1_hint": {
    text: "Slide the bar up until the value shows 8 votes on the scale! That's the mode of our sports survey!",
    style: "thinking",
    file: "/assets/audio/sim_2_act_1_hint.mp3"
  },
  "sim_2_act_2_desc": {
    text: "In Alex's Reading Marathon, each book symbol represents 5 books. Drag the slider to place enough symbols to show that Week 2 completed 30 books!",
    style: "statement",
    file: "/assets/audio/sim_2_act_2_desc.mp3"
  },
  "sim_2_act_2_hint": {
    text: "Divide 30 books by 5 books per symbol: 30 divided by 5 equals 6 symbols needed!",
    style: "thinking",
    file: "/assets/audio/sim_2_act_2_hint.mp3"
  },
  "sim_2_act_3_desc": {
    text: "Build a double bar graph for the House Championship! Drag each slider so Team Blue equals 7 votes and Team Gold equals 10 votes for Chips.",
    style: "statement",
    file: "/assets/audio/sim_2_act_3_desc.mp3"
  },
  "sim_2_act_3_hint": {
    text: "Set the cyan slider for Team Blue to 7 and the pink slider for Team Gold to 10!",
    style: "thinking",
    file: "/assets/audio/sim_2_act_3_hint.mp3"
  },
  "sim_2_act_4_desc": {
    text: "Compare Obstacle Course points! Set Team Blue to 65 points and Team Gold to 80 points on the dual bar chart.",
    style: "statement",
    file: "/assets/audio/sim_2_act_4_desc.mp3"
  },
  "sim_2_act_4_hint": {
    text: "Set Team Blue to 65 and Team Gold to 80 to observe the 15-point difference!",
    style: "thinking",
    file: "/assets/audio/sim_2_act_4_hint.mp3"
  },

  "sim_3": {
    text: "Welcome to the Festival Council Budget Lab! Calculate slice angles, category amounts, and circle percentages working forwards and backwards!",
    style: "question",
    file: "/assets/audio/sim_3.mp3"
  },
  "sim_3_act_1_desc": {
    text: "Out of a 180 dollar festival entertainment budget, the Carnival Music stage receives 45 dollars. Calculate its central angle in degrees!",
    style: "question",
    file: "/assets/audio/sim_3_act_1_desc.mp3"
  },
  "sim_3_act_1_hint": {
    text: "Central Angle equals value divided by total multiplied by 360 degrees: 45 divided by 180 times 360 equals 90 degrees!",
    style: "thinking",
    file: "/assets/audio/sim_3_act_1_hint.mp3"
  },
  "sim_3_act_2_desc": {
    text: "The festival eco-station pie chart shows Paper at 120 degrees out of 90 kg total waste collected. Work backwards to find its value in kg!",
    style: "question",
    file: "/assets/audio/sim_3_act_2_desc.mp3"
  },
  "sim_3_act_2_hint": {
    text: "Value equals angle divided by 360 degrees multiplied by total: 120 divided by 360 times 90 equals 30 kg!",
    style: "thinking",
    file: "/assets/audio/sim_3_act_2_hint.mp3"
  },
  "sim_3_act_3_desc": {
    text: "Out of 80 festival visitors surveyed, 20 chose Fresh Popcorn. Work backwards to find its percentage of the circle graph!",
    style: "question",
    file: "/assets/audio/sim_3_act_3_desc.mp3"
  },
  "sim_3_act_3_hint": {
    text: "Percentage equals value divided by total multiplied by 100 percent: 20 divided by 80 times 100 equals 25 percent!",
    style: "thinking",
    file: "/assets/audio/sim_3_act_3_hint.mp3"
  },

  // REFLECT PHASE
  "reflect_1": {
    text: "Congratulations on conquering the Oakridge Festival Data Quest! In your own words, explain how frequency tables, pictographs, bar graphs, and pie charts each help people understand data more easily, and share one real-life example.",
    style: "thinking",
    file: "/assets/audio/reflect_1.mp3"
  }
};

// Dynamically inject all 100 practice question prompts and hints into AUDIO_MAP
for (let w = 0; w < 10; w++) {
  const qs = WORLD_QUESTIONS[w] || [];
  qs.forEach((q, i) => {
    AUDIO_MAP[q.promptAudioKey] = {
      text: q.prompt,
      style: "question",
      file: `/assets/audio/${q.promptAudioKey}.mp3`
    };
    AUDIO_MAP[q.hintAudioKey] = {
      text: q.hint,
      style: "thinking",
      file: `/assets/audio/${q.hintAudioKey}.mp3`
    };
  });
}
