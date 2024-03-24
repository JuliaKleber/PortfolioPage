interface ZoomedInImageProps {
  zoomedInImageLink: string;
  setZoomedInImageLink: React.Dispatch<React.SetStateAction<string>>;
}

const ZoomedInImage = ({
  zoomedInImageLink,
  setZoomedInImageLink,
}: ZoomedInImageProps) => {
  const image = (
    <div className="fixed z-10 inset-0 flex justify-center items-center">
      <img
        className="rounded-md shadow-md cursor-pointer"
        src={zoomedInImageLink}
        alt="project"
        onClick={() => setZoomedInImageLink("")}
      />
    </div>
  );
  return <>{zoomedInImageLink && image}</>;
};

export default ZoomedInImage;
