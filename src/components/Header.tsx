
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Menu, X } from 'lucide-react';
import NavLinks from './NavLinks';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const getServiceLinkClasses = (isActive: boolean) => {
    return `transition-colors ${
      isActive 
        ? 'text-[#5433FF]' 
        : 'text-black hover:text-black'
    }`;
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
              <button onClick={handleLogoClick} className="cursor-pointer">
                <img 
                  src="/lovable-uploads/371fcea4-706d-45e4-b873-535edc2d0eaa.png" 
                  alt="ZOVUS company logo – AI-powered business scaling solutions" 
                  className="h-8 w-auto"
                />
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger className={`${getServiceLinkClasses(false)} flex items-center space-x-1`}>
                  <span>Our Services</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md p-2 min-w-[200px] z-50">
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://bytesprout.zovus.tech" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer px-3 py-2 text-black hover:text-black hover:bg-gray-50 rounded transition-colors w-full relative group"
                    >
                      ByteSprout
                      <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-[#5433FF] transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <button 
                      onClick={() => handleServiceNavigation('/ai-agent-development')}
                      className="cursor-pointer px-3 py-2 text-black hover:text-black hover:bg-gray-50 rounded transition-colors w-full text-left relative group"
                    >
                      AI Agent Development
                      <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-[#5433FF] transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <button 
                      onClick={() => handleServiceNavigation('/ai-consultation')}
                      className="cursor-pointer px-3 py-2 text-black hover:text-black hover:bg-gray-50 rounded transition-colors w-full text-left relative group"
                    >
                      AI Consultation
                      <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-[#5433FF] transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Inserted refactored About and Contact */}
              <NavLinks handleSmoothScroll={handleSmoothScroll} />

            </nav>

            <div className="flex items-center space-x-4">
              {/* Desktop Get Started Button */}
              <Button 
                className="hidden md:block bg-[#5433FF] hover:bg-[#4328CC] text-white"
                onClick={handleGetStartedClick}
              >
                Get Started
              </Button>
              
              {/* Mobile Menu Button */}
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

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <div className="flex flex-col space-y-2">
                  <span className="text-black font-medium">Our Services</span>
                  <div className="pl-4 flex flex-col space-y-2">
                    <a 
                      href="https://bytesprout.zovus.tech" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-black hover:text-[#5433FF] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      ByteSprout
                    </a>
                    <button 
                      onClick={() => handleServiceNavigation('/ai-agent-development')}
                      className="text-black hover:text-[#5433FF] transition-colors text-left"
                    >
                      AI Agent Development
                    </button>
                    <button 
                      onClick={() => handleServiceNavigation('/ai-consultation')}
                      className="text-black hover:text-[#5433FF] transition-colors text-left"
                    >
                      AI Consultation
                    </button>
                  </div>
                </div>
                {/* Mobile About/Contact */}
                <button 
                  onClick={() => handleSmoothScroll('#about')} 
                  className="text-black hover:text-[#5433FF] transition-colors text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => handleSmoothScroll('#contact')} 
                  className="text-black hover:text-[#5433FF] transition-colors text-left"
                >
                  Contact
                </button>
                
                {/* Mobile Get Started Button */}
                <Button 
                  className="bg-[#5433FF] hover:bg-[#4328CC] text-white w-full mt-4"
                  onClick={handleGetStartedClick}
                >
                  Get Started
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

