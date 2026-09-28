import React from 'react';

const PALETTE = ['#38bdf8', '#facc15', '#4ade80', '#f472b6', '#a78bfa', '#fb923c'];

export function DataDiagram({ diagramData, size = 260 }) {
  if (!diagramData) return null;
  const { mode, data, highlight } = diagramData;
  const hi = Array.isArray(highlight) ? highlight : (highlight != null ? [highlight] : []);

  if (mode === 'table') {
    return (
      <div className="w-full max-w-md mx-auto my-2 rounded-xl overflow-hidden border-2 border-purple-400/40 shadow-lg">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#241155]">
              <th className="px-4 py-2 font-display font-900 text-amber-300 text-sm sm:text-base">Category</th>
              <th className="px-4 py-2 font-display font-900 text-amber-300 text-sm sm:text-base text-right">{data.unit}</th>
            </tr>
          </thead>
          <tbody>
            {data.categories.map((c, i) => (
              <tr key={c} className={`border-t border-white/10 ${hi.includes(i) ? 'bg-cyan-500/25' : 'bg-[#150b34]'}`}>
                <td className="px-4 py-2 font-extrabold text-slate-100 text-sm sm:text-base">{c}</td>
                <td className="px-4 py-2 font-black text-white text-sm sm:text-base text-right">{data.values[i]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (mode === 'bar') {
    const max = Math.max(...data.values, 1);
    const w = size * 1.4, h = size * 0.85, padB = 34, padT = 14, barGap = 10;
    const barW = (w - (data.categories.length + 1) * barGap) / data.categories.length;
    return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="drop-shadow-[0_0_16px_rgba(56,189,248,0.35)]">
        <line x1="0" y1={h - padB} x2={w} y2={h - padB} stroke="#ffffff40" strokeWidth="2" />
        {data.categories.map((c, i) => {
          const barH = ((h - padB - padT) * data.values[i]) / max;
          const x = barGap + i * (barW + barGap);
          const y = h - padB - barH;
          const isHi = hi.includes(i);
          return (
            <g key={c}>
              <rect x={x} y={y} width={barW} height={barH} rx="6" fill={isHi ? '#facc15' : PALETTE[i % PALETTE.length]} opacity={isHi ? 1 : 0.85} />
              <text x={x + barW / 2} y={y - 6} fill="#fff" fontSize="12" fontWeight="900" textAnchor="middle">{data.values[i]}</text>
              <text x={x + barW / 2} y={h - padB + 16} fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle">{c.length > 8 ? c.slice(0, 7) + '…' : c}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  if (mode === 'doublebar') {
    const max = Math.max(...data.seriesA, ...data.seriesB, 1);
    const w = size * 1.5, h = size * 0.85, padB = 34, padT = 14, groupGap = 14, barGap = 3;
    const groupW = (w - (data.categories.length + 1) * groupGap) / data.categories.length;
    const barW = (groupW - barGap) / 2;
    return (
      <div className="flex flex-col items-center">
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="drop-shadow-[0_0_16px_rgba(56,189,248,0.35)]">
          <line x1="0" y1={h - padB} x2={w} y2={h - padB} stroke="#ffffff40" strokeWidth="2" />
          {data.categories.map((c, i) => {
            const x = groupGap + i * (groupW + groupGap);
            const hA = ((h - padB - padT) * data.seriesA[i]) / max;
            const hB = ((h - padB - padT) * data.seriesB[i]) / max;
            const isHi = hi.includes(i);
            return (
              <g key={c}>
                <rect x={x} y={h - padB - hA} width={barW} height={hA} rx="4" fill={isHi ? '#facc15' : '#38bdf8'} />
                <rect x={x + barW + barGap} y={h - padB - hB} width={barW} height={hB} rx="4" fill={isHi ? '#fde68a' : '#f472b6'} />
                <text x={x + barW} y={h - padB + 16} fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle">{c.length > 7 ? c.slice(0, 6) + '…' : c}</text>
              </g>
            );
          })}
        </svg>
        <div className="flex items-center gap-4 mt-1 text-xs font-extrabold">
          <span className="flex items-center gap-1.5 text-cyan-300"><span className="w-3 h-3 rounded bg-[#38bdf8] inline-block" />{data.seriesNames[0]}</span>
          <span className="flex items-center gap-1.5 text-pink-300"><span className="w-3 h-3 rounded bg-[#f472b6] inline-block" />{data.seriesNames[1]}</span>
        </div>
      </div>
    );
  }

  if (mode === 'pictograph') {
    return (
      <div className="w-full max-w-md mx-auto my-2 rounded-xl overflow-hidden border-2 border-purple-400/40 shadow-lg">
        <div className="bg-[#241155] px-4 py-2 text-amber-300 font-display font-900 text-xs sm:text-sm">
          Key: 🖼️ = {data.scale} {data.unit}
        </div>
        {data.categories.map((c, i) => (
          <div key={c} className={`flex items-center gap-2 px-4 py-2 border-t border-white/10 ${hi === i || (Array.isArray(hi) && hi.includes(i)) ? 'bg-cyan-500/25' : 'bg-[#150b34]'}`}>
            <span className="w-20 shrink-0 text-slate-100 font-extrabold text-xs sm:text-sm">{c}</span>
            <span className="text-base sm:text-lg tracking-tight">{'🖼️'.repeat(Math.max(1, data.symbolCounts[i]))}</span>
          </div>
        ))}
      </div>
    );
  }

  if (mode === 'line') {
    const max = Math.max(...data.values, 1);
    const min = Math.min(...data.values, 0);
    const w = size * 1.5, h = size * 0.85, padB = 30, padT = 16, padL = 10, padR = 10;
    const n = data.labels.length;
    const stepX = (w - padL - padR) / (n - 1);
    const range = Math.max(1, max - min);
    const pointFor = (i) => {
      const x = padL + i * stepX;
      const y = h - padB - ((data.values[i] - min) / range) * (h - padB - padT);
      return [x, y];
    };
    const pts = data.labels.map((_, i) => pointFor(i));
    const pathD = pts.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(' ');
    return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="drop-shadow-[0_0_16px_rgba(56,189,248,0.35)]">
        <line x1={padL} y1={h - padB} x2={w - padR} y2={h - padB} stroke="#ffffff40" strokeWidth="2" />
        <path d={pathD} fill="none" stroke="#4ade80" strokeWidth="3" />
        {pts.map(([x, y], i) => {
          const isHi = hi.includes(i);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={isHi ? 7 : 5} fill={isHi ? '#facc15' : '#4ade80'} stroke="#0c0424" strokeWidth="2" />
              <text x={x} y={y - 12} fill="#fff" fontSize="11" fontWeight="900" textAnchor="middle">{data.values[i]}</text>
              <text x={x} y={h - padB + 16} fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle">{data.labels[i]}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  if (mode === 'pie') {
    const total = data.values.reduce((a, b) => a + b, 0);
    const cx = size * 0.42, cy = size * 0.42, r = size * 0.38;
    let angleStart = -90;
    const slices = data.values.map((v, i) => {
      const angle = (v / total) * 360;
      const a0 = (angleStart * Math.PI) / 180;
      const a1 = ((angleStart + angle) * Math.PI) / 180;
      const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
      const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      const large = angle > 180 ? 1 : 0;
      const path = `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`;
      const isHi = hi.includes(i);
      angleStart += angle;
      return { path, color: isHi ? '#facc15' : PALETTE[i % PALETTE.length], isHi };
    });
    return (
      <div className="flex items-center gap-5">
        <svg width={size * 0.84} height={size * 0.84} viewBox={`0 0 ${size * 0.84} ${size * 0.84}`} className="drop-shadow-[0_0_18px_rgba(139,92,246,0.4)] shrink-0">
          {slices.map((s, i) => (
            <path key={i} d={s.path} fill={s.color} stroke="#0c0424" strokeWidth="1.5" opacity={s.isHi ? 1 : 0.9} />
          ))}
        </svg>
        <div className="flex flex-col gap-1.5 text-left">
          {data.categories.map((c, i) => (
            <span key={c} className={`text-xs sm:text-sm font-extrabold flex items-center gap-2 ${hi.includes(i) ? 'text-amber-300' : 'text-slate-200'}`}>
              <span className="w-3 h-3 rounded-sm inline-block shrink-0" style={{ background: hi.includes(i) ? '#facc15' : PALETTE[i % PALETTE.length] }} />
              {c}: {data.values[i]}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
