import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleLogoClick = () => {
    setIsClicked(true);
    setClickCount(prev => prev + 1);
    
    // Reset animation after it completes
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  const getLogoClass = () => {
    let baseClass = "logo-img";
    if (isClicked) {
      const effects = [
        "logo-explode",
        "logo-rainbow",
        "logo-glitch",
        "logo-bounce-crazy",
        "logo-matrix"
      ];
      const randomEffect = effects[clickCount % effects.length];
      baseClass += ` ${randomEffect}`;
    }
    return baseClass;
  };

  return (
    <div className="nav slide-in-fwd-top">
      <div className="logo" onClick={handleLogoClick}>
        <img 
          src="logo.png" 
          alt="Kru Dev Logo" 
          className={getLogoClass()}
        />
      </div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
          Projects
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
      </div>
    </div>
  );
};