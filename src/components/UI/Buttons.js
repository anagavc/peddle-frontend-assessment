import { NavLink } from "react-router-dom";

export const PrimaryButton = ({ path, name, click, bgColor, py, position }) => {
  const buttonStyle = `text-base ${position} bg-${bgColor} py-${py}   text-white uppercase hover:text-white hover:bg-[#7F1E7B] rounded-full flex justify-center w-full items-center  px-8 font-heading transition duration-300`;
  return (
    <>
      {path ? (
        <NavLink to={path} className={buttonStyle} key={name + "button"}>
          {name}
        </NavLink>
      ) : (
        <button type="submit" className={buttonStyle} onClick={click}>
          {name}
        </button>
      )}
    </>
  );
};
export const SecondaryButton = ({
  path,
  name,
  bgColor,
  textColor,
  borderColor,
  click,
}) => {
  const buttonStyle = `text-base bg-${bgColor} border border-${borderColor} hover:border-sec py-2 text-${textColor} hover:text-pry-50 hover:bg-sec rounded-full flex justify-center w-full items-center  px-8 font-heading transition duration-300`;
  return (
    <>
      {path ? (
        <NavLink to={path} className={buttonStyle} key={name + "button"}>
          {name}
        </NavLink>
      ) : (
        <button type="submit" className={buttonStyle} onClick={click}></button>
      )}
    </>
  );
};
