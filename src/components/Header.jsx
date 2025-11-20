import React, { useState, useEffect } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="header-component">
      <div className="logo">
        Beatrice <span className="wambui">Wambui</span>
      </div>

      <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
        <img src="/assets/icons/moon.svg" alt="Toggle Theme" />
      </div>
    </div>
  );
};
