import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Proposal from './pages/Proposal';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propuesta" element={<Proposal />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
