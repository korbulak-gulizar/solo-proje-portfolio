import React from "react";

const EducationCard = ({ date, title, educ, bgColor }) => {
  return (
    <div className="educ-card" style={{ backgroundColor: bgColor }}>
      {/* ikon + başlık yan yana */}
      <div className="educ-title">
        <span className="educ-date">{date}</span>
        <h3>{title}</h3>
      </div>

      <p>{educ}</p>
    </div>
  );
};

export default EducationCard;
