import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <div className='2xl:ms-20 flex flex-row justify-center items-center flex-wrap'>
      <Project title={'Meine Rezepte'}
               tools={['React', 'SCSS', 'Express JS', 'CRUD actions', 'React Router']}
               description={'A recipe storage app'}
               descriptionSize={'w-[200px]'}
               imageSize={'w-32'}
               gitHubLink={'https://github.com/JuliaKleber/MeineRezepte'}
               deployLink={''}
               image={'https://github.com/JuliaKleber/MeineRezepte/assets/142741980/7c368824-64d8-4fd5-89e9-af8f6bf602dd'} />
      <Project title={'Mastermind'}
               tools={['React', 'CSS']}
               description={'A Mastermind game'}
               descriptionSize={'w-[200px]'}
               imageSize={'w-40'}
               gitHubLink={'https://github.com/JuliaKleber/MastermindReact'}
               deployLink={'https://julias--mastermind.web.app/'}
               image={'https://github.com/JuliaKleber/MastermindReact/assets/142741980/46527a62-839c-471f-81b9-ef5d9506c512'} />
      <Project title={'Portfolio Page'}
               tools={['React', 'Tailwind CSS']}
               description={'My portfolio page'}
               descriptionSize={'w-[200px]'}
               imageSize={'w-32'}
               gitHubLink={'https://github.com/JuliaKleber/PortfolioPage'}
               deployLink={'https://juliakleber.github.io/PortfolioPage/'}
               image={'https://github.com/JuliaKleber/portfolio-page/assets/142741980/435a3786-126e-49fa-bbea-225cf9c39bb9'} />
      <Project title={'Mastermind'}
               tools={['React Native']}
               description={'A Mastermind game'}
               descriptionSize={'w-[200px]'}
               imageSize={'w-20'}
               gitHubLink={'https://github.com/JuliaKleber/MastermindReactNative'}
               deployLink={''}
               image={'https://github.com/JuliaKleber/MastermindReactNative/assets/142741980/d06aa979-25f4-406d-8509-0d00931c90e6'} />
      <Project title={'To Do Coach'}
               tools={['Ruby on Rails', 'HTML', 'JavaScript', 'Stimulus', 'SCSS', 'Bootstrap', 'Heroku', 'CRUD actions', 'Routing', 'ORM', 'Canban', 'Trello']}
               description={'A task management app was built by a team of four within a two-week timeframe as part of the Le Wagon bootcamp. To keep users motivated, positive reinforcement, user connections, and earning achievements are included. I pitched the idea, was primarily responsible for the final pitch, the backend development, deployment on Heroku, and managing the Trello board.'}
               descriptionSize={'w-[440px]'}
               imageSize={'w-32'}
               gitHubLink={'https://github.com/JuliaKleber/ToDoCoach'}
               deployLink={'https://to-do-coach-f75c7e0f7968.herokuapp.com/'}
               image={'https://github.com/GoldieCrystal/ToDoCoach/assets/142741980/efaae820-1574-4fe7-ae1f-1cf062fc7e23'} />
      <Project title={'QuizWiz'}
               tools={['Ruby on Rails', 'HTML', 'JavaScript', 'Stimulus', 'SCSS', 'Bootstrap', 'Heroku', 'CRUD actions', 'Routing']}
               description={'A quiz app built in a team of 4 within 1 week as part of the Le Wagon bootcamp. The users can create quizzes and solve quizzes. I was mainly responsible for the backend.'}
               descriptionSize={'w-[500px]'}
               imageSize={'w-48'}
               gitHubLink={'https://github.com/JuliaKleber/QuizWiz'}
               deployLink={''}
               image={'https://github.com/JuliaKleber/QuizWiz/assets/142741980/2f7a2ce2-09c0-4110-ad90-d607e9bee5af'} />
      <Project title={'Minesweeper'}
               tools={['Vanilla JS', 'Bootstrap']}
               description={'A Minesweeper game'}
               descriptionSize={'w-[200px]'}
               imageSize={'w-40'}
               gitHubLink={'https://github.com/JuliaKleber/Minesweeper'}
               deployLink={'https://juliakleber.github.io/Minesweeper/'}
               image={'https://github.com/JuliaKleber/portfolio-page/assets/142741980/eafaf7de-1f4b-4ca9-89b9-d13de69d1512'} />
      <Project title={'Tic Tac Toe'}
               tools={['Vanilla JS', 'CSS', 'Canvas']}
               description={'A Tic Tac Toe game with one and two player modes'}
               descriptionSize={'w-[368px]'}
               imageSize={'w-32'}
               gitHubLink={'https://github.com/JuliaKleber/TicTacToe'}
               deployLink={'https://juliakleber.github.io/TicTacToe/'}
               image={'https://github.com/JuliaKleber/PortfolioPage/assets/142741980/f0071c07-bdd4-4901-9874-93e8001c4ea6'} />
    </div>
  );
}

export default Projects;
