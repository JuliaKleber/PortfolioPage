import Profile from './components/Profile';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Toolkit from './components/Toolkit';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex flex-col 2xl:flex-row justify-center 2xl:items-start items-center">
      <div className="2xl:me-20 flex flex-col justify-center items-center">
        <Profile />
        <div className="my-2 border-t-2 w-[650px]"></div>
        <Hobbies />
        <div className="my-2 border-t-2 w-[650px]"></div>
        <Toolkit />
        <div className="my-2 border-t-2 w-[650px]"></div>
        <Contact />
        <div className="my-2 border-t-2 2xl:border-t-0 w-[650px]"></div>
      </div>
      <Projects />
    </div>
  );
}

export default App;
