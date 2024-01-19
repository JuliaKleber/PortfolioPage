import React, { useState } from "react";
import ToggleMode from "./components/ToggleMode";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import BouncingArrow from "./components/BouncingArrow";

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-800 text-purple-300"
          : "bg-floralwhite text-darkMagenta"
      }`}
    >
      <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={`flex flex-col items-center`}>
        <Profile darkMode={darkMode} />
        <BouncingArrow darkMode={darkMode} />
        <Projects darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
