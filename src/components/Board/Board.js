import React from "react";
import "./board.css"
import Square from "../square/Square";
import ariaLabels from "../../constants/ariaLabels";

function Board({ boardVals, handleSquareClick }) {
    return(
        <div className="board" aria-label={ariaLabels.BOARD}>
            <div className="board-row" aria-label={ariaLabels.BOARD_ROW}>
                <Square userVal={boardVals[0]} squareIdx={0} squareClick={handleSquareClick} />
                <Square userVal={boardVals[1]} squareIdx={1} squareClick={handleSquareClick} />
                <Square userVal={boardVals[2]} squareIdx={2} squareClick={handleSquareClick} />
            </div>
            <div className="board-row" aria-label={ariaLabels.BOARD_ROW}>
                <Square userVal={boardVals[3]} squareIdx={3} squareClick={handleSquareClick} />
                <Square userVal={boardVals[4]} squareIdx={4} squareClick={handleSquareClick} />
                <Square userVal={boardVals[5]} squareIdx={5} squareClick={handleSquareClick} />
            </div>
            <div className="board-row" aria-label={ariaLabels.BOARD_ROW}>
                <Square userVal={boardVals[6]} squareIdx={6} squareClick={handleSquareClick} />
                <Square userVal={boardVals[7]} squareIdx={7} squareClick={handleSquareClick} />
                <Square userVal={boardVals[8]} squareIdx={8} squareClick={handleSquareClick} />
            </div>
        </div>
    )
}

export default Board;

