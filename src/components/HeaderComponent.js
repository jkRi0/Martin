import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../theme';

function HeaderComponent() {
  const headerStyle = {
    backgroundColor: theme.colors.headerBg,
    color: theme.colors.headerText,
    padding: '1rem 2rem',
    boxShadow: theme.shadows.sm,
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navLinkStyle = {
    color: theme.colors.navMuted,
    textDecoration: 'none',
    fontWeight: '500',
    marginLeft: '1.5rem',
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>StudentInfo</h1>
        <nav>
          <Link to="/" style={navLinkStyle} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = theme.colors.navMuted}>Home</Link>
          <Link to="/students" style={navLinkStyle} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = theme.colors.navMuted}>Students</Link>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;
