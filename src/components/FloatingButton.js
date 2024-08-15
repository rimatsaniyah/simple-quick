import React from 'react';
import { FaLightningBolt } from 'react-icons/fa'; // Correct import
import './FloatingButton.css';

function FloatingButton({ onClick }) {
  return (
    <div className="floating-button-container">
      <button className="floating-button" onClick={onClick}>
        <FaLightningBolt className="floating-button-icon" />
      </button>
    </div>
  );
}

export default FloatingButton;
