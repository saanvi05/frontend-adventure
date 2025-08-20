import React from 'react';
import './Challenge.css';

function Challenge({ challenge, levelComplete }) {
  if (!challenge) {
    return null;
  }

  return (
    <div className="challenge-container">
      <h2 id="challenge-title">{challenge.title}</h2>
      <p id="challenge-description">{challenge.description}</p>
      <h3>Objectives:</h3>
      <ul id="objectives">
        {challenge.objectives.map(obj => (
          <li key={obj.id} className={levelComplete ? 'completed' : ''}>
            {obj.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Challenge;