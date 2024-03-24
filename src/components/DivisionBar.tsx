const DivisionBar = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div
      className={`my-4 border-t-2 ${
        darkMode ? "border-black" : "border-pink-100"
      }`}
    ></div>
  );
};

export default DivisionBar;
