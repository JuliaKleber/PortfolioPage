import React from 'react';

const BigImage = ({ bigImageLink, setBigImageLink }) => {
  const image = (
    <img
      className={`w-96 rounded-md shadow-sm cursor-pointer`}
      src={bigImageLink}
      alt={`project`}
      onClick={() => setBigImageLink('')}
      type='button'
    />
  );
  return <>{bigImageLink && image}</>;
};

export default BigImage;
