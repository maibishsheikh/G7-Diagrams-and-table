// src/data/simulationData.js
// 4 Interactive Simulation Stations aligned with the Oakridge Festival Story

export const SIMULATION_STATIONS = [
  {
    id: 0,
    label: 'A',
    name: 'Tally & Table Lab',
    icon: '📋',
    desc: "Count tally bundles & build Leo's festival frequency tables",
    activities: [
      {
        id: 1,
        title: "Activity 1: Leo's Fruit Stall Survey",
        desc: "Hundreds of students want fruit! Slide to add tally marks for Apples (target 12), then confirm to build Leo's inventory frequency table!",
        audioDescKey: "sim_1_act_1_desc",
        audioHintKey: "sim_1_act_1_hint",
        categories: ["Apples", "Bananas", "Grapes"],
        fixed: [null, 7, 5],
        targetIdx: 0,
        target: 12,
        max: 20,
        unit: "students",
        icon: "🍎",
        hint: "Every group of 5 tallies gets a diagonal slash across 4 vertical lines (卌). 12 = two bundles of 5 plus 2 single tallies!"
      },
      {
        id: 2,
        title: "Activity 2: Festival Weather Monitor",
        desc: "Maya recorded festival preparation weather all month. Slide to set how many Rainy prep days were tallied (target 9), then confirm the count!",
        audioDescKey: "sim_1_act_2_desc",
        audioHintKey: "sim_1_act_2_hint",
        categories: ["Sunny", "Rainy", "Cloudy"],
        fixed: [6, null, 4],
        targetIdx: 1,
        target: 9,
        max: 18,
        unit: "days",
        icon: "🌦️",
        hint: "Match the tally count to 9 days — that is 1 bundle of 5 plus 4 single tallies!"
      },
      {
        id: 3,
        title: "Activity 3: Reading Marathon Sign-ups",
        desc: "Alex needs to organize reading club sign-ups for the festival. Slide to tally Non-fiction members (target 15), then reveal the frequency table!",
        audioDescKey: "sim_1_act_3_desc",
        audioHintKey: "sim_1_act_3_hint",
        categories: ["Fiction", "Comics", "Non-fiction"],
        fixed: [10, 6, null],
        targetIdx: 2,
        target: 15,
        max: 24,
        unit: "members",
        icon: "📚",
        hint: "15 tallies = exactly 3 full bundles of 5 (卌 卌 卌)!"
      }
    ]
  },
  {
    id: 1,
    label: 'B',
    name: 'Bar & Pictograph Lab',
    icon: '📊',
    desc: 'Build bar heights and pictograph symbols to match festival data',
    activities: [
      {
        id: 1,
        title: "Activity 1: Arena Sports Vote (Bar Graph)",
        desc: "Principal Vance needs the festival sports vote! Drag the slider until the Football bar matches the survey count of 8 votes!",
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
        hint: "Slide the bar up until the value shows 8 votes on the scale! That's the mode!"
      },
      {
        id: 2,
        title: "Activity 2: Alex's Reading Marathon (Pictograph)",
        desc: "Each picture symbol represents 5 books. Drag the slider to place enough symbols to show that Week 2 completed 30 books!",
        audioDescKey: "sim_2_act_2_desc",
        audioHintKey: "sim_2_act_2_hint",
        type: "pictograph",
        categories: ["Week 1", "Week 2", "Week 3"],
        fixed: [20, null, 25],
        targetIdx: 1,
        target: 30,
        scale: 5,
        maxSymbols: 8,
        unit: "books",
        icon: "📖",
        hint: "Divide 30 books by 5 books per symbol: 30 ÷ 5 = 6 symbols needed!"
      }
    ]
  },
  {
    id: 2,
    label: 'C',
    name: 'Double Bar Comparison',
    icon: '📶',
    desc: 'Compare dual series side-by-side with dual sliders for the championship',
    activities: [
      {
        id: 1,
        title: "Activity 1: House Snack Choice — Team Blue vs Team Gold",
        desc: "Build a double bar graph! Drag each slider so Team Blue = 7 votes and Team Gold = 10 votes for Chips.",
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
        hint: "Set the cyan slider for Team Blue to 7 and the pink slider for Team Gold to 10!"
      },
      {
        id: 2,
        title: "Activity 2: Championship Obstacle Points — Team Blue vs Team Gold",
        desc: "Compare Obstacle Course points! Set Team Blue = 65 points and Team Gold = 80 points on the dual bar chart.",
        audioDescKey: "sim_2_act_4_desc",
        audioHintKey: "sim_2_act_4_hint",
        type: "doublebar",
        categories: ["Relay", "Obstacle", "Tug-of-War"],
        fixedA: [70, null, 85],
        fixedB: [75, null, 90],
        targetIdx: 1,
        targetA: 65,
        targetB: 80,
        max: 100,
        unit: "points",
        icon: "🏆",
        hint: "Set Team Blue to 65 and Team Gold to 80 to observe the 15-point difference!"
      }
    ]
  },
  {
    id: 3,
    label: 'D',
    name: 'Pie & Inverse Solver',
    icon: '🥧',
    desc: 'Solve angles, values, and sector percentages for the festival budget',
    activities: [
      {
        id: 1,
        title: "Activity 1: Festival Music Budget (Central Angle)",
        desc: "Out of a $180 festival entertainment budget, the Carnival Music stage receives $45. Calculate its central angle in degrees!",
        audioDescKey: "sim_3_act_1_desc",
        audioHintKey: "sim_3_act_1_hint",
        value: 45,
        total: 180,
        ask: "Central Angle (°)",
        targetD: 90,
        unit: "°",
        icon: "🎵",
        pieMode: "angle",
        hint: "Angle = (Value ÷ Total) × 360° = (45 ÷ 180) × 360° = 90°"
      },
      {
        id: 2,
        title: "Activity 2: Festival Recycling Wheel (Value)",
        desc: "The festival eco-station pie chart shows Paper at 120° out of 90 kg total waste collected. Work backwards to find its value in kg!",
        audioDescKey: "sim_3_act_2_desc",
        audioHintKey: "sim_3_act_2_hint",
        angle: 120,
        total: 90,
        ask: "Value (kg)",
        targetD: 30,
        unit: "kg",
        icon: "♻️",
        pieMode: "value",
        hint: "Value = (Angle ÷ 360°) × Total = (120 ÷ 360) × 90 = 30 kg"
      },
      {
        id: 3,
        title: "Activity 3: Festival Popcorn Preference (Percentage)",
        desc: "Out of 80 festival visitors surveyed, 20 chose Fresh Popcorn. Work backwards to find its percentage of the circle graph!",
        audioDescKey: "sim_3_act_3_desc",
        audioHintKey: "sim_3_act_3_hint",
        value: 20,
        total: 80,
        ask: "Percentage (%)",
        targetD: 25,
        unit: "%",
        icon: "🍿",
        pieMode: "percent",
        hint: "Percentage = (Value ÷ Total) × 100% = (20 ÷ 80) × 100% = 25%"
      }
    ]
  }
];
