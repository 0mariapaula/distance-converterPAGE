import React, { useState } from 'react';
import './App.css';

function App() {
  const [meters, setMeters] = useState('');
  const [feet, setFeet] = useState('');

  const convertToFeet = (meters) => {
    return (meters * 3.28084).toFixed(2);
  };

  const convertToMeters = (feet) => {
    return (feet / 3.28084).toFixed(2);
  };

  const handleMetersChange = (e) => {
    const value = e.target.value;
    setMeters(value);
    setFeet(convertToFeet(value));
  };

  const handleFeetChange = (e) => {
    const value = e.target.value;
    setFeet(value);
    setMeters(convertToMeters(value));
  };

  return (
    <div className="App">
      <h1>Conversor de Distâncias</h1>
      <div className="converter">
        <div>
          <label>
            Metros:
            <input
              type="number"
              value={meters}
              onChange={handleMetersChange}
              placeholder="Digite o valor em metros"
            />
          </label>
        </div>
        <div>
          <label>
            Pés:
            <input
              type="number"
              value={feet}
              onChange={handleFeetChange}
              placeholder="Digite o valor em pés"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
