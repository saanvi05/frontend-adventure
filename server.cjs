const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = 3000; // backend will run on port 3000

app.use(express.json());
app.use(cors()); // Allow requests from our React app

// Check if the API key is loaded
if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not set in the .env file.");
}

// Initialize the Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

// This is the endpoint our React app will call
app.post('/api/ask-ai', async (req, res) => {
    try {
        const { challengeTitle, challengeDescription, userCode, history, question } = req.body;

        // --- THE MASTER PROMPT ---
        // This is where I give the AI its personality and instructions.
        const masterPrompt = `
            You are Pixel, a friendly, encouraging, and playful AI coding tutor. Your audience is learning front-end web development. Keep your language simple, positive, and concise.

            CURRENT CONTEXT:
            - The user is working on a coding challenge called: "${challengeTitle}"
            - The challenge description is: "${challengeDescription}"
            - Here is the user's current code:
              - HTML: ${userCode.html || "(empty)"}
              - CSS: ${userCode.css || "(empty)"}
              - JS: ${userCode.js || "(empty)"}

            YOUR TASK:
            Based on the chat history and the user's latest question ("${question}"), provide a helpful response.

            RULES:
            1. **Never give the direct final answer** to the coding challenge unless the user is clearly very stuck and asking for it directly.
            2. **Prioritize hints over answers.** Guide the user toward discovering the solution themselves.
            3. **Analyze the user's code.** If they ask "check my code" or something similar, find a specific error and point it out in a friendly way. For example: "Ooh, you're so close! It looks like you might have forgotten a semicolon in your JavaScript." or "That's a great start! Have a look at your CSS selector, is it targeting the right element?"
            4. **Maintain your persona.** Be cheerful. Use fun analogies. Keep it brief.
            5. **If asked a general knowledge question (e.g., "What is CSS?"), provide a simple, one-paragraph definition.**
        `;
        
        // We build the history for the AI. The master prompt gives context for every message.
        const chatHistoryForAI = [
             // The system instruction
            { role: "user", parts: [{ text: masterPrompt }] },
            { role: "model", parts: [{ text: "Okay, I'm Pixel! I'm ready to help my friend learn to code! What's the question?" }] },
            // The actual conversation history
            ...history
        ];

        const chat = model.startChat({
            history: chatHistoryForAI,
            generationConfig: {
              maxOutputTokens: 200, // Keep responses relatively short
            },
        });

        const result = await chat.sendMessage(question); // Send only the latest question
        const response = result.response;
        const text = response.text();
        
        res.json({ response: text });

    } catch (error) {
        console.error("Error with Gemini API:", error);
        res.status(500).json({ error: "An error occurred while communicating with the AI." });
    }
});

app.listen(port, () => {
    console.log(`AI server for Front-End Adventure is listening on http://localhost:${port}`);
});