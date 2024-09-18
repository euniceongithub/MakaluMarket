// src/components/Header.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        setScrollDirection('up');
      } else if (currentScroll > lastScroll.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrollDirection === 'down' ? 'hidden' : ''}`}>
      <div className="logo-container">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="Logo" />
        </div>
        <div className="logo-text">MAKALU</div>
      </div>
      <Link to="/sell" className="sell-button">SELL</Link>
    </header>
  );
}

export default Header;
