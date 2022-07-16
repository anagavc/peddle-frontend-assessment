import NavBar from "../components/Navigation/NavBar";
import { NavLink } from "react-router-dom";
import { FooterButton } from "../components/UI/Buttons";
import { useState } from "react";
import ContactPopOver from "./Contact";
import dots from "../images/dots.png";
import { ArrowForward } from "@mui/icons-material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
const About = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="bg-bgImage bg-cover flex px-6 lg:px-0 flex-col py-12 w-full space-y-16 lg:space-y-20">
      <navbar className="flex justify-between">
        <NavBar
          bgColor="#1f0041"
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
      <div className="flex flex-col lg:flex-row lg:justify-between  w-full h-full relative">
        <div className="hidden lg:block h-3/5 w-1/6  bg-gradient-to-t from-[#19073B] to-[#7F1E7B]  py-8 absolute top-32 left-80 z-10 "></div>

        <div className="flex flex-col justify-center lg:justify-around space-y-12 items-center h-full px-12 py-16 lg:py-48 backdrop-filter backdrop-blur-xl bg-[#7F1E7B]   bg-opacity-20   w-full lg:w-2/4 z-20">
          <div className="flex  space-x-2 lg:px-4 w-full items-center justify-center">
            <span className="bg-white h-1 w-20"></span>
            <p className="text-base uppercase text-white font-heading">
              about us
            </p>
          </div>
          <div className="w-full ">
            <h3 className="text-3xl lg:text-6xl font-heading  text-white w-full lg:ml-80 self-start leading-loose ">
              Built for Saas and Ecommerce
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center px-4 lg:px-24 w-full py-12 lg:w-2/4 lg:py-24h-full relative ">
          <div className=" h-40 w-40 rounded-full bg-gradient-to-t from-[#19073B] to-[#213F72] lg:py-4 py-8 absolute -top-96 lg:top-32 right-12"></div>

          <p className="text-base  text-white font-heading  lg:mt-96 text-justify">
            Our tools are easy to set up and use with a user friendly dashboard
            that enables you to set up, launch, automate and manage
            multi-affiliate campaigns in 5 minutes.
          </p>
        </div>
      </div>
      <div className="w-full lg:px-48">
        <h3 className="text-2xl lg:text-5xl font-heading  text-white w-full leading-loose  lg:tracking-wide text-justify">
          Metricks was developed because just like you, we needed a product that
          could give us <span className="font-bold">good value.</span>
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-stretch w-full relative">
        <div className="flex flex-col justify-center items-center lg:px-24 py-8 w-full lg:w-2/4 space-y-12 h-full ">
          <div className="flex  space-x-2  w-full items-center ">
            <p className="text-base uppercase text-white font-heading border-b border-b-white w-20 flex justify-center items-center">
              01
            </p>

            <p className="text-base uppercase text-white font-heading">
              Why us?
            </p>
          </div>
          <div className="w-full flex flex-col space-y-8 mb-48">
            <p className="text-base  text-white font-heading text-justify">
              We pride ourselves in our ability to innovate and create
              world-class tools that provide reliable and efficient touchpoints
              between advertisers and affiliates.
            </p>
          </div>
          <div className="hidden lg:block w-4/5 lg:w-full">
            <img src={dots} alt="dotted patterns" className="" />
          </div>
        </div>
        <div className="block h-40 lg:h-3/5 w-80 bg-gradient-to-t from-[#19073B] to-[#213F72]  py-8 absolute top-96 lg:top-32 lg:right-80 z-10"></div>

        <div className="flex flex-col justify-around space-y-12  h-full px-4 lg:px-24 py-24 backdrop-filter backdrop-blur-xl bg-[#7F1E7B]   bg-opacity-20   w-full lg:w-2/4 z-20">
          <div className="flex  space-x-2  w-full items-center ">
            <p className="text-base uppercase text-white font-heading border-b border-b-white w-20 flex justify-center items-center">
              02
            </p>

            <p className="text-base uppercase text-white font-heading">
              growing with you
            </p>
          </div>
          <div className="w-full flex flex-col space-y-8">
            <p className="text-base  text-white font-heading text-justify">
              Leveraging the best technology, we have developed an all-in-one
              affiliate marketing tracking software, a genius tool to help you
              track, automate and optimize your influencer campaigns, all from
              one dashboard.
            </p>
            <p className="text-base  text-white font-heading text-justify">
              Our team of experts are constantly brainstorming, testing and
              developing new solutions with only one thing in mind - your
              business growth. Your success is our success and by giving you the
              tools you need to scale, we grow as well.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <div className="block h-3/5 w-2/4 lg:w-80 bg-gradient-to-t from-[#1C0C28] to-[#7F4129]  py-8 absolute lg:top-20 top-40 lg:right-48 z-10"></div>
        <div className="flex flex-col justify-around space-y-8  h-full px-8 lg:px-24 py-12 lg:py-24 backdrop-filter backdrop-blur-xl bg-[#7F1E7B]   bg-opacity-20   w-full z-20 relative">
          <h6 className="text-white text-2xl font-heading">Got a Question?</h6>
          <p className="text-base  text-white font-heading text-justify">
            See how Metricks can help your business grow with the best Affiliate
            Marketing Tracking Software.
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
      <div className="w-full justify-center flex flex-col space-y-4 h-full ">
        <div className="flex justify-center   items-start space-x-8 text-white">
          <FooterButton link="https://www.facebook.com" icon={<Facebook />} />
          <FooterButton link="https://www.youtube.com" icon={<YouTube />} />
          <FooterButton link="https://www.linkedin.com" icon={<LinkedIn />} />
          <FooterButton link="https://www.instagram.com" icon={<Instagram />} />
          <FooterButton link="https://www.twitter.com" icon={<Twitter />} />
        </div>
        <div className="flex space-x-8 justify-center items-center">
          <FooterButton link="/terms" icon="Terms of service" />
          <FooterButton link="/privacy" icon="Privacy policy" />
        </div>
        <p className="text-[#707070] text-base font-heading text-center">
          {" "}
          Copyright 2021 &copy; Peddle Technologies. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default About;
