interface BigImageProps {
  bigImageLink: string;
  setBigImageLink: React.Dispatch<React.SetStateAction<string>>;
}

const BigImage = ({ bigImageLink, setBigImageLink }: BigImageProps) => {
  const image = (
    <img
      className={`w-96 rounded-md shadow-sm cursor-pointer`}
      src={bigImageLink}
      alt={`project`}
      onClick={() => setBigImageLink('')}
    />
  );
  return <>{bigImageLink && image}</>;
};

export default BigImage;
