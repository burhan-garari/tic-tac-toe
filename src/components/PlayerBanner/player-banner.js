import React from "react";

function PlayerBanner({ isGameOver, playerMove }) {
    return (
        <h2 style={{display:"flex", justifyContent:"center", marginTop:"10px"}}
            role="player-banner-text"
        >
            {
                (!isGameOver[0]) ? `Player's turn - ${playerMove}`:
                (!!isGameOver[1]) ? `Player ${isGameOver[1]} has won` : "It's a tie"
            }
        </h2>
    )
}

export default PlayerBanner;