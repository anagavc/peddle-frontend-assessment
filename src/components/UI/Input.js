const Input = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="bg-transparent placeholder:text-[#707070] text-[#707070] border-b border-b-[#707070] py-2 px-4 font-heading text-base  focus:outline-none  focus:border-[#707070] transition focus:ring-[#707070] focus:ring-1 duration-300"
    />
  );
};

export default Input;
