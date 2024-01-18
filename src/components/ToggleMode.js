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
    <div>
      <FontAwesomeIcon
        icon={faMoon}
        className={`cursor-pointer ${moonVisible ? "block" : "hidden"}`}
        onClick={() => toggleMode()}
      />
      <FontAwesomeIcon
        icon={faSun}
        className={`cursor-pointer ${moonVisible ? "hidden" : "block"}`}
        onClick={() => toggleMode()}
      />
    </div>
  );
};

export default ToggleMode;
