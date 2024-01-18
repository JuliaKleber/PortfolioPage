import React from "react";
import foto from "../images/JuliaKleber.jpg";

const Bio = ({ textColor, darkMode }) => {
  return (
    <div className="my-4 flex flex-col md:flex-row items-center justify-center">
      <img
        className="h-48 m-3 rounded-md sm:me-4"
        src={foto}
        alt="Julia Kleber"
      />
      <div className="sm:ms-4 flex flex-col justify-center items-center">
        <h2 className={`my-2 md:mt-0 font-cursive ${textColor} text-4xl`}>
          Julia Kleber
        </h2>
        <p className={`m-2 text-center ${darkMode && "text-purple-200"}`}>
          A graduate chemist and freelance lecturer with
          <br />
          over a decade of experience in clinical research
        </p>
        <p className={`mt-2 text-center ${darkMode && "text-purple-200"}`}>
          Eagerly seeking an opportunity to transition
          <br />
          my skills and passion into a dynamic role
          <br />
          within the realm of development
        </p>
      </div>
    </div>
  );
};

export default Bio;
