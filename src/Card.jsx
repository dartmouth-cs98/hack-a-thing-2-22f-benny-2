import React, { useState, useEffect } from 'react';
import './Card.css';

export default function Card({
    key, tag, time, hints, best, goToNextLevelReload
}){
    return (
        <div className='card-container'>
            <h2>{tag}</h2>
            <h3>Your time: {time.toString().slice(0, -3)}.{time.toString().slice(1, -2)} secs</h3>
            <h3>Best time: {best.toString().slice(0, -3)}.{best.toString().slice(1, -2)} secs</h3>
        </div>
    )
}
