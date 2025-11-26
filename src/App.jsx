import React, { useState } from "react";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import AboutMe from "./sections/AboutMe";
import Resume from "./sections/Resume";


const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="layout">
      <Header />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <section className="layout-container">
        <Sidebar />
        {activeTab === "home" && <AboutMe />}
        {activeTab === "resume" && <Resume />}
      </section>
    </div>
  );
};

export default App;
