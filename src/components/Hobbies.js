import React from "react";
import bicycleImage from "../images/icons8-bicycle-96.png";
import boardGamesImage from "../images/icons8-board-game-96.png";
import climbingImage from "../images/icons8-climbing-96.png";
import cookingImage from "../images/icons8-cooking-96.png";
import pianoImage from "../images/icons8-piano-96.png";

const Hobbies = ({ darkMode }) => {
  return (
    <div className="my-4 flex flex-col sm:flex-row-reverse justify-center items-center">
      <h2 className={`mb-3 sm:mb-0 sm:ms-11 sm:me-4 font-cursive text-4xl`}>Hobbies</h2>
      <div className="sm:me-11 flex flex-row">
        <img
          className={`h-11 m-2 p-1 ${darkMode && "bg-pink-200 rounded-md"}`}
          src={climbingImage}
          type="image/png"
          rel="icon"
          alt="climbing icon"
        />
        <img
          className={`h-11 m-2 p-1 ${darkMode && "bg-pink-200 rounded-md"}`}
          src={boardGamesImage}
          type="image/png"
          sizes="16x16"
          rel="icon"
          alt="board games icon"
        />
        <img
          className={`h-11 m-2 p-1 ${darkMode && "bg-pink-200 rounded-md"}`}
          src={bicycleImage}
          type="image/png"
          rel="icon"
          alt="bicycle icon"
        />
        <img
          className={`h-11 m-2 p-1 ${darkMode && "bg-pink-200 rounded-md"}`}
          src={cookingImage}
          type="image/png"
          rel="icon"
          alt="cooking icon"
        />
        <img
          className={`h-11 m-2 p-1 ${darkMode && "bg-pink-200 rounded-md"}`}
          src={pianoImage}
          type="image/png"
          rel="icon"
          alt="piano icon"
        />
      </div>
    </div>
  );
};

export default Hobbies;
