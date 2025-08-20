import React, { useState, useEffect, useCallback } from 'react';
import { allChallenges } from '../data/challenges';
// Note: We don't need to import App.css here anymore as it's handled by the main App.jsx

// Import all the components for this page
import Header from '../components/Header'; // <-- DELETE THIS LINE
import PixelCharacter from '../components/PixelCharacter';
import PlayerStats from '../components/PlayerStats';
import Challenge from '../components/Challenge';
import ActionButtons from '../components/ActionButtons';
import CodeEditors from '../components/CodeEditors';
import Preview from '../components/Preview';
import HintModal from '../components/HintModal';
import AnswerModal from '../components/AnswerModal';
import IncorrectModal from '../components/IncorrectModal';

const getInitialChallenge = () => {
    return allChallenges[Math.floor(Math.random() * allChallenges.length)];
};

// Changed function name from App to Game
function Game() {
  const [playerState, setPlayerState] = useState(() => {
    const savedState = localStorage.getItem('frontendAdventureState');
    return savedState ? JSON.parse(savedState) : { score: 0, streak: 1, name: null };
  });

  const [currentChallenge, setCurrentChallenge] = useState(getInitialChallenge);
  
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  const [levelComplete, setLevelComplete] = useState(false);
  const [pixelExpression, setPixelExpression] = useState('normal');
  
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);
  const [isIncorrectModalOpen, setIsIncorrectModalOpen] = useState(false);
  
  const [usedAnswer, setUsedAnswer] = useState(false);

  useEffect(() => {
    const startHtml = currentChallenge.startingCode?.html || '';
    const startCss = currentChallenge.startingCode?.css || '';
    const startJs = currentChallenge.startingCode?.js || '';
    setHtmlCode(startHtml);
    setCssCode(startCss);
    setJsCode(startJs);
  }, [currentChallenge]);

  useEffect(() => {
    localStorage.setItem('frontendAdventureState', JSON.stringify(playerState));
  }, [playerState]);

  useEffect(() => {
    if (levelComplete) {
        setLevelComplete(false);
    }
  }, [htmlCode, cssCode, jsCode]);

  const handleLoadNextChallenge = useCallback(() => {
    const newChallenge = allChallenges[Math.floor(Math.random() * allChallenges.length)];
    setCurrentChallenge(newChallenge);
    setLevelComplete(false);
    setPixelExpression('normal');
    setUsedAnswer(false);
  }, []);

  const handleShowAnswer = () => {
    setUsedAnswer(true);
    setIsAnswerModalOpen(true);
  };

  const handleCheckCode = () => {
    if (levelComplete) return;
    setPixelExpression('thinking');
    const { answer, objectives } = currentChallenge;
    const normalizeCode = (str) => str ? str.replace(/\s/g, '') : '';
    let isCorrect = true;
    const isAnyTextObjective = objectives[0]?.text.includes('with any text inside');
    if (isAnyTextObjective) {
        const tagMatch = objectives[0].text.match(/`<(.*?)>`/);
        if (tagMatch) {
            const tagName = tagMatch[1];
            if (!htmlCode.includes(`<${tagName}>`) || !htmlCode.includes(`</${tagName}>`)) {
                isCorrect = false;
            }
        }
    } else {
        const normalizedUserHtml = normalizeCode(htmlCode);
        const normalizedUserCss = normalizeCode(cssCode);
        const normalizedUserJs = normalizeCode(jsCode);
        const normalizedAnswerHtml = normalizeCode(answer.html);
        const normalizedAnswerCss = normalizeCode(answer.css);
        const normalizedAnswerJs = normalizeCode(answer.js);
        if (normalizedAnswerHtml && !normalizedUserHtml.includes(normalizedAnswerHtml)) isCorrect = false;
        if (normalizedAnswerCss && !normalizedUserCss.includes(normalizedAnswerCss)) isCorrect = false;
        if (normalizedAnswerJs && !normalizedUserJs.includes(normalizedAnswerJs)) isCorrect = false;
    }
    setTimeout(() => {
      if (isCorrect) {
        setPixelExpression('happy');
        setLevelComplete(true);
        let scoreToAdd = 50;
        if (!usedAnswer) scoreToAdd += 25;
        setPlayerState(prev => ({ ...prev, score: prev.score + scoreToAdd }));
      } else {
        setPixelExpression('sad');
        setIsIncorrectModalOpen(true);
      }
    }, 500);
  };
  
  const isCodeEmpty = !htmlCode.trim() && !cssCode.trim() && !jsCode.trim();

  return (
    // We wrap this in a single Fragment <> to keep the layout correct
    <> 
      {/* <Header />  <-- DELETE THIS LINE */}
      <div className="left-panel">
        <div className="player-hub">
          <PixelCharacter expression={pixelExpression} />
          <PlayerStats playerState={playerState} />
        </div>
        <Challenge challenge={currentChallenge} levelComplete={levelComplete} />
        <ActionButtons
          onCheckCode={handleCheckCode}
          onShowHint={() => setIsHintModalOpen(true)}
          onShowAnswer={handleShowAnswer}
          onNextLevel={handleLoadNextChallenge}
          nextLevelDisabled={!levelComplete}
          checkCodeDisabled={levelComplete || isCodeEmpty}
        />
      </div>
      <div className="right-panel">
        <CodeEditors
          htmlCode={htmlCode}
          onHtmlChange={setHtmlCode}
          cssCode={cssCode}
          onCssChange={setCssCode}
          jsCode={jsCode}
          onJsChange={setJsCode}
        />
        <Preview htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
      </div>

      <HintModal
        show={isHintModalOpen}
        onClose={() => setIsHintModalOpen(false)}
        challenge={currentChallenge}
        playerState={playerState}
        userCode={{ html: htmlCode, css: cssCode, js: jsCode }}
      />
      
      <AnswerModal
        show={isAnswerModalOpen}
        onClose={() => setIsAnswerModalOpen(false)}
        answer={currentChallenge.answer}
      />

      <IncorrectModal
        show={isIncorrectModalOpen}
        onClose={() => setIsIncorrectModalOpen(false)}
      />
    </>
  );
}

// Changed export from App to Game
export default Game;