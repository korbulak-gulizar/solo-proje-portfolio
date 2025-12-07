import React from "react";
import SkillCard from "../components/SkillCard";
import ContactForm from "../components/ContactForm";
import {
  Designing,
  Developer,
  Instagram,
  Mentorship,
  Line,
  PhoneIcon,
  Email,
} from "../components/icons";
import "../styles/about.css";

const Contact = () => {
  const skills = [
    {
      icon: <PhoneIcon />,
      title: "Phone",
      description: `
        +254723909353
      +254738509151`,
      bigColor: "#FFEBD1",
    },
    {
      icon: <Email />,
      title: "Email:",
      description: `beatricewambuimbugua@gmail.com`,
      bigColor: "#F2F7FC",
    },
  ];

  return (
    <div className="contact-container">
      <h2 className="aboutMe-title">
        Contact
        <Line />
      </h2>

      <div className="card-container">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill?.icon}
            title={skill.title}
            description={skill.description}
            bgColor={skill.bigColor}
          />
        ))}
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
