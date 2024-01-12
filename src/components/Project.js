import React from 'react';

const Project = ({ title, image, imageSize, gitHubLink, deployLink, description, role, tools, arrangement }) => {

  const goToDeploy = () => {
    // window.open = (link, '_blank');
    window.location.href = deployLink;
  }

  const goToGitHub = () => {
    // window.open = (link, '_blank');
    window.location.href = gitHubLink;
  }

  const getMoreInfo = () => {
  }

  return (
    <div className={arrangement === 'reverse'
         ? 'm-3 flex flex-col sm:flex-row-reverse justify-center items-center'
         : 'm-3 flex flex-col sm:flex-row justify-center items-center'}>

      <div className='mx-5 flex flex-col justify-center items-center'>
        <h2 className='mb-2'>{title}</h2>
        <p>{role}</p>
        <div className='max-w-80 flex flex-row flex-wrap justify-center'>
          {tools.map((tool) => {
            return <span className='py-0 px-2 mx-1 my-1 rounded-xl bg-pink-100'>{tool}</span>
          })}
        </div>
        <div className='mt-2 flex flex-row justify-center items-center'>
          {deployLink !== '' && <button className='py-1 px-2 mx-1 my-1 rounded-md shadow-lg bg-pink-300' onClick={() => goToDeploy()}>View Live</button>}
          <button className='py-1 px-2 mx-1 my-1 rounded-md shadow-lg bg-pink-300' onClick={() => goToGitHub()}>GitHub</button>
          {/* <button className='py-1 px-2 mx-1 my-1 rounded-md bg-pink-300' onClick={() => getMoreInfo()}>More Info</button> */}
        </div>
      </div>

      <img className={`${imageSize} m-5 rounded-lg shadow-xl`} src={image} alt='project' />

    </div>
  );
}

export default Project;
