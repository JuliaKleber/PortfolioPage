import React from "react";
import ToggleMode from "./ToggleMode";
import Nav from "./Nav";

function HeadBar({ darkMode, setDarkMode }) {
  return (
    <div className={`p-5 pb-0 text-xl flex flex-row justify-between ${darkMode ? "text-pink-200 bg-gray-900" : "text-darkMagenta bg-floralwhite"}`}>
      <ToggleMode setDarkMode={setDarkMode} />
      {/* <Nav /> */}
    </div>
  );
}

export default HeadBar;
