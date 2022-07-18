import { NavLink } from "react-router-dom";

export const FooterButton = ({ icon, link }) => {
  return (
    <NavLink
      to={link}
      className="text-[#707070] hover:text-[#213F72] transition duration-300"
    >
      {icon}
    </NavLink>
  );
};
export const ShareButton = ({ icon, link }) => {
  return (
    <NavLink
      to={link}
      className="text-white bg-gradient-to-t from-[#19073B] to-[#213F72] hover:text-pry-200 p-2 rounded transition duration-300"
    >
      {icon}
    </NavLink>
  );
};
export const PrimaryButton = ({
  path,
  name,
  click,
  bgColor,
  py,
  position,
  textColor,
}) => {
  const buttonStyle = `text-base ${position} bg-pry-50 py-${py}   text-${textColor} uppercase hover:text-white hover:bg-[#7F1E7B] rounded-full flex justify-center w-full items-center   font-heading transition duration-300`;
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
