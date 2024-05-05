import React from "react";
import "./controls.css";

function GameControls({handleResetBoard, updateTimeTravel, isTimeTravel}) {
    return (
        <section className="controls" role="controls-container">
            <h3 role="controls-title">CONTROLS</h3>
            <div className="controls-menu" role="controls-menu">
                <button
                    className="control-button"
                    onClick={handleResetBoard}
                    role="resetButton"
                >
                    {"RESET"}
                </button>
                <button
                    className="control-button"
                    onClick={()=> updateTimeTravel(!isTimeTravel)}
                    role="timeTravelButton"
                >
                    {!isTimeTravel ? "Show Time travel" : "Hide Time travel"}
                </button>
            </div>
        </section>
    )
}

export default GameControls;