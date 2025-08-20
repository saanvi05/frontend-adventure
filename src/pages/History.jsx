import React, { useContext } from 'react';
import { ChatHistoryContext } from '../context/ChatHistoryContext';
import './History.css'; // Import the new styles

function History() {
  // Get the conversations array from our global context
  const { conversations } = useContext(ChatHistoryContext);

  return (
    <div className="history-page">
      <h1>AI Chat History</h1>

      {conversations.length === 0 ? (
        <p>No saved conversations yet. Go to a challenge and chat with the AI tutor!</p>
      ) : (
        <div>
          {conversations.map(convo => (
            <div key={convo.id} className="conversation-card">
              <h2>{convo.title}</h2>
              <p className="conversation-meta">
                Saved on: {new Date(convo.timestamp).toLocaleString()}
              </p>
              <div className="chat-history-display">
                {convo.messages.map((msg, index) => (
                  <div key={index} className={`chat-bubble ${msg.sender}-bubble`}>
                    {msg.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;