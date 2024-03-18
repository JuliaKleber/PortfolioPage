import React from "react";

const DivisionBar = ({ darkMode }) => {
  return (
    <div
      className={`my-4 border-t-2 ${
        darkMode ? "border-black" : "border-pink-100"
      }`}
    ></div>
  );
};

export default DivisionBar;
