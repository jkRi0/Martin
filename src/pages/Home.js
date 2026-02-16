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
    <div style={{ ...theme.styles.pageContainer, backgroundColor: theme.colors.bgMain, minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: theme.colors.textMain, marginBottom: '0.5rem' }}>Welcome to StudentInfo</h2>
        <p style={{ color: theme.colors.textMuted, fontSize: '1.1rem' }}>A centralized dashboard to manage and view student information.</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        {loading && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem' }}>
            <div style={{ width: '40px', height: '40px', border: `4px solid ${theme.colors.border}`, borderTopColor: theme.colors.primary, borderRadius: '50%' }}></div>
            <p style={{ marginTop: '1rem', color: theme.colors.textMuted }}>Loading student data...</p>
          </div>
        )}
        {error && <p style={{ color: '#ef4444', textAlign: 'center', padding: '1rem', backgroundColor: '#fef2f2', borderRadius: '8px', border: '1px solid #fee2e2' }}>{error}</p>}
        {!loading && !error && (
          <div style={{ ...theme.styles.grid }}>
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
