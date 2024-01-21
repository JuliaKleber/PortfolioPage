import React from "react";
import foto from "../images/JuliaKleber.jpg";

const Bio = ({ darkMode, language }) => {
  const paragraphStyle = `m-2 text-center ${
    darkMode ? "text-purple-200" : "text-black"
  }`;

  const englishInfo = (
    <>
      <p className={paragraphStyle}>
        A graduate chemist and freelance lecturer with
        <br />
        over a decade of experience in clinical research
      </p>
      <p className={paragraphStyle}>
        Eagerly seeking an opportunity to transition
        <br />
        my skills and passion into a dynamic role
        <br />
        within the realm of development
      </p>
    </>
  );

  const germanInfo = (
    <>
      <p className={paragraphStyle}>
        Diplomchemikerin mit über zehn Jahren
        <br />
        Erfahrung in der klinischen Forschung
      </p>
      <p className={paragraphStyle}>
        Auf der Suche nach neuen
        <br />
        Herausforderungen strebe ich nun danach,
        <br />
        mich als Entwicklerin zu betätigen.
      </p>
    </>
  );

  return (
    <div className="my-4 flex flex-col md:flex-row items-center justify-center">
      <img
        className="h-48 m-3 rounded-md sm:me-4"
        src={foto}
        alt="Julia Kleber"
      />
      <div className="sm:ms-4 flex flex-col justify-center items-center">
        <h2 className={`my-2 md:mt-0 font-cursive text-4xl`}>Julia Kleber</h2>
        {language === "German" ? germanInfo : englishInfo}
      </div>
    </div>
  );
};

export default Bio;
