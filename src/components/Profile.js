import React from "react";
import Bio from "./Bio";
import Hobbies from "./Hobbies";
import Toolkit from "./Toolkit";
import Contact from "./Contact";

const Profile = ({ darkMode }) => {
  return (
    <div className="flex flex-col">
      <Bio
        darkMode={darkMode}
        textColor={darkMode ? "text-purple-300" : "text-darkMagenta"}
      />
      <div
        className={`my-2 w-[650px] border-t-2 ${darkMode && "border-gray-950"}`}
      ></div>
      <Toolkit
        darkMode={darkMode}
        textColor={darkMode ? "text-purple-300" : "text-darkMagenta"}
      />
      <div
        className={`my-2 w-[650px] border-t-2 ${darkMode && "border-gray-950"}`}
      ></div>
      <Hobbies
        darkMode={darkMode}
        textColor={darkMode ? "text-purple-300" : "text-darkMagenta"}
      />
      <div
        className={`my-2 w-[650px] border-t-2 ${darkMode && "border-gray-950"}`}
      ></div>
      <Contact
        darkMode={darkMode}
        textColor={darkMode ? "text-purple-300" : "text-darkMagenta"}
      />
      <div
        className={`my-2 md:hidden w-[650px] border-t-2 ${
          darkMode && "border-gray-950"
        }`}
      ></div>
    </div>
  );
};

export default Profile;
