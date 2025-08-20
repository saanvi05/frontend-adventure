import React from 'react';
import './PlayerStats.css';

const RANKS = { 0: 'Scripter', 200: 'Coder', 500: 'Developer', 1000: 'Engineer', 2000: 'Wizard' };

function PlayerStats({ playerState }) {
  const sortedRanks = Object.keys(RANKS).map(Number).sort((a,b) => a-b);
  let currentRankName = 'Scripter', currentRankXp = 0, nextRankXp = 200;

  for (const xp of sortedRanks) {
    if (playerState.score >= xp) {
        currentRankName = RANKS[xp];
        currentRankXp = xp;
    } else {
        nextRankXp = xp;
        break;
    }
  }
  if (playerState.score >= sortedRanks[sortedRanks.length - 1]) nextRankXp = currentRankXp;
  
  const xpInCurrentRank = playerState.score - currentRankXp;
  const xpForNextRank = nextRankXp - currentRankXp;
  const progressPercent = xpForNextRank > 0 ? (xpInCurrentRank / xpForNextRank) * 100 : 100;

  return (
    <div className="player-stats">
      <div className="stat-item">Rank: <span>{currentRankName}</span></div>
      <div className="stat-item">XP: <span>{playerState.score}</span></div>
      <div className="stat-item">Streak: <span>{playerState.streak} Days 🔥</span></div>
      <div className="xp-progress-bar">
        <div 
          className="xp-progress-fill" 
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default PlayerStats;

