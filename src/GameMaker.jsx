import React, { useState, useEffect } from 'react';
import levels from './levels.json'
import GameScene from './GameScene';

export default function GameMaker() {
    const [currLevel, setCurrLevel] = useState(null);
    const [currCount, setCurrCount] = useState(0);
    const num = localStorage.getItem('num') || Math.floor(Math.random()*999999);
    const ref = 'users/' + num.toString()

    useEffect(() => {
        goToNextLevel()
    }, []);

    function getRandomLevel(levels){
        const stage =  1 + Math.floor(Math.random() * (levels));
        return '1-' + stage.toString()
    }

    function goToNextLevel() {
        // 
        setCurrCount(currCount + 1)
        const levelNum = getRandomLevel(2)

        console.log(levelNum)
        const level = levels[levelNum]

        console.log(level)
        setCurrLevel(level)

    }

    function goToNextLevelReload() {
        goToNextLevel();
        window.location.reload(false);
    }
    return(
        <div className="App">
            <header className="App-header">
            {
                currLevel && 
                    <GameScene
                        keyRef={ref}
                        tag={currLevel.tag}
                        targets={currLevel.targets}
                        nums={currLevel.operators}
                        limit={currLevel.limit}
                        solution={currLevel.solution}
                        goToNextLevelReload={goToNextLevelReload}
                    />
            }
       </header>
    </div>
    )
}