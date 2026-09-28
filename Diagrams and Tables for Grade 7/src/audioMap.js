/* =========================================================================
   AUDIO MAP — Mapping fixed text keys to audio files or speech text
   Generated (or regenerated) by scripts/generate_audio.js using the
   ElevenLabs "Alice" voice (Xb7hH8MSUJpSbSDYk0k2, eleven_multilingual_v2).
   ========================================================================= */

import { WORLD_QUESTIONS } from './topicData.js';

export const AUDIO_MAP = {
  // WONDER PHASE
  "wonder_1": {
    text: "Ever wondered how newspapers, scientists, and sports coaches turn thousands of numbers into one simple picture you can understand in seconds? How do we organize messy data into diagrams and tables that tell a clear story?",
    style: "question",
    file: "/assets/audio/wonder_1.mp3"
  },

  // STORY PHASE
  "story_1": {
    text: "Every day we collect information — favourite snacks, weather, test scores, traffic on a road. But raw numbers scattered on paper are hard to read. How do we organize that information so anyone can understand it at a glance?",
    style: "statement",
    file: "/assets/audio/story_1.mp3"
  },
  "story_2": {
    text: "The first step is a frequency table. We use tally marks to count how often each item appears, then write the total as a frequency. A table turns a messy list into neat rows and columns!",
    style: "emphasis",
    file: "/assets/audio/story_2.mp3"
  },
  "story_3": {
    text: "A pictograph uses small pictures or symbols to represent data. Every symbol stands for a fixed amount, shown in a key. If one symbol equals five books, then three symbols mean fifteen books in total!",
    style: "statement",
    file: "/assets/audio/story_3.mp3"
  },
  "story_4": {
    text: "A bar graph uses rectangular bars to compare categories. Taller bars mean bigger values! We can quickly see which category is the most popular and which is the least, just by comparing bar heights.",
    style: "emphasis",
    file: "/assets/audio/story_4.mp3"
  },
  "story_5": {
    text: "A double bar graph places two bars side by side for each category, perfect for comparing two groups, like boys and girls, or this year and last year, at the very same time!",
    style: "emphasis",
    file: "/assets/audio/story_5.mp3"
  },
  "story_6": {
    text: "A line graph connects data points with a line to show how something changes over time, like temperature across a week. Rising lines mean increases, falling lines mean decreases!",
    style: "emphasis",
    file: "/assets/audio/story_6.mp3"
  },
  "story_7": {
    text: "A pie chart, or circle graph, shows how a whole is divided into parts. Each slice's angle is found using a simple formula! Angle equals the category's value divided by the total, multiplied by three hundred sixty degrees.",
    style: "encouragement",
    file: "/assets/audio/story_7.mp3"
  },
  "story_8": {
    text: "Fantastic! You've learned how tables, pictographs, bar graphs, line graphs, and pie charts each tell data's story in their own way. Now step into the simulation lab to build, read, and decode diagrams yourself!",
    style: "celebration",
    file: "/assets/audio/story_8.mp3"
  },

  // SIMULATION GUIDANCE
  "sim_1": {
    text: "Welcome to the Table and Tally Lab! Tap to add tally marks, build a frequency table, and answer questions straight from the data you collect!",
    style: "encouragement",
    file: "/assets/audio/sim_1.mp3"
  },
  "sim_1_act_1_desc": {
    text: "Nova is counting votes for the class fruit survey. Slide to add tally marks for Apples, then click Count Tallies to build the frequency table!",
    style: "statement",
    file: "/assets/audio/sim_1_act_1_desc.mp3"
  },
  "sim_1_act_1_hint": {
    text: "Every group of 5 tallies gets one diagonal line. Count the full groups of 5, then add any leftovers!",
    style: "thinking",
    file: "/assets/audio/sim_1_act_1_hint.mp3"
  },
  "sim_1_act_2_desc": {
    text: "The class kept a tally of the weather all month. Slide to set how many Rainy days were tallied, then confirm the count!",
    style: "statement",
    file: "/assets/audio/sim_1_act_2_desc.mp3"
  },
  "sim_1_act_2_hint": {
    text: "Match the tally count to the target shown in the activity card!",
    style: "thinking",
    file: "/assets/audio/sim_1_act_2_hint.mp3"
  },
  "sim_1_act_3_desc": {
    text: "New members are signing up for reading groups. Slide to tally the Non-fiction sign-ups, then reveal the full frequency table!",
    style: "statement",
    file: "/assets/audio/sim_1_act_3_desc.mp3"
  },
  "sim_1_act_3_hint": {
    text: "The frequency is simply the total tally count for that row!",
    style: "thinking",
    file: "/assets/audio/sim_1_act_3_hint.mp3"
  },

  "sim_2": {
    text: "Welcome to the Graph Builder Lab! Drag the sliders to set bar heights and pictograph symbols so they match the given data table exactly!",
    style: "statement",
    file: "/assets/audio/sim_2.mp3"
  },
  "sim_2_act_1_desc": {
    text: "120 students voted for their favourite sport. Drag the bar height slider until the Football bar matches the survey result of 8 votes!",
    style: "statement",
    file: "/assets/audio/sim_2_act_1_desc.mp3"
  },
  "sim_2_act_1_hint": {
    text: "Slide the bar up until it aligns with 8 on the vertical scale!",
    style: "thinking",
    file: "/assets/audio/sim_2_act_1_hint.mp3"
  },
  "sim_2_act_2_desc": {
    text: "Each picture symbol represents 5 books. Drag the slider to place enough symbols to show that the Library read a total of 30 books this week!",
    style: "statement",
    file: "/assets/audio/sim_2_act_2_desc.mp3"
  },
  "sim_2_act_2_hint": {
    text: "Divide 30 books by 5 books per symbol. You need 6 symbols!",
    style: "thinking",
    file: "/assets/audio/sim_2_act_2_hint.mp3"
  },
  "sim_2_act_3_desc": {
    text: "Build a double bar graph! Drag each slider so Boys equals 7 votes and Girls equals 10 votes for Chips.",
    style: "statement",
    file: "/assets/audio/sim_2_act_3_desc.mp3"
  },
  "sim_2_act_3_hint": {
    text: "Set the cyan slider for Boys to 7 and the pink slider for Girls to 10!",
    style: "thinking",
    file: "/assets/audio/sim_2_act_3_hint.mp3"
  },

  "sim_3": {
    text: "Welcome to the Pie Chart and Inverse Solver Lab! Given a slice of the data, work backwards to find the missing angle, percentage, or category value!",
    style: "question",
    file: "/assets/audio/sim_3.mp3"
  },
  "sim_3_act_1_desc": {
    text: "180 students voted for their favourite movie genre. The Comedy slice represents 45 votes. Work backwards to find its angle!",
    style: "question",
    file: "/assets/audio/sim_3_act_1_desc.mp3"
  },
  "sim_3_act_1_hint": {
    text: "Angle equals value divided by total multiplied by 360 degrees. 45 divided by 180 times 360 equals 90 degrees!",
    style: "thinking",
    file: "/assets/audio/sim_3_act_1_hint.mp3"
  },
  "sim_3_act_2_desc": {
    text: "A school recycling pie chart's Paper slice measures 120 degrees out of a total of 90 kg collected. Work backwards to find its value!",
    style: "question",
    file: "/assets/audio/sim_3_act_2_desc.mp3"
  },
  "sim_3_act_2_hint": {
    text: "Value equals angle divided by 360 degrees multiplied by total. 120 divided by 360 times 90 equals 30 kg!",
    style: "thinking",
    file: "/assets/audio/sim_3_act_2_hint.mp3"
  },
  "sim_3_act_3_desc": {
    text: "Out of 80 students surveyed, 20 chose Popcorn as their favourite snack. Work backwards to find the percentage!",
    style: "question",
    file: "/assets/audio/sim_3_act_3_desc.mp3"
  },
  "sim_3_act_3_hint": {
    text: "Percentage equals value divided by total multiplied by 100 percent. 20 divided by 80 times 100 equals 25 percent!",
    style: "thinking",
    file: "/assets/audio/sim_3_act_3_hint.mp3"
  },

  // REFLECT PHASE
  "reflect_1": {
    text: "Great work completing the module! In your own words, explain how a table, a graph, or a pie chart helps you understand data more easily, and give one real example.",
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
