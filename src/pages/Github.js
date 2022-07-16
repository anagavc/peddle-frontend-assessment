import NavBar from "../components/Navigation/NavBar";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactPopOver from "./Contact";
import Footer from "../components/Layout/Footer";
import { Paragraph } from "../components/UI/FontStyles";
const Github = () => {
  const [showContact, setShowContact] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const getRepos = async () => {
      setIsFetching(true);
      const res = await axios.get(
        "https://api.github.com/search/repositories?q=created:>2022-06-16&sort=stars&order=desc&per_page=100"
      );
      setRepos(res.data);
      console.log(repos);
      setIsFetching(false);
    };
    getRepos();
  }, [repos]);
  return (
    <div className="bg-bgImage bg-cover flex px-6 lg:px-0 flex-col py-12 w-full space-y-16 lg:space-y-16">
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
              Github Metrics
            </p>
          </div>
          <div className="w-full ">
            <h3 className="text-xl lg:text-3xl font-heading  text-white w-full lg:ml-40 self-start leading-loose ">
              Most starred GitHub Repositories from the last thirty days.
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center px-4 lg:px-24 w-full py-12 lg:w-2/4 lg:py-24h-full relative ">
          <div className=" h-40 w-40 rounded-full bg-gradient-to-t from-[#19073B] to-[#213F72] lg:py-4 py-8 absolute -top-96 lg:top-32 right-12"></div>

          <p className="text-base  text-white font-heading  lg:mt-96 text-justify">
            This is a list of the most starred GitHub repositories from the last
            thirty days.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full  lg:px-24 justify-between h-full">
        <div className="w-full flex flex-col lg:flex-row items-center lg:space-x-6  p-6 lg:p-12 backdrop-filter backdrop-blur-xl bg-[#7F1E7B]   bg-opacity-20 ">
          <div className="w-full lg:w-48 h-40 rounded bg-white p-4">
            <img src="" alt="name" />
          </div>
          <div className="flex flex-col justify-between h-full space-y-4 lg:space-y-6 w-full mt-4 lg:mt-0">
            <h4 className="text-lg font-bold lg:text-2xl font-heading  text-white ">
              Emeka Anaga
            </h4>
            <Paragraph
              text=" This is a list of the most starred GitHub repositories from the last
            thirty days."
            />
            <div className="flex flex-col lg:flex-row gap-4 lg:space-x-4 items-center  w-full ">
              <div className="h-10 p-6  flex justify-center items-center rounded bg-pry-200 lg:w-2/6 w-full">
                <p className="text-base  text-white font-heading font-bold text-justify">
                  Stars: 10k
                </p>
              </div>
              <div className="h-10 p-6  flex justify-center items-center rounded bg-pry-200 lg:w-2/6 w-full">
                <p className="text-base  text-white font-heading font-bold text-justify">
                  Issues: 16l
                </p>
              </div>
              <p className="text-base  text-white font-heading text-justify lg:w-2/6">
                Submitted thirty days ago by{" "}
                <span className="font-bold">Emeka</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Github;
