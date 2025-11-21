import React from "react";
import "../about.css";

const SkillCard = ({ icon, title, description, bgColor }) => {
  return (
    <div className="skill-card" style={{ backgroundColor: bgColor }}>
      {/* ikon + başlık yan yana */}
      <div className="card-title">
        {icon}
        <h2>{title}</h2>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default SkillCard;
