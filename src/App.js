import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import Home from './pages/Home';
import Students from './pages/Students';

function App() {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
