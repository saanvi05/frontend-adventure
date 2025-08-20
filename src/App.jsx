import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import our layout and page components
import Layout from './components/Layout';
import Game from './pages/Game';
import About from './pages/About';
import History from './pages/History';
import { ChatHistoryProvider } from './context/ChatHistoryContext';

import './App.css';

// Define the application's routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout for all child routes
    children: [
      {
        index: true, // This makes Game the default page for "/"
        element: <Game />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
]);

function App() {
  return (
    <ChatHistoryProvider>
      <RouterProvider router={router} />
    </ChatHistoryProvider>
  );
}

export default App;
