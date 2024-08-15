import React, { useState } from 'react';
import '../styles/styles.css';
import taskIcon from '../assets/images/task-1.png';
import inboxIcon1 from '../assets/images/inbox-1.png';
import inboxIcon2 from '../assets/images/inbox-2.png';
import cloudLightningIcon from '../assets/images/cloud-lightning.png';

const FloatingButton = ({ onTaskClick, onInboxClick, isTaskOpen, isInboxOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="floating-button-container">
      <div className={`expand-options ${isExpanded ? 'expanded' : ''}`}>
        <div className="option">
          <span className="option-label">Task</span>
          <button className="circle-button" onClick={onTaskClick}>
            <img src={taskIcon} alt="Task" className="option-icon" />
          </button>
        </div>
        <div className="option">
          <span className="option-label">Inbox</span>
          <button className={`circle-button ${isInboxOpen ? 'inbox-active' : ''}`} onClick={onInboxClick}>
            <img src={isInboxOpen ? inboxIcon2 : inboxIcon1} alt="Inbox" className="option-icon" />
          </button>
        </div>
      </div>
      <button className="floating-button" onClick={toggleExpand}>
        <img src={cloudLightningIcon} alt="Quick" className="floating-button-icon" />
      </button>
    </div>
  );
};

export default FloatingButton;
