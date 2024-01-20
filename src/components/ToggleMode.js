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
    <div className="p-5 pb-0 text-xl flex flex-row justify-center 2xl:justify-center">
      <FontAwesomeIcon
        icon={faMoon}
        className={`cursor-pointer ${moonVisible ? "hidden" : "block"}`}
        onClick={() => toggleMode()}
      />
      <FontAwesomeIcon
        icon={faSun}
        className={`cursor-pointer ${moonVisible ? "block" : "hidden"}`}
        onClick={() => toggleMode()}
      />
    </div>
  );
};

export default ToggleMode;
