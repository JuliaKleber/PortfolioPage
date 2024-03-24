import foto from "../assets/MeDark.jpg";

interface BioProps {
  darkMode: boolean;
  language: string;
}

const Bio = ({ darkMode, language }: BioProps) => {
  const paragraphStyle = `m-2 text-center ${
    darkMode ? "text-pink-100" : "text-black"
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
        Auf der Suche nach neuen beruflichen
        <br />
        Herausforderungen, um meiner neuen
        <br />
        Leidenschaft, dem Coden, nachzugehen
      </p>
    </>
  );

  const englishMotivation = (
    <div className="max-w-[400px] md:max-w-[660px]">
      <p className={paragraphStyle}>
        I always had a strong affinity to math, logical thinking and solving
        puzzles. Thus, coding feels like the perfect fit for me. I find it
        intellectually stimulating and fullfilling and the problem solving
        aspect is what draws me in.
      </p>
    </div>
  );

  return (
    <div className="my-4 flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img
          className="h-48 m-3 rounded-md sm:me-4"
          src={foto}
          alt="Julia Kleber"
        />
        <div className="sm:ms-4 flex flex-col justify-center items-center">
          <h2 className={`my-2 font-cursive text-4xl`}>Julia Kleber</h2>
          {language === "German" ? germanInfo : englishInfo}
        </div>
      </div>
      <div className="hidden sm:block">
        {language === "English" && englishMotivation}
      </div>
    </div>
  );
};

export default Bio;
