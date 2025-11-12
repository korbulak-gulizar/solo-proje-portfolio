import React, { useState } from "react";
import {
  ContactIcon,
  HomeIcon,
  ResumeIcon,
  WorkIcon,
} from "../../public/assets/icons/icons";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Hamburger butonu menü dışında olmalı */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Menü kutusu */}
      <div className={`navbar-container ${menuOpen ? "open" : ""}`}>
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
