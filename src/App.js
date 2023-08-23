import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator.js';
import QuoteDisplay from './components/QuoteDisplay.js';
import Home from './components/Home.js';
import './App.css';

function App() {
  return (
    <>
      <nav className="nav-list">
        <h1 className="title">Math Magician</h1>
        <Link className="nav" to="/" data-testid="home-component">
          Home
        </Link>
        <Link
          className="nav"
          to="/calculator"
          data-testid="calculator-component"
        >
          Calculator
        </Link>
        <Link
          className="nav"
          to="/quotes"
          data-testid="quote-display-component"
        >
          Quotes
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<QuoteDisplay />} />
      </Routes>
    </>
  );
}

export default App;
