import { useState } from "react";

interface ProjectProps {
  darkMode: boolean;
  language: string;
  title: string;
  imageLink: string;
  imageSize: string;
  setZoomedInImageLink: React.Dispatch<React.SetStateAction<string>>;
  gitHubLink: string;
  deployLink: string;
  englishDescription: JSX.Element | string;
  germanDescription: JSX.Element | string;
  tools: string[];
}

const Project = ({
  darkMode,
  language,
  title,
  imageLink,
  imageSize,
  setZoomedInImageLink,
  gitHubLink,
  deployLink,
  englishDescription,
  germanDescription,
  tools,
}: ProjectProps) => {
  const [imageAvailable, setImageAvailable] = useState(true);
  const goToDeploy = () => {
    window.location.href = deployLink;
  };

  const goToGitHub = () => {
    window.location.href = gitHubLink;
  };

  const headerStyle = `mb-3 font-cursive  text-3xl ${
    darkMode ? "text-purple-300" : "text-shadow-costum text-darkMagenta"
  }`;

  const header = <h3 className={headerStyle}>{title}</h3>;

  const listItemStyle = `py-0 px-2 mx-1 my-1 rounded-xl ${
    darkMode ? "bg-pink-200 text-black" : "bg-pink-200"
  }`;

  const toolsList = (
    <ul className="flex flex-wrap justify-center">
      {tools.map((tool, index) => {
        return (
          <li className={listItemStyle} key={index}>
            {tool}
          </li>
        );
      })}
    </ul>
  );

  const buttonStyle = `py-1 px-2 mx-1 my-1 rounded-md shadow-md ${
    darkMode
      ? "bg-purple-400 text-black hover:bg-purple-500"
      : "bg-darkMagenta text-floralWhite hover:bg-pink-500"
  }`;

  const buttons = (
    <div className="mt-2 flex flex-row justify-center items-center">
      {deployLink !== "" && (
        <button className={buttonStyle} onClick={() => goToDeploy()}>
          View Live
        </button>
      )}
      <button className={buttonStyle} onClick={() => goToGitHub()}>
        GitHub
      </button>
    </div>
  );

  const image = (
    <img
      className={`hidden sm:block ms-5 m-2 ${imageSize} rounded-sm shadow-sm cursor-pointer`}
      src={imageLink}
      alt={`project: ${title}`}
      onError={() => setImageAvailable(false)}
      onClick={() => setZoomedInImageLink(imageLink)}
    />
  );

  return (
    <div
      className={`m-6 p-4 sm:min-w-[400px] max-w-[400px] sm:max-w-[600px] flex flex-col justify-center items-center rounded-sm shadow-costum ${
        darkMode ? "bg-black text-pink-100" : "text-black"
      }`}
    >
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          {header}
          <div
            className={`w-fit flex flex-row flex-wrap justify-center items-center`}
          >
            {toolsList}
          </div>
          {buttons}
        </div>

        {imageAvailable && image}
      </div>

      <p className={`my-3 text-center`}>
        {language === "German" ? germanDescription : englishDescription}
      </p>
    </div>
  );
};

export default Project;
