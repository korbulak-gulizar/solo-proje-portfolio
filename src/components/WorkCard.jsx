import React from "react";

const WorkCard = ({ title, subTitle, image, bgColor }) => {
  return (
    <div className="work-card" style={{ backgroundColor: bgColor }}>
      <img src={image} alt={title} className="work-card-image" />

      <div className="work-card-subTitle">{subTitle}</div>
      <h3 className="work-card-title">{title}</h3>
      <div></div>
    </div>
  );
};

export default WorkCard;
