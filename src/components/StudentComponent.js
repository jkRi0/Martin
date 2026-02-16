import React, { useState } from 'react';
import theme from '../theme';

function StudentComponent({ name, course, year }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    ...theme.styles.card,
    transform: isHovered ? 'translateY(-4px)' : 'none',
    boxShadow: isHovered ? theme.shadows.lg : theme.shadows.sm,
  };

  const badgeStyle = {
    backgroundColor: theme.colors.badgeBg,
    color: theme.colors.badgeText,
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.025em',
  };

  return (
    <div 
      style={{ ...cardStyle }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ marginBottom: '1rem' }}>
        <span style={{ ...badgeStyle }}>{year}</span>
      </div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: theme.colors.textMain }}>{name}</h3>
      <p style={{ color: theme.colors.textMuted, fontSize: '0.9rem', margin: 0 }}>{course}</p>
      
      <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: `1px solid ${theme.colors.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#10b981' }}>● Active</span>
        <span style={{ fontSize: '0.75rem', color: theme.colors.textMuted }}>ID: 2024-STUD</span>
      </div>
    </div>
  );
}

export default StudentComponent;
