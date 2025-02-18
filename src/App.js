<<<<<<< HEAD
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

=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 231525ed3aa2ac0309733132986e6fb373655eea
