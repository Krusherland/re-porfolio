import React from "react";
import { NavLink } from "react-router-dom";


export const Nav = () => {
  return (
    <div className="nav slide-in-fwd-top">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      </div>
    </div>
  );
};