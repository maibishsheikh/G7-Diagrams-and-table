import React from 'react';

export function TallyMarks({ count, width = 260, height = 90 }) {
  const groups = Math.ceil(count / 5) || 0;
  const groupW = 34;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${Math.max(width, groups * groupW + 10)} ${height}`} className="shrink-0">
      {Array.from({ length: groups }).map((_, g) => {
        const inGroup = Math.min(5, count - g * 5);
        const x0 = 10 + g * groupW;
        return (
          <g key={g}>
            {Array.from({ length: Math.min(4, inGroup) }).map((_, i) => (
              <line key={i} x1={x0 + i * 6} y1="15" x2={x0 + i * 6} y2="65" stroke="#facc15" strokeWidth="4" strokeLinecap="round" />
            ))}
            {inGroup === 5 && (
              <line x1={x0 - 4} y1="65" x2={x0 + 22} y2="15" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
            )}
          </g>
        );
      })}
      {count === 0 && (
        <text x={width / 2} y={height / 2} textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="700">No tallies yet — drag the slider!</text>
      )}
    </svg>
  );
}
