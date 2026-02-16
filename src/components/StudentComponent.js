import React, { useState } from 'react';
import theme from '../theme';

function StudentComponent({ name, course, year }) {
  return (
    <div className="card">
      <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span className="badge badge-indigo">{year}</span>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          backgroundColor: '#f1f5f9', 
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25rem'
        }}>
          🎓
        </div>
      </div>
      
      <h3 className="card-title">{name}</h3>
      <p className="card-info">{course}</p>
      
      <div className="details">
        <div className="detail-row">
          <span className="detail-label">Status</span>
          <span className="detail-value" style={{ color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }}></span>
            Active
          </span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Student ID</span>
          <span className="detail-value">2024-STUD-{Math.floor(Math.random() * 1000)}</span>
        </div>
      </div>
      
      <div style={{ marginTop: 'auto', paddingTop: '1.25rem' }}>
        <button className="btn btn-outline" style={{ width: '100%' }}>View Profile</button>
      </div>
    </div>
  );
}

export default StudentComponent;
