import React, { useState } from 'react';

import './App.css';

function App() {
  const [stitchCounter, setStitchCounter] = useState(0);
  const [stitchInput, setStitchInput] = useState(1);

  function handleClick() {
    setStitchCounter(parseInt(stitchCounter) + parseInt(stitchInput));
  }

  function handleChange(event) {
    const value = event.target.value;
    setStitchInput(value);
  }

  return (
    <div id="stitchCounter">
      <p id="StitchCountDisplay">{stitchCounter}</p>
      <input value={stitchInput} onChange={handleChange} />
      <button id="stitchCountButton" onClick={handleClick}>
        Count stitches!
      </button>
    </div>
  );
}

export default App;
