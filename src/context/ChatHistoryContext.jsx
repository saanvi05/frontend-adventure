import React, { createContext, useState, useEffect } from 'react';

// 1. Create the context object
export const ChatHistoryContext = createContext();

// 2. Create the Provider component. This component will hold the actual data and logic.
export const ChatHistoryProvider = ({ children }) => {
  // 3. The state that will hold our array of saved conversations.
  // We initialize it by trying to load from localStorage first.
  const [conversations, setConversations] = useState(() => {
    try {
      const localData = localStorage.getItem('chatHistory');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Failed to load chat history from localStorage", error);
      return [];
    }
  });

  // 4. An effect that automatically saves to localStorage whenever the conversations state changes.
  useEffect(() => {
    try {
      localStorage.setItem('chatHistory', JSON.stringify(conversations));
    } catch (error) {
      console.error("Failed to save chat history to localStorage", error);
    }
  }, [conversations]);

  // 5. A function that other components can call to add a new conversation.
  const addConversation = (newConversation) => {
    // We add the new conversation to the beginning of the array.
    setConversations(prevConversations => [newConversation, ...prevConversations]);
  };

  // 6. The value object that will be provided to all consuming components.
  const value = {
    conversations,
    addConversation,
  };

  // 7. The provider component renders its children wrapped in the context provider.
  return (
    <ChatHistoryContext.Provider value={value}>
      {children}
    </ChatHistoryContext.Provider>
  );
};