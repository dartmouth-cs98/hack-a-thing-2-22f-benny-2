import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";
import './App.css';
import { useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmited] = useState(false);
  const navigate = useNavigate();
  const num = localStorage.getItem('num') || Math.floor(Math.random()*999999);
  localStorage.setItem('num',num);
  const keyRef = 'users/' + num.toString()

  // Database code sourced from https://firebase.google.com/docs/database/web/read-and-write?hl=en&authuser=3#web-version-9_2
  const firebaseConfig = {
    databaseURL: "https://operators-a44ee-default-rtdb.firebaseio.com",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);
  const dbRef = ref(database);


  useEffect(() => {
    get(child(dbRef, keyRef + '/name')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val())
        setSubmited(true)
        setName(snapshot.val())
      }
      else{

      }
    })
  });

  const submitName = (name) => {
    set(ref(database, keyRef + '/name'), name);
    setSubmited(true)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Operators</h1>

        {
          !submitted ?
          <div>
            <h3>enter your name</h3>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button type="button" onClick={() => submitName(name)}>submit</button>
          </div>
          :
          <div>
            <h2>Hi {name}</h2>
            <button type="button" onClick={() => navigate('playGame')}>Start a New Game</button> <br/>
            <button type="button" onClick={() => navigate('viewGames')}>View Past Games</button>
          </div>
        }  
      </header>
    </div>
  );
}

export default App;
