import React from "react";
import "../styles/about.css";

const SkillCard = ({ icon, title, description, bgColor, isContact=false }) => {
  return (
    <div
      className="skill-card contact-card"
      style={{ backgroundColor: bgColor }}
    >
      {/* ikon + başlık yan yana */}
      <div className="card-title">
        {icon}
        <h2>{title}</h2>
      </div>

      <p className={isContact ? "contact-skill-description" : "skill-description" } >{description}</p>
    </div>
  );
};

export default SkillCard;
