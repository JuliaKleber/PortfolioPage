import React from "react";
import Bio from "./Bio";
import Hobbies from "./Hobbies";
import Toolkit from "./Toolkit";
import Contact from "./Contact";
import DivisionBar from './DivisionBar';

const Profile = ({ darkMode, language }) => {
  return (
    <div className="flex flex-col">
      <Bio darkMode={darkMode} language={language} />
      <DivisionBar darkMode={darkMode} />
      <Toolkit darkMode={darkMode} />
      <DivisionBar darkMode={darkMode} />
      <Hobbies darkMode={darkMode} />
      <DivisionBar darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <DivisionBar darkMode={darkMode} />
    </div>
  );
};

export default Profile;
