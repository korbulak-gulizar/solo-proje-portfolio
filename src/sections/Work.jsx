import { Line } from "../components/icons";
import "../styles/work.css";
import React, { useState } from "react";
import WorkCard from "../components/WorkCard";

const Work = () => {
  const portfolios = [
    {
      subTitle: "App Development",
      title: "Smart Bank App",
      bgColor: "#FFE3BF",
      category: "app",
      image: "/assets/images/workimages/smart.png",
    },
    {
      subTitle: "Blog",
      title: "NEXT.js",
      bgColor: "#FFEED9",
      category: "web",
      image: "/assets/images/workimages/next.png",
    },
    {
      subTitle: "UI/UX",
      title: "Smart Bank App",
      bgColor: "#FFE3BF",
      category: "design",
      image: "/assets/images/workimages/UI.png",
    },
    {
      subTitle: "Mentorship",
      title: "Tech Mentor",
      bgColor: "#FFE3BF",
      category: "mentorship",
      image: "/assets/images/workimages/mentoship.png",
    },
    {
      subTitle: "Web Development",
      title: "IdealFlow",
      bgColor: "#FFEED9",
      category: "web",
      image: "/assets/images/workimages/web.png",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const filteredPortfolios =
    activeTab === "all"
      ? portfolios
      : portfolios.filter((item) => item.category === activeTab);

  return (
    <div className="work-container">
      <div className="work-title-row">
        <div className="work-title">Portfolio</div>
        <Line />
      </div>

      <div className="work-tabs">
        <button onClick={() => setActiveTab("all")}>All</button>
        <button onClick={() => setActiveTab("app")}>App Development</button>
        <button onClick={() => setActiveTab("web")}>Web Development</button>
        <button onClick={() => setActiveTab("design")}>Design</button>
        <button onClick={() => setActiveTab("mentorship")}>Mentorship</button>
      </div>

      <div className="work-grid">
        {filteredPortfolios.map((portfolio, index) => (
          <WorkCard
            key={index}
            title={portfolio.title}
            subTitle={portfolio.subTitle}
            image={portfolio.image}
            bgColor={portfolio.bgColor}
          />
        ))}
      </div>
    </div>
  );
};
export default Work;
