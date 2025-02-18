// App.js

import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

const App = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push-ups", type: "repetition" },
    { name: "Running", type: "duration" },
    { name: "Planks", type: "duration" },
  ];

  const renderExercise = () => {
    switch (selectedExercise?.type) {
      case "repetition":
        return (
          <div>
            <RepetitionExercise name={selectedExercise.name} />
            <button onClick={() => 
setSelectedExercise(null)}>Return</button>
          </div>
        );
      case "duration":
        return (
          <div>
            <DurationExercise name={selectedExercise.name} />
            <button onClick={() => 
setSelectedExercise(null)}>Return</button>
          </div>
        );
      default:
        return (
          <div>
            <h1>Let's Get This Cardio Going!</h1>
            <p>Select your preferred exercise</p>
            {exercises.map((exercise) => (
              <button key={exercise.name} onClick={() => 
setSelectedExercise(exercise)}>
                {exercise.name}
              </button>
            ))}
          </div>
        );
    }
  };

  return <div>{renderExercise()}</div>;
};

export default App;

