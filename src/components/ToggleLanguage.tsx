import englishFlag from "../assets/icons8-english-48.png";
import germanFlag from "../assets/icons8-germany-48.png";

interface ToggleLanguageProps {
  language: string;
  setLanguage: (language: string) => void;
}

const ToggleLanguage = ({ language, setLanguage }: ToggleLanguageProps) => {
  return (
    <div className="p-4">
      {language === "German" ? (
        <img
          src={englishFlag}
          alt="english flag"
          onClick={() => setLanguage("English")}
          role="button"
          aria-label="Change to English language"
          className="h-8 cursor-pointer"
        />
      ) : (
        <img
          src={germanFlag}
          alt="german flag"
          onClick={() => setLanguage("German")}
          role="button"
          aria-label="Change to German language"
          className="h-8 cursor-pointer"
        />
      )}
    </div>
  );
};

export default ToggleLanguage;
