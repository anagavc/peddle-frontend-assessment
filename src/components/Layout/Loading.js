import React from "react";

const Loading = () => {
  return (
    <div className=" animate-pulse w-full flex flex-col lg:flex-row items-center lg:space-x-6 rounded  p-6 lg:p-8 backdrop-filter backdrop-blur-xl bg-[#7F1E7B]   bg-opacity-20 ">
      <div className="w-full lg:w-48 h-full rounded bg-white p-20"></div>
      <p className="text-base  text-white font-heading font-bold text-justify">
        {" "}
      </p>
      <div className="flex flex-col justify-between h-full space-y-4 lg:space-y-6 w-full mt-4 lg:mt-0">
        <p className="text-base  text-white font-heading font-bold text-justify">
          {" "}
        </p>
        <div className="flex flex-col lg:flex-row gap-4 lg:space-x-4 items-center  w-full ">
          <div className="h-10 p-6  flex justify-center items-center rounded bg-pry-200 lg:w-2/6 w-full">
            <p className="text-base  text-white font-heading font-bold text-justify">
              {" "}
            </p>
          </div>
          <div className="h-10 p-6  flex justify-center items-center rounded bg-pry-200 lg:w-2/6 w-full">
            <p className="text-base  text-white font-heading font-bold text-justify">
              {" "}
            </p>
          </div>
          <p className="text-base  text-white font-heading text-justify w-full">
            {" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
