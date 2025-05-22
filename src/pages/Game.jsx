import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";
import Map from "./Map";
import Timer from "./Timer";
import View from "./View";

function Game() {
  const [guessCoords, setGuessCoords] = useState(null);
  const [timerDone, setTimerDone] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setTimerDone(true);
    navigate("/Score", { state: { guessCoords } });
  };

  return (
    <div className="container">
      <div className="mapillary">
        <View />
      </div>
      <div className="timer">
        <Timer guessCoords={guessCoords} timerDone={timerDone} />
      </div>
      <div className="leaflet">
        {/* ✅ Button now above the map */}
        <div className="submit-container">
          <button
            onClick={handleSubmit}
            disabled={!guessCoords}
            className="submit-button"
          >
            Submit Guess
          </button>
        </div>
        <Map onGuess={setGuessCoords} />
      </div>
    </div>
  );
}

export default Game;
