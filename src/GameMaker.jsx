import React, { useState, useEffect } from 'react';
import levels from './levels.json'
import GameScene from './GameScene';

export default function GameMaker() {
    const [currLevel, setCurrLevel] = useState('');
    const [currCount, setCurrCount] = useState(0);
    const num = localStorage.getItem('num') || Math.floor(Math.random()*999999);
    const ref = 'users/' + num.toString()

    useEffect(() => {
        goToNextLevel()
    }, []);

    function getRandomLevel(levels){

        const stage =  Math.floor(Math.random() * (levels + 1));
        return '1-' + stage.toString()
    }

    function goToNextLevel() {
        setCurrCount(currCount + 1)
        const levelNum = getRandomLevel(50)

        console.log(levelNum)
        const level = levels[levelNum]

        // levels[]
        console.log(level)
        setCurrLevel(level)

    }
    return(
        <div>
            <h2>{Math.floor(Math.random() * 10)}</h2>
            <GameScene
                keyRef={ref}
                targets={currLevel.targets}
                nums={currLevel.nums}
                limit={currLevel.limit}
                solution={currLevel.solution}
            />
        </div>
    )
}