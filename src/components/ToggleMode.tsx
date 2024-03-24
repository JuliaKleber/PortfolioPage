import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface ToggleModeProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const ToggleMode = ({ darkMode, setDarkMode }: ToggleModeProps) => {
  const [moonVisible, setMoonVisible] = useState(darkMode);

  const toggleMode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);

    setMoonVisible((prev) => !prev);
  };

  return (
    <div className="p-5 text-2xl">
      <FontAwesomeIcon
        icon={faMoon}
        className={`cursor-pointer ${moonVisible ? "hidden" : "block"}`}
        onClick={toggleMode}
        aria-label="Switch to Dark Mode"
      />
      <FontAwesomeIcon
        icon={faSun}
        className={`cursor-pointer ${moonVisible ? "block" : "hidden"}`}
        onClick={toggleMode}
        aria-label="Switch to Light Mode"
      />
    </div>
  );
};

export default ToggleMode;
