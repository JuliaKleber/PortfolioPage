import React from "react";
import codewarsImage from "../images/codewars_red.svg";

const Contact = () => {
  return (
    <div className="my-4 flex flex-col sm:flex-row justify-center items-center">
      <h2 className="sm:me-11">Let's connect!</h2>
      <div className="sm:ms-11 flex flex-row items-center justify-center">
        <a
          href="https://github.com/JuliaKleber"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="m-3 h-12"
            alt="github icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
        </a>
        <a
          href="https://www.codewars.com/users/Drempels"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="m-3 h-12"
            alt="codewars icon"
            src={codewarsImage}
            alt="link to codewars"
            id="codewars-image"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/juliakleber/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="m-3 h-12"
            alt="linkedin icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
