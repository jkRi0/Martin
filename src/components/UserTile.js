import React, { useState } from 'react';
import theme from '../theme';

function UserTile({ user }) {
  const [showInfo, setShowInfo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    ...theme.styles.card,
    transform: isHovered ? 'translateY(-4px)' : 'none',
    boxShadow: isHovered ? theme.shadows.lg : theme.shadows.sm,
  };

  const btnStyle = {
    ...theme.styles.btn,
    width: '100%',
    backgroundColor: showInfo ? theme.colors.primary : 'transparent',
    color: showInfo ? 'white' : theme.colors.textMain,
    borderColor: showInfo ? theme.colors.primary : theme.colors.border,
  };

  return (
    <div 
      style={{ ...cardStyle }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={{ color: theme.colors.textMain, marginBottom: '0.5rem', fontSize: '1.125rem', fontWeight: 700 }}>{user.name}</h3>
      <p style={{ color: theme.colors.textMuted, marginBottom: '1.5rem', fontSize: '0.9rem' }}>@{user.username}</p>

      <button
        onClick={() => setShowInfo(!showInfo)}
        style={btnStyle}
        onMouseOver={(e) => {
          if (!showInfo) e.target.style.backgroundColor = '#f1f5f9';
        }}
        onMouseOut={(e) => {
          if (!showInfo) e.target.style.backgroundColor = 'transparent';
        }}
      >
        {showInfo ? "Hide Details" : "Show Details"}
      </button>

      {showInfo && (
        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: `1px solid ${theme.colors.border}`, fontSize: '0.9rem' }}>
          <div style={{ display: 'flex', marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: 600, width: '60px' }}>Email:</span>
            <span style={{ color: theme.colors.textMuted }}>{user.email}</span>
          </div>
          <div style={{ display: 'flex', marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: 600, width: '60px' }}>Phone:</span>
            <span style={{ color: theme.colors.textMuted }}>{user.phone}</span>
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{ fontWeight: 600, width: '60px' }}>Web:</span>
            <span style={{ color: theme.colors.primary }}>{user.website}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserTile;
