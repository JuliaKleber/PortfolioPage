import React from "react";

const Toolkit = ({ textColor, darkMode }) => {
  return (
    <div className="my-4 flex flex-col sm:flex-row justify-center items-center">
      <h2 className={`mb-1 sm:mb-0 sm:me-8 font-cursive ${textColor} text-4xl`}>
        Toolkit
      </h2>

      <div className="sm:ms-8 flex flex-col justify-center items-center">
        <div className="m-3 flex flex-row justify-center items-center">
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML symbol"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS symbol"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            alt="SASS symbol"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap symbol"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            alt="Tailwind symbol"
          />
        </div>

        <div className="m-3 flex flex-row justify-center">
          <img
            className="m-1 h-12 rounded-md"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript symbol"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React symbol"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
            alt="Ruby symbol"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg"
            alt="Ruby on Rails symbol"
          />
        </div>

        <div className="m-3 flex flex-row justify-center">
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git symbol"
          />
          <img
            className={`m-1 h-12 rounded-md ${darkMode && "bg-pink-100"}`}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="Github symbol"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
            alt="Heroku symbol"
          />
          <img
            className="m-1 h-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt="VS Code symbol"
          />
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
