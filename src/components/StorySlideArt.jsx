import React from 'react';

function Stars() {
  const pts = [
    [30, 40], [370, 30], [50, 320], [360, 300], [20, 180], [380, 160],
    [200, 20], [200, 380], [110, 90], [290, 90], [110, 300], [290, 310]
  ];
  return (
    <>
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 2.4 : 1.4} fill="#ffffff" opacity={i % 2 === 0 ? 0.85 : 0.45} />
      ))}
    </>
  );
}

function Frame({ children, badge }) {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="cosmicBg" cx="35%" cy="20%" r="85%">
          <stop offset="0%" stopColor="#2d1b6b" />
          <stop offset="35%" stopColor="#1a0f4e" />
          <stop offset="70%" stopColor="#0d0a2e" />
          <stop offset="100%" stopColor="#080520" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#cosmicBg)" />
      <Stars />
      {badge && (
        <text x="200" y="34" textAnchor="middle" fontSize="13" fontWeight="900" fill="#facc15" fontFamily="Fredoka One, sans-serif" letterSpacing="1">
          {badge}
        </text>
      )}
      {children}
    </svg>
  );
}

/* 1. Why organize data — messy numbers -> neat grid */
function ArtMessyToTidy() {
  return (
    <Frame badge="GRADE 7 · DATA HANDLING">
      <g fontFamily="Fredoka One, sans-serif">
        {["7", "12", "3", "9", "15", "2", "8", "11"].map((n, i) => (
          <text key={i} x={60 + (i % 4) * 60 + (i * 13) % 20} y={110 + Math.floor(i / 4) * 55 + (i * 7) % 15}
            fontSize="22" fill="#fca5a5" opacity="0.85" transform={`rotate(${(i % 5) * 9 - 18} ${60 + (i % 4) * 60} ${110 + Math.floor(i / 4) * 55})`}>
            {n}
          </text>
        ))}
        <text x="200" y="215" textAnchor="middle" fontSize="34" fill="#fde047">➜</text>
        <g transform="translate(90,235)">
          <rect x="0" y="0" width="220" height="110" rx="10" fill="#1e143c" stroke="#38bdf8" strokeWidth="2" />
          {[0, 1, 2, 3].map(r => <line key={r} x1="0" y1={r * 27.5} x2="220" y2={r * 27.5} stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="1" />)}
          {[0, 1, 2].map(c => <line key={c} x1={c * 73 + 73} y1="0" x2={c * 73 + 73} y2="110" stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="1" />)}
          <text x="110" y="60" textAnchor="middle" fontSize="16" fill="#4ade80" fontWeight="900">ORGANIZED!</text>
        </g>
      </g>
    </Frame>
  );
}

/* 2. Frequency table & tally marks */
function ArtTally() {
  const rows = [
    { label: "🍎", tally: "|||| |", freq: 6 },
    { label: "🍌", tally: "||||", freq: 4 },
    { label: "🍇", tally: "|||| |||", freq: 8 }
  ];
  return (
    <Frame badge="FREQUENCY TABLE">
      <g transform="translate(50,110)" fontFamily="Fredoka One, sans-serif">
        <rect x="0" y="0" width="300" height="180" rx="12" fill="#1e143c" stroke="#facc15" strokeWidth="2.5" />
        <rect x="0" y="0" width="300" height="42" rx="12" fill="#3b1c8c" />
        <text x="40" y="27" fill="#fde68a" fontSize="15">Fruit</text>
        <text x="170" y="27" fill="#fde68a" fontSize="15">Tally</text>
        <text x="265" y="27" fill="#fde68a" fontSize="15">Freq.</text>
        {rows.map((r, i) => (
          <g key={i} transform={`translate(0, ${52 + i * 42})`}>
            <text x="40" y="20" fontSize="22" textAnchor="middle">{r.label}</text>
            <text x="170" y="20" fontSize="15" fill="#e2e8f0" textAnchor="middle">{r.tally}</text>
            <text x="265" y="20" fontSize="17" fill="#4ade80" textAnchor="middle" fontWeight="900">{r.freq}</text>
          </g>
        ))}
      </g>
    </Frame>
  );
}

/* 3. Pictograph with key */
function ArtPictograph() {
  return (
    <Frame badge="PICTOGRAPH">
      <g transform="translate(55,100)" fontFamily="Fredoka One, sans-serif">
        <rect x="0" y="0" width="290" height="42" rx="10" fill="#241155" />
        <text x="145" y="27" textAnchor="middle" fontSize="14" fill="#facc15">Key: 🖼️ = 5 books</text>
        {[
          { l: "Week 1", n: 4 }, { l: "Week 2", n: 2 }, { l: "Week 3", n: 5 }
        ].map((row, i) => (
          <g key={i} transform={`translate(0, ${60 + i * 50})`}>
            <text x="0" y="24" fontSize="14" fill="#e2e8f0">{row.l}</text>
            <text x="90" y="26" fontSize="22">{"🖼️".repeat(row.n)}</text>
          </g>
        ))}
      </g>
    </Frame>
  );
}

/* 4. Bar graph */
function ArtBar() {
  const vals = [3, 6, 4, 8, 5];
  const colors = ["#38bdf8", "#facc15", "#4ade80", "#f472b6", "#a78bfa"];
  return (
    <Frame badge="BAR GRAPH">
      <g transform="translate(60,300)">
        <line x1="0" y1="0" x2="280" y2="0" stroke="#ffffff55" strokeWidth="2" />
        {vals.map((v, i) => (
          <rect key={i} x={i * 56 + 8} y={-v * 22} width="38" height={v * 22} rx="6" fill={colors[i]} opacity="0.9" />
        ))}
      </g>
    </Frame>
  );
}

/* 5. Double bar graph */
function ArtDoubleBar() {
  const a = [4, 7, 3, 6];
  const b = [6, 4, 5, 8];
  return (
    <Frame badge="DOUBLE BAR GRAPH">
      <g transform="translate(55,300)">
        <line x1="0" y1="0" x2="290" y2="0" stroke="#ffffff55" strokeWidth="2" />
        {a.map((v, i) => (
          <g key={i}>
            <rect x={i * 72 + 8} y={-v * 20} width="26" height={v * 20} rx="5" fill="#38bdf8" />
            <rect x={i * 72 + 36} y={-b[i] * 20} width="26" height={b[i] * 20} rx="5" fill="#f472b6" />
          </g>
        ))}
      </g>
      <g transform="translate(120,60)" fontFamily="Fredoka One, sans-serif" fontSize="13">
        <rect x="0" y="0" width="14" height="14" rx="3" fill="#38bdf8" /><text x="20" y="12" fill="#e2e8f0">Boys</text>
        <rect x="80" y="0" width="14" height="14" rx="3" fill="#f472b6" /><text x="100" y="12" fill="#e2e8f0">Girls</text>
      </g>
    </Frame>
  );
}

/* 6. Line graph */
function ArtLine() {
  const pts = [[0, 60], [60, 30], [120, 70], [180, 15], [240, 45]];
  const d = pts.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(" ");
  return (
    <Frame badge="LINE GRAPH">
      <g transform="translate(70,280)">
        <line x1="0" y1="90" x2="260" y2="90" stroke="#ffffff55" strokeWidth="2" />
        <path d={d} fill="none" stroke="#4ade80" strokeWidth="3.5" />
        {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="6" fill="#facc15" stroke="#0c0424" strokeWidth="2" />)}
      </g>
    </Frame>
  );
}

/* 7. Pie chart with angle */
function ArtPie() {
  const vals = [90, 60, 130, 80];
  const colors = ["#38bdf8", "#facc15", "#4ade80", "#f472b6"];
  const total = vals.reduce((a, b) => a + b, 0);
  let start = -90;
  const cx = 200, cy = 210, r = 95;
  const slices = vals.map((v, i) => {
    const angle = (v / total) * 360;
    const a0 = (start * Math.PI) / 180, a1 = ((start + angle) * Math.PI) / 180;
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    const large = angle > 180 ? 1 : 0;
    const path = `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`;
    start += angle;
    return <path key={i} d={path} fill={colors[i]} stroke="#0c0424" strokeWidth="2" opacity="0.92" />;
  });
  return (
    <Frame badge="PIE CHART & ANGLES">
      {slices}
      <text x={cx} y={cy + r + 45} textAnchor="middle" fontSize="14" fontFamily="Fredoka One, sans-serif" fill="#facc15">
        Angle = value ÷ total × 360°
      </text>
    </Frame>
  );
}

/* 8. Lab entrance */
function ArtLab() {
  return (
    <Frame badge="SIMULATION LAB AHEAD">
      <g transform="translate(200,210)" fontFamily="Fredoka One, sans-serif" textAnchor="middle">
        <circle r="90" fill="#1e143c" stroke="#38bdf8" strokeWidth="3" opacity="0.9" />
        <text y="-10" fontSize="60">🧪</text>
        <text y="55" fontSize="16" fill="#facc15">Build. Read. Solve.</text>
      </g>
    </Frame>
  );
}

const REGISTRY = {
  messyToTidy: ArtMessyToTidy,
  tally: ArtTally,
  pictograph: ArtPictograph,
  bar: ArtBar,
  doublebar: ArtDoubleBar,
  line: ArtLine,
  pie: ArtPie,
  lab: ArtLab
};

export function StorySlideArt({ type }) {
  const Comp = REGISTRY[type] || ArtMessyToTidy;
  return <Comp />;
}
