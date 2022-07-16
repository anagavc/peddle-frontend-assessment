import NavBar from "../components/Navigation/NavBar";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ContactPopOver from "./Contact";

import Footer from "../components/Layout/Footer";
import { Paragraph } from "../components/UI/FontStyles";
import SearchBar from "../components/UI/SearchBar";
const Blog = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="bg-white bg-cover flex px-6 lg:px-0 flex-col py-12 w-full space-y-16 lg:space-y-16">
      <navbar className="flex justify-between">
        <NavBar
          bgColor="white"
          showContact={showContact}
          setShowContact={setShowContact}
        />
      </navbar>
      {showContact && (
        <ContactPopOver
          showContact={showContact}
          setShowContact={setShowContact}
        />
      )}
      <div className="flex flex-col lg:flex-row lg:justify-between  w-full h-full relative bg-bgImage">
        <div className="hidden lg:block h-3/5 w-1/6  bg-gradient-to-t from-[#19073B] to-[#7F1E7B]  py-8 absolute top-32 left-80 z-10 "></div>

        <div className="flex flex-col justify-center lg:justify-around lg:space-y-12 items-center h-full px-12 py-16 lg:py-24 backdrop-filter lg:backdrop-blur-xl bg-[#7F1E7B] bg-opacity-20  w-full lg:w-2/4 z-20">
          <div className="flex  space-x-2 lg:px-4 w-full items-center justify-center">
            <span className="bg-white h-1 w-20 hidden lg:inline-flex"></span>
            <p className="text-base uppercase text-white font-heading">blogs</p>
          </div>
          <div className="w-full ">
            <h3 className="text-2xl lg:text-6xl font-heading  text-white w-full lg:ml-80 self-start leading-loose ">
              Articles and News
            </h3>
            "
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-24 w-full ">
        <div className="flex flex-col w-2/5">
          <h5 className="text-purple font-heading text-2xl font-medium">
            Latest From The Blog
          </h5>
          <p className="text-purple text-base text-justify">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div className="w-2/5">
          <SearchBar />
        </div>
      </div>
      <div className="flex justify-between space-x-8 px-12">
        <div className="flex flex-col py-4 px-6 bg-white">
          <div className="w-full">
            <img src="" alt="blogger" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
