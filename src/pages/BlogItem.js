import blogImage from "../images/blog.jpg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ContactPopOver from "./Contact";
import Footer from "../components/Layout/Footer";
import { PrimaryButton } from "../components/UI/Buttons";
import { ArrowForward, ThumbUpAlt, ThumbDownAlt } from "@mui/icons-material";
import NavBarPurple from "../components/Navigation/NavBarPurple";
import { ShareButton } from "../components/UI/Buttons";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
const BlogItem = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="bg-white bg-cover flex flex-col py-12 w-full space-y-16 lg:space-y-16 items-center justify-center relative">
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

      <div className="flex flex-col justify-center items-center gap-8 px-8  lg:px-24  h-full w-full relative">
        <div className="w- drop-shadow flex justify-center items-center h-full">
          <img
            src={blogImage}
            alt="item"
            className="w-full lg:w-4/5 h-auto p-4 lg:p-8 bg-white rounded"
          />
        </div>
        <div className="flex gap-2 lg:space-x-4 justify-center items-center">
          <p className="text-base font-heading text-purple"> July 18,2022</p>
          <div className="flex space-x-2 items-center justify-center">
            <img
              src={blogImage}
              className="rounded-full w-8 h-8"
              alt="author"
            />
            <p className="text-base font-heading text-purple"> by Paul</p>
          </div>
        </div>
        <h5 className="text-purple text-2xl font-heading font-medium">
          12 Popup Use Cases To Increase Conversions
        </h5>
        <p className="text-base font-heading text-purple text-justify">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy.
        </p>
        <h6 className="text-purple text-xl font-heading font-medium">
          Table of contents:
        </h6>
        <div className="flex flex-col lg:flex-row gap-4 lg:space-x-6 w-full justify-between">
          <div className="flex-col  ">
            <li>
              <ul className="text-base font-heading text-purple ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </ul>
            </li>
            <li>
              <ul className="text-base font-heading text-purple w-full">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </ul>
            </li>
            <li>
              <ul className="text-base font-heading text-purple ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </ul>
            </li>
            <li>
              <ul className="text-base font-heading text-purple ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </ul>
            </li>
          </div>
          <div className="flex-col items-center ">
            <li>
              <ul className="text-base font-heading text-purple ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </ul>
            </li>
            <li>
              <ul className="text-base font-heading text-purple w-full">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </ul>
            </li>
            <li>
              <ul className="text-base font-heading text-purple ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </ul>
            </li>
            <li>
              <ul className="text-base font-heading text-purple ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </ul>
            </li>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-2/5 space-y-4 justify-center items-center">
          <h6 className="text-purple text-lg font-heading font-medium">
            Share to social media
          </h6>
          <div className="flex justify-center space-x-2 ">
            <ShareButton link="https://www.facebook.com" icon={<Facebook />} />
            <ShareButton link="https://www.youtube.com" icon={<YouTube />} />
            <ShareButton link="https://www.linkedin.com" icon={<LinkedIn />} />
            <ShareButton
              link="https://www.instagram.com"
              icon={<Instagram />}
            />
            <ShareButton link="https://www.twitter.com" icon={<Twitter />} />
          </div>
        </div>
        <div className="w-full relative flex justify-center items-center">
          <div className="h-20 w-1/6  bg-gradient-to-t from-[#19073B] to-[#7F1E7B]  py-8 absolute top-8 right-8 z-10 "></div>

          <div className="flex  backdrop-filter backdrop-blur-xl bg-white justify-center items-center w-full  bg-opacity-20 space-x-2 z-20 py-24">
            <p className="text-base font-heading text-purple ">
              Do you find this article helpful ?
            </p>
            <div className="flex space-x-2 text-purple">
              <ThumbUpAlt />
              <p className="text-base font-heading text-purple ">23</p>
            </div>
            <div className="flex space-x-2 text-purple">
              <ThumbDownAlt />
              <p className="text-base font-heading text-purple ">12</p>
            </div>
          </div>
        </div>
        <form className=" flex flex-col space-y-8 w-full lg:w-4/5 justify-center items-center">
          <h6 className="text-purple text-lg font-heading font-medium">
            Add a comment
          </h6>
          <p className="text-base font-heading text-purple text-center ">
            Your email address will not be published. Required fields are
            marked*
          </p>
          <input
            placeholder="Name (required)"
            id="name"
            name="name"
            className=" w-full placeholder:text-purple text-purple border-b border-b-purple py-4 px-4 font-heading text-base  focus:outline-none  focus:border-purple transition focus:ring-[#707070] focus:ring-1 duration-300"
          />
          <input
            placeholder="Email (required)"
            id="email"
            name="email"
            className=" w-full placeholder:text-purple text-purple border-b border-b-purple py-4 px-4 font-heading text-base  focus:outline-none  focus:border-purple transition focus:ring-[#707070] focus:ring-1 duration-300"
          />
          <input
            placeholder="Comment (required)"
            id="comment"
            name="comment"
            className="bg-[#1E232C] bg-opacity-10 w-full placeholder:text-purple text-purple  py-24 px-4 font-heading text-base  focus:outline-none  focus:border-purple transition focus:ring-[#707070] focus:ring-1 duration-300"
          />
          <PrimaryButton name="Submit" py="4" textColor="white" />
        </form>
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

export default BlogItem;
