// src/data/simulationData.js
// 4 Interactive Simulation Stations for Grade 7 Data Handling

export const SIMULATION_STATIONS = [
  {
    id: 0,
    label: 'A',
    name: 'Tally & Table Lab',
    icon: '📋',
    desc: 'Count tally bundles & build frequency tables',
    activities: [
      {
        id: 1,
        title: "Activity 1: Favourite Fruit Survey",
        desc: "Leo is counting votes for the class fruit survey. Slide to add tally marks for Apples (target 12), then confirm to build the frequency table!",
        audioDescKey: "sim_1_act_1_desc",
        audioHintKey: "sim_1_act_1_hint",
        categories: ["Apples", "Bananas", "Grapes"],
        fixed: [null, 7, 5],
        targetIdx: 0,
        target: 12,
        max: 20,
        unit: "students",
        icon: "🍎",
        hint: "Every group of 5 tallies gets one diagonal slash across 4 vertical lines. 12 = two bundles of 5 plus 2 single tallies!"
      },
      {
        id: 2,
        title: "Activity 2: Weekend Weather Log",
        desc: "The class recorded weather tallies all month. Slide to set how many Rainy days were tallied (target 9), then confirm the count!",
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
        title: "Activity 3: Book Club Sign-ups",
        desc: "Students are signing up for reading groups. Slide to tally Non-fiction sign-ups (target 15), then reveal the full frequency table!",
        audioDescKey: "sim_1_act_3_desc",
        audioHintKey: "sim_1_act_3_hint",
        categories: ["Fiction", "Comics", "Non-fiction"],
        fixed: [10, 6, null],
        targetIdx: 2,
        target: 15,
        max: 24,
        unit: "members",
        icon: "📚",
        hint: "15 tallies = exactly 3 full bundles of 5!"
      }
    ]
  },
  {
    id: 1,
    label: 'B',
    name: 'Bar & Pictograph Lab',
    icon: '📊',
    desc: 'Build bar heights and pictograph symbols to match data',
    activities: [
      {
        id: 1,
        title: "Activity 1: Sports Vote Bar Graph",
        desc: "120 students voted for their favourite sport. Drag the slider until the Football bar matches the survey result of 8 votes!",
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
        hint: "Slide the bar up until the value shows 8 votes on the scale!"
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
        hint: "Divide 30 books by 5 books per symbol: 30 ÷ 5 = 6 symbols needed!"
      }
    ]
  },
  {
    id: 2,
    label: 'C',
    name: 'Double Bar Comparison',
    icon: '📶',
    desc: 'Compare dual series side-by-side with dual sliders',
    activities: [
      {
        id: 1,
        title: "Activity 1: Snack Choice — Boys vs Girls",
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
      },
      {
        id: 2,
        title: "Activity 2: Exam Score Comparison — Term 1 vs Term 2",
        desc: "Compare Science scores! Set Term 1 = 65 marks and Term 2 = 80 marks on the dual bar chart.",
        audioDescKey: "sim_2_act_1_desc",
        audioHintKey: "sim_2_act_1_hint",
        type: "doublebar",
        categories: ["Maths", "Science", "English"],
        fixedA: [70, null, 85],
        fixedB: [75, null, 90],
        targetIdx: 1,
        targetA: 65,
        targetB: 80,
        max: 100,
        unit: "marks",
        icon: "🔬",
        hint: "Set Term 1 to 65 and Term 2 to 80 to observe the 15-mark increase!"
      }
    ]
  },
  {
    id: 3,
    label: 'D',
    name: 'Pie & Inverse Solver',
    icon: '🥧',
    desc: 'Solve angles, values, and sector percentages',
    activities: [
      {
        id: 1,
        title: "Activity 1: Movie Genre Poll (Angle)",
        desc: "180 students voted for their favourite movie genre. The Comedy slice has 45 votes. Find its central angle in degrees!",
        audioDescKey: "sim_3_act_1_desc",
        audioHintKey: "sim_3_act_1_hint",
        value: 45,
        total: 180,
        ask: "Central Angle (°)",
        targetD: 90,
        unit: "°",
        icon: "🎬",
        pieMode: "angle",
        hint: "Angle = (value ÷ total) × 360° = (45 ÷ 180) × 360° = 90°"
      },
      {
        id: 2,
        title: "Activity 2: Recycling Survey (Value)",
        desc: "A school recycling pie chart's Paper sector measures 120° out of 90 kg total. Work backwards to find its value in kg!",
        audioDescKey: "sim_3_act_2_desc",
        audioHintKey: "sim_3_act_2_hint",
        angle: 120,
        total: 90,
        ask: "Value (kg)",
        targetD: 30,
        unit: "kg",
        icon: "♻️",
        pieMode: "value",
        hint: "Value = (angle ÷ 360°) × total = (120 ÷ 360) × 90 = 30 kg"
      },
      {
        id: 3,
        title: "Activity 3: Snack Survey (Percentage)",
        desc: "Out of 80 students surveyed, 20 chose Popcorn. Work backwards to find the percentage of the circle!",
        audioDescKey: "sim_3_act_3_desc",
        audioHintKey: "sim_3_act_3_hint",
        value: 20,
        total: 80,
        ask: "Percentage (%)",
        targetD: 25,
        unit: "%",
        icon: "🍿",
        pieMode: "percent",
        hint: "Percentage = (value ÷ total) × 100% = (20 ÷ 80) × 100% = 25%"
      }
    ]
  }
];
