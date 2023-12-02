import React from 'react'
import GameBoxStyles from './GameBox.module.css'

export default function GameBox({thisGame, displayGameInfo}) {
    function sendGameInfo() {
        displayGameInfo(thisGame);
    }

    return (
        thisGame &&
        <div onClick={displayGameInfo ? sendGameInfo : () => {
        }} className={GameBoxStyles.game_box}>
            <img className={GameBoxStyles.game_thumbnail} src={thisGame.image}
                 alt={thisGame.title}/>
            <p className={GameBoxStyles.game_title}>{thisGame.title}</p>
        </div>

    );
}