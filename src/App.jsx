import React from "react";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

const App = () => {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default App;
