import { FooterButton, PrimaryButton } from "../components/UI/Buttons";
import NavBar from "../components/Navigation/NavBar";
import Input from "../components/UI/Input";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { useState } from "react";
import ContactPopOver from "./Contact";
import { Clock } from "../components/Layout";
const LandingPage = () => {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="bg-bgImage bg-cover flex px-8 lg:px-12 flex-col justify-center items-center  w-full">
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
      <main className="flex flex-col justify-between h-full space-y-6 py-20 lg:py-36 relative">
        <div className="hidden lg:block bg-gradient-to-t from-[#19073B] to-[#7F1E7B] h-24 w-24 rounded-full py-12 absolute top-36 -left-32"></div>
        <div className="flex flex-col justify-center items-center w-full lg:px-20 space-y-6">
          <h1 className="font-heading text-xl lg:text-5xl text-white uppercase font-semibold text-center leading-loose">
            something awesome is <span className="block lead">coming soon</span>
          </h1>
          <p className="font-heading text-xs lg:text-base text-center text-white">
            Your all in one affiliate marketing and tracking software{" "}
            <span className="inlone-block font-bold top">track,</span>{" "}
            <span className="inline-block font-bold">automate</span> and{" "}
            <span className="lg:block">
              <span className="font-bold">optimize</span> your campaigns.
            </span>
          </p>
          <div className="hidden lg:block h-20 w-20 rounded-full bg-gradient-to-t from-[#19073B] to-[#213F72]  py-8 absolute top-2/4 -right-32"></div>
          <Clock />
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="w-full flex flex-col space-y-6 px-2 lg:px-8"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-4  items-center lg:space-x-4 w-full">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </div>
            <div className="w-full relative flex lg:flex-row flex-col lg:space-x-12 gap-4">
              <input
                placeholder="Enter your email address"
                className="bg-white w-full pt placeholder:text-purple rounded-full text-purple  py-4 px-8 lg:pr-48 font-heading text-base  focus:outline-none  focus:border-purple transition focus:ring-purple focus:ring-1 duration-300"
              />
              <PrimaryButton
                bgColor="pry-50"
                name="Join our waiting list"
                py="4"
                textColor="white"
                position="hidden lg:block absolute top-0 right-0 w-2/5 px-2  drop-shadow border border-[#7F1E7B] "
              />
              <PrimaryButton
                bgColor="pry-50"
                name="Join our waiting list"
                textColor="white w-full"
                py="4 lg:hidden"
              />
            </div>
          </form>
        </div>
      </main>
      <div className="relative flex justify-center items-center max-h-2/5 w-full">
        <div className="hidden lg:block h-44 w-44 rounded-full bg-gradient-to-t from-[#1C0C28] to-[#7F4129]  py-8 absolute top-28 left-72"></div>
        <footer className="flex flex-col pt-24 lg:pt-96  px-4 space-y-12 rounded-t-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  bg-[#1f0041] w-full lg:w-3/5 justify-start  border border-[#707070] mt-16">
          <div className="flex justify-center lg:-mt-64  items-start space-x-8 text-white">
            <FooterButton link="https://www.facebook.com" icon={<Facebook />} />
            <FooterButton link="https://www.youtube.com" icon={<YouTube />} />
            <FooterButton link="https://www.linkedin.com" icon={<LinkedIn />} />
            <FooterButton
              link="https://www.instagram.com"
              icon={<Instagram />}
            />
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
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
