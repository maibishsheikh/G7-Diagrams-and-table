// src/components/shared/DataVisual.jsx
import React from 'react';
import { DataDiagram } from '../DataDiagram.jsx';

export default function DataVisual({ data, compact = false }) {
  if (!data) return null;

  return (
    <div className={`data-visual-container ${compact ? 'compact' : ''}`} style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: compact ? '8px' : '12px',
      overflowX: 'auto',
    }}>
      <DataDiagram diagramData={data} size={compact ? 220 : 260} />
    </div>
  );
}
