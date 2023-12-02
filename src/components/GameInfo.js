import React from "react";
import gameInfoStyles from "./GameInfo.module.css"

export default function GameInfo({game, uninstall, purchase, play, storeScreen, libScreen}) {
    return (
        <div className={gameInfoStyles.game_info}>
            <img className={gameInfoStyles.game_thumbnail} src={game.image}
                 alt={game.title}/>
            <h1> {game.title} </h1>
            {game.owned ? <button className={gameInfoStyles.play_btn} onClick={() => {
                play(game)
            }}>
                <h3>Play</h3>
            </button> : <button className={gameInfoStyles.play_btn} onClick={() => {
                purchase(game)
            }}>
                <h3>Buy</h3>
            </button>}
            {game.owned && <button className={gameInfoStyles.uninstall_btn} onClick={() => {
                uninstall(game)
            }}>
                {<h3>Uninstall</h3>}
            </button>}
            <h4>Publisher: {game.publisher}</h4>
            {libScreen && <h4>Hours played: {game.hoursPlayed} hours</h4>}
            {storeScreen && <h4>Rating: {game.ratings}/100</h4>}
            {storeScreen && <h4>Price: {game.price}$</h4>}
            <br/>
            <h4 style={{textDecoration: "underline"}}>Description</h4>
            <p>{game.description}</p>
        </div>
    );
}