import React from "react";
import reactNativeImage from "../images/React Native.png";

const Toolkit = ({ darkMode }) => {
  return (
    <div className="my-4 flex flex-col sm:flex-row justify-center items-center">
      <h2 className={`mb-1 sm:mb-0 sm:me-8 font-cursive text-4xl`}>Toolkit</h2>

      <div className="sm:ms-8 flex flex-col justify-center items-center">
        <div className="m-3 flex flex-row justify-center items-center">
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            alt="SASS"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind"
          />
        </div>

        <div className="m-3 flex flex-row justify-center">
          <img
            className="m-1 h-12 rounded-md"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
          <img
            className="m-1 h-12"
            src={reactNativeImage}
            alt="React Native"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
            alt="Ruby"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg"
            alt="Ruby on Rails"
          />
        </div>

        <div className="m-3 flex flex-row justify-center">
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
          />
          <img
            className={`m-1 h-12 rounded-md ${darkMode && "bg-pink-100"}`}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="Github"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
            alt="Heroku"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt="VS Code"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            alt="Linux"
          />
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
