import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ToggleMode = ({ darkMode, setDarkMode }) => {
  const [moonVisible, setMoonVisible] = useState(darkMode);

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
    setMoonVisible((prev) => !prev);
  };

  return (
    <div className="p-5 text-2xl">
      <FontAwesomeIcon
        icon={faMoon}
        className={`cursor-pointer ${moonVisible ? "hidden" : "block"}`}
        onClick={toggleMode}
        aria-label="Switch to Dark Mode"
        tabIndex="1"
      />
      <FontAwesomeIcon
        icon={faSun}
        className={`cursor-pointer ${moonVisible ? "block" : "hidden"}`}
        onClick={toggleMode}
        aria-label="Switch to Light Mode"
        tabIndex="1"
      />
    </div>
  );
};

export default ToggleMode;
