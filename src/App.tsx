import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HybridAuthProvider } from './contexts/HybridAuthContext';
import Chat from './pages/Chat';
import StudyChat from './pages/StudyChat';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <HybridAuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/chat" replace />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/study" element={<StudyChat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HybridAuthProvider>
  );
};

export default App;
