import React from 'react';
import './PixelCharacter.css';

function PixelCharacter({ expression }) {
  return (
    <div id="pixel-character" className={expression} title="Hi! I'm Pixel, your coding buddy!">
      <div className="pixel-eye left"><div className="pixel-pupil"></div></div>
      <div className="pixel-eye right"><div className="pixel-pupil"></div></div>
      <div className="pixel-mouth"></div>
    </div>
  );
}

export default PixelCharacter;