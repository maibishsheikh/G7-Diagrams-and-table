import React from 'react';

const PALETTE = ['#38bdf8', '#facc15', '#4ade80', '#f472b6', '#a78bfa', '#fb923c'];

export function DataDiagram({ diagramData, size = 260 }) {
  if (!diagramData) return null;
  const { mode, data, highlight } = diagramData;
  if (!data) return null;

  const hi = Array.isArray(highlight) ? highlight : (highlight != null ? [highlight] : []);

  if (mode === 'table') {
    const categories = data.categories || [];
    const values = data.values || [];
    return (
      <div className="w-full max-w-md mx-auto my-2 rounded-xl overflow-hidden border-2 border-purple-400/40 shadow-lg">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#241155]">
              <th className="px-4 py-2 font-display font-900 text-amber-300 text-sm sm:text-base">Category</th>
              <th className="px-4 py-2 font-display font-900 text-amber-300 text-sm sm:text-base text-right">{data.unit || 'Count'}</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c, i) => (
              <tr key={c} className={`border-t border-white/10 ${hi.includes(i) ? 'bg-cyan-500/25' : 'bg-[#150b34]'}`}>
                <td className="px-4 py-2 font-extrabold text-slate-100 text-sm sm:text-base">{c}</td>
                <td className="px-4 py-2 font-black text-white text-sm sm:text-base text-right">{values[i] ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (mode === 'bar') {
    const categories = data.categories || [];
    const safeValues = (data.values || []).map(v => (typeof v === 'number' && !isNaN(v) ? v : 0));
    const max = Math.max(...safeValues, 1);
    const w = size * 1.4, h = size * 0.85, padB = 34, padT = 14, barGap = 10;
    const barW = Math.max(12, (w - (categories.length + 1) * barGap) / Math.max(1, categories.length));

    return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="drop-shadow-[0_0_16px_rgba(56,189,248,0.35)]">
        <line x1="0" y1={h - padB} x2={w} y2={h - padB} stroke="#ffffff40" strokeWidth="2" />
        {categories.map((c, i) => {
          const val = safeValues[i] || 0;
          const barH = ((h - padB - padT) * val) / max;
          const x = barGap + i * (barW + barGap);
          const y = h - padB - barH;
          const isHi = hi.includes(i);
          return (
            <g key={c}>
              <rect x={x} y={y} width={barW} height={barH} rx="6" fill={isHi ? '#facc15' : PALETTE[i % PALETTE.length]} opacity={isHi ? 1 : 0.85} />
              <text x={x + barW / 2} y={y - 6} fill="#fff" fontSize="12" fontWeight="900" textAnchor="middle">{val}</text>
              <text x={x + barW / 2} y={h - padB + 16} fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle">{c.length > 8 ? c.slice(0, 7) + '…' : c}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  if (mode === 'doublebar') {
    const categories = data.categories || [];
    const safeA = (data.seriesA || []).map(v => (typeof v === 'number' && !isNaN(v) ? v : 0));
    const safeB = (data.seriesB || []).map(v => (typeof v === 'number' && !isNaN(v) ? v : 0));
    const max = Math.max(...safeA, ...safeB, 1);
    const w = size * 1.5, h = size * 0.85, padB = 34, padT = 14, groupGap = 14, barGap = 3;
    const groupW = Math.max(24, (w - (categories.length + 1) * groupGap) / Math.max(1, categories.length));
    const barW = (groupW - barGap) / 2;
    const names = data.seriesNames || ['Series A', 'Series B'];

    return (
      <div className="flex flex-col items-center">
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="drop-shadow-[0_0_16px_rgba(56,189,248,0.35)]">
          <line x1="0" y1={h - padB} x2={w} y2={h - padB} stroke="#ffffff40" strokeWidth="2" />
          {categories.map((c, i) => {
            const x = groupGap + i * (groupW + groupGap);
            const valA = safeA[i] || 0;
            const valB = safeB[i] || 0;
            const hA = ((h - padB - padT) * valA) / max;
            const hB = ((h - padB - padT) * valB) / max;
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
          <span className="flex items-center gap-1.5 text-cyan-300"><span className="w-3 h-3 rounded bg-[#38bdf8] inline-block" />{names[0]}</span>
          <span className="flex items-center gap-1.5 text-pink-300"><span className="w-3 h-3 rounded bg-[#f472b6] inline-block" />{names[1]}</span>
        </div>
      </div>
    );
  }

  if (mode === 'pictograph') {
    const categories = data.categories || [];
    const scale = data.scale || 5;
    const unit = data.unit || 'items';
    const sym = data.symbol || '📖';

    return (
      <div className="w-full max-w-md mx-auto my-2 rounded-xl overflow-hidden border-2 border-purple-400/40 shadow-lg">
        <div className="bg-[#241155] px-4 py-2 text-amber-300 font-display font-900 text-xs sm:text-sm flex items-center justify-between">
          <span>Key: {sym} = {scale} {unit}</span>
          <span className="text-slate-300 text-xs">Pictograph Model</span>
        </div>
        {categories.map((c, i) => {
          let count = 0;
          if (Array.isArray(data.symbolCounts) && data.symbolCounts[i] != null && !isNaN(Number(data.symbolCounts[i]))) {
            count = Math.max(0, Math.round(Number(data.symbolCounts[i])));
          } else if (Array.isArray(data.values) && data.values[i] != null && !isNaN(Number(data.values[i]))) {
            count = Math.max(0, Math.round(Number(data.values[i]) / (scale || 1)));
          }
          const finalCount = (!isNaN(count) && isFinite(count) && count > 0) ? Math.min(Math.floor(count), 12) : 0;
          const rawVal = Array.isArray(data.values) && data.values[i] != null && !isNaN(Number(data.values[i]))
            ? Number(data.values[i])
            : (finalCount * scale);
          const totalVal = (!isNaN(rawVal) && isFinite(rawVal)) ? rawVal : (finalCount * scale);
          const isHi = hi.includes(i);

          return (
            <div key={c} className={`flex items-center justify-between px-4 py-2.5 border-t border-white/10 ${isHi ? 'bg-cyan-500/25' : 'bg-[#150b34]'}`}>
              <span className="w-24 shrink-0 text-slate-100 font-extrabold text-xs sm:text-sm">{c}</span>
              <div className="flex items-center gap-2 flex-1 justify-end">
                <div className="flex items-center flex-wrap justify-end gap-1 text-base sm:text-lg select-none">
                  {finalCount > 0 ? (
                    Array.from({ length: finalCount }, (_, idx) => (
                      <span key={idx} role="img" aria-label={sym}>{sym}</span>
                    ))
                  ) : (
                    <span className="text-slate-500 text-xs font-mono">(0 symbols)</span>
                  )}
                </div>
                <span className="text-amber-300 text-xs font-black min-w-[55px] text-right font-mono">
                  {totalVal} {unit}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  if (mode === 'line') {
    const labels = data.labels || data.categories || [];
    const safeValues = (data.values || []).map(v => (typeof v === 'number' && !isNaN(v) ? v : 0));
    const max = Math.max(...safeValues, 1);
    const min = Math.min(...safeValues, 0);
    const w = size * 1.5, h = size * 0.85, padB = 30, padT = 16, padL = 16, padR = 16;
    const n = Math.max(labels.length, 2);
    const stepX = (w - padL - padR) / (n - 1);
    const range = Math.max(1, max - min);
    const pointFor = (i) => {
      const x = padL + i * stepX;
      const y = h - padB - (((safeValues[i] || 0) - min) / range) * (h - padB - padT);
      return [x, y];
    };
    const pts = labels.map((_, i) => pointFor(i));
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
              <text x={x} y={y - 12} fill="#fff" fontSize="11" fontWeight="900" textAnchor="middle">{safeValues[i]}</text>
              <text x={x} y={h - padB + 16} fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle">{labels[i]}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  if (mode === 'pie') {
    const categories = data.categories || [];
    const safeValues = (data.values || []).map(v => (typeof v === 'number' && !isNaN(v) ? Math.max(0, v) : 0));
    const total = safeValues.reduce((a, b) => a + b, 0) || 1;
    const cx = size * 0.42, cy = size * 0.42, r = size * 0.38;
    let angleStart = -90;

    const slices = safeValues.map((v, i) => {
      const angle = (v / total) * 360;
      const a0 = (angleStart * Math.PI) / 180;
      const a1 = ((angleStart + angle) * Math.PI) / 180;
      const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
      const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      const large = angle > 180 ? 1 : 0;
      const path = angle >= 359.9
        ? `M ${cx - r} ${cy} A ${r} ${r} 0 1 0 ${cx + r} ${cy} A ${r} ${r} 0 1 0 ${cx - r} ${cy} Z`
        : `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`;
      const isHi = hi.includes(i);
      angleStart += angle;
      return { path, color: isHi ? '#facc15' : PALETTE[i % PALETTE.length], isHi, angle, val: v };
    });

    return (
      <div className="flex items-center gap-5 justify-center">
        <svg width={size * 0.84} height={size * 0.84} viewBox={`0 0 ${size * 0.84} ${size * 0.84}`} className="drop-shadow-[0_0_18px_rgba(139,92,246,0.4)] shrink-0">
          {slices.map((s, i) => (
            <path key={i} d={s.path} fill={s.color} stroke="#0c0424" strokeWidth="1.5" opacity={s.isHi ? 1 : 0.9} />
          ))}
        </svg>
        <div className="flex flex-col gap-1.5 text-left">
          {categories.map((c, i) => (
            <div key={c} className="flex items-center gap-2 text-xs sm:text-sm font-extrabold">
              <span className="w-3.5 h-3.5 rounded shrink-0" style={{ background: slices[i]?.color || PALETTE[i % PALETTE.length] }} />
              <span className="text-slate-200">{c}:</span>
              <span className="text-white font-mono">{safeValues[i]} {data.unit || ''}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
