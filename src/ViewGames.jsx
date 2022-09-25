import React, { useState, useEffect } from 'react';
import Card from './Card';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";
import './ViewGames.css'

export default function GameMaker() {

    const [currObjects, setCurrObjects] = useState({});

    const num = localStorage.getItem('num')
    const keyRef = 'users/' + num.toString()

    useEffect(() => {
        readDatabase()
    }, []);

    const readDatabase = () => {
        get(child(dbRef, keyRef)).then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val()
            setCurrObjects(data)
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
      }
    // Database code sourced from https://firebase.google.com/docs/database/web/read-and-write?hl=en&authuser=3#web-version-9_2
    const firebaseConfig = {
        databaseURL: "https://operators-a44ee-default-rtdb.firebaseio.com",
      };
      
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Realtime Database and get a reference to the service
    const database = getDatabase(app);
    const dbRef = ref(database);

    return (
        <div className="App">
            <header className="App-header">
                <h2>Your Results:</h2>
                <div className="card">
                    {
                        Object.keys(currObjects).map((key, index) => (
                            
                            key !== 'name'
                            &&
                            <Card
                                key = {index}
                                tag = {key}
                                hint = {currObjects[key].hint}
                                time = {currObjects[key].time}
                            />
                        ))
                    }
                </div>
            </header>
        </div>
    )
}
