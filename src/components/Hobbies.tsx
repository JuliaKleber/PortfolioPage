import bicycleImage from "../assets/icons8-bicycle-96.png";
import boardGamesImage from "../assets/icons8-board-game-96.png";
import climbingImage from "../assets/icons8-climbing-96.png";
import cookingImage from "../assets/icons8-cooking-96.png";
import pianoImage from "../assets/icons8-piano-96.png";

const Hobbies = ({ darkMode }: { darkMode: boolean }) => {
  const imageStyles = `h-11 m-2 p-1 ${darkMode && "bg-pink-200 rounded-md"}`;
  return (
    <div className="my-4 flex flex-col sm:flex-row-reverse justify-center items-center">
      <h2 className={`mb-3 sm:mb-0 sm:ms-11 sm:me-4 font-cursive text-4xl`}>
        Hobbies
      </h2>
      <div className="sm:me-11 flex flex-row">
        <img
          className={imageStyles}
          src={climbingImage}
          rel="icon"
          alt="climbing icon"
        />
        <img
          className={imageStyles}
          src={boardGamesImage}
          rel="icon"
          alt="board games icon"
        />
        <img
          className={imageStyles}
          src={bicycleImage}
          rel="icon"
          alt="bicycle icon"
        />
        <img
          className={imageStyles}
          src={cookingImage}
          rel="icon"
          alt="cooking icon"
        />
        <img
          className={imageStyles}
          src={pianoImage}
          rel="icon"
          alt="piano icon"
        />
      </div>
    </div>
  );
};

export default Hobbies;
