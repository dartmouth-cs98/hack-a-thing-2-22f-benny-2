import React, { useState, useEffect } from 'react';
import levels from './levels.json'
import GameScene from './GameScene';

export default function GameMaker() {
    const [currLevel, setCurrLevel] = useState(null);
    const [currCount, setCurrCount] = useState(0);
    const ref = localStorage.getItem('num') || Math.floor(Math.random()*999999);

    useEffect(() => {
        goToNextLevel()
    }, []);

    function getRandomLevel(levels){
        const stage =  1 + Math.floor(Math.random() * (levels));
        return '1-' + stage.toString()
    }

    function goToNextLevel() {
        // Go to other level
        setCurrCount(currCount + 1)
        const levelNum = getRandomLevel(49)

        const level = levels[levelNum]

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
                        keyRef={ref.toString()}
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