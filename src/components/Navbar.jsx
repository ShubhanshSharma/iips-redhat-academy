import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-700 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/assets/images/iips-logo.png" 
                alt="IIPS Logo" 
                className="h-12 mr-2"
              />
              <div>
                <h1 className="text-xl font-bold">Red Hat Academy</h1>
                <p className="text-xs">IIPS, DAVV Indore</p>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-red-200">Home</Link>
            <Link to="/about" className="hover:text-red-200">About</Link>
            <Link to="/courses" className="hover:text-red-200">Courses</Link>
            <Link to="/events" className="hover:text-red-200">Events</Link>
            <Link to="/mentors" className="hover:text-red-200">Mentors</Link>
            <Link to="/gallery" className="hover:text-red-200">Gallery</Link>
            <Link to="/faq" className="hover:text-red-200">FAQ</Link>
            <Link to="/contact" className="hover:text-red-200">Contact</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1">
          <Link to="/" className="block px-3 py-2 hover:bg-red-800 rounded-md">Home</Link>
          <Link to="/about" className="block px-3 py-2 hover:bg-red-800 rounded-md">About</Link>
          <Link to="/courses" className="block px-3 py-2 hover:bg-red-800 rounded-md">Courses</Link>
          <Link to="/events" className="block px-3 py-2 hover:bg-red-800 rounded-md">Events</Link>
          <Link to="/mentors" className="block px-3 py-2 hover:bg-red-800 rounded-md">Mentors</Link>
          <Link to="/gallery" className="block px-3 py-2 hover:bg-red-800 rounded-md">Gallery</Link>
          <Link to="/faq" className="block px-3 py-2 hover:bg-red-800 rounded-md">FAQ</Link>
          <Link to="/contact" className="block px-3 py-2 hover:bg-red-800 rounded-md">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;