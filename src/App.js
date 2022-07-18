import React, { useState, useEffect } from 'react';

import './App.css';
import patternDivider from './images/pattern-divider-desktop.svg';
import diceIcon from './images/icon-dice.svg';

import LoadingSpinner from '../src/components/LoadingSpinner';

function App() {
  const [advice, setAdvice] = useState({});

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const json = await response.json();
      if (response.status === 200) {
        setAdvice(json.slip);
      }
    } catch (error) {
      console.log('Something went wrong while fetching advice', error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      {advice.id ? (
        <main className="main-content">
          <p className="advice-header">ADVICE #{advice.id}</p>
          <h1 className="advice">"{advice.advice}"</h1>
          <img className="divider" src={patternDivider} alt="pattern divider" />
          <div className="dice-container" onClick={fetchAdvice}>
            <img className="dice" src={diceIcon} alt="dice" />
          </div>
        </main>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}

export default App;
