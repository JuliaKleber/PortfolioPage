import React from "react";
import Project from "./Project";

const Projects = ({ darkMode }) => {
  return (
    <>
      <h2 className={`my-4 md:hidden font-cursive text-4xl`}>Projects</h2>
      <div className="flex flex-row justify-center items-center flex-wrap">
        <Project
          darkMode={darkMode}
          title={"To Do Coach"}
          tools={[
            "Ruby on Rails",
            "HTML",
            "JavaScript",
            "Stimulus",
            "SCSS",
            "Bootstrap",
            "CRUD actions",
            "Routing",
            "PostgreSQL",
            "ORM",
            "Canban",
            "Trello",
            "Heroku",
          ]}
          description={
            "A task management app built in a team of four within a two-week timeframe as part of the Le Wagon bootcamp. To keep users motivated, positive reinforcement, user connections, and earning achievements are included. I pitched the idea, was primarily responsible for the final pitch, the backend development, deployment on Heroku, and managing the Trello board."
          }
          toolsSize={"md:w-96"}
          imageSize={"w-32"}
          gitHubLink={"https://github.com/JuliaKleber/ToDoCoach"}
          deployLink={"https://to-do-coach-f75c7e0f7968.herokuapp.com/"}
          imageLink={
            "https://github.com/GoldieCrystal/ToDoCoach/assets/142741980/efaae820-1574-4fe7-ae1f-1cf062fc7e23"
          }
        />
        <Project
          darkMode={darkMode}
          title={"QuizWiz"}
          tools={[
            "Ruby on Rails",
            "HTML",
            "JavaScript",
            "Stimulus",
            "SCSS",
            "Bootstrap",
            "CRUD actions",
            "Routing",
            "PostgreSQL",
            "Heroku",
          ]}
          description={
            "A quiz app built in a team of 4 within 1 week as part of the Le Wagon bootcamp. The users can create quizzes and solve quizzes. I was mainly responsible for the backend."
          }
          toolsSize={"md:w-96"}
          imageSize={"w-48"}
          gitHubLink={"https://github.com/JuliaKleber/QuizWiz"}
          deployLink={""}
          imageLink={
            "https://github.com/JuliaKleber/QuizWiz/assets/142741980/2f7a2ce2-09c0-4110-ad90-d607e9bee5af"
          }
        />
        <Project
          darkMode={darkMode}
          title={"Music Insights"}
          tools={["React", "Tailwind CSS", "API calls"]}
          description={
            "An app where the user can retrieve metadata about musicians, albums, and songs. Several endpoints from the Spotify and GetSongBPM APIs have already been included. I plan to also integrate the Spotify player and provide song recommendations based on the user's taste."
          }
          toolsSize={"md:w-64"}
          imageSize={"w-32"}
          gitHubLink={"https://github.com/JuliaKleber/MusicInsights"}
          deployLink={"https://juliakleber.github.io/MusicInsights/"}
          imageLink={
            "https://github.com/JuliaKleber/MusicInsights/assets/142741980/98417c71-cc1b-47bf-9e91-d97b630cfc01"
          }
        />
        <Project
          darkMode={darkMode}
          title={"Portfolio Page"}
          tools={["React", "Tailwind CSS"]}
          description={"My portfolio page"}
          toolsSize={"md:w-48"}
          imageSize={"w-32"}
          gitHubLink={"https://github.com/JuliaKleber/PortfolioPage"}
          deployLink={"https://juliakleber.github.io/PortfolioPage/"}
          imageLink={
            "https://github.com/JuliaKleber/PortfolioPage/assets/142741980/936edea0-654e-4d59-9fcc-f89c5c99c11e"
          }
        />
        <Project
          darkMode={darkMode}
          title={"Meine Rezepte"}
          tools={[
            "React",
            "SCSS",
            "Express JS",
            "CRUD actions",
            "React Router",
          ]}
          description={"A recipe storage app"}
          toolsSize={"md:w-56"}
          imageSize={"w-32"}
          gitHubLink={"https://github.com/JuliaKleber/MeineRezepte"}
          deployLink={""}
          imageLink={
            "https://github.com/JuliaKleber/MeineRezepte/assets/142741980/7c368824-64d8-4fd5-89e9-af8f6bf602dd"
          }
        />
        <Project
          darkMode={darkMode}
          title={"Mastermind"}
          tools={["React", "CSS"]}
          description={"A Mastermind game built with React"}
          toolsSize={"md:w-48"}
          imageSize={"w-40"}
          gitHubLink={"https://github.com/JuliaKleber/MastermindReact"}
          deployLink={"https://juliakleber.github.io/MastermindReact/"}
          imageLink={
            "https://github.com/JuliaKleber/MastermindReact/assets/142741980/46527a62-839c-471f-81b9-ef5d9506c512"
          }
        />
        <Project
          darkMode={darkMode}
          title={"Mastermind"}
          tools={["React Native"]}
          description={"A Mastermind game built with React Native"}
          toolsSize={"md:w-48"}
          imageSize={"w-20"}
          gitHubLink={"https://github.com/JuliaKleber/MastermindReactNative"}
          deployLink={""}
          imageLink={
            "https://github.com/JuliaKleber/MastermindReactNative/assets/142741980/d06aa979-25f4-406d-8509-0d00931c90e6"
          }
        />
        <Project
          darkMode={darkMode}
          title={"Minesweeper"}
          tools={["Vanilla JS", "Bootstrap"]}
          description={"A Minesweeper game"}
          toolsSize={"md:w-48"}
          imageSize={"w-40"}
          gitHubLink={"https://github.com/JuliaKleber/Minesweeper"}
          deployLink={"https://juliakleber.github.io/Minesweeper/"}
          imageLink={
            "https://github.com/JuliaKleber/portfolio-page/assets/142741980/eafaf7de-1f4b-4ca9-89b9-d13de69d1512"
          }
        />
        <Project
          darkMode={darkMode}
          title={"Tic Tac Toe"}
          tools={["Vanilla JS", "CSS", "Canvas"]}
          description={"A Tic Tac Toe game with one and two player modes"}
          toolsSize={"md:w-56"}
          imageSize={"w-32"}
          gitHubLink={"https://github.com/JuliaKleber/TicTacToe"}
          deployLink={"https://juliakleber.github.io/TicTacToe/"}
          imageLink={
            "https://github.com/JuliaKleber/PortfolioPage/assets/142741980/f0071c07-bdd4-4901-9874-93e8001c4ea6"
          }
        />
      </div>
    </>
  );
};

export default Projects;
