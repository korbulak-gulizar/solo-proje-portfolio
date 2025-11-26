import React from "react";
import {
  TwitterIcon,
  GitHubIcon,
  LinkedinIcon,
  FacebookIcon,
  TelIcon,
  EmailIcon,
  LocationIcon,
  DownloadIcon,
} from "./icons";
import "../styles/sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="portre-image">
        <img src="/assets/images/portre.png" alt="Portre" />
      </div>
      <section className="portre-container">
        <h2 className="name">Beatrice Wambui</h2>
        <p className="title">FullStack Developer</p>

        <div className="social-icons">
          <a href="#" className="facebook">
            <FacebookIcon />
          </a>
          <a href="#" className="linkedin">
            <LinkedinIcon />
          </a>
          <a href="#" className="twetter">
            <TwitterIcon />
          </a>
          <a href="#" className="github">
            <GitHubIcon />
          </a>
        </div>

        <div className="contact-info">
          <div className="contact-icon">
            <TelIcon /> <span>+254723909353</span>
          </div>
          <div className="contact-icon">
            <EmailIcon /> <span>beatricewambuimbugua@gmail.com</span>
          </div>
          <div className="contact-icon">
            <LocationIcon /> <span>Nairobi, Kenya</span>
          </div>

          <a href="/assets/resume.pdf" download className="download-btn">
            <DownloadIcon /> Download Resume
          </a>
        </div>
      </section>
    </aside>
  );
};
