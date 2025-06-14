
import React from 'react';
import NavLinks from './NavLinks';
import ServicesDropdownMenu from './ServicesDropdownMenu';

interface DesktopNavProps {
  servicesMenuOpen: boolean;
  handleDropdownEnter: () => void;
  handleDropdownLeave: () => void;
  handleServiceNavigation: (path: string) => void;
  handleSmoothScroll: (elementId: string) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  servicesMenuOpen,
  handleDropdownEnter,
  handleDropdownLeave,
  handleServiceNavigation,
  handleSmoothScroll,
}) => (
  <nav className="hidden md:flex items-center space-x-8">
    <ServicesDropdownMenu 
      open={servicesMenuOpen}
      onEnter={handleDropdownEnter}
      onLeave={handleDropdownLeave}
      onServiceNavigation={handleServiceNavigation}
    />
    <NavLinks handleSmoothScroll={handleSmoothScroll} />
  </nav>
);

export default DesktopNav;
