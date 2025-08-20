import React, { useState, useEffect, useRef, useContext } from 'react';
import './HintModal.css';
import { ChatHistoryContext } from '../context/ChatHistoryContext';

function HintModal({ show, onClose, challenge, playerState, userCode }) {
    const [chatHistory, setChatHistory] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isAiTyping, setIsAiTyping] = useState(false);
    const chatContainerRef = useRef(null);
    const { addConversation } = useContext(ChatHistoryContext);
    const [conversationTitle, setConversationTitle] = useState(`Conversation about "${challenge.title}"`);

    useEffect(() => {
        if (show) {
            const name = playerState.name ? `, ${playerState.name}` : '';
            setChatHistory([
                { sender: 'ai', text: `Hello${name}! I'm Pixel's AI Brain. Ask me anything about this quest, or even ask me to check your code!` }
            ]);
            setUserInput('');
            setConversationTitle(`Conversation about "${challenge.title}"`);
        }
    }, [show, playerState.name, challenge.title]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

    const handleCloseAndSave = () => {
        if (chatHistory.length > 1) {
            const newConversation = {
                id: Date.now(),
                title: conversationTitle, 
                timestamp: new Date().toISOString(),
                messages: chatHistory,
            };
            addConversation(newConversation);
        }
        onClose(); 
    };
    
    const handleAskAi = async () => {
        const userQuestion = userInput.trim();
        if (!userQuestion || isAiTyping) return;
        const newUserMsg = { sender: 'user', text: userQuestion };
        setChatHistory(prev => [...prev, newUserMsg]);
        setUserInput('');
        setIsAiTyping(true);

        // THE FIX IS HERE: This filter is now safer.
        // It checks if 'msg' and 'msg.text' exist before calling '.includes()'.
        const historyForApi = chatHistory
            .filter(msg => msg && msg.text && !msg.text.includes("AI Brain"))
            .map(msg => ({
                role: msg.sender === 'ai' ? 'model' : 'user',
                parts: [{ text: msg.text }]
            }));
        historyForApi.push({ role: 'user', parts: [{ text: userQuestion }] });

        try {
            const response = await fetch('https://saanvi-ai-backend.saanvi-bel17.workers.dev', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    challengeTitle: challenge.title,
                    challengeDescription: challenge.description,
                    userCode: userCode,
                    history: historyForApi,
                    question: userQuestion
                })
            });

            if (!response.ok) throw new Error('Failed to get a response from the AI server.');
            
            const data = await response.json();
            const aiResponseMsg = { sender: 'ai', text: data.answer };
            setChatHistory(prev => [...prev, aiResponseMsg]);
            setConversationTitle(data.title);

        } catch (error) {
            console.error('AI Request Error:', error);
            const errorMsg = { sender: 'ai', text: "Oh no! My AI circuits are buzzing. I couldn't connect. Please make sure the server is running!" };
            setChatHistory(prev => [...prev, errorMsg]);
        } finally {
            setIsAiTyping(false);
        }
    };

    if (!show) return null;

    return (
        <div id="hint-modal" className={`modal ${show ? 'show' : ''}`} onClick={handleCloseAndSave}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close-btn" onClick={handleCloseAndSave}>&times;</span>
                <h2>Hints & AI Tutor</h2>
                <div id="direct-hints-container">
                    {challenge.objectives.map((obj, index) => (
                        <div key={obj.id}>
                            <h4>Objective: {obj.text}</h4>
                            <div>{obj.hint || 'Focus on the main goal. You can do it!'}</div>
                            {index < challenge.objectives.length - 1 && <hr />}
                        </div>
                    ))}
                </div>
                <div className="ai-hint-section">
                    <h3>Ask the AI Tutor</h3>
                    <div id="chat-history-container" ref={chatContainerRef}>
                        {chatHistory.map((msg, index) => (
                            <div key={index} className={`chat-bubble ${msg.sender === 'user' ? 'user-bubble' : 'ai-bubble'}`}>
                                {msg.text}
                            </div>
                        ))}
                        {isAiTyping && <div className="chat-bubble ai-bubble">Pixel is thinking...</div>}
                    </div>
                    <textarea
                        id="ai-question-input"
                        placeholder="Ask a question or say 'check my code'..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleAskAi())}
                        disabled={isAiTyping}
                    />
                    <button id="ask-ai-btn" className="game-btn" onClick={handleAskAi} disabled={isAiTyping}>
                        {isAiTyping ? 'Thinking...' : 'Ask AI'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HintModal;