import { useState } from "react";
import ToggleMode from "./components/ToggleMode";
import ToggleLanguage from "./components/ToggleLanguage";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ZoomedInImage from "./components/ZoomedInImage";

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [language, setLanguage] = useState("German");
  const [zoomedInImageLink, setZoomedInImageLink] = useState("");

  const appStyle = `${
    darkMode ? "bg-gray-900 text-purple-300" : "bg-floralWhite text-darkMagenta"
  }`;

  return (
    <div className={appStyle}>
      <ZoomedInImage
        zoomedInImageLink={zoomedInImageLink}
        setZoomedInImageLink={setZoomedInImageLink}
      />
      <div
        className={`flex flex-row justify-center ${
          zoomedInImageLink && "blur-sm"
        }`}
      >
        <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode} />
        <ToggleLanguage language={language} setLanguage={setLanguage} />
      </div>
      <div
        className={`flex flex-col items-center ${
          zoomedInImageLink && "blur-sm"
        }`}
      >
        <Profile darkMode={darkMode} language={language} />
        <Projects
          darkMode={darkMode}
          language={language}
          setZoomedInImageLink={setZoomedInImageLink}
        />
      </div>
    </div>
  );
}

export default App;
