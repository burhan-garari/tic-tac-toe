import React from "react";
import "./square.css"
import ariaLabels from "../../constants/ariaLabels";

function Square({userVal, squareIdx, squareClick}) {
    return (
        <button 
            className="square" 
            key={squareIdx}
            onClick={() => squareClick(squareIdx)}
            aria-label={ariaLabels.SQUARE}
        >
            {userVal}
        </button>
    )
}

export default Square;