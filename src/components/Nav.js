import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className='p-3 flex flex-col items-end'>
      <FontAwesomeIcon icon={faBars} onClick={() => setCollapsed((prev) => !prev)} className='cursor-pointer' />
      {collapsed && (
        <>
          <p>Profile</p>
          <p>Projects</p>
        </>
      )}
    </div>
  );
};

export default Nav;
