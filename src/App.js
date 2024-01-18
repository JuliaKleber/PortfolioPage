import React, { useState } from "react";
import HeadBar from "./components/HeadBar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import BouncingArrow from "./components/BouncingArrow";

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return (
    <>
      <HeadBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div
        className={`flex flex-col items-center ${
          darkMode ? "bg-gray-900" : "bg-floralwhite"
        }`}
      >
        <Profile darkMode={darkMode} />
        <BouncingArrow darkMode={darkMode} />
        <Projects darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
