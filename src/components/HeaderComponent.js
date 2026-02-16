import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import theme from '../theme';

function HeaderComponent() {
  const location = useLocation();

  return (
    <header className="app-header">
      <div className="header-container">
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ 
            width: '32px', 
            height: '32px', 
            backgroundColor: theme.colors.primary, 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>S</div>
          <h1 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, color: theme.colors.secondary, letterSpacing: '-0.025em' }}>
            Student<span style={{ color: theme.colors.primary }}>Info</span>
          </h1>
        </Link>
        <nav className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Dashboard
          </Link>
          <Link 
            to="/students" 
            className={`nav-link ${location.pathname === '/students' ? 'active' : ''}`}
          >
            Directory
          </Link>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;
