import React from 'react';
import './Messaging.css';

function Messaging({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="messaging-popup">
      <button className="close-button" onClick={onClose}>X</button>
      {/* Messaging Content */}
    </div>
  );
}

export default Messaging;
