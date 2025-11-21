import React from "react";
import SkillCard from "../components/SkillCard";
import {
  Designing,
  Developer,
  Instagram,
  Mentorship,
  Line,
} from "../components/icons";
import "../about.css";

const AboutMe = () => {
  const skills = [
    {
      icon: <Developer />,
      title: "Web Development",
      description: `As a developer, I find myself most captivated by the power and flexibility of 
NEXT.js. I'm always eager to dive into new
projects that leverage NEXT.js and 
discover innovative ways to create fast, 
scalable, and user-friendly applications.`,
      bigColor: "#FFEBD1",
    },
    {
      icon: <Instagram />,
      title: "App Development",
      description: `With a focus on user-centric design and
cutting-edge technologies, I thrive on 
building intuitive and efficient apps 
that make a positive impact on people's 
lives. Let's turn ideas into reality and 
shape the future together.`,
      bigColor: "#F2F7FC",
    },
    {
      icon: <Designing />,
      title: "Web Development",
      description: `As a developer, I find myself most captivated by the power and flexibility of 
NEXT.js. I'm always eager to dive into new
projects that leverage NEXT.js and 
discover innovative ways to create fast, 
scalable, and user-friendly applications.`,
      bigColor: "#FFEBD1",
    },
    {
      icon: <Mentorship />,
      title: "Web Development",
      description: `As a developer, I find myself most captivated by the power and flexibility of 
NEXT.js. I'm always eager to dive into new
projects that leverage NEXT.js and 
discover innovative ways to create fast, 
scalable, and user-friendly applications.`,
      bigColor: "##F2F7FC",
    },
  ];

  return (
    <div className="aboutMe-container">
      <h2 className="aboutMe-title">
        AboutMe
        <Line />
      </h2>
      <p>
        Hello there! I'm thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </p>
      <h3 className="what">What I do!</h3>
      <div className="card-container">
        {skills.map((skill) => (
          <SkillCard
            icon={skill?.icon}
            title={skill.title}
            description={skill.description}
            bgColor={skill.bigColor}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
