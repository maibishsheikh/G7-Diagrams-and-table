/* =========================================================================
   TOPIC DATA & 100 FIXED PRACTICE QUESTIONS (Grade 7 Data Handling)
   Covering:
   World 1: Tally Town (Q1–10, Tables & Tallies)
   World 2: Pictograph Island (Q11–20, Pictographs & Keys)
   World 3: Bar Graph Bay (Q21–30, Single Bar Graphs)
   World 4: Double Bar Delta (Q31–40, Double Bar Graphs)
   World 5: Line Graph Lookout (Q41–50, Line Graphs & Trends)
   World 6: Pie Chart Peak (Q51–60, Pie Charts & Angles/%)
   World 7: Frequency Forest (Q61–70, Advanced & Grouped Frequency Tables)
   World 8: Survey Summit (Q71–80, Complex Bar & Survey Graphs)
   World 9: Angle Analytics Lab (Q81–90, Inverse Pie Chart Math)
   World 10: Data Detective HQ (Q91–100, Mixed Comprehensive Cases)
   ========================================================================= */

export const PRACTICE_WORLDS = [
  { id: 0, name: "Tally Town",          icon: "📋", range: "Q1–10",  difficulty: 1, chartType: "table",      object: "class survey",     unit: "students" },
  { id: 1, name: "Pictograph Island",   icon: "🖼️", range: "Q11–20", difficulty: 1, chartType: "pictograph", object: "picture chart",    unit: "items" },
  { id: 2, name: "Bar Graph Bay",       icon: "📊", range: "Q21–30", difficulty: 2, chartType: "bar",        object: "bar graph",        unit: "votes" },
  { id: 3, name: "Double Bar Delta",    icon: "📶", range: "Q31–40", difficulty: 2, chartType: "doublebar",  object: "comparison graph", unit: "students" },
  { id: 4, name: "Line Graph Lookout",  icon: "📈", range: "Q41–50", difficulty: 3, chartType: "line",       object: "trend graph",      unit: "units" },
  { id: 5, name: "Pie Chart Peak",      icon: "🥧", range: "Q51–60", difficulty: 3, chartType: "pie",        object: "pie chart",        unit: "%" },
  { id: 6, name: "Frequency Forest",    icon: "🌲", range: "Q61–70", difficulty: 3, chartType: "table",      object: "frequency table",  unit: "trees" },
  { id: 7, name: "Survey Summit",       icon: "🏔️", range: "Q71–80", difficulty: 4, chartType: "bar",        object: "survey graph",     unit: "hikers" },
  { id: 8, name: "Angle Analytics Lab", icon: "🧭", range: "Q81–90", difficulty: 4, chartType: "pie",        object: "sector chart",     unit: "°" },
  { id: 9, name: "Data Detective HQ",   icon: "🕵️", range: "Q91–100",difficulty: 4, chartType: "mixed",      object: "data file",        unit: "cases" }
];

export const WORLD_QUESTIONS = {
  // WORLD 0: TALLY TOWN (Q1-10)
  0: [
    {
      qIndex: 0,
      prompt: "Leo counted class pets using tallies: Dogs has 2 full groups of 5 tallies and 3 single tallies. How many students chose Dogs?",
      hint: "Each full tally bundle with a diagonal slash represents 5 items. Count 5 plus 5 plus 3.",
      explanation: "2 full groups of 5 equals 10 tallies, plus 3 single tallies equals 13 students.",
      options: ["13 students", "10 students", "12 students", "15 students"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Dogs", "Cats", "Fish"], values: [13, 7, 4], unit: "students" }, highlight: 0 },
      promptAudioKey: "w0_q0_prompt",
      hintAudioKey: "w0_q0_hint"
    },
    {
      qIndex: 1,
      prompt: "In Emma's fruit frequency table, Apples has 8 votes, Bananas has 12 votes, and Mangoes has 5 votes. What is the total number of students surveyed?",
      hint: "Add all three frequency values together: 8 plus 12 plus 5.",
      explanation: "Total surveyed = 8 + 12 + 5 = 25 students.",
      options: ["25 students", "20 students", "28 students", "30 students"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Apples", "Bananas", "Mangoes"], values: [8, 12, 5], unit: "students" } },
      promptAudioKey: "w0_q1_prompt",
      hintAudioKey: "w0_q1_hint"
    },
    {
      qIndex: 2,
      prompt: "Which fruit category has the HIGHEST frequency in Emma's survey table?",
      hint: "Look for the largest number in the frequency column of the table.",
      explanation: "Bananas has the highest frequency of 12 votes.",
      options: ["Bananas", "Apples", "Mangoes", "Grapes"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Apples", "Bananas", "Mangoes", "Grapes"], values: [8, 12, 5, 3], unit: "students" }, highlight: 1 },
      promptAudioKey: "w0_q2_prompt",
      hintAudioKey: "w0_q2_hint"
    },
    {
      qIndex: 3,
      prompt: "How many MORE students chose Bananas than Apples in Emma's survey?",
      hint: "Subtract the frequency of Apples (8) from the frequency of Bananas (12).",
      explanation: "Difference = 12 − 8 = 4 students.",
      options: ["4 students", "3 students", "5 students", "2 students"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Apples", "Bananas", "Mangoes"], values: [8, 12, 5], unit: "students" }, highlight: [0, 1] },
      promptAudioKey: "w0_q3_prompt",
      hintAudioKey: "w0_q3_hint"
    },
    {
      qIndex: 4,
      prompt: "A frequency table shows 4 tally bundles of 5 for Walking, and 2 tally bundles of 5 for Cycling. How many students walk to school?",
      hint: "Multiply 4 bundles by 5 tallies per bundle.",
      explanation: "4 bundles × 5 tallies = 20 students.",
      options: ["20 students", "10 students", "15 students", "25 students"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Walking", "Cycling", "Bus"], values: [20, 10, 15], unit: "students" }, highlight: 0 },
      promptAudioKey: "w0_q4_prompt",
      hintAudioKey: "w0_q4_hint"
    },
    {
      qIndex: 5,
      prompt: "In a book club frequency table, Fiction has 14 votes and Non-fiction has 9 votes. What is the difference between Fiction and Non-fiction?",
      hint: "Find the difference by subtracting 9 from 14.",
      explanation: "Difference = 14 − 9 = 5 books.",
      options: ["5 books", "6 books", "4 books", "7 books"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Fiction", "Non-fiction", "Comics"], values: [14, 9, 6], unit: "books" }, highlight: [0, 1] },
      promptAudioKey: "w0_q5_prompt",
      hintAudioKey: "w0_q5_hint"
    },
    {
      qIndex: 6,
      prompt: "Alex recorded ice cream votes: Vanilla has 15, Chocolate has 18, Strawberry has 7. What is the combined total for Vanilla and Strawberry?",
      hint: "Add the votes for Vanilla (15) and Strawberry (7).",
      explanation: "Combined total = 15 + 7 = 22 votes.",
      options: ["22 votes", "25 votes", "33 votes", "40 votes"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Vanilla", "Chocolate", "Strawberry"], values: [15, 18, 7], unit: "votes" }, highlight: [0, 2] },
      promptAudioKey: "w0_q6_prompt",
      hintAudioKey: "w0_q6_hint"
    },
    {
      qIndex: 7,
      prompt: "Which category has the LOWEST frequency in Alex's ice cream table?",
      hint: "Identify the category associated with the smallest count in the frequency column.",
      explanation: "Strawberry has the lowest frequency with 7 votes.",
      options: ["Strawberry", "Vanilla", "Chocolate", "Mint"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Vanilla", "Chocolate", "Strawberry", "Mint"], values: [15, 18, 7, 10], unit: "votes" }, highlight: 2 },
      promptAudioKey: "w0_q7_prompt",
      hintAudioKey: "w0_q7_hint"
    },
    {
      qIndex: 8,
      prompt: "If 3 new students vote for Strawberry in Alex's survey, what will the new frequency for Strawberry be?",
      hint: "Take the current frequency of 7 and add 3.",
      explanation: "New frequency = 7 + 3 = 10 votes.",
      options: ["10 votes", "9 votes", "11 votes", "12 votes"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Strawberry"], values: [7], unit: "votes" }, highlight: 0 },
      promptAudioKey: "w0_q8_prompt",
      hintAudioKey: "w0_q8_hint"
    },
    {
      qIndex: 9,
      prompt: "Noah surveyed 40 students total. The table lists 15 for Red, 12 for Blue, and 8 for Green. How many students chose Yellow?",
      hint: "Subtract the sum of Red, Blue, and Green (15 + 12 + 8 = 35) from the total of 40.",
      explanation: "Yellow frequency = 40 − (15 + 12 + 8) = 40 − 35 = 5 students.",
      options: ["5 students", "6 students", "4 students", "7 students"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Red", "Blue", "Green", "Yellow"], values: [15, 12, 8, 5], unit: "students" }, highlight: 3 },
      promptAudioKey: "w0_q9_prompt",
      hintAudioKey: "w0_q9_hint"
    }
  ],

  // WORLD 1: PICTOGRAPH ISLAND (Q11-20)
  1: [
    {
      qIndex: 0,
      prompt: "In a pictograph, each picture symbol 🖼️ represents 4 books. If the 'Week 1' row shows 3 symbols, how many books were read in Week 1?",
      hint: "Multiply the number of symbols (3) by the key value (4 books per symbol).",
      explanation: "3 symbols × 4 books/symbol = 12 books.",
      options: ["12 books", "7 books", "14 books", "16 books"],
      correctIndex: 0,
      diagramData: { mode: 'pictograph', data: { categories: ["Week 1", "Week 2"], symbolCounts: [3, 2], scale: 4, unit: "books" }, highlight: 0 },
      promptAudioKey: "w1_q0_prompt",
      hintAudioKey: "w1_q0_hint"
    },
    {
      qIndex: 1,
      prompt: "Each 🖼️ symbol represents 5 trees. Row A has 6 symbols and Row B has 4 symbols. How many trees does Row A represent?",
      hint: "Multiply Row A's 6 symbols by 5 trees.",
      explanation: "6 symbols × 5 trees = 30 trees.",
      options: ["30 trees", "20 trees", "25 trees", "35 trees"],
      correctIndex: 0,
      diagramData: { mode: 'pictograph', data: { categories: ["Row A", "Row B"], symbolCounts: [6, 4], scale: 5, unit: "trees" }, highlight: 0 },
      promptAudioKey: "w1_q1_prompt",
      hintAudioKey: "w1_q1_hint"
    },
    {
      qIndex: 2,
      prompt: "Each 🖼️ symbol represents 10 vehicles. If 50 vehicles were counted, how many full symbols should be drawn?",
      hint: "Divide the total value (50) by the key value (10 vehicles per symbol).",
      explanation: "50 ÷ 10 = 5 symbols.",
      options: ["5 symbols", "4 symbols", "6 symbols", "10 symbols"],
      correctIndex: 0,
      diagramData: { mode: 'pictograph', data: { categories: ["Vehicles"], symbolCounts: [5], scale: 10, unit: "vehicles" }, highlight: 0 },
      promptAudioKey: "w1_q2_prompt",
      hintAudioKey: "w1_q2_hint"
    },
    {
      qIndex: 3,
      prompt: "In a school garden pictograph, 1 🖼️ = 2 plants. Roses has 5 symbols and Sunflowers has 3 symbols. How many MORE Roses are there than Sunflowers?",
      hint: "Calculate Roses (5 × 2 = 10) minus Sunflowers (3 × 2 = 6).",
      explanation: "Roses = 10, Sunflowers = 6. Difference = 10 − 6 = 4 plants.",
      options: ["4 plants", "2 plants", "6 plants", "5 plants"],
      correctIndex: 0,
      diagramData: { mode: 'pictograph', data: { categories: ["Roses", "Sunflowers"], symbolCounts: [5, 3], scale: 2, unit: "plants" }, highlight: [0, 1] },
      promptAudioKey: "w1_q3_prompt",
      hintAudioKey: "w1_q3_hint"
    },
    {
      qIndex: 4,
      prompt: "If 1 🖼️ = 8 apples, what total number of apples is shown by 2 full symbols and 1 half symbol?",
      hint: "2 full symbols = 16 apples, and a half symbol = 4 apples. 16 + 4 = 20.",
      explanation: "2.5 symbols × 8 apples = 20 apples.",
      options: ["20 apples", "16 apples", "18 apples", "24 apples"],
      correctIndex: 0,
      diagramData: { mode: 'pictograph', data: { categories: ["Apples"], symbolCounts: [2.5], scale: 8, unit: "apples" }, highlight: 0 },
      promptAudioKey: "w1_q4_prompt",
      hintAudioKey: "w1_q4_hint"
    },
    {
      qIndex: 5,
      prompt: "In Chloe's toy pictograph, 1 🖼️ = 5 toys. Dolls has 4 symbols, Cars has 7 symbols, and Blocks has 3 symbols. What is the total number of toys?",
      hint: "Add total symbols: 4 + 7 + 3 = 14 symbols. Then multiply 14 by 5.",
      explanation: "Total symbols = 14. Total toys = 14 × 5 = 70 toys.",
      options: ["70 toys", "65 toys", "75 toys", "60 toys"],
      correctIndex: 0,
      diagramData: { mode: 'pictograph', data: { categories: ["Dolls", "Cars", "Blocks"], symbolCounts: [4, 7, 3], scale: 5, unit: "toys" } },
      promptAudioKey: "w1_q5_prompt",
      hintAudioKey: "w1_q5_hint"
    },
    {
      qIndex: 6,
      prompt: "Which row has the LOWEST total number of items in Chloe's toy pictograph?",
      hint: "Look for the row with the fewest picture symbols.",
      explanation: "Blocks has only 3 symbols (15 toys), which is the lowest.",
      options: ["Blocks", "Dolls", "Cars", "Puzzles"],
      correctIndex: 0,
      diagramData: { mode: 'pictograph', data: { categories: ["Dolls", "Cars", "Blocks"], symbolCounts: [4, 7, 3], scale: 5, unit: "toys" }, highlight: 2 },
      promptAudioKey: "w1_q6_prompt",
      hintAudioKey: "w1_q6_hint"
    },
    {
      qIndex: 7,
      prompt: "Each 🖼️ = 6 recycled cans. Grade 7 collected 36 cans. How many symbols are needed in the pictograph?",
      hint: "Divide 36 by 6.",
      explanation: "36 ÷ 6 = 6 symbols.",
      options: ["6 symbols", "5 symbols", "7 symbols", "8 symbols"],
      correctIndex: 0,
      diagramData: { mode: 'pictograph', data: { categories: ["Grade 7"], symbolCounts: [6], scale: 6, unit: "cans" }, highlight: 0 },
      promptAudioKey: "w1_q7_prompt",
      hintAudioKey: "w1_q7_hint"
    },
    {
      qIndex: 8,
      prompt: "In a sports pictograph where 1 🖼️ = 10 votes, Football has 40 votes and Basketball has 25 votes. How many symbols does Basketball need?",
      hint: "Divide 25 by 10 to get 2 full symbols and a half symbol.",
      explanation: "25 ÷ 10 = 2.5 symbols.",
      options: ["2.5 symbols", "2 symbols", "3 symbols", "4 symbols"],
      correctIndex: 0,
      diagramData: { mode: 'pictograph', data: { categories: ["Football", "Basketball"], symbolCounts: [4, 2.5], scale: 10, unit: "votes" }, highlight: 1 },
      promptAudioKey: "w1_q8_prompt",
      hintAudioKey: "w1_q8_hint"
    },
    {
      qIndex: 9,
      prompt: "If a pictograph key says 1 🖼️ = 12 students, how many students are represented by 4 symbols?",
      hint: "Multiply 4 by 12.",
      explanation: "4 × 12 = 48 students.",
      options: ["48 students", "36 students", "50 students", "44 students"],
      correctIndex: 0,
      diagramData: { mode: 'pictograph', data: { categories: ["Class"], symbolCounts: [4], scale: 12, unit: "students" }, highlight: 0 },
      promptAudioKey: "w1_q9_prompt",
      hintAudioKey: "w1_q9_hint"
    }
  ],

  // WORLD 2: BAR GRAPH BAY (Q21-30)
  2: [
    {
      qIndex: 0,
      prompt: "In Jack's favourite subject bar graph, Maths reaches 24, Science 18, English 15, and Art 21. How many students chose Maths?",
      hint: "Read the height of the bar above the 'Maths' label on the vertical axis.",
      explanation: "The Maths bar reaches 24 on the scale.",
      options: ["24 students", "18 students", "21 students", "15 students"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Maths", "Science", "English", "Art"], values: [24, 18, 15, 21], unit: "students" }, highlight: 0 },
      promptAudioKey: "w2_q0_prompt",
      hintAudioKey: "w2_q0_hint"
    },
    {
      qIndex: 1,
      prompt: "Which subject is the MODE (most popular category) in Jack's bar graph?",
      hint: "The mode category corresponds to the tallest bar on the graph.",
      explanation: "Maths has the tallest bar at 24 students.",
      options: ["Maths", "Art", "Science", "English"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Maths", "Science", "English", "Art"], values: [24, 18, 15, 21], unit: "students" }, highlight: 0 },
      promptAudioKey: "w2_q1_prompt",
      hintAudioKey: "w2_q1_hint"
    },
    {
      qIndex: 2,
      prompt: "How many MORE students chose Art than English in Jack's bar graph?",
      hint: "Subtract the height of English (15) from the height of Art (21).",
      explanation: "21 − 15 = 6 students.",
      options: ["6 students", "5 students", "7 students", "3 students"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Maths", "Science", "English", "Art"], values: [24, 18, 15, 21], unit: "students" }, highlight: [2, 3] },
      promptAudioKey: "w2_q2_prompt",
      hintAudioKey: "w2_q2_hint"
    },
    {
      qIndex: 3,
      prompt: "What is the total number of students surveyed across all four subjects in Jack's bar graph?",
      hint: "Sum all four bar values: 24 + 18 + 15 + 21.",
      explanation: "24 + 18 + 15 + 21 = 78 students.",
      options: ["78 students", "72 students", "80 students", "84 students"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Maths", "Science", "English", "Art"], values: [24, 18, 15, 21], unit: "students" } },
      promptAudioKey: "w2_q3_prompt",
      hintAudioKey: "w2_q3_hint"
    },
    {
      qIndex: 4,
      prompt: "A bar graph shows weekly library book returns: Mon=12, Tue=16, Wed=20, Thu=14, Fri=22. Which day had the FEWEST book returns?",
      hint: "Look for the shortest bar on the graph.",
      explanation: "Monday has the shortest bar at 12 books.",
      options: ["Mon", "Thu", "Tue", "Wed"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri"], values: [12, 16, 20, 14, 22], unit: "books" }, highlight: 0 },
      promptAudioKey: "w2_q4_prompt",
      hintAudioKey: "w2_q4_hint"
    },
    {
      qIndex: 5,
      prompt: "On which day were exactly 20 books returned?",
      hint: "Find the bar that aligns with the mark of 20 on the vertical axis.",
      explanation: "Wednesday's bar height is exactly 20.",
      options: ["Wed", "Tue", "Fri", "Mon"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri"], values: [12, 16, 20, 14, 22], unit: "books" }, highlight: 2 },
      promptAudioKey: "w2_q5_prompt",
      hintAudioKey: "w2_q5_hint"
    },
    {
      qIndex: 6,
      prompt: "What is the difference in book returns between Friday (22) and Monday (12)?",
      hint: "Subtract 12 from 22.",
      explanation: "22 − 12 = 10 books.",
      options: ["10 books", "8 books", "12 books", "14 books"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri"], values: [12, 16, 20, 14, 22], unit: "books" }, highlight: [0, 4] },
      promptAudioKey: "w2_q6_prompt",
      hintAudioKey: "w2_q6_hint"
    },
    {
      qIndex: 7,
      prompt: "In a pet bar graph, Dogs=35, Cats=28, Fish=12, Birds=15. How many total pets are shown?",
      hint: "Add 35 + 28 + 12 + 15.",
      explanation: "35 + 28 + 12 + 15 = 90 pets.",
      options: ["90 pets", "85 pets", "95 pets", "88 pets"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Dogs", "Cats", "Fish", "Birds"], values: [35, 28, 12, 15], unit: "pets" } },
      promptAudioKey: "w2_q7_prompt",
      hintAudioKey: "w2_q7_hint"
    },
    {
      qIndex: 8,
      prompt: "How many FEWER students have Fish (12) than Cats (28)?",
      hint: "Subtract 12 from 28.",
      explanation: "28 − 12 = 16 students.",
      options: ["16 students", "14 students", "18 students", "15 students"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Dogs", "Cats", "Fish", "Birds"], values: [35, 28, 12, 15], unit: "students" }, highlight: [1, 2] },
      promptAudioKey: "w2_q8_prompt",
      hintAudioKey: "w2_q8_hint"
    },
    {
      qIndex: 9,
      prompt: "If 5 more students get a Fish, what will the new bar height for Fish be?",
      hint: "Add 5 to the current bar height of 12.",
      explanation: "12 + 5 = 17 students.",
      options: ["17 students", "16 students", "18 students", "15 students"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Fish"], values: [12], unit: "students" }, highlight: 0 },
      promptAudioKey: "w2_q9_prompt",
      hintAudioKey: "w2_q9_hint"
    }
  ],

  // WORLD 3: DOUBLE BAR DELTA (Q31-40)
  3: [
    {
      qIndex: 0,
      prompt: "In a double bar graph of favourite sports (Boys vs Girls), Football has Boys=18 and Girls=12. How many Boys chose Football?",
      hint: "Look at the Boys bar (check the legend color) for Football.",
      explanation: "The Boys bar for Football reads 18.",
      options: ["18 boys", "12 boys", "30 boys", "15 boys"],
      correctIndex: 0,
      diagramData: { mode: 'doublebar', data: { categories: ["Football", "Basketball"], seriesA: [18, 14], seriesB: [12, 20], seriesNames: ["Boys", "Girls"], unit: "students" }, highlight: 0 },
      promptAudioKey: "w3_q0_prompt",
      hintAudioKey: "w3_q0_hint"
    },
    {
      qIndex: 1,
      prompt: "In the same graph, Basketball has Boys=14 and Girls=20. Which group preferred Basketball more?",
      hint: "Compare the heights: Girls (20) is taller than Boys (14).",
      explanation: "Girls has 20 vs Boys 14, so Girls preferred Basketball more.",
      options: ["Girls", "Boys", "They are equal", "Neither"],
      correctIndex: 0,
      diagramData: { mode: 'doublebar', data: { categories: ["Football", "Basketball"], seriesA: [18, 14], seriesB: [12, 20], seriesNames: ["Boys", "Girls"], unit: "students" }, highlight: 1 },
      promptAudioKey: "w3_q1_prompt",
      hintAudioKey: "w3_q1_hint"
    },
    {
      qIndex: 2,
      prompt: "What is the TOTAL number of students (Boys + Girls) who chose Basketball?",
      hint: "Add the Boys count (14) and Girls count (20).",
      explanation: "14 + 20 = 34 students.",
      options: ["34 students", "30 students", "32 students", "36 students"],
      correctIndex: 0,
      diagramData: { mode: 'doublebar', data: { categories: ["Football", "Basketball"], seriesA: [18, 14], seriesB: [12, 20], seriesNames: ["Boys", "Girls"], unit: "students" }, highlight: 1 },
      promptAudioKey: "w3_q2_prompt",
      hintAudioKey: "w3_q2_hint"
    },
    {
      qIndex: 3,
      prompt: "For Tennis, Boys=10 and Girls=10. What can you say about their preferences?",
      hint: "Both bars reach the exact same height of 10.",
      explanation: "Both bars equal 10, so preferences are equal.",
      options: ["Equal number of boys and girls", "More boys", "More girls", "No data"],
      correctIndex: 0,
      diagramData: { mode: 'doublebar', data: { categories: ["Tennis"], seriesA: [10], seriesB: [10], seriesNames: ["Boys", "Girls"], unit: "students" }, highlight: 0 },
      promptAudioKey: "w3_q3_prompt",
      hintAudioKey: "w3_q3_hint"
    },
    {
      qIndex: 4,
      prompt: "A double bar graph compares Term 1 and Term 2 pass rates. Math pass rates were Term 1=65 and Term 2=80. By how much did the pass rate increase?",
      hint: "Subtract Term 1 (65) from Term 2 (80).",
      explanation: "80 − 65 = 15 students.",
      options: ["15 students", "10 students", "20 students", "25 students"],
      correctIndex: 0,
      diagramData: { mode: 'doublebar', data: { categories: ["Math"], seriesA: [65], seriesB: [80], seriesNames: ["Term 1", "Term 2"], unit: "students" }, highlight: 0 },
      promptAudioKey: "w3_q4_prompt",
      hintAudioKey: "w3_q4_hint"
    },
    {
      qIndex: 5,
      prompt: "Science pass rates were Term 1=75 and Term 2=70. Did Science pass rates increase or decrease?",
      hint: "Term 2 (70) is lower than Term 1 (75) by 5.",
      explanation: "Decreased by 75 − 70 = 5 students.",
      options: ["Decreased by 5", "Increased by 5", "Decreased by 10", "Remained same"],
      correctIndex: 0,
      diagramData: { mode: 'doublebar', data: { categories: ["Science"], seriesA: [75], seriesB: [70], seriesNames: ["Term 1", "Term 2"], unit: "students" }, highlight: 0 },
      promptAudioKey: "w3_q5_prompt",
      hintAudioKey: "w3_q5_hint"
    },
    {
      qIndex: 6,
      prompt: "In a fruit poll, Grade 6 Boys=25, Grade 7 Boys=30 for Mangoes. What is the combined total of Grade 6 and Grade 7 Boys for Mangoes?",
      hint: "Add 25 and 30.",
      explanation: "25 + 30 = 55 boys.",
      options: ["55 boys", "50 boys", "60 boys", "65 boys"],
      correctIndex: 0,
      diagramData: { mode: 'doublebar', data: { categories: ["Mangoes"], seriesA: [25], seriesB: [30], seriesNames: ["Grade 6", "Grade 7"], unit: "boys" }, highlight: 0 },
      promptAudioKey: "w3_q6_prompt",
      hintAudioKey: "w3_q6_hint"
    },
    {
      qIndex: 7,
      prompt: "Which category shows the LARGEST gap between Boys and Girls in a snack graph where Chips has Boys=30, Girls=10, and Fruit has Boys=15, Girls=20?",
      hint: "Chips gap is |30 − 10| = 20, while Fruit gap is |15 − 20| = 5.",
      explanation: "Chips has a gap of 20, which is larger.",
      options: ["Chips", "Fruit", "Cookies", "Nuts"],
      correctIndex: 0,
      diagramData: { mode: 'doublebar', data: { categories: ["Chips", "Fruit"], seriesA: [30, 15], seriesB: [10, 20], seriesNames: ["Boys", "Girls"], unit: "votes" }, highlight: 0 },
      promptAudioKey: "w3_q7_prompt",
      hintAudioKey: "w3_q7_hint"
    },
    {
      qIndex: 8,
      prompt: "Add up all the Girls bars across 3 categories: Football=12, Basketball=20, Tennis=10. What is the total for Girls?",
      hint: "Sum 12 + 20 + 10.",
      explanation: "12 + 20 + 10 = 42 students.",
      options: ["42 students", "40 students", "44 students", "45 students"],
      correctIndex: 0,
      diagramData: { mode: 'doublebar', data: { categories: ["Football", "Basketball", "Tennis"], seriesA: [18, 14, 10], seriesB: [12, 20, 10], seriesNames: ["Boys", "Girls"], unit: "students" } },
      promptAudioKey: "w3_q8_prompt",
      hintAudioKey: "w3_q8_hint"
    },
    {
      qIndex: 9,
      prompt: "Add up all the Boys bars across the same 3 categories: Football=18, Basketball=14, Tennis=10. What is the total for Boys?",
      hint: "Sum 18 + 14 + 10.",
      explanation: "18 + 14 + 10 = 42 students.",
      options: ["42 students", "40 students", "44 students", "46 students"],
      correctIndex: 0,
      diagramData: { mode: 'doublebar', data: { categories: ["Football", "Basketball", "Tennis"], seriesA: [18, 14, 10], seriesB: [12, 20, 10], seriesNames: ["Boys", "Girls"], unit: "students" } },
      promptAudioKey: "w3_q9_prompt",
      hintAudioKey: "w3_q9_hint"
    }
  ],

  // WORLD 4: LINE GRAPH LOOKOUT (Q41-50)
  4: [
    {
      qIndex: 0,
      prompt: "In a weekly temperature line graph, Monday=15°C, Tuesday=18°C, Wednesday=22°C, Thursday=20°C, Friday=25°C. What was the temperature on Wednesday?",
      hint: "Find Wednesday on the horizontal axis and read the vertical point height.",
      explanation: "The point for Wednesday sits at 22°C.",
      options: ["22°C", "18°C", "20°C", "25°C"],
      correctIndex: 0,
      diagramData: { mode: 'line', data: { labels: ["Mon", "Tue", "Wed", "Thu", "Fri"], values: [15, 18, 22, 20, 25], unit: "°C" }, highlight: 2 },
      promptAudioKey: "w4_q0_prompt",
      hintAudioKey: "w4_q0_hint"
    },
    {
      qIndex: 1,
      prompt: "On which day was the HIGHEST temperature recorded in the week?",
      hint: "Identify the highest point on the line graph (25°C).",
      explanation: "Friday has the highest point at 25°C.",
      options: ["Friday", "Wednesday", "Tuesday", "Monday"],
      correctIndex: 0,
      diagramData: { mode: 'line', data: { labels: ["Mon", "Tue", "Wed", "Thu", "Fri"], values: [15, 18, 22, 20, 25], unit: "°C" }, highlight: 4 },
      promptAudioKey: "w4_q1_prompt",
      hintAudioKey: "w4_q1_hint"
    },
    {
      qIndex: 2,
      prompt: "On which day was the LOWEST temperature recorded?",
      hint: "Find the lowest point on the line graph (15°C).",
      explanation: "Monday has the lowest point at 15°C.",
      options: ["Monday", "Thursday", "Tuesday", "Friday"],
      correctIndex: 0,
      diagramData: { mode: 'line', data: { labels: ["Mon", "Tue", "Wed", "Thu", "Fri"], values: [15, 18, 22, 20, 25], unit: "°C" }, highlight: 0 },
      promptAudioKey: "w4_q2_prompt",
      hintAudioKey: "w4_q2_hint"
    },
    {
      qIndex: 3,
      prompt: "By how much did the temperature INCREASE between Monday (15°C) and Wednesday (22°C)?",
      hint: "Subtract 15°C from 22°C.",
      explanation: "22 − 15 = 7°C increase.",
      options: ["7°C", "5°C", "8°C", "6°C"],
      correctIndex: 0,
      diagramData: { mode: 'line', data: { labels: ["Mon", "Tue", "Wed", "Thu", "Fri"], values: [15, 18, 22, 20, 25], unit: "°C" }, highlight: [0, 2] },
      promptAudioKey: "w4_q3_prompt",
      hintAudioKey: "w4_q3_hint"
    },
    {
      qIndex: 4,
      prompt: "Between which two consecutive days did the temperature DECREASE?",
      hint: "Look for a line segment sloping downwards from left to right.",
      explanation: "From Wednesday (22°C) to Thursday (20°C) the line drops.",
      options: ["Wednesday and Thursday", "Monday and Tuesday", "Tuesday and Wednesday", "Thursday and Friday"],
      correctIndex: 0,
      diagramData: { mode: 'line', data: { labels: ["Mon", "Tue", "Wed", "Thu", "Fri"], values: [15, 18, 22, 20, 25], unit: "°C" }, highlight: [2, 3] },
      promptAudioKey: "w4_q4_prompt",
      hintAudioKey: "w4_q4_hint"
    },
    {
      qIndex: 5,
      prompt: "A plant growth line graph shows: Week 1=4cm, Week 2=7cm, Week 3=12cm, Week 4=18cm. How tall was the plant in Week 3?",
      hint: "Read the value at Week 3 on the graph.",
      explanation: "Week 3 point is at 12cm.",
      options: ["12cm", "7cm", "18cm", "15cm"],
      correctIndex: 0,
      diagramData: { mode: 'line', data: { labels: ["W1", "W2", "W3", "W4"], values: [4, 7, 12, 18], unit: "cm" }, highlight: 2 },
      promptAudioKey: "w4_q5_prompt",
      hintAudioKey: "w4_q5_hint"
    },
    {
      qIndex: 6,
      prompt: "In which week did the plant grow the MOST (fastest increase)?",
      hint: "The steepest segment is between Week 3 (12cm) and Week 4 (18cm), a growth of 6cm.",
      explanation: "Growth in W4 = 18 − 12 = 6cm, which is the largest weekly gain.",
      options: ["Week 4 (grew 6cm)", "Week 3 (grew 5cm)", "Week 2 (grew 3cm)", "Week 1 (grew 4cm)"],
      correctIndex: 0,
      diagramData: { mode: 'line', data: { labels: ["W1", "W2", "W3", "W4"], values: [4, 7, 12, 18], unit: "cm" }, highlight: [2, 3] },
      promptAudioKey: "w4_q6_prompt",
      hintAudioKey: "w4_q6_hint"
    },
    {
      qIndex: 7,
      prompt: "What was the total growth of the plant from Week 1 (4cm) to Week 4 (18cm)?",
      hint: "Subtract 4cm from 18cm.",
      explanation: "18 − 4 = 14cm total growth.",
      options: ["14cm", "12cm", "18cm", "16cm"],
      correctIndex: 0,
      diagramData: { mode: 'line', data: { labels: ["W1", "W2", "W3", "W4"], values: [4, 7, 12, 18], unit: "cm" }, highlight: [0, 3] },
      promptAudioKey: "w4_q7_prompt",
      hintAudioKey: "w4_q7_hint"
    },
    {
      qIndex: 8,
      prompt: "A shop's sales line graph shows Mon=$100, Tue=$150, Wed=$120, Thu=$200. What was the change in sales from Tuesday ($150) to Wednesday ($120)?",
      hint: "120 minus 150 equals -30, meaning a decrease of $30.",
      explanation: "120 − 150 = −30 (a decrease of $30).",
      options: ["Decreased by $30", "Increased by $30", "Decreased by $20", "Increased by $50"],
      correctIndex: 0,
      diagramData: { mode: 'line', data: { labels: ["Mon", "Tue", "Wed", "Thu"], values: [100, 150, 120, 200], unit: "$" }, highlight: [1, 2] },
      promptAudioKey: "w4_q8_prompt",
      hintAudioKey: "w4_q8_hint"
    },
    {
      qIndex: 9,
      prompt: "What was the range (highest minus lowest) of sales in the shop graph (Lowest=$100, Highest=$200)?",
      hint: "Range = Highest value ($200) - Lowest value ($100) = $100.",
      explanation: "200 − 100 = $100.",
      options: ["$100", "$150", "$80", "$120"],
      correctIndex: 0,
      diagramData: { mode: 'line', data: { labels: ["Mon", "Tue", "Wed", "Thu"], values: [100, 150, 120, 200], unit: "$" } },
      promptAudioKey: "w4_q9_prompt",
      hintAudioKey: "w4_q9_hint"
    }
  ],

  // WORLD 5: PIE CHART PEAK (Q51-60)
  5: [
    {
      qIndex: 0,
      prompt: "In a pie chart of 120 students, the 'Sports' sector represents 30 students. What fraction of the pie chart does 'Sports' represent?",
      hint: "Divide 30 by 120, which simplifies to 1/4 or 25%.",
      explanation: "30 ÷ 120 = 1/4 (or 25%).",
      options: ["1/4 (25%)", "1/2 (50%)", "1/3 (33.3%)", "1/5 (20%)"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Sports", "Rest"], values: [30, 90], unit: "students" }, highlight: 0 },
      promptAudioKey: "w5_q0_prompt",
      hintAudioKey: "w5_q0_hint"
    },
    {
      qIndex: 1,
      prompt: "What is the sector ANGLE for 'Sports' (value 30 out of 120 total)? (Angle = value ÷ total × 360°)",
      hint: "(30 ÷ 120) × 360° = 1/4 × 360° = 90°.",
      explanation: "(30 ÷ 120) × 360° = 90°.",
      options: ["90°", "60°", "120°", "45°"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Sports", "Rest"], values: [30, 90], unit: "°" }, highlight: 0 },
      promptAudioKey: "w5_q1_prompt",
      hintAudioKey: "w5_q1_hint"
    },
    {
      qIndex: 2,
      prompt: "A pie chart sector measures 180°. What percentage of the circle does this sector represent?",
      hint: "(180° ÷ 360°) × 100% = 50%.",
      explanation: "180° is exactly half of 360°, which is 50%.",
      options: ["50%", "25%", "75%", "100%"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Sector", "Rest"], values: [180, 180], unit: "%" }, highlight: 0 },
      promptAudioKey: "w5_q2_prompt",
      hintAudioKey: "w5_q2_hint"
    },
    {
      qIndex: 3,
      prompt: "If three slice angles in a pie chart are 90°, 120°, and 60°, what must the fourth missing slice angle be so they sum to 360°?",
      hint: "Subtract 90 + 120 + 60 = 270 from 360°.",
      explanation: "360° − 270° = 90°.",
      options: ["90°", "80°", "100°", "70°"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["A", "B", "C", "D"], values: [90, 120, 60, 90], unit: "°" }, highlight: 3 },
      promptAudioKey: "w5_q3_prompt",
      hintAudioKey: "w5_q3_hint"
    },
    {
      qIndex: 4,
      prompt: "In a budget pie chart, Food is 40%, Rent is 30%, Savings is 20%, and Entertainment is the rest. What percentage is Entertainment?",
      hint: "Subtract 40 + 30 + 20 = 90% from 100%.",
      explanation: "100% − 90% = 10%.",
      options: ["10%", "15%", "5%", "20%"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Food", "Rent", "Savings", "Entertainment"], values: [40, 30, 20, 10], unit: "%" }, highlight: 3 },
      promptAudioKey: "w5_q4_prompt",
      hintAudioKey: "w5_q4_hint"
    },
    {
      qIndex: 5,
      prompt: "What is the sector angle for a category that takes up 10% of a pie chart?",
      hint: "10% of 360° = 0.10 × 360° = 36°.",
      explanation: "0.10 × 360° = 36°.",
      options: ["36°", "18°", "45°", "30°"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["10%", "Rest"], values: [36, 324], unit: "°" }, highlight: 0 },
      promptAudioKey: "w5_q5_prompt",
      hintAudioKey: "w5_q5_hint"
    },
    {
      qIndex: 6,
      prompt: "A pie chart represents 200 total votes. The 'Vanilla' sector has an angle of 72°. How many votes did Vanilla receive?",
      hint: "Value = (Angle ÷ 360°) × Total = (72° ÷ 360°) × 200 = 0.2 × 200 = 40.",
      explanation: "(72 ÷ 360) × 200 = 40 votes.",
      options: ["40 votes", "36 votes", "45 votes", "50 votes"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Vanilla", "Others"], values: [40, 160], unit: "votes" }, highlight: 0 },
      promptAudioKey: "w5_q6_prompt",
      hintAudioKey: "w5_q6_hint"
    },
    {
      qIndex: 7,
      prompt: "Which sector angle represents exactly ONE THIRD (1/3) of a pie chart?",
      hint: "360° ÷ 3 = 120°.",
      explanation: "360° ÷ 3 = 120°.",
      options: ["120°", "90°", "180°", "60°"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["1/3 Slice", "Rest"], values: [120, 240], unit: "°" }, highlight: 0 },
      promptAudioKey: "w5_q7_prompt",
      hintAudioKey: "w5_q7_hint"
    },
    {
      qIndex: 8,
      prompt: "In a class poll of 40 students, 10 chose Blue. What is the sector angle for Blue?",
      hint: "(10 ÷ 40) × 360° = 90°.",
      explanation: "(10 ÷ 40) × 360° = 90°.",
      options: ["90°", "45°", "60°", "100°"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Blue", "Rest"], values: [10, 30], unit: "students" }, highlight: 0 },
      promptAudioKey: "w5_q8_prompt",
      hintAudioKey: "w5_q8_hint"
    },
    {
      qIndex: 9,
      prompt: "If a pie chart has 5 equal slices, what is the angle of each slice?",
      hint: "360° ÷ 5 = 72°.",
      explanation: "360° ÷ 5 = 72°.",
      options: ["72°", "60°", "80°", "75°"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["S1", "S2", "S3", "S4", "S5"], values: [72, 72, 72, 72, 72], unit: "°" } },
      promptAudioKey: "w5_q9_prompt",
      hintAudioKey: "w5_q9_hint"
    }
  ],

  // WORLD 6: FREQUENCY FOREST (Q61-70)
  6: [
    {
      qIndex: 0,
      prompt: "A frequency table of test scores shows: Range 50-59 (4 students), 60-69 (8 students), 70-79 (12 students), 80-89 (6 students). How many students scored 70-79?",
      hint: "Locate the row for range 70-79 and read the frequency column.",
      explanation: "The frequency column for 70-79 lists 12 students.",
      options: ["12 students", "8 students", "6 students", "4 students"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["50-59", "60-69", "70-79", "80-89"], values: [4, 8, 12, 6], unit: "students" }, highlight: 2 },
      promptAudioKey: "w6_q0_prompt",
      hintAudioKey: "w6_q0_hint"
    },
    {
      qIndex: 1,
      prompt: "What is the TOTAL number of students in this test score frequency table?",
      hint: "Sum all frequencies: 4 + 8 + 12 + 6 = 30.",
      explanation: "4 + 8 + 12 + 6 = 30 students total.",
      options: ["30 students", "28 students", "32 students", "25 students"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["50-59", "60-69", "70-79", "80-89"], values: [4, 8, 12, 6], unit: "students" } },
      promptAudioKey: "w6_q1_prompt",
      hintAudioKey: "w6_q1_hint"
    },
    {
      qIndex: 2,
      prompt: "Which score interval has the HIGHEST frequency (modal interval)?",
      hint: "Find the interval with the largest frequency count (12).",
      explanation: "The interval 70-79 has the highest frequency of 12.",
      options: ["70-79", "60-69", "80-89", "50-59"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["50-59", "60-69", "70-79", "80-89"], values: [4, 8, 12, 6], unit: "students" }, highlight: 2 },
      promptAudioKey: "w6_q2_prompt",
      hintAudioKey: "w6_q2_hint"
    },
    {
      qIndex: 3,
      prompt: "How many students scored 70 or HIGHER (intervals 70-79 and 80-89)?",
      hint: "Add the frequency of 70-79 (12) and 80-89 (6).",
      explanation: "12 + 6 = 18 students.",
      options: ["18 students", "12 students", "16 students", "20 students"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["50-59", "60-69", "70-79", "80-89"], values: [4, 8, 12, 6], unit: "students" }, highlight: [2, 3] },
      promptAudioKey: "w6_q3_prompt",
      hintAudioKey: "w6_q3_hint"
    },
    {
      qIndex: 4,
      prompt: "A tree height frequency table shows: 0-2m (5 trees), 3-5m (15 trees), 6-8m (10 trees). What percentage of trees are in the 3-5m height range?",
      hint: "Total trees = 5 + 15 + 10 = 30. (15 ÷ 30) × 100% = 50%.",
      explanation: "Total = 30. (15 ÷ 30) × 100% = 50%.",
      options: ["50%", "40%", "30%", "60%"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["0-2m", "3-5m", "6-8m"], values: [5, 15, 10], unit: "trees" }, highlight: 1 },
      promptAudioKey: "w6_q4_prompt",
      hintAudioKey: "w6_q4_hint"
    },
    {
      qIndex: 5,
      prompt: "In a traffic frequency table, Car=45, Bike=15, Bus=10. What is the ratio of Cars to Bikes in simplest form?",
      hint: "45 ÷ 15 = 3, so 45:15 simplifies to 3:1.",
      explanation: "45:15 reduces to 3:1.",
      options: ["3 : 1", "4 : 1", "2 : 1", "5 : 1"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Car", "Bike", "Bus"], values: [45, 15, 10], unit: "vehicles" }, highlight: [0, 1] },
      promptAudioKey: "w6_q5_prompt",
      hintAudioKey: "w6_q5_hint"
    },
    {
      qIndex: 6,
      prompt: "How many total vehicles were surveyed in the traffic table?",
      hint: "Add 45 + 15 + 10.",
      explanation: "45 + 15 + 10 = 70 vehicles.",
      options: ["70 vehicles", "65 vehicles", "75 vehicles", "80 vehicles"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Car", "Bike", "Bus"], values: [45, 15, 10], unit: "vehicles" } },
      promptAudioKey: "w6_q6_prompt",
      hintAudioKey: "w6_q6_hint"
    },
    {
      qIndex: 7,
      prompt: "A frequency table lists missing data: Red=14, Blue=?, Green=11, Total=40. What is the frequency for Blue?",
      hint: "Subtract 14 + 11 = 25 from 40.",
      explanation: "40 − (14 + 11) = 40 − 25 = 15.",
      options: ["15", "14", "16", "13"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Red", "Blue", "Green"], values: [14, 15, 11], unit: "votes" }, highlight: 1 },
      promptAudioKey: "w6_q7_prompt",
      hintAudioKey: "w6_q7_hint"
    },
    {
      qIndex: 8,
      prompt: "What fraction of the total (40) chose Red (14) in simplest form?",
      hint: "14/40 divided top and bottom by 2 gives 7/20.",
      explanation: "14/40 = 7/20.",
      options: ["7/20", "14/40", "1/3", "3/10"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Red", "Others"], values: [14, 26], unit: "votes" }, highlight: 0 },
      promptAudioKey: "w6_q8_prompt",
      hintAudioKey: "w6_q8_hint"
    },
    {
      qIndex: 9,
      prompt: "In a sports frequency table, if Cricket has 25 votes and Tennis has 15 votes, what percentage of the two combined chose Cricket?",
      hint: "Total = 25 + 15 = 40. (25 ÷ 40) × 100% = 62.5%.",
      explanation: "25 ÷ 40 = 62.5%.",
      options: ["62.5%", "60%", "65%", "55%"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Cricket", "Tennis"], values: [25, 15], unit: "votes" }, highlight: 0 },
      promptAudioKey: "w6_q9_prompt",
      hintAudioKey: "w6_q9_hint"
    }
  ],

  // WORLD 7: SURVEY SUMMIT (Q71-80)
  7: [
    {
      qIndex: 0,
      prompt: "In a mountain hiker survey bar graph, Trail A=45, Trail B=60, Trail C=30, Trail D=25. Which trail attracted the MOST hikers?",
      hint: "Trail B has the tallest bar at 60 hikers.",
      explanation: "Trail B has the maximum value of 60 hikers.",
      options: ["Trail B", "Trail A", "Trail C", "Trail D"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Trail A", "Trail B", "Trail C", "Trail D"], values: [45, 60, 30, 25], unit: "hikers" }, highlight: 1 },
      promptAudioKey: "w7_q0_prompt",
      hintAudioKey: "w7_q0_hint"
    },
    {
      qIndex: 1,
      prompt: "What is the total number of hikers across all four trails?",
      hint: "Sum 45 + 60 + 30 + 25.",
      explanation: "45 + 60 + 30 + 25 = 160 hikers.",
      options: ["160 hikers", "150 hikers", "170 hikers", "155 hikers"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Trail A", "Trail B", "Trail C", "Trail D"], values: [45, 60, 30, 25], unit: "hikers" } },
      promptAudioKey: "w7_q1_prompt",
      hintAudioKey: "w7_q1_hint"
    },
    {
      qIndex: 2,
      prompt: "How many MORE hikers chose Trail B (60) than Trail D (25)?",
      hint: "60 minus 25 equals 35.",
      explanation: "60 − 25 = 35 hikers.",
      options: ["35 hikers", "30 hikers", "40 hikers", "25 hikers"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Trail A", "Trail B", "Trail C", "Trail D"], values: [45, 60, 30, 25], unit: "hikers" }, highlight: [1, 3] },
      promptAudioKey: "w7_q2_prompt",
      hintAudioKey: "w7_q2_hint"
    },
    {
      qIndex: 3,
      prompt: "What percentage of the total hikers (160) chose Trail C (30)? (To the nearest percent)",
      hint: "(30 ÷ 160) × 100% ≈ 18.75%, rounding to 19%.",
      explanation: "(30 ÷ 160) × 100% ≈ 19%.",
      options: ["19%", "25%", "15%", "22%"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Trail C", "Others"], values: [30, 130], unit: "%" }, highlight: 0 },
      promptAudioKey: "w7_q3_prompt",
      hintAudioKey: "w7_q3_hint"
    },
    {
      qIndex: 4,
      prompt: "A bar graph shows favorite genres: Action=80, Comedy=50, Drama=30, Sci-Fi=40. Which genre is preferred by twice as many people as Sci-Fi (40)?",
      hint: "Twice 40 is 80, which matches Action.",
      explanation: "2 × 40 = 80, which matches Action.",
      options: ["Action", "Comedy", "Drama", "None"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Action", "Comedy", "Drama", "Sci-Fi"], values: [80, 50, 30, 40], unit: "votes" }, highlight: 0 },
      promptAudioKey: "w7_q4_prompt",
      hintAudioKey: "w7_q4_hint"
    },
    {
      qIndex: 5,
      prompt: "What is the mean (average) number of votes per genre across the 4 genres (Total=200)?",
      hint: "Divide the sum (200) by 4 genres.",
      explanation: "200 ÷ 4 = 50 votes.",
      options: ["50 votes", "40 votes", "60 votes", "45 votes"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Action", "Comedy", "Drama", "Sci-Fi"], values: [80, 50, 30, 40], unit: "votes" } },
      promptAudioKey: "w7_q5_prompt",
      hintAudioKey: "w7_q5_hint"
    },
    {
      qIndex: 6,
      prompt: "If Comedy votes increase by 20%, what will the new vote count for Comedy (currently 50) be?",
      hint: "20% of 50 is 10. 50 + 10 = 60.",
      explanation: "50 + 10 = 60 votes.",
      options: ["60 votes", "55 votes", "65 votes", "70 votes"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Comedy"], values: [50], unit: "votes" }, highlight: 0 },
      promptAudioKey: "w7_q6_prompt",
      hintAudioKey: "w7_q6_hint"
    },
    {
      qIndex: 7,
      prompt: "In a beverage survey, Milk=25, Juice=35, Water=40. What fraction of people chose Water?",
      hint: "Total = 25 + 35 + 40 = 100. 40/100 = 4/10 = 2/5.",
      explanation: "40 ÷ 100 = 2/5.",
      options: ["4/10 (or 2/5)", "1/3", "1/4", "1/2"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Milk", "Juice", "Water"], values: [25, 35, 40], unit: "people" }, highlight: 2 },
      promptAudioKey: "w7_q7_prompt",
      hintAudioKey: "w7_q7_hint"
    },
    {
      qIndex: 8,
      prompt: "How many FEWER people chose Milk (25) than Juice (35)?",
      hint: "35 minus 25 equals 10.",
      explanation: "35 − 25 = 10 people.",
      options: ["10 people", "15 people", "5 people", "12 people"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Milk", "Juice", "Water"], values: [25, 35, 40], unit: "people" }, highlight: [0, 1] },
      promptAudioKey: "w7_q8_prompt",
      hintAudioKey: "w7_q8_hint"
    },
    {
      qIndex: 9,
      prompt: "What is the ratio of Milk (25) to Water (40) in simplest form?",
      hint: "Divide both 25 and 40 by 5 to get 5:8.",
      explanation: "25:40 reduces to 5:8.",
      options: ["5 : 8", "1 : 2", "5 : 7", "3 : 5"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Milk", "Water"], values: [25, 40], unit: "people" } },
      promptAudioKey: "w7_q9_prompt",
      hintAudioKey: "w7_q9_hint"
    }
  ],

  // WORLD 8: ANGLE ANALYTICS LAB (Q81-90)
  8: [
    {
      qIndex: 0,
      prompt: "A pie chart sector measures 144° out of 360°. What percentage of the total data does this sector represent?",
      hint: "(144 ÷ 360) × 100% = 0.4 × 100% = 40%.",
      explanation: "(144 ÷ 360) × 100% = 40%.",
      options: ["40%", "36%", "45%", "30%"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Sector", "Rest"], values: [144, 216], unit: "%" }, highlight: 0 },
      promptAudioKey: "w8_q0_prompt",
      hintAudioKey: "w8_q0_hint"
    },
    {
      qIndex: 1,
      prompt: "A survey of 500 people is shown in a pie chart. Category A has a sector angle of 54°. How many people voted for Category A?",
      hint: "Value = (54° ÷ 360°) × 500 = 0.15 × 500 = 75.",
      explanation: "(54 ÷ 360) × 500 = 75 people.",
      options: ["75 people", "60 people", "80 people", "90 people"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Category A", "Others"], values: [75, 425], unit: "people" }, highlight: 0 },
      promptAudioKey: "w8_q1_prompt",
      hintAudioKey: "w8_q1_hint"
    },
    {
      qIndex: 2,
      prompt: "If a sector angle is 108°, what fraction of the full circle is it?",
      hint: "108 ÷ 360 = 3/10.",
      explanation: "108 ÷ 360 = 3/10.",
      options: ["3/10", "1/4", "1/3", "2/5"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["108°", "Rest"], values: [108, 252], unit: "°" }, highlight: 0 },
      promptAudioKey: "w8_q2_prompt",
      hintAudioKey: "w8_q2_hint"
    },
    {
      qIndex: 3,
      prompt: "A school budget pie chart shows: Facilities=120°, Salaries=150°, Equipment=?. What is the angle for Equipment?",
      hint: "Subtract 120 + 150 = 270 from 360°.",
      explanation: "360° − 270° = 90°.",
      options: ["90°", "80°", "100°", "75°"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Facilities", "Salaries", "Equipment"], values: [120, 150, 90], unit: "°" }, highlight: 2 },
      promptAudioKey: "w8_q3_prompt",
      hintAudioKey: "w8_q3_hint"
    },
    {
      qIndex: 4,
      prompt: "In a 360-person poll, the 'Yes' sector has 240 votes. What is its angle in degrees?",
      hint: "(240 ÷ 360) × 360° = 240°.",
      explanation: "(240 ÷ 360) × 360° = 240°.",
      options: ["240°", "180°", "200°", "220°"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Yes", "No"], values: [240, 120], unit: "°" }, highlight: 0 },
      promptAudioKey: "w8_q4_prompt",
      hintAudioKey: "w8_q4_hint"
    },
    {
      qIndex: 5,
      prompt: "If a pie chart slice angle is 45°, how many degrees are left for the rest of the circle?",
      hint: "360 minus 45 equals 315.",
      explanation: "360 − 45 = 315°.",
      options: ["315°", "300°", "320°", "270°"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Slice", "Rest"], values: [45, 315], unit: "°" }, highlight: 1 },
      promptAudioKey: "w8_q5_prompt",
      hintAudioKey: "w8_q5_hint"
    },
    {
      qIndex: 6,
      prompt: "A pie chart sector representing 15% of total data has what angle?",
      hint: "0.15 × 360° = 54°.",
      explanation: "0.15 × 360° = 54°.",
      options: ["54°", "45°", "60°", "36°"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["15%", "Rest"], values: [54, 306], unit: "°" }, highlight: 0 },
      promptAudioKey: "w8_q6_prompt",
      hintAudioKey: "w8_q6_hint"
    },
    {
      qIndex: 7,
      prompt: "If 1/6 of a group chose Blue, what angle will the Blue slice be on a pie chart?",
      hint: "360° ÷ 6 = 60°.",
      explanation: "360° ÷ 6 = 60°.",
      options: ["60°", "50°", "45°", "72°"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Blue", "Rest"], values: [60, 300], unit: "°" }, highlight: 0 },
      promptAudioKey: "w8_q7_prompt",
      hintAudioKey: "w8_q7_hint"
    },
    {
      qIndex: 8,
      prompt: "A slice angle is 216°. What percentage is that?",
      hint: "(216 ÷ 360) × 100% = 60%.",
      explanation: "(216 ÷ 360) × 100% = 60%.",
      options: ["60%", "55%", "65%", "70%"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Slice", "Rest"], values: [216, 144], unit: "%" }, highlight: 0 },
      promptAudioKey: "w8_q8_prompt",
      hintAudioKey: "w8_q8_hint"
    },
    {
      qIndex: 9,
      prompt: "Out of 720 total items, a slice angle of 30° represents how many items?",
      hint: "(30 ÷ 360) × 720 = 1/12 × 720 = 60 items.",
      explanation: "(30 ÷ 360) × 720 = 60 items.",
      options: ["60 items", "50 items", "70 items", "45 items"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Slice", "Rest"], values: [60, 660], unit: "items" }, highlight: 0 },
      promptAudioKey: "w8_q9_prompt",
      hintAudioKey: "w8_q9_hint"
    }
  ],

  // WORLD 9: DATA DETECTIVE HQ (Q91-100)
  9: [
    {
      qIndex: 0,
      prompt: "Detective Case 1: In a bar graph of weekly rainfall (Mon=10mm, Tue=25mm, Wed=15mm, Thu=30mm), what was the average daily rainfall across the 4 days?",
      hint: "Sum rainfall = 10 + 25 + 15 + 30 = 80mm. Divide 80 by 4 days.",
      explanation: "80 ÷ 4 = 20 mm.",
      options: ["20 mm", "18 mm", "22 mm", "25 mm"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Mon", "Tue", "Wed", "Thu"], values: [10, 25, 15, 30], unit: "mm" } },
      promptAudioKey: "w9_q0_prompt",
      hintAudioKey: "w9_q0_hint"
    },
    {
      qIndex: 1,
      prompt: "Detective Case 2: In a pictograph where 1 🖼️ = 8 cases, how many cases are represented by 3.5 symbols?",
      hint: "3.5 × 8 = 28.",
      explanation: "3.5 × 8 = 28 cases.",
      options: ["28 cases", "24 cases", "30 cases", "32 cases"],
      correctIndex: 0,
      diagramData: { mode: 'pictograph', data: { categories: ["Cases"], symbolCounts: [3.5], scale: 8, unit: "cases" }, highlight: 0 },
      promptAudioKey: "w9_q1_prompt",
      hintAudioKey: "w9_q1_hint"
    },
    {
      qIndex: 2,
      prompt: "Detective Case 3: A double bar graph shows crime cases solved: Team A=15, Team B=25 in Month 1. In Month 2, Team A=20, Team B=30. What is the total cases solved by Team B across both months?",
      hint: "Add Team B Month 1 (25) and Month 2 (30) = 55.",
      explanation: "25 + 30 = 55 cases.",
      options: ["55 cases", "50 cases", "60 cases", "45 cases"],
      correctIndex: 0,
      diagramData: { mode: 'doublebar', data: { categories: ["Month 1", "Month 2"], seriesA: [15, 20], seriesB: [25, 30], seriesNames: ["Team A", "Team B"], unit: "cases" }, highlight: 1 },
      promptAudioKey: "w9_q2_prompt",
      hintAudioKey: "w9_q2_hint"
    },
    {
      qIndex: 3,
      prompt: "Detective Case 4: A line graph shows suspect sightings: 10 AM=2, 12 PM=5, 2 PM=8, 4 PM=3. At what time were sightings at their peak?",
      hint: "Look for the highest point on the line graph (8 sightings at 2 PM).",
      explanation: "Peak sighting was 8 at 2 PM.",
      options: ["2 PM", "12 PM", "4 PM", "10 AM"],
      correctIndex: 0,
      diagramData: { mode: 'line', data: { labels: ["10 AM", "12 PM", "2 PM", "4 PM"], values: [2, 5, 8, 3], unit: "sightings" }, highlight: 2 },
      promptAudioKey: "w9_q3_prompt",
      hintAudioKey: "w9_q3_hint"
    },
    {
      qIndex: 4,
      prompt: "Detective Case 5: A pie chart of evidence types has DNA=90°, Fingerprints=180°, Footprints=90°. What fraction of evidence is Fingerprints?",
      hint: "180° ÷ 360° = 1/2 or 50%.",
      explanation: "180° ÷ 360° = 1/2.",
      options: ["1/2 (50%)", "1/4 (25%)", "1/3 (33%)", "3/4 (75%)"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Fingerprints", "DNA", "Footprints"], values: [180, 90, 90], unit: "°" }, highlight: 0 },
      promptAudioKey: "w9_q4_prompt",
      hintAudioKey: "w9_q4_hint"
    },
    {
      qIndex: 5,
      prompt: "Detective Case 6: A frequency table shows evidence tags: Room 1=12, Room 2=18, Room 3=10. What is the modal room for evidence?",
      hint: "Room 2 has the highest count of 18 tags.",
      explanation: "Room 2 has the highest count of 18.",
      options: ["Room 2", "Room 1", "Room 3", "None"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Room 1", "Room 2", "Room 3"], values: [12, 18, 10], unit: "tags" }, highlight: 1 },
      promptAudioKey: "w9_q5_prompt",
      hintAudioKey: "w9_q5_hint"
    },
    {
      qIndex: 6,
      prompt: "Detective Case 7: If Room 2 evidence increases by 50%, what is the new tag count for Room 2 (currently 18)?",
      hint: "50% of 18 is 9. 18 + 9 = 27.",
      explanation: "18 + 9 = 27 tags.",
      options: ["27 tags", "25 tags", "30 tags", "24 tags"],
      correctIndex: 0,
      diagramData: { mode: 'table', data: { categories: ["Room 2"], values: [18], unit: "tags" }, highlight: 0 },
      promptAudioKey: "w9_q6_prompt",
      hintAudioKey: "w9_q6_hint"
    },
    {
      qIndex: 7,
      prompt: "Detective Case 8: In a line graph of speed over time, speed went from 40 km/h at 1 min to 70 km/h at 3 min. What was the increase in speed?",
      hint: "70 minus 40 equals 30.",
      explanation: "70 − 40 = 30 km/h.",
      options: ["30 km/h", "20 km/h", "40 km/h", "25 km/h"],
      correctIndex: 0,
      diagramData: { mode: 'line', data: { labels: ["1 min", "2 min", "3 min"], values: [40, 55, 70], unit: "km/h" }, highlight: [0, 2] },
      promptAudioKey: "w9_q7_prompt",
      hintAudioKey: "w9_q7_hint"
    },
    {
      qIndex: 8,
      prompt: "Detective Case 9: In a pie chart with 200 total clues, Footprints has an angle of 36°. How many clues were Footprints?",
      hint: "(36° ÷ 360°) × 200 = 0.10 × 200 = 20.",
      explanation: "(36 ÷ 360) × 200 = 20 clues.",
      options: ["20 clues", "18 clues", "25 clues", "30 clues"],
      correctIndex: 0,
      diagramData: { mode: 'pie', data: { categories: ["Footprints", "Rest"], values: [20, 180], unit: "clues" }, highlight: 0 },
      promptAudioKey: "w9_q8_prompt",
      hintAudioKey: "w9_q8_hint"
    },
    {
      qIndex: 9,
      prompt: "Detective Case 10: Congratulations Data Detective! Out of 100 total clues solved, you decoded 95 correctly. What percentage accuracy did you achieve?",
      hint: "(95 ÷ 100) × 100% = 95%.",
      explanation: "95 ÷ 100 = 95%.",
      options: ["95%", "90%", "100%", "85%"],
      correctIndex: 0,
      diagramData: { mode: 'bar', data: { categories: ["Correct", "Others"], values: [95, 5], unit: "%" }, highlight: 0 },
      promptAudioKey: "w9_q9_prompt",
      hintAudioKey: "w9_q9_hint"
    }
  ]
};

export function getQuestion(worldIndex, qIndex) {
  const worldQs = WORLD_QUESTIONS[worldIndex] || WORLD_QUESTIONS[0];
  const q = worldQs[qIndex] || worldQs[0];
  return {
    ...q,
    world: PRACTICE_WORLDS[worldIndex] || PRACTICE_WORLDS[0]
  };
}
