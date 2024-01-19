import React from "react";

const DivisionBar = ({ darkMode }) => {
  return (
    <div
      className={`my-2 border-t-2 ${
        darkMode ? "border-gray-900" : 'border-pink-100'
      }`}
    ></div>
  );
};

export default DivisionBar;
