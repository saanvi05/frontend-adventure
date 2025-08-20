import React from 'react';
import './ActionButtons.css';

function ActionButtons({ onCheckCode, onShowHint, onShowAnswer, onNextLevel, nextLevelDisabled, checkCodeDisabled, isCodeEmpty }) {
  return (
    <div className="action-buttons">
      <button id="hint-btn" className="game-btn" onClick={onShowHint}>
        Show Hint
      </button>
      <button id="show-answer-btn" className="game-btn" onClick={onShowAnswer}>
        Show Answer
      </button>
      <button 
        id="check-code-btn" 
        className="game-btn" 
        onClick={onCheckCode}
        
        disabled={checkCodeDisabled || isCodeEmpty} 
      >
        Check My Code
      </button>
      <button 
        id="next-level-btn" 
        className="game-btn" 
        onClick={onNextLevel} 
        disabled={nextLevelDisabled}
      >
        Next Quest
      </button>
    </div>
  );
}

export default ActionButtons;