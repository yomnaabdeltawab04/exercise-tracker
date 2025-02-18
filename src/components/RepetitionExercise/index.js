// Repetition Exercise

import React, { useState } from "react";

const RepetitionExercise = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{name}</h1>
      <p>Reps: {count}</p>
      <button onClick={() => setCount(count + 1)}>Complete Rep</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default RepetitionExercise;

