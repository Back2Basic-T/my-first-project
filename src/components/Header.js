import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import Gallery from './Gallery';

function Header() {
  return (
    <header className="p-3 bg-[#93b071]" >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side (Navigation links) */}
        <nav className="hidden md:flex gap-8 text-lg">
             <Link to="/" className="hover:text-white font-bold">Home</Link>
             <Link to="story" className="hover:text-white font-bold">Our Story</Link>
            <Link to="/gallery" className="hover:text-white font-bold">Gallery</Link> 
            
        </nav>

        {/* Right side (Title) */}
        <h1 className="text-2xl font-bold text-black-500">3rs Year Anniversary Aizen Eos ❤︎</h1>
      </div>
    </header>
  );
}

export default Header;
