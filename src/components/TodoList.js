import React from 'react';
import '../styles/styles.css';

const TodoList = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="popup-task">
        <div className="searchbar-chat">
          <input type="text" placeholder="Search tasks..." aria-label="Search tasks" className="search-label" />
        </div>
        <div className="task-list">
          <div className="task">Task 1</div>
          <div className="task">Task 2</div>
          <div className="task">Task 3</div>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    )
  );
};

export default TodoList;
