
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface MobileMenuProps {
  handleServiceNavigation: (path: string) => void;
  handleSmoothScroll: (elementId: string) => void;
  handleGetStartedClick: () => void;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  handleServiceNavigation,
  handleSmoothScroll,
  handleGetStartedClick,
  setIsMobileMenuOpen,
}) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
      <nav className="flex flex-col space-y-4 pt-4">
        <div className="flex flex-col space-y-2">
          <button
            className="flex items-center justify-between text-black font-medium focus:outline-none w-full pr-2"
            onClick={() => setServicesOpen((open) => !open)}
            aria-expanded={servicesOpen}
            aria-controls="mobile-services-dropdown"
            type="button"
          >
            <span>Our Services</span>
            {servicesOpen ? (
              <ChevronUp className="w-5 h-5 ml-2" />
            ) : (
              <ChevronDown className="w-5 h-5 ml-2" />
            )}
          </button>
          {servicesOpen && (
            <div id="mobile-services-dropdown" className="pl-4 flex flex-col space-y-2">
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
          )}
        </div>
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
        <Button 
          className="bg-[#5433FF] hover:bg-[#4328CC] text-white w-full mt-4"
          onClick={handleGetStartedClick}
        >
          Get Started
        </Button>
      </nav>
    </div>
  );
};

export default MobileMenu;

