import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import levels from './levels';
import './App.css';

function App() {
  const [name, setName] = useState(null);
  const navigate = useNavigate();
  const num = localStorage.getItem('num') || Math.floor(Math.random()*999999);
  localStorage.setItem('num',num);
  
  return (
    <div className="App">
      <header className="App-header">
        {
          !name && 
          <input type="text" value={name} onChange={e => setName(e)} />
        }
        <input>Enter your name: </input>
        <h1>Operators</h1>
        <button type="button" onClick={() => navigate('playGame')}>Start a New Game</button>
        <button type="button" onClick={() => navigate('playGame')}>View Past Games</button>
        
      </header>
    </div>
  );
}

export default App;
