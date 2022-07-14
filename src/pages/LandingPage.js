import { PrimaryButton } from "../components/UI/Buttons";
import NavBar from "../components/Navigation/NavBar";
import CountDownBox from "../components/UI/CountDownBox";
import Input from "../components/UI/Input";
const countDown = [
  {
    number: 7,
    text: "Days",
  },
  {
    number: 24,
    text: "Hours",
  },
  {
    number: 54,
    text: "Minutes",
  },
  {
    number: 11,
    text: "Seconds",
  },
];
const LandingPage = () => {
  return (
    <div className="bg-bgImage flex px-12 flex-col justify-center items-center  h-full w-full">
      <navbar>
        <NavBar />
      </navbar>

      <main className="flex flex-col justify-between h-screen space-y-6 py-36">
        <div className="bg-gradient-to-t from-[#19073B] to-[#7F1E7B] h-24 w-24 rounded-full py-12 absolute top-24 left-40"></div>

        <div className="flex flex-col justify-center items-center w-full px-24 space-y-6">
          <h1 className="font-heading text-5xl text-white uppercase font-semibold text-center leading-loose">
            something awesome is <span className="block lead">coming soon</span>
          </h1>
          <p className="font-heading text-base text-center text-white">
            Your all in one affiliate marketing and tracking software{" "}
            <span className="font-bold top">track,</span>{" "}
            <span className="font-bold">automate</span> and{" "}
            <span className="block">
              <span className="font-bold">optimize</span> your campaigns.
            </span>
          </p>
          <div className="h-20 w-20 rounded-full bg-gradient-to-t from-[#19073B] to-[#213F72]  py-8 absolute top-2/4 right-56"></div>
          <div className="flex justify-between space-x-2">
            {countDown.map((count) => (
              <CountDownBox number={count.number} text={count.text} />
            ))}
          </div>
          <div className="flex justify-between  items-center space-x-8">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>

          <div className="w-full flex justify-between relative">
            <input
              placeholder="Enter your email address"
              className="bg-white w-full placeholder:text-black rounded-full text-black border-b border-b-black py-4 px-8 pr-24 font-heading text-base  focus:outline-none  focus:border-black transition focus:ring-[#707070] focus:ring-1 duration-300"
            />
            <PrimaryButton
              bgColor="pry-50"
              name="Join our waiting list"
              py="4"
              position=" absolute top-0 right-0 w-2/5 drop-shadow border border-[#7F1E7B] "
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
