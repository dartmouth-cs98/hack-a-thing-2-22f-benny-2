import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";

import './Card.css';

export default function Card({
    tag, time, keyRef
}){
    const [bestTime, setBestTime] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        readDatabase()
    }, []);

    const readDatabase = () => {
      // Get user times
      get(child(dbRef, 'users/' + keyRef + '/' + tag)).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val()
          setBestTime(data.time)
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

      get(child(dbRef, 'users/' + keyRef + '/name')).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val()
          setName(data)
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
        <div className='card-container'>
            <h2>{tag}</h2>
            <h3>Your time: {time.toString().slice(0, -3)}.{time.toString().slice(1, -2)} secs</h3>
            <h3>Best time: {bestTime.toString().slice(0, -3)}.{bestTime.toString().slice(1, -2)} secs by {name}</h3>
        </div>
    )
}
