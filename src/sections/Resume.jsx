import React from "react";
import { Education, Experince, Line } from "../components/icons";
import "../styles/resume.css";

const Resume = () => {
  const educations = [
    {
      date: "2020-2021",
      title: "Software Development",
      educ: "Moringa School",
      bgColor: "#FFE3BF",
    },

    {
      date: "2012-2016",
      title: "Disaster Management",
      educ: "Masinde muliro University",
      bgColor: "#FFEED9",
    },
  ];

  const experiences = [
    {
      date: "2022/Present",
      title: "Technical Mentor",
      place: "Moringa School",
      bgColor: "#FFEED9",
    },
    {
      date: "2021/2022",
      title: "Website Development",
      place: "Village 2 Nation",
      bgColor: "#FFE3BF",
    },
  ];
  const workSkills = [
    "NEXT.js",
    "React.js",
    "HTML 5",
    "CSS 3",
    "Tailwind CSS",
    "Figma",
    "JavaScript",
    "Mongo DB",
    "SQL",
    "Angular",
    "Android",
    "Git",
  ];

  const softSkills = [
    "Time Management",
    "Mentorship",
    "Impeccable Communication",
    "Flexibility",
    "Research",
    "Writing",
  ];
  return (
    <div className="resume-container">
      <h2 className="resume-title">
        Resume <Line />
      </h2>
      <div className="resume-grid">
        <div className="resume-section">
          <h3>
            <Education /> Education
          </h3>
          <div className="education-group">
            {educations.map((edu, i) => (
              <div
                key={i}
                className="resume-card"
                style={{ backgroundColor: edu.bgColor }}
              >
                <span className="card-date">{edu.date}</span>
                <h4>{edu.title}</h4>
                <p>{edu.educ}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-section">
          <h3>
            <Experince /> Experience
          </h3>
          <div className="experience-group">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="resume-card"
                style={{ backgroundColor: exp.bgColor }}
              >
                <span className="card-date">{exp.date}</span>
                <h4>{exp.title}</h4>
                <p>{exp.place}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-section">
          <h3>Work Skills</h3>
          <div className="skills-grid">
            {workSkills.map((skill, i) => (
              <span key={i} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="resume-section">
          <h3>Soft Skills</h3>
          <div className="skills-grid">
            {softSkills.map((skill, i) => (
              <span key={i} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
