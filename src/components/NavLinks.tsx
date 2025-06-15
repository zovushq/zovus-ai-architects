
import React from 'react';
import { useLocation } from 'react-router-dom';

interface NavLinksProps {
  handleSmoothScroll: (elementId: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ handleSmoothScroll }) => {
  const location = useLocation();

  return (
    <>
      <button
        onClick={() => handleSmoothScroll('#about')}
        className="navbar-underline transition-colors relative group font-normal text-black px-2"
        style={{ background: 'transparent' }}
      >
        About
      </button>
      <button
        onClick={() => handleSmoothScroll('#contact')}
        className="navbar-underline transition-colors relative group font-normal text-black px-2"
        style={{ background: 'transparent' }}
      >
        Contact
      </button>
    </>
  );
};

export default NavLinks;

