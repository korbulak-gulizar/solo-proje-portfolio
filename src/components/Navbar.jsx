import React, { useState } from "react";
import {
  ContactIcon,
  HomeIcon,
  ResumeIcon,
  WorkIcon,
} from "../../public/assets/icons/icons";

export const Navbar = ({ activeTab, setActiveTab }) => {
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
        <div
          className={`navbar-icon-button ${
            activeTab === "home" ? "active" : ""
          }`}
          onClick={() => setActiveTab("home")}
        >
          <HomeIcon />
          <span>Home</span>
        </div>

        <div
          className={`navbar-icon-button ${
            activeTab === "resume" ? "active" : ""
          }`}
          onClick={() => setActiveTab("resume")}
        >
          <ResumeIcon />
          <span>Resume</span>
        </div>
        <div
          className={`navbar-icon-button ${
            activeTab === "work" ? "active" : ""
          }`}
          onClick={() => setActiveTab("work")}
        >
          <WorkIcon />
          <span>Work</span>
        </div>
        <div
          className={`navbar-icon-button ${
            activeTab === "contact" ? "active" : ""
          }`}
          onClick={() => setActiveTab("contact")}
        >
          <ContactIcon />
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};
