import React from 'react';
import './App.css';
import patternDivider from './images/pattern-divider-mobile.svg';
import diceIcon from './images/icon-dice.svg';

function App() {
  return (
    <main className="main-content">
      <p className="advice-header">ADVICE #117</p>
      <p className="advice">
        "It is easy to sit up and take notice, what's difficult is getting up
        and taking action."
      </p>
      <img className="divider" src={patternDivider} alt="pattern divider" />
      <div className="dice-container">
        <img className="dice" src={diceIcon} alt="dice" />
      </div>
    </main>
  );
}

export default App;
