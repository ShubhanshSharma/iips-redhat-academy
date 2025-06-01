import { useState } from 'react';
import { Link } from 'react-router-dom';
import iips_logo from '../assets/iipslogo.jpg'
import rh_logo from '../assets/rh_academy_logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  
          
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/courses', label: 'Courses' },
    { to: '/events', label: 'Events' },
    { to: '/mentors', label: 'Mentors' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="text-[#ee0000] z-50 bg-white shadow-lg fixed top-0 left-0 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center">
                <img 
                  src={iips_logo}
                  alt="IIPS Logo" 
                  className="h-12 mr-2"
                />
                <img 
                  src={rh_logo}
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
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative hover:text-red-700 transition-colors duration-200
                    after:content-[''] after:block after:h-0.5 after:bg-[#ee0000] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                  style={{ paddingBottom: '2px' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
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
      {/* Add a spacer div to push content below the fixed navbar */}
      <div className="h-20 md:h-20"></div>
    </>
  );
};

export default Navbar;