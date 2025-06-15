
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ServicesDropdownMenuProps {
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onServiceNavigation: (path: string) => void;
}

const underlineHoverClass =
  "absolute bottom-0 left-3 w-0 h-0.5 bg-[#E40223] transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]";

const ServicesDropdownMenu: React.FC<ServicesDropdownMenuProps> = ({
  open,
  onEnter,
  onLeave,
  onServiceNavigation,
}) => (
  <div 
    className="relative"
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
  >
    <button
      type="button"
      className="transition-colors flex items-center space-x-1 focus:outline-none text-black hover:text-black"
      aria-haspopup="menu"
      aria-expanded={open}
      tabIndex={0}
    >
      <span>Our Services</span>
      <ChevronDown className="w-4 h-4" />
    </button>
    {open && (
      <div
        className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md p-2 min-w-[200px] z-50"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <a 
          href="https://bytesprout.zovus.tech" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer px-3 py-2 text-black hover:text-black hover:bg-gray-50 rounded transition-colors w-full relative group flex items-center"
        >
          ByteSprout
          <span className={underlineHoverClass}></span>
        </a>
        <button 
          onClick={() => onServiceNavigation('/ai-agent-development')}
          className="cursor-pointer px-3 py-2 text-black hover:text-black hover:bg-gray-50 rounded transition-colors w-full text-left relative group"
        >
          AI Agent Development
          <span className={underlineHoverClass}></span>
        </button>
        <button 
          onClick={() => onServiceNavigation('/ai-consultation')}
          className="cursor-pointer px-3 py-2 text-black hover:text-black hover:bg-gray-50 rounded transition-colors w-full text-left relative group"
        >
          AI Consultation
          <span className={underlineHoverClass}></span>
        </button>
      </div>
    )}
  </div>
);

export default ServicesDropdownMenu;

