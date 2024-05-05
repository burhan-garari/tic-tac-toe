import React, { useState } from "react";
import Board from "./Board/Board";
import TimeTravel from "./TimeTravel/time-travel";
import ariaLabels from "../constants/ariaLabels";
import { initialBoardState, gameHistoryStart } from "../constants/boardConstants";
import GameControls from "./GameControls/controls";
import PlayerBanner from "./PlayerBanner/player-banner";

function Game(){
    const [squareVals, setSquareVals] = useState(initialBoardState)

    const [playerMove, setPlayerMove] = useState('X');
    const [isGameOver, setIsGameOver] = useState([false, ""]);
    const [gameHistory, setGameHistory] = useState([gameHistoryStart]);
    const [isTimeTravel, setIsTimeTravel] = useState(false);

    const handleSquareClick = (idx) => {
        // check wether current cell has a value of 'X' or '0'
        if(isTimeTravel || isGameOver[0] || squareVals[idx]) return;
        // proceed with update if no move has been played
        const nextSquareVals = squareVals.slice();
        nextSquareVals[idx]  = playerMove;
        setSquareVals(nextSquareVals);
        setGameHistory((prev)=>{
            return [
                ...prev, {"title": `${playerMove}'s move`, currentState: nextSquareVals}
            ]
        })

        if(isGameCompleted(nextSquareVals, playerMove) || checkSquaresFilled(nextSquareVals)) {
            // game is complete
            // show time travel at end 
            setIsTimeTravel(true);
            return;
        }
        // play next move
        setPlayerMove(playerMove === 'X' ? '0' : 'X')
    }

    const checkSquaresFilled= (squareVals) => {
        const emptyCells = squareVals.filter((x) => x === "") || [];
        if(emptyCells.length === 0) {
            setIsGameOver([true, ""]);
            return true
        }
        return false
    }

    const handleResetBoard = () => {
        // const allowReset = checkSquaresFilled(squareVals);
        // if(!allowReset && !isGameOver[0]) return;
        // allowing user to rest the board, and other value
        setSquareVals(Array(9).fill(""));
        setGameHistory([gameHistoryStart]);
        setPlayerMove("X");
        setIsGameOver(false);
        setIsTimeTravel(false);
    }

    function isGameCompleted(squares, playerMove) {
        const winMoves = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8]
        ]

        for(let i=0; i<winMoves.length; i++){
            let f = winMoves[i]?.filter(move => squares[move] === playerMove) || [];
            if(f.length === winMoves[i]?.length){
                setIsGameOver([true, playerMove])
                return true
            }
        }

        return false;

    }

    function updateBoardForTimeTravel(gameState) {
        if(!isTimeTravel) return;
        setSquareVals(gameState);
    }

    function updateTimeTravelSteps(isTimeTravel) {
        if(!isTimeTravel) {
            // bring the game back to most recent game moves
            // when player is looking at previous moves and exiting time travel mode
            let lastGameStep = [...gameHistory[gameHistory.length - 1]?.currentState];
            updateBoardForTimeTravel(lastGameStep);
        }
        setIsTimeTravel(isTimeTravel);
    }



    return (
        <div aria-label={ariaLabels.TIC_TAC_TOE}>
            <h1 style={{textAlign:"center"}} role="gameTitle">
                TIC TAC TOE
            </h1>

            <GameControls 
                handleResetBoard={handleResetBoard}
                updateTimeTravel={updateTimeTravelSteps}
                isTimeTravel={isTimeTravel}
            />

            <PlayerBanner
                isGameOver={isGameOver}
                playerMove={playerMove}
            />

            <Board 
                boardVals={squareVals} 
                handleSquareClick={handleSquareClick}
            />

            <TimeTravel
                isTimeTravelMode={isTimeTravel}
                history={gameHistory}
                updateBoard={updateBoardForTimeTravel}
            />
        </div>
    )
}

export default Game;