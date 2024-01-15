import React from "react";
import bicycleImage from "../images/icons8-bicycle-96.png";
import boardGamesImage from "../images/icons8-board-game-96.png";
import climbingImage from "../images/icons8-climbing-96.png";
import cookingImage from "../images/icons8-cooking-96.png";
import drumsImage from "../images/icons8-drums-96.png";
import pianoImage from "../images/icons8-piano-96.png";
import skiingImage from "../images/icons8-skiing-96.png";

const Hobbies = () => {
  return (
    <div className="my-4 flex flex-col-reverse sm:flex-row justify-center items-center">
      <div className="sm:me-8 flex flex-row">
        <img
          className="h-10 m-2"
          src={climbingImage}
          type="image/png"
          rel="icon"
          alt="climbing icon"
        />
        <img
          className="h-10 m-2"
          src={boardGamesImage}
          type="image/png"
          sizes="16x16"
          rel="icon"
          alt="board games icon"
        />
        <img
          className="h-10 m-2"
          src={bicycleImage}
          type="image/png"
          rel="icon"
          alt="bicycle icon"
        />
        <img
          className="h-10 m-2"
          src={cookingImage}
          type="image/png"
          rel="icon"
          alt="cooking icon"
        />
        <img
          className="h-10 m-2"
          src={drumsImage}
          type="image/png"
          rel="icon"
          alt="drums icon"
        />
        <img
          className="h-10 m-2"
          src={pianoImage}
          type="image/png"
          rel="icon"
          alt="piano icon"
        />
        <img
          className="h-10 m-2"
          src={skiingImage}
          type="image/png"
          rel="icon"
          alt="skiing icon"
        />
      </div>
      <h2 className="sm:ms-8 font-cursive text-crimson text-4xl">Hobbies</h2>
    </div>
  );
};

export default Hobbies;
