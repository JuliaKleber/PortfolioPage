import { useState } from 'react';
import Profile from './components/Profile';
import Projects from './components/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [profileShown, setProfileShown] = useState(true);
  return (
    <div className="flex flex-col justify-center items-center">
      { profileShown &&
        <div className='flex flex-col justify-center'>
          <Profile />
          <button className='text-crimson text-xl mt-3 bounce' onClick={() => setProfileShown(false)}>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
      }
      { !profileShown &&
        <div  className='flex flex-col justify-center'>
          <button className='text-crimson text-xl mt-3 bounce' onClick={() => setProfileShown(true)}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          <Projects />
        </div>
      }
    </div>
  );
}

export default App;
