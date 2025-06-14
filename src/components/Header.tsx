
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleSmoothScroll = (elementId: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.querySelector(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleGetStartedClick = () => {
    if (window.location.pathname === '/') {
      handleSmoothScroll('#contact');
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="backdrop-blur-lg bg-white/80 border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/lovable-uploads/5fd19fa8-b0ed-4b31-9b5e-2a1a61f790c3.png" 
                  alt="ZOVUS Logo" 
                  className="h-8 w-auto cursor-pointer"
                />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleSmoothScroll('#services')} 
                className={`transition-colors relative group ${
                  location.pathname === '/' ? 'text-[#5433FF]' : 'text-black hover:text-white/80'
                }`}
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5433FF] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleSmoothScroll('#about')} 
                className={`transition-colors relative group ${
                  location.pathname === '/' ? 'text-[#5433FF]' : 'text-black hover:text-white/80'
                }`}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5433FF] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleSmoothScroll('#contact')} 
                className={`transition-colors relative group ${
                  location.pathname === '/' ? 'text-[#5433FF]' : 'text-black hover:text-white/80'
                }`}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5433FF] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </nav>
            <Button 
              className="bg-[#5433FF] hover:bg-[#4328CC] text-white"
              onClick={handleGetStartedClick}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
