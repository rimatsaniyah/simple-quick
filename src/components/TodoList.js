import React from 'react';
import './TodoList.css';

function TodoList({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="todo-popup">
      <button className="close-button" onClick={onClose}>X</button>
      {/* Todo List Content */}
    </div>
  );
}

export default TodoList;
