import React from "react";
import "./timeTravel.css";
import ariaLabels from "../../constants/ariaLabels";

function TimeTravel({isTimeTravelMode, history, updateBoard}) {
    if (!isTimeTravelMode) return <></>
    return (
        <div className="time-travel-list">
            <h2>Time travel</h2>
            {
                history.map((currGameState, index) => {
                    return (
                        <button 
                            onClick={() => updateBoard(currGameState?.currentState || [])} 
                            key={`game-history-${index}`}
                            aria-label={ariaLabels.TIME_TRAVEL_BUTTON}
                        >
                            {currGameState?.title || ""}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default TimeTravel;