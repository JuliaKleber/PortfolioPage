import React from "react";
import Bio from "./Bio";
import Hobbies from "./Hobbies";
import Toolkit from "./Toolkit";
import Contact from "./Contact";

const Profile = () => {
  return (
    <div className="2xl:me-20 flex flex-col justify-center items-center mt-8">
      {/* <h2 className="text-5xl mt-10 mb-3">My Profile</h2>
      <div className="mt-2 mb-1 border-t-2 w-[650px]"></div>
      <div className="mb-2 border-t-2 w-[650px]"></div> */}
      <Bio />
      <div className="my-2 border-t-2 w-[650px]"></div>
      <Toolkit />
      <div className="my-2 border-t-2 w-[650px]"></div>
      <Hobbies />
      <div className="my-2 border-t-2 w-[650px]"></div>
      <Contact />
    </div>
  );
};

export default Profile;
