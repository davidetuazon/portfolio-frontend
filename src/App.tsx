import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Projects from './pages/Projects';
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/home" /> } />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;