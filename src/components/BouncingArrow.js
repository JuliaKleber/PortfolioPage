import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const BouncingArrow = ({ darkMode }) => {
  return (
    <p className={`hidden md:block mt-3 md:mb-60 text-xl font-cursive`}>
      <FontAwesomeIcon icon={faArrowDown} className="mr-1 bounce" />
      Projects
    </p>
  );
};

export default BouncingArrow;
