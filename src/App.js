import Profile from "./components/Profile";
import Projects from "./components/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center">
        <Profile />
        <button
          className="text-darkMagenta text-xl mt-3 mb-60 bounce"
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
      <Projects />
    </div>
  );
}

export default App;
