import React from "react";

const Project = ({
  title,
  image,
  imageSize,
  gitHubLink,
  deployLink,
  description,
  descriptionSize,
  tools,
}) => {
  const goToDeploy = () => {
    window.location.href = deployLink;
  };

  const goToGitHub = () => {
    window.location.href = gitHubLink;
  };

  return (
    <div className="m-6 p-4 min-w-[400px] max-w-[400px] sm:sm:max-w-[600px] flex flex-col justify-center items-center rounded-sm shadow-costum">
      <div className="flex flex-row justify-center items-center">

        <div className="flex flex-col justify-center items-center">

          <h3 className="font-cursive">{title}</h3>

          <div className="max-w-80 flex flex-row flex-wrap justify-center">
            {tools.map((tool) => {
              return (
                <span className="py-0 px-2 mx-1 my-1 rounded-xl bg-red-100">
                  {tool}
                </span>
              );
            })}
          </div>

          <div className="mt-2 flex flex-row justify-center items-center">
            {deployLink !== "" && (
              <button
                className="py-1 px-2 mx-1 my-1 rounded-md shadow-md bg-red-300 hover:bg-red-400"
                onClick={() => goToDeploy()}
              >
                View Live
              </button>
            )}
            <button
              className="py-1 px-2 mx-1 my-1 rounded-md shadow-md bg-red-300 hover:bg-red-400"
              onClick={() => goToGitHub()}
            >
              GitHub
            </button>

          </div>
        </div>

        <img
          className={`mt-4 ms-4 ${imageSize} rounded-sm shadow-sm`}
          src={image}
          alt="project"
        />

      </div>

      <p className={`my-3 text-center`}>{description}</p>

    </div>
  );
};

export default Project;
