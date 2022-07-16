import React, { useState } from "react";
import logoWhite from "../../images/logoWhite.png";
import logoPurple from "../../images/logoPurple.png";
import { Close, Menu } from "@mui/icons-material";
import NavItem from "./NavItem";
import { PrimaryButton } from "../UI/Buttons";
import { NavLink } from "react-router-dom";
const NavBar = ({ bgColor, showContact, setShowContact }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  const navItems = [
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Github",
      path: "/github",
    },
  ];

  return (
    <div
      className={`  lg:bg-[${bgColor} backdrop-filter
     backdrop-blur-xl  bg-opacity-20  flex justify-between w-full fixed top-0 left-0 px-12 z-50`}
    >
      <div className="flex justify-between items-center lg:py-3 py-2 z-10 flex-1">
        <div className="flex justify-center items-center  h-full">
          <NavLink to="/">
            {bgColor === "white" ? (
              <img src={logoPurple} alt="logo" className="w-3/5 lg:w-full" />
            ) : (
              <img src={logoWhite} alt="logo" className="w-3/5 lg:w-full" />
            )}
          </NavLink>
        </div>

        <div
          className="text-3xl text-white absolute right-4 lg:hidden top-2 transition duration-300 "
          onClick={() => setOpen(!open)}
        >
          {open ? <Close /> : <Menu />}
        </div>
      </div>
      <div className="lg:flex  items-center  hidden w-3/5">
        {navItems.map((link) => (
          <NavItem
            name={link.name}
            color={
              bgColor === "white"
                ? "pry-200 hover:text-[#FF00F7]"
                : "white hover:text-[#7F1E7B]"
            }
            path={link.path}
            id={link.name + "desktop"}
            key={link.name + "desktop"}
          />
        ))}
        <PrimaryButton
          name="Contact Us"
          textColor="white"
          py="4 "
          click={() => {
            setShowContact(!showContact);
          }}
        />
      </div>
      {/* mobile navigation  begins*/}
      <div
        className={`lg:hidden flex tr flex-col border-y-4 border-y-purple -z-10 translate-y-0 justify-between space-y-4 divide pt-12 pb-16  items-center px-12 absolute bg-[#1f0041] left-0 w-full transition-all duration-500 ease-in ${
          open ? `translate-y-0` : `-translate-y-full`
        }`}
      >
        {navItems.map((link) => {
          return (
            <NavItem
              name={link.name}
              key={link.name + "mobile"}
              color={
                bgColor === "white"
                  ? "[#1E232C] hover:text-[#FF00F7]"
                  : "white hover:text-[#7F1E7B]"
              }
              path={link.path}
              id={link.name}
              click={handleClose}
            />
          );
        })}

        <PrimaryButton
          name="Contact Us"
          path="/contact"
          textColor="white"
          py="4"
          width="2/5"
          click={handleClose}
        />
      </div>
      {/* mobile navigation  ends*/}
    </div>
  );
};

export default NavBar;
