// src/components/HintModal.jsx

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown"; // We'll use this to format the AI's response
import "./HintModal.css";

// This is a placeholder for your actual GameContext.
// In a full app, you would import this from your context file.
const useGame = () => ({
  currentChallenge: { title: "Current Challenge Title" },
});

const HintModal = ({ isOpen, onClose }) => {
  const { currentChallenge } = useGame();
  const [chatHistory, setChatHistory] = useState([]);
  const [userQuestion, setUserQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Reset chat when the modal opens
  useEffect(() => {
    if (isOpen) {
      setChatHistory([
        {
          role: "model",
          text: "Hello! I'm Pixel's AI Brain. Ask me anything about the current challenge!",
        },
      ]);
    }
  }, [isOpen]);

  const handleAskAi = async (e) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;

    const currentQuestion = userQuestion;
    const newHistory = [
      ...chatHistory,
      { role: "user", text: currentQuestion },
    ];
    setChatHistory(newHistory);
    setUserQuestion(""); // Clear the input field
    setIsLoading(true);

    try {
      // THIS IS THE CRITICAL LINE THAT CONNECTS TO YOUR LIVE SERVER
      const response = await fetch(
        "https://frontend-adventure.onrender.com/api/ask-ai",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            challengeTitle: currentChallenge.title,
            history: newHistory.map((msg) => ({
              role: msg.role,
              parts: [{ text: msg.text }],
            })),
            question: currentQuestion,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: data.response },
      ]);
    } catch (error) {
      console.error("Failed to fetch AI response:", error);
      setChatHistory((prev) => [
        ...prev,
        {
          role: "model",
          text: "Sorry, I'm having trouble connecting my brain right now. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>AI Tutor</h2>
        <div id="chat-history-container">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`chat-bubble ${
                message.role === "user" ? "user-bubble" : "ai-bubble"
              }`}
            >
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>
          ))}
          {isLoading && (
            <div className="chat-bubble ai-bubble">Pixel is thinking...</div>
          )}
        </div>
        <div className="ai-hint-section">
          <form onSubmit={handleAskAi}>
            <textarea
              id="ai-question-input"
              placeholder="Ask a question..."
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              disabled={isLoading}
            ></textarea>
            <button
              type="submit"
              id="ask-ai-btn"
              className="game-btn"
              disabled={isLoading}
            >
              {isLoading ? "Thinking..." : "Ask AI"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HintModal;
