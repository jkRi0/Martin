import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTile from '../components/UserTile';
import theme from '../theme';

function Home() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setStudents(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch student data. Please try again later.');
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="main-content">
      <div className="page-header" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Academic Dashboard</h2>
        <p className="section-subtitle">Real-time overview of student registrations and system status.</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        {loading && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              border: `4px solid ${theme.colors.border}`, 
              borderTopColor: theme.colors.primary, 
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            <style>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
            <p style={{ marginTop: '1rem', color: theme.colors.textMuted }}>Syncing database...</p>
          </div>
        )}
        {error && (
          <div style={{ 
            color: '#ef4444', 
            textAlign: 'center', 
            padding: '2rem', 
            backgroundColor: '#fef2f2', 
            borderRadius: '12px', 
            border: '1px solid #fee2e2',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <p style={{ fontWeight: 600 }}>{error}</p>
          </div>
        )}
        {!loading && !error && (
          <div className="card-grid">
            {students.map((user) => (
              <UserTile key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
