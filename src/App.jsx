import React from 'react';
import GameScene from './GameScene';
import levels from './levels';
import './App.css';

function App() {
  const element = levels[0]
  const num = localStorage.getItem('num') || Math.floor(Math.random()*999999);
  localStorage.setItem('num',num);
  const ref = 'users/' + num.toString()
  
  console.log(ref)
  return (
    <div className="App">
      <header className="App-header">
        <GameScene
          keyRef={ref}
          targets={element.targets}
          nums={element.nums}
          limit={element.limit}
          solution={element.solution}
        />
      </header>
    </div>
  );
}

export default App;
