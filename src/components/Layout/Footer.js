import { FooterButton } from "../UI/Buttons";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
const Footer = () => {
  return (
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
  );
};

export default Footer;
