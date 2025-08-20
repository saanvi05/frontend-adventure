import React, { useState, useEffect } from 'react';
import './AnswerModal.css'; 

function AnswerModal({ show, onClose, answer }) {
  
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
  
    if (show) {
 
      setTimeLeft(30);

      const timerId = setInterval(() => {
        
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => {
        clearInterval(timerId);
      };
    }
  }, [show]); 

  useEffect(() => {
    if (timeLeft <= 0) {
      onClose(); 
    }
  }, [timeLeft, onClose]); 

  if (!show) {
    return null;
  }

  return (
  
    <div id="answer-modal" className="modal show" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Challenge Answer</h2>
        <p>This is the correct solution. It will disappear in <span id="answer-modal-timer">{timeLeft}</span> seconds. Using this forfeits your Flawless Bonus!</p>
        
        <div id="answer-code-container">
          {answer.html && (
            <div>
              <h4>HTML</h4>
              <pre>{answer.html}</pre>
            </div>
          )}
          {answer.css && (
            <div>
              <h4>CSS</h4>
              <pre>{answer.css}</pre>
            </div>
          )}
          {answer.js && (
            <div>
              <h4>JavaScript</h4>
              <pre>{answer.js}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AnswerModal;