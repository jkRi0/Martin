const theme = {
  colors: {
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    bgMain: '#f8fafc',
    textMain: '#1e293b',
    textMuted: '#64748b',
    border: '#e2e8f0',
    white: '#ffffff',
    headerBg: '#1e293b',
    headerText: '#ffffff',
    navMuted: '#cbd5e1',
    badgeBg: '#e0f2fe',
    badgeText: '#0369a1',
  },
  shadows: {
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  styles: {
    pageContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '3rem 2rem',
    },
    card: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      transition: 'all 0.2s ease',
    },
    btn: {
      display: 'inline-block',
      padding: '0.6rem 1.2rem',
      borderRadius: '6px',
      border: '1px solid #e2e8f0',
      cursor: 'pointer',
      fontWeight: '600',
      textAlign: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
    }
  }
};

export default theme;
