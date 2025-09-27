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
        {isClicked && (
          <div className="click-effects">
            <div className="sparkle sparkle-1">✨</div>
            <div className="sparkle sparkle-2">🚀</div>
            <div className="sparkle sparkle-3">💫</div>
            <div className="sparkle sparkle-4">⭐</div>
            <div className="sparkle sparkle-5">🎉</div>
            <div className="click-counter">Click #{clickCount}</div>
          </div>
        )}
      </div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
           Home
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
           Contact
        </NavLink>
      </div>
    </div>
  );
};