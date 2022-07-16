import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ name, id, path, click, color }) => {
  return (
    <NavLink
      to={path}
      key={id}
      onClick={click}
      className={`md:mr-0 text-base uppercase  flex justify-center  md:border-0 w-full items-center py-2 font-heading  text-${color}  border-b border-b-white md:border-b-none transition duration-500`}
    >
      {name}
    </NavLink>
  );
};

export default NavItem;
