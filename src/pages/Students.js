import React, { useState } from 'react';
import StudentComponent from '../components/StudentComponent';
import theme from '../theme';

function Students() {
  const [showAll, setShowAll] = useState(true);

  const students = [
    { id: 1, name: 'Justine Ken Rioveros', course: 'BS Information Technology', year: '4th Year' },
    { id: 2, name: 'Jeffry Duria', course: 'BS Information Technology', year: '4th Year' },
    { id: 3, name: 'Darren Martin', course: 'BS Information Technology', year: '4th Year' },
    { id: 4, name: 'Vin Cedrick Lamis', course: 'BS Information Technology', year: '4th Year' },
    { id: 5, name: 'Alex Cruz', course: 'BS Computer Science', year: '3rd Year' },
    { id: 6, name: 'Bianca Flores', course: 'BS Computer Science', year: '2nd Year' },
    { id: 7, name: 'Carlo Mendoza', course: 'BS Computer Science', year: '1st Year' },
    { id: 8, name: 'Diana Ramos', course: 'BS Computer Science', year: '4th Year' },
  ];

  const visibleStudents = showAll ? students : students.filter(s => s.course === 'BS Information Technology');

  return (
    <div style={{ ...theme.styles.pageContainer, backgroundColor: theme.colors.bgMain, minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: theme.colors.textMain, marginBottom: '0.5rem' }}>Student Directory</h2>
          <p style={{ color: theme.colors.textMuted, margin: 0 }}>Browse and filter through our list of currently enrolled students.</p>
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          style={{
            ...theme.styles.btn,
            backgroundColor: showAll ? 'white' : theme.colors.primary,
            color: showAll ? theme.colors.textMain : 'white',
            borderColor: showAll ? theme.colors.border : theme.colors.primary,
            padding: '0.75rem 1.5rem',
            boxShadow: theme.shadows.sm,
          }}
          onMouseOver={(e) => {
            if (showAll) e.target.style.backgroundColor = '#f1f5f9';
            else e.target.style.backgroundColor = theme.colors.primaryHover;
          }}
          onMouseOut={(e) => {
            if (showAll) e.target.style.backgroundColor = 'white';
            else e.target.style.backgroundColor = theme.colors.primary;
          }}
        >
          {showAll ? 'Filter BSIT Only' : 'Show All Students'}
        </button>
      </div>

      <div style={{ ...theme.styles.grid }}>
        {visibleStudents.map(student => (
          <StudentComponent
            key={student.id}
            name={student.name}
            course={student.course}
            year={student.year}
          />
        ))}
      </div>
    </div>
  );
}

export default Students;
