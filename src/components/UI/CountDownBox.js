const CountDownBox = ({ number, text }) => {
  return (
    <div className="bg-white rounded py-6 px-2 flex flex-col justify-center items-center w-24 h-30">
      <h2 className="text-[#000] font-heading text-3xl font-semibold">
        {number}
      </h2>
      <p className="text-[#000] font-heading text-base">{text}</p>
    </div>
  );
};

export default CountDownBox;
