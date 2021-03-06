import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import NavBar from "../components/Navigation/NavBar";
import ContactPopOver from "./Contact";
import { Footer, RepositoryItem, Loading } from "../components/Layout";
import { useEffect, useState } from "react";
import {
  FadeDownAnimation,
  FadeUpAnimation,
} from "../components/UI/Animations";
const Github = () => {
  const [showContact, setShowContact] = useState(false);
  const [repos, setRepos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);
  useEffect(() => {
    const getRepos = async () => {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=created:>2022-06-16&sort=stars&order=desc&page=1&per_page=20`
      );
      const data = await res.data.items;
      setRepos(data);
    };
    getRepos();
  }, []);
  const fetchRepos = async () => {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=created:>2022-06-16&sort=stars&order=desc&page=${page}&per_page=20`
    );
    const data = await res.data.items;
    return data;
  };

  const fetchData = async () => {
    const reposFromServer = await fetchRepos();
    setRepos([...repos, ...reposFromServer]);
    if (page === 5) {
      setHasMore(false);
    }
    setPage(page + 1);
  };
  return (
    <>
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
        <FadeUpAnimation className="flex flex-col lg:flex-row lg:justify-between  w-full h-full relative">
          <FadeDownAnimation className="hidden lg:block h-3/5 w-1/6  bg-gradient-to-t from-[#19073B] to-[#7F1E7B]  py-8 absolute top-32 left-80 z-10 "></FadeDownAnimation>

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
            <FadeUpAnimation className=" h-40 w-40 rounded-full bg-gradient-to-t from-[#19073B] to-[#213F72] lg:py-4 py-8 absolute -top-96 lg:top-32 right-12"></FadeUpAnimation>

            <p className="text-base  text-white font-heading  lg:mt-96 text-justify">
              This is a list of the most starred GitHub repositories from the
              last thirty days.
            </p>
          </div>
        </FadeUpAnimation>
        <FadeUpAnimation className="flex flex-col w-full space-y-6  lg:px-24 justify-between h-full">
          <InfiniteScroll
            dataLength={repos.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<Loading />}
            className="space-y-6 w-full"
            endMessage={
              <h3 className="text-white font-bold text-xl lg:text-3xl text-center bg-pry-200 p-6 rounded">
                <b>Yay! That is all the top repos for now.</b>
              </h3>
            }
          >
            {repos.map((item) => (
              <RepositoryItem item={item} key={item.id} />
            ))}
          </InfiniteScroll>
        </FadeUpAnimation>
        <Footer />
      </div>
    </>
  );
};

export default Github;
