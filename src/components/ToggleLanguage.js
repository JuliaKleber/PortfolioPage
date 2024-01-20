import React from "react";
import englishFlag from "../images/icons8-english-48.png";
import germanFlag from "../images/icons8-germany-48.png";

const ToggleLanguage = ({ language, setLanguage }) => {
  return (
    <div className="p-4">
      {language === "German" ? (
        <img
          src={englishFlag}
          alt="english flag"
          onClick={() => setLanguage("English")}
          role="button"
          aria-label="Change to English language"
          className="h-8"
        />
      ) : (
        <img
          src={germanFlag}
          alt="german flag"
          onClick={() => setLanguage("German")}
          role="button"
          aria-label="Change to German language"
          className="h-8"
        />
      )}
    </div>
  );
};

export default ToggleLanguage;
