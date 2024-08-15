import React, { useState } from 'react';
import './styles/styles.css';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import FloatingButton from './components/FloatingButton';
import Messaging from './components/Messaging';
import TodoList from './components/TodoList';

function App() {
  const [isMessagingOpen, setMessagingOpen] = useState(false);
  const [isTaskOpen, setTaskOpen] = useState(false);

  const toggleMessaging = () => {
    setMessagingOpen(!isMessagingOpen);
  };

  const toggleTask = () => {
    setTaskOpen(!isTaskOpen);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="divider"></div>
      <SearchBar />
      <FloatingButton onClick={() => { toggleMessaging(); toggleTask(); }} />
      <Messaging isOpen={isMessagingOpen} onClose={toggleMessaging} />
      <TodoList isOpen={isTaskOpen} onClose={toggleTask} />
    </div>
  );
}

export default App;
