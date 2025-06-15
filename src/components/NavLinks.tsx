
import React from 'react';
import { useLocation } from 'react-router-dom';

interface NavLinksProps {
  handleSmoothScroll: (elementId: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ handleSmoothScroll }) => {
  const location = useLocation();

  const navLinkClasses = `
    transition-colors relative group font-medium
    text-black font-normal
  `;

  // Updated underline color to #E40223 for navbar on hover
  const underlineClasses =
    "absolute bottom-0 left-0 w-full h-0.5 bg-[#E40223] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300";

  return (
    <>
      <button
        onClick={() => handleSmoothScroll('#about')}
        className={navLinkClasses}
        style={{ position: 'relative' }}
      >
        About
        <span
          className={underlineClasses}
          style={{
            transform:
              location.pathname === '/' ? undefined : 'scaleX(0)',
          }}
        />
      </button>
      <button
        onClick={() => handleSmoothScroll('#contact')}
        className={navLinkClasses}
        style={{ position: 'relative' }}
      >
        Contact
        <span
          className={underlineClasses}
          style={{
            transform:
              location.pathname === '/' ? undefined : 'scaleX(0)',
          }}
        />
      </button>
    </>
  );
};

export default NavLinks;
