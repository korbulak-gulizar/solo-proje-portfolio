import React from "react";
import { useState } from "react";
import { ContactIcon, HomeIcon, ResumeIcon, WorkIcon } from "./icons";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-top">
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>☰</span>
        </button>
        <button className="dark-mode-toggle"></button>
      </div>
      <div className={`navbar-container ${menuOpen ? "show" : ""}`}>
        <div className="navbar-icon-button active">
          <HomeIcon />
          <span>Home</span>
        </div>
        <div className="navbar-icon-button">
          <ResumeIcon />
          <span>Resume</span>
        </div>
        <div className="navbar-icon-button">
          <WorkIcon />
          <span>Work</span>
        </div>
        <div className="navbar-icon-button">
          <ContactIcon />
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
