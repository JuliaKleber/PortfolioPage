import { useState } from "react";
import ToggleMode from "./components/ToggleMode";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return (
    <div
      className={`flex flex-col ${darkMode ? "bg-gray-900" : "bg-floralwhite"}`}
    >
      <div
        className={`p-5 text-xl flex flex-row justify-between ${
          darkMode ? "text-pink-200" : "text-darkMagenta"
        }`}
      >
        <ToggleMode setDarkMode={setDarkMode} />
        <Nav />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <Profile darkMode={darkMode} />
          <div
            className={`hidden md:block mt-3 sm:mb-60 text-xl bounce ${
              darkMode ? "text-purple-200" : "text-darkMagenta"
            }`}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
        <Projects darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
