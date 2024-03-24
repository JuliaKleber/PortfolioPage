import Project from "./Project";

interface ProjectsProps {
  darkMode: boolean;
  language: string;
}

const Projects = ({ darkMode, language }: ProjectsProps) => {
  return (
    <div className="max-w-screen-2xl">
      <h2 className={`my-8 font-cursive text-4xl text-center`}>
        {language === "German" ? "Projekte" : "Projects"}
      </h2>
      <div className="flex flex-row justify-center items-center flex-wrap">
        <Project
          darkMode={darkMode}
          language={language}
          title={"Meine Rezepte"}
          tools={[
            "React",
            "Express",
            "MongoDB",
            "React Router",
            "Zustand",
            "Fuse.js",
            "SCSS",
            "Docker",
            "SPA",
            "CRUD actions",
            "User authentication",
          ]}
          englishDescription="A React application for managing and searching recipes. On the home screen, the recipes of the month, i.e., recipes where the ingredients are in season, are shown."
          germanDescription="
              Eine React-Anwendung zur Verwaltung und Suche von Rezepten. Auf
              dem Startbildschirm werden die Rezepte angezeigt, deren Zutaten im
              aktuellen Monat Saison haben.
            "
          imageSize={"w-48"}
          gitHubLink={"https://github.com/JuliaKleber/MeineRezepte"}
          deployLink={""}
          imageLink={
            "https://github.com/JuliaKleber/MeineRezepte/assets/142741980/0158f416-91fe-416b-a160-ebdda63c36e7"
          }
        />
        <Project
          darkMode={darkMode}
          language={language}
          title={"Music Insights"}
          tools={[
            "React",
            "Zustand",
            "TypeScript",
            "Tailwind CSS",
            "Next.js",
            "Vercel",
            "Public API calls",
          ]}
          englishDescription="An app where the user can retrieve metadata about artists, albums,
              and songs. Several endpoints from the Spotify, GetSongBPM and
              MusicBrainz APIs have already been integrated. I plan to also
              include the Spotify player and provide song recommendations based
              on the user's taste.
          "
          germanDescription="
              Eine App, in der Nutzer Metadaten zu Künstlern, Alben und Songs
              abrufen können. Mehrere Endpunkte der Spotify-, GetSongBPM- und
              MusicBrainz-APIs wurden bereits integriert. Ich plane außerdem,
              den Spotify-Player einzubinden und Song-Empfehlungen basierend auf
              dem Musikgeschmack des Nutzers bereitzustellen.
            "
          imageSize={"w-32"}
          gitHubLink={"https://github.com/JuliaKleber/MusicInsights"}
          deployLink={"https://nextjs-nu-six-26.vercel.app/"}
          imageLink={
            "https://github.com/JuliaKleber/MusicInsights/assets/142741980/dfb28eef-b72c-4ca9-84ed-40f1797bc23d"
          }
        />
        <Project
          darkMode={darkMode}
          language={language}
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
          englishDescription={
            <div>
              A task management app built in a team of four within a two-week
              timeframe. To keep users motivated, positive reinforcement, user
              connections, and earning achievements are included.
              <br />
              <br />I was primarily responsible for the backend development,
              deployment on Heroku, and managing the Trello board. I also worked
              on the frontend.
            </div>
          }
          germanDescription={
            <div>
              Eine To-Do-App, die wir in einem Team von vier Personen innerhalb
              eines Zeitraums von zwei Wochen entwickelt haben. Um die Benutzer
              zu motivieren, haben wir positive Verstärkung, einen Social Feed
              und die Möglichkeit, Erfolge zu verdienen, integriert.
              <br />
              <br />
              Ich war hauptsächlich verantwortlich für die Backend-Entwicklung,
              das Deployment auf Heroku und die Verwaltung des Trello-Boards.
              Außerdem habe ich am Frontend mitgearbeitet.
            </div>
          }
          imageSize={"w-32"}
          gitHubLink={"https://github.com/JuliaKleber/ToDoCoach"}
          deployLink={"https://to-do-coach-f75c7e0f7968.herokuapp.com/"}
          imageLink={
            "https://github.com/GoldieCrystal/ToDoCoach/assets/142741980/efaae820-1574-4fe7-ae1f-1cf062fc7e23"
          }
        />
        <Project
          darkMode={darkMode}
          language={language}
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
          englishDescription="A quiz app built in a team of four within one week. The users can
              create quizzes and solve quizzes. I had the idea for the app and
              was mainly responsible for the backend. I also worked on the
              frontend.
          "
          germanDescription="
              Eine Quiz-App, die wir in einem Team von vier Personen innerhalb
              von einer Woche entwickelt haben. Die Benutzer können Quizzes
              erstellen und lösen. Ich war Ideengeber und hauptsächlich für das
              Backend verantwortlich. Außerdem habe ich am Frontend
              mitgearbeitet.
            "
          imageSize={"w-48"}
          gitHubLink={"https://github.com/JuliaKleber/QuizWiz"}
          deployLink={""}
          imageLink={
            "https://github.com/JuliaKleber/QuizWiz/assets/142741980/2f7a2ce2-09c0-4110-ad90-d607e9bee5af"
          }
        />
        <Project
          darkMode={darkMode}
          language={language}
          title={"Portfolio Page"}
          tools={["React", "TypeScript", "Tailwind CSS"]}
          englishDescription={"My portfolio page"}
          germanDescription={"Meine Portfolio Seite"}
          imageSize={"w-32"}
          gitHubLink={"https://github.com/JuliaKleber/PortfolioPage"}
          deployLink={"https://juliakleber.github.io/PortfolioPage/"}
          imageLink={
            "https://github.com/JuliaKleber/PortfolioPage/assets/142741980/15bf55ec-3d90-41e2-9afa-fac7b4c226d8"
          }
        />
        <Project
          darkMode={darkMode}
          language={language}
          title={"Mastermind"}
          tools={["React", "CSS"]}
          englishDescription={"A Mastermind game built with React"}
          germanDescription={"Ein Mastermind Spiel, entwickelt mit React"}
          imageSize={"w-40"}
          gitHubLink={"https://github.com/JuliaKleber/MastermindReact"}
          deployLink={"https://juliakleber.github.io/MastermindReact/"}
          imageLink={
            "https://github.com/JuliaKleber/MastermindReact/assets/142741980/46527a62-839c-471f-81b9-ef5d9506c512"
          }
        />
        <Project
          darkMode={darkMode}
          language={language}
          title={"Mastermind"}
          tools={["React Native"]}
          englishDescription={"A Mastermind game built with React Native"}
          germanDescription={
            "Ein Mastermind Spiel, entwickelt mit React Native"
          }
          imageSize={"w-20"}
          gitHubLink={"https://github.com/JuliaKleber/MastermindReactNative"}
          deployLink={""}
          imageLink={
            "https://github.com/JuliaKleber/MastermindReactNative/assets/142741980/d06aa979-25f4-406d-8509-0d00931c90e6"
          }
        />
        <Project
          darkMode={darkMode}
          language={language}
          title={"Minesweeper"}
          tools={["Vanilla JS", "Bootstrap"]}
          englishDescription={"A Minesweeper game"}
          germanDescription={"Eine Implementierung des Minesweeper Spiels"}
          imageSize={"w-40"}
          gitHubLink={"https://github.com/JuliaKleber/Minesweeper"}
          deployLink={"https://juliakleber.github.io/Minesweeper/"}
          imageLink={
            "https://github.com/JuliaKleber/portfolio-page/assets/142741980/eafaf7de-1f4b-4ca9-89b9-d13de69d1512"
          }
        />
        <Project
          darkMode={darkMode}
          language={language}
          title={"Tic Tac Toe"}
          tools={["Vanilla JS", "CSS", "Canvas"]}
          englishDescription={
            "A Tic Tac Toe game with one and two player modes"
          }
          germanDescription={
            "Ein Tic Tac Toe Spiel für ein und für zwei Spieler"
          }
          imageSize={"w-32"}
          gitHubLink={"https://github.com/JuliaKleber/TicTacToe"}
          deployLink={"https://juliakleber.github.io/TicTacToe/"}
          imageLink={
            "https://github.com/JuliaKleber/PortfolioPage/assets/142741980/f0071c07-bdd4-4901-9874-93e8001c4ea6"
          }
        />
      </div>
    </div>
  );
};

export default Projects;
