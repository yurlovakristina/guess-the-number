import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [target, setTarget] = useState<number>(generateNumber());
  const [guess, setGuess] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);

  function generateNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    if (guess === '') return;
    const numberGuess = Number(guess);
    setAttempts(attempts + 1);

    if (numberGuess === target) {
      setFeedback('🎉 You guessed it!');
    } else if (numberGuess < target) {
      setFeedback('📉 Too low');
    } else {
      setFeedback('📈 Too high');
    }
  };

  const handleRestart = () => {
    setTarget(generateNumber());
    setGuess('');
    setFeedback('');
    setAttempts(0);
  };

  return (
    <div className="container">
      <h1>🎯 Guess the Number from 1 to 100</h1>
  
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter a number"
      />
  
      <div>
        <button onClick={handleGuess}>Check</button>
        <button onClick={handleRestart} style={{ backgroundColor: '#2196F3' }}>
          Play Again
        </button>
      </div>
  
      <p className="feedback">➡️ Feedback: {feedback}</p>
      <p className="attempts">🔁 Attempts: {attempts}</p>
    </div>
  );
};

export default App;
