import React, { useState } from 'react';
import theme from '../theme';

function UserTile({ user }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
        <div style={{ 
          width: '48px', 
          height: '48px', 
          backgroundColor: '#eef2ff', 
          color: theme.colors.primary,
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25rem',
          fontWeight: 'bold'
        }}>
          {user.name ? user.name.charAt(0) : '?'}
        </div>
        <div>
          <h3 className="card-title" style={{ margin: 0 }}>{user.name}</h3>
          <p className="card-info" style={{ margin: 0 }}>@{user.username}</p>
        </div>
      </div>

      <button
        onClick={() => setShowInfo(!showInfo)}
        className={`btn ${showInfo ? 'btn-primary' : 'btn-outline'}`}
        style={{ width: '100%' }}
      >
        {showInfo ? "Hide Details" : "Show Details"}
      </button>

      {showInfo && (
        <div className="details" style={{ animation: 'fadeIn 0.2s ease-out' }}>
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <div className="detail-row">
            <span className="detail-label">Email</span>
            <span className="detail-value">{user.email}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Phone</span>
            <span className="detail-value">{user.phone}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Website</span>
            <span className="detail-value" style={{ color: theme.colors.primary, fontWeight: 500 }}>{user.website}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Company</span>
            <span className="detail-value">{user.company?.name}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserTile;
