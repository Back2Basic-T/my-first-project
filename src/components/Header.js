import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-3 bg-[#93b071]">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left side (Navigation links) */}
        <nav className="hidden md:flex gap-8 text-lg">
          <Link to="/my-first-project" className="hover:text-white font-bold">Home</Link>
          <Link to="/story" className="hover:text-white font-bold">Our Story</Link>
          <Link to="/gallery" className="hover:text-white font-bold">Gallery</Link>
        </nav>

        {/* Mobile Burger Icon */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Right side (Title) */}
        <h1 className="text-1xl font-bold text-black-500">3rd Year Anniversary Aizen Eos ❤︎</h1>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 bg-[#93b071] p-4 mt-2 rounded-lg shadow-md">
          <Link to="/my-first-project" className="hover:text-white font-bold" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/story" className="hover:text-white font-bold" onClick={() => setIsOpen(false)}>Our Story</Link>
          <Link to="/gallery" className="hover:text-white font-bold" onClick={() => setIsOpen(false)}>Gallery</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
