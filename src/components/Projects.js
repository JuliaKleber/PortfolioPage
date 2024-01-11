import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <div className='2xl:ms-10 flex flex-col justify-center items-center'>
      <h2 className='text-5xl mt-10 mb-3'>My Projects</h2>
      <div className="mt-2 mb-1 border-t-2 w-[500px]"></div>
      <div className="mb-2 border-t-2 w-[500px]"></div>
      <Project title={'Meine Rezepte'}
               tools={['React', 'SCSS', 'Express JS', 'CRUD actions', 'React Router']}
               role={''}
               arrangement={'reverse'}
               link={'https://github.com/JuliaKleber/MeineRezepte'}
               image={'https://github.com/GoldieCrystal/Minesweeper/assets/142741980/a53f0e2a-596f-4d22-a2c3-0d979438af07'} />
      <div className="my-2 border-t-2 w-[500px]"></div>
      <Project title={'Mastermind'}
               tools={['React', 'CSS']}
               role={''}
               arrangement={'normal'}
               link={'https://julias--mastermind.web.app/'}
               image={'https://github.com/GoldieCrystal/Minesweeper/assets/142741980/a53f0e2a-596f-4d22-a2c3-0d979438af07'} />
      <div className="my-2 border-t-2 w-[500px]"></div>
      <Project title={'Portfolio Page'}
               tools={['React', 'Tailwind CSS']}
               role={''}
               arrangement={'reverse'}
               link={''}
               image={'https://github.com/GoldieCrystal/Minesweeper/assets/142741980/a53f0e2a-596f-4d22-a2c3-0d979438af07'} />
      <div className="my-2 border-t-2 w-[500px]"></div>
      <Project title={'Mastermind'}
               tools={['React Native']}
               role={''}
               arrangement={'normal'}
               link={'https://github.com/JuliaKleber/MastermindReactNative'}
               image={'https://github.com/GoldieCrystal/Minesweeper/assets/142741980/a53f0e2a-596f-4d22-a2c3-0d979438af07'} />
      <div className="my-2 border-t-2 w-[500px]"></div>
      <Project title={'To Do Coach'}
               tools={['Ruby on Rails', 'HTML', 'JavaScript', 'Stimulus', 'SCSS', 'Bootstrap', 'Heroku', 'CRUD actions', 'Routing', 'ORM', 'Canban', 'Trello']}
               role={''}
               arrangement={'reverse'}
               link={'https://to-do-coach-f75c7e0f7968.herokuapp.com/'}
               image={'https://github.com/GoldieCrystal/Minesweeper/assets/142741980/a53f0e2a-596f-4d22-a2c3-0d979438af07'} />
      <div className="my-2 border-t-2 w-[500px]"></div>
      <Project title={'QuizWiz'}
               tools={['Ruby on Rails', 'HTML', 'JavaScript', 'Stimulus', 'SCSS', 'Bootstrap', 'Heroku', 'CRUD actions', 'Routing']}
               role={''}
               arrangement={'normal'}
               link={'https://github.com/JuliaKleber/QuizWiz'}
               image={'https://github.com/GoldieCrystal/Minesweeper/assets/142741980/a53f0e2a-596f-4d22-a2c3-0d979438af07'} />
      <div className="my-2 border-t-2 w-[500px]"></div>
      <Project title={'Minesweeper'}
               tools={['Vanilla JS', 'Bootstrap']}
               arrangement={'reverse'}
               link={'https://juliakleber.github.io/Minesweeper/'}
               image={'https://github.com/GoldieCrystal/Minesweeper/assets/142741980/a53f0e2a-596f-4d22-a2c3-0d979438af07'} />
    </div>
  );
}

export default Projects;
