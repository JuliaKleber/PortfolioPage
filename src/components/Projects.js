import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <div className='2xl:ms-20 flex flex-col justify-center items-center'>
      <h2 className='text-5xl mt-10 mb-3'>My Projects</h2>
      <div className="mt-2 mb-1 border-t-2 w-[500px]"></div>
      <div className="mb-2 border-t-2 w-[500px]"></div>
      <Project title={'Meine Rezepte'}
               tools={['React', 'SCSS', 'Express JS', 'CRUD actions', 'React Router']}
               role={''}
               arrangement={'reverse'}
               imageSize={'w-32'}
               link={'https://github.com/JuliaKleber/MeineRezepte'}
               image={'https://github.com/JuliaKleber/MeineRezepte/assets/142741980/7c368824-64d8-4fd5-89e9-af8f6bf602dd'} />
      <div className="my-2 border-t-2 w-[500px]"></div>
      <Project title={'Mastermind'}
               tools={['React', 'CSS']}
               role={''}
               arrangement={'normal'}
               imageSize={'w-40'}
               link={'https://julias--mastermind.web.app/'}
               image={'https://github.com/JuliaKleber/MastermindReact/assets/142741980/46527a62-839c-471f-81b9-ef5d9506c512'} />
      <div className="my-2 border-t-2 w-[500px]"></div>
      <Project title={'Portfolio Page'}
               tools={['React', 'Tailwind CSS', 'Firebase']}
               role={''}
               arrangement={'reverse'}
               imageSize={'w-32'}
               link={''}
               image={'https://github.com/JuliaKleber/portfolio-page/assets/142741980/435a3786-126e-49fa-bbea-225cf9c39bb9'} />
      <div className="my-2 border-t-2 w-[500px]"></div>
      <Project title={'Mastermind'}
               tools={['React Native']}
               role={''}
               arrangement={'normal'}
               imageSize={'w-24'}
               link={'https://github.com/JuliaKleber/MastermindReactNative'}
               image={'https://github.com/JuliaKleber/MastermindReactNative/assets/142741980/d06aa979-25f4-406d-8509-0d00931c90e6'} />
      <div className="my-2 border-t-2 w-[500px]"></div>
      <Project title={'To Do Coach'}
               tools={['Ruby on Rails', 'HTML', 'JavaScript', 'Stimulus', 'SCSS', 'Bootstrap', 'Heroku', 'CRUD actions', 'Routing', 'ORM', 'Canban', 'Trello']}
               role={''}
               arrangement={'reverse'}
               imageSize={'w-32'}
               link={'https://to-do-coach-f75c7e0f7968.herokuapp.com/'}
               image={'https://github.com/GoldieCrystal/ToDoCoach/assets/142741980/efaae820-1574-4fe7-ae1f-1cf062fc7e23'} />
      <div className="my-2 border-t-2 w-[500px]"></div>
      <Project title={'QuizWiz'}
               tools={['Ruby on Rails', 'HTML', 'JavaScript', 'Stimulus', 'SCSS', 'Bootstrap', 'Heroku', 'CRUD actions', 'Routing']}
               role={''}
               arrangement={'normal'}
               imageSize={'w-48'}
               link={'https://github.com/JuliaKleber/QuizWiz'}
               image={'https://github.com/JuliaKleber/QuizWiz/assets/142741980/2f7a2ce2-09c0-4110-ad90-d607e9bee5af'} />
      <div className="my-2 border-t-2 w-[500px]"></div>
      <Project title={'Minesweeper'}
               tools={['Vanilla JS', 'Bootstrap']}
               arrangement={'reverse'}
               imageSize={'w-40'}
               link={'https://juliakleber.github.io/Minesweeper/'}
               image={'https://github.com/JuliaKleber/portfolio-page/assets/142741980/eafaf7de-1f4b-4ca9-89b9-d13de69d1512'} />
    </div>
  );
}

export default Projects;
