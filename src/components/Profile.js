import React from "react";
import Bio from "./Bio";
import Hobbies from "./Hobbies";
import Toolkit from "./Toolkit";
import Contact from "./Contact";

const Profile = () => {
  return (
    <div className="2xl:me-20 flex flex-col justify-center items-center mt-8">
      <Bio textColor={"text-darkMagenta"} />
      <div className="my-2 border-t-2 w-[650px]"></div>
      <Toolkit textColor={"text-darkMagenta"} />
      <div className="my-2 border-t-2 w-[650px]"></div>
      <Hobbies textColor={"text-darkMagenta"} />
      <div className="my-2 border-t-2 w-[650px]"></div>
      <Contact textColor={"text-darkMagenta"} />
    </div>
  );
};

export default Profile;
