import React from 'react';
import '../styles/styles.css';
import searchIcon from '../assets/images/search-icon.png';
import inboxIcon from '../assets/images/inbox-1.png';

const Messaging = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="popup-messaging">
        <div className="searchbar-chat">
          <img src={searchIcon} alt="Search" className="search-icon-chat" />
          <input type="text" placeholder="Search chat..." aria-label="Search chat" className="search-label" />
        </div>
        <div className="loading-indicator">
          <div className="loader"></div>
          <div className="loading-text">Loading...</div>
        </div>
        <div className="message">
          <img src={inboxIcon} alt="Sender" className="message-icon" />
          <div className="message-content">
            <div className="message-room">Room Name</div>
            <div className="message-date">Date</div>
            <div className="message-sender">Sender Name</div>
            <div className="message-text">Message content goes here.</div>
          </div>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    )
  );
};

export default Messaging;
