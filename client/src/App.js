// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BuyPage from './components/BuyPage'; // Update path as needed
import SellPage from './components/SellPage'; // Make sure you create this component
import Header from './components/Header'; // Import Header

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BuyPage />} />
        <Route path="/sell" element={<SellPage />} />
      </Routes>
    </Router>
  );
}

export default App;
