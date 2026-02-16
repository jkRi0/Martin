import React, { useState } from 'react';
import StudentComponent from '../components/StudentComponent';
import theme from '../theme';

function Students() {
  const [showAll, setShowAll] = useState(true);

  const students = [
    { id: 1, name: 'Monkey D. Luffy', course: 'BS Information Technology', year: '4th Year' },
    { id: 2, name: 'Roronoa Zoro', course: 'BS Information Technology', year: '4th Year' },
    { id: 3, name: 'Naruto Uzumaki', course: 'BS Information Technology', year: '4th Year' },
    { id: 4, name: 'Satoru Gojo', course: 'BS Information Technology', year: '4th Year' },
    { id: 5, name: 'Eren Yeager', course: 'BS Computer Science', year: '3rd Year' },
    { id: 6, name: 'Mikasa Ackerman', course: 'BS Computer Science', year: '2nd Year' },
    { id: 7, name: 'Killua Zoldyck', course: 'BS Computer Science', year: '1st Year' },
    { id: 8, name: 'Light Yagami', course: 'BS Computer Science', year: '4th Year' },
  ];

  const visibleStudents = showAll ? students : students.filter(s => s.course === 'BS Information Technology');

  return (
    <div className="main-content">
      <div className="filter-container">
        <div className="page-header" style={{ margin: 0 }}>
          <h2 className="section-title">Student Directory</h2>
          <p className="section-subtitle">Manage and filter student enrollment records.</p>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={() => setShowAll(!showAll)}
            className={`btn ${showAll ? 'btn-outline' : 'btn-primary'}`}
            style={{ minWidth: '180px' }}
          >
            {showAll ? 'Filter BSIT Only' : 'Show All Students'}
          </button>
        </div>
      </div>

      <div className="card-grid">
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
