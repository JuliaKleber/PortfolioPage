import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <div className="flex flex-col 2xl:flex-row justify-center 2xl:items-start items-center">
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
