
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import LogoButton from './LogoButton';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
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
    setIsMobileMenuOpen(false);
    if (window.location.pathname === '/') {
      const element = document.querySelector(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleGetStartedClick = () => {
    setIsMobileMenuOpen(false);
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

  const handleServiceNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setServicesMenuOpen(true);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    dropdownTimeout.current = setTimeout(() => {
      setServicesMenuOpen(false);
    }, 100);
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
              <LogoButton onClick={handleLogoClick} />
            </div>
            
            <DesktopNav
              servicesMenuOpen={servicesMenuOpen}
              handleDropdownEnter={handleDropdownEnter}
              handleDropdownLeave={handleDropdownLeave}
              handleServiceNavigation={handleServiceNavigation}
              handleSmoothScroll={handleSmoothScroll}
            />

            <div className="flex items-center space-x-4">
              <Button 
                className="hidden md:block bg-[#5433FF] hover:bg-[#4328CC] text-white"
                onClick={handleGetStartedClick}
              >
                Get Started
              </Button>
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-black" />
                ) : (
                  <Menu className="w-6 h-6 text-black" />
                )}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <MobileMenu 
              handleServiceNavigation={handleServiceNavigation}
              handleSmoothScroll={handleSmoothScroll}
              handleGetStartedClick={handleGetStartedClick}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
