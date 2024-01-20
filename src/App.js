import React, { useState } from "react";
import ToggleMode from "./components/ToggleMode";
import ToggleLanguage from "./components/ToggleLanguage";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import BouncingArrow from "./components/BouncingArrow";

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [language, setLanguage] = useState("German");

  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-800 text-purple-300"
          : "bg-floralwhite text-darkMagenta"
      }`}
    >
      <div className='flex flex-row justify-center'>
        <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode} />
        <ToggleLanguage language={language} setLanguage={setLanguage} />
      </div>
      <div className={`flex flex-col items-center`}>
        <Profile darkMode={darkMode} language={language} />
        <BouncingArrow darkMode={darkMode} language={language}/>
        <Projects darkMode={darkMode} language={language} />
      </div>
    </div>
  );
}

export default App;
