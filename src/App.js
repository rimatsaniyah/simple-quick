import React, { useState } from 'react';
import './styles/styles.css';  // Pastikan path ini sesuai dengan lokasi file CSS Anda
import { FaBolt, FaChat, FaTasks } from 'react-icons/fa';  // Gunakan ikon yang ada

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FaBolt className="search-icon" />
        </div>
        <div className={`floating-button ${expanded ? 'expanded' : ''}`} onClick={() => setExpanded(!expanded)}>
          <FaBolt />
        </div>
        {expanded && (
          <div className="floating-menu">
            <button className="menu-button"><FaChat /></button>
            <button className="menu-button"><FaTasks /></button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
