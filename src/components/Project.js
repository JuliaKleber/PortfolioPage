import React from 'react';

const Project = ({ title, image, imageSize, link, description, role, tools, arrangement }) => {

  const handleClick = () => {
    // window.open = (link, '_blank');
    window.location.href = link;
  }

  return (
    <div className={arrangement === 'reverse'
         ? 'm-3 flex flex-col sm:flex-row-reverse justify-center items-center'
         : 'm-3 flex flex-col sm:flex-row justify-center items-center'}
         onClick={() => handleClick()}>
      <div className='mx-5 flex flex-col justify-center items-center'>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{role}</p>
        <div className='max-w-80 flex flex-row flex-wrap justify-center'>
          {tools.map((tool) => {
            return <span className='py-0 px-2 mx-1 my-1 rounded-xl bg-pink-100'>{tool}</span>
          })}
        </div>
      </div>
      <img className={`${imageSize} mx-5`} src={image} alt='project' />
    </div>
  );
}

export default Project;
