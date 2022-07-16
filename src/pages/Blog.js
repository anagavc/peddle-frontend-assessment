import { NavLink } from "react-router-dom";
import { useState } from "react";
import ContactPopOver from "./Contact";
import blogImage from "../images/blog.jpg";
import Footer from "../components/Layout/Footer";
import { PrimaryButton } from "../components/UI/Buttons";
import { ArrowForward } from "@mui/icons-material";

import SearchBar from "../components/UI/SearchBar";
import NavBarPurple from "../components/Navigation/NavBarPurple";
const Blog = () => {
  const newsItem = [
    {
      image: blogImage,
      date: "July 16, 2022. featured article. affiliate",
      title: "12 Popup Use Cases To Increase Conversions",

      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
    },
    {
      image: blogImage,
      date: "July 16, 2022. featured article. affiliate",
      title: "12 Popup Use Cases To Increase Conversions",

      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
    },
    {
      image: blogImage,
      date: "July 16, 2022. featured article. affiliate",
      title: "12 Popup Use Cases To Increase Conversions",

      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
    },
    {
      image: blogImage,
      date: "July 16, 2022. featured article. affiliate",
      title: "12 Popup Use Cases To Increase Conversions",

      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
    },
    {
      image: blogImage,
      date: "July 16, 2022. featured article. affiliate",
      title: "12 Popup Use Cases To Increase Conversions",

      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
    },
    {
      image: blogImage,
      date: "July 16, 2022. featured article. affiliate",
      title: "12 Popup Use Cases To Increase Conversions",

      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
    },
  ];
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="bg-white bg-cover flex flex-col py-12 w-full space-y-16 lg:space-y-16 items-center justify-center">
      <navbar className="flex justify-between">
        <NavBarPurple
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
            <span className="bg-white h-1 w-20 inline-flex"></span>
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
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 gap-8 lg:px-24 w-full ">
        <div className="flex flex-col w-full lg:w-2/5">
          <h5 className="text-purple font-heading text-2xl font-medium">
            Latest From The Blog
          </h5>
          <p className="text-purple text-base text-justify">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div className="w-full lg:w-2/6">
          <SearchBar />
        </div>
      </div>
      <div className="flex justify-around lg:justify-between gap-8 px-8 lg:px-24 h-full flex-wrap w-full">
        {newsItem.map((item, index) => (
          <div
            className="flex flex-col p-6 bg-white w-96 drop-shadow rounded space-y-4"
            key={index}
          >
            <div className="w-full">
              <img src={item.image} alt="blogger" className="" />
            </div>
            <p className="text-xs text-[#1E232C] uppercase font-heading">
              {item.date}
            </p>
            <h6 className="text-purple font-heading text-xl font-semibold">
              {item.title}
            </h6>
            <p className="text-justify text-[#1E232C] text-xs font-heading font-light">
              {item.content}
            </p>
            <NavLink
              to={`blog/${index}`}
              className="flex space-x-2 w-full items-center  text-base uppercase text-[#FF00F7] hover:text-purple font-heading transition duration-300"
            >
              <span className="h-1 w-20 bg-[#FF00F7] hover:bg-purple transition duration-300"></span>
              <p>Read more</p>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full px-8 lg:px-24 space-y-8">
        <div className="flex flex-col w-full lg:w-2/5">
          <h5 className="text-purple font-heading text-2xl font-medium">
            Recent Articles
          </h5>
          <p className="text-purple text-base text-justify">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div className="flex justify-between gap-8 h-full flex-wrap">
          {newsItem.slice(0, 3).map((item, index) => (
            <div
              className="flex flex-col p-6 bg-white w-96 drop-shadow rounded space-y-4"
              key={index}
            >
              <p className="text-xs text-[#1E232C] uppercase font-heading">
                {item.date}
              </p>
              <h6 className="text-purple font-heading text-xl font-semibold">
                {item.title}
              </h6>
              <p className="text-justify text-[#1E232C] text-xs font-heading font-light">
                {item.content}
              </p>
              <NavLink
                to={`blog/${index}`}
                className="flex space-x-2 w-full items-center  text-base uppercase text-[#FF00F7] hover:text-purple font-heading transition duration-300"
              >
                <span className="h-1 w-20 bg-[#FF00F7] hover:bg-purple transition duration-300"></span>
                <p>Read more</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="w-4/5 lg:w-2/5 flex items-center justify-center">
        <PrimaryButton name="Load more" textColor="white" py="4 " />
      </div>
      <div className="w-full relative bg-gradient-to-t from-[#19073B] to-[#213F72] ">
        <div className="block h-3/5 w-2/4 lg:w-80 bg-gradient-to-t from-[#1C0C28] to-[#7F4129]  py-8 absolute top-20 lg:right-48 z-10"></div>
        <div className="flex flex-col justify-around space-y-8  h-full px-8 lg:px-24 py-12 lg:py-24 backdrop-filter backdrop-blur-xl bg-[#7F1E7B]   bg-opacity-20   w-full z-20 relative">
          <h6 className="text-white text-2xl font-heading">
            Want to know more about Metrics ?
          </h6>
          <p className="text-base  text-white font-heading text-justify">
            Learn who we are and what drives us.
          </p>
          <button
            onClick={() => {
              setShowContact(true);
            }}
            className="text-[#FF00F7] font-heading text-base hover:text-white hidden lg:flex items-center transition duration-300"
          >
            <span>Contact Us</span>
            <ArrowForward />
          </button>
          <NavLink
            to="/contact"
            className="text-[#FF00F7] font-heading text-base hover:text-white lg:hidden flex items-center transition duration-300"
          >
            <span>Contact Us</span>
            <ArrowForward />
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
