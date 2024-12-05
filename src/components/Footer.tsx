import { Link } from "react-router-dom";
import YoutubeIcon from "../assets/Icons/YoutubeIcon";
import InstagramIcon from "../assets/Icons/InstagramIcon";
import FacebookIcon from "../assets/Icons/facebook.svg";
import WebsiteIcon from "../assets/Icons/website.svg";

const Footer = () => {
  return (
    <>
      <footer className="w-full text-neutral-400 mt-20 bg-red-900">
        {/* Copyright and Social Links */}
        <div className="w-full py-14">
          <div className="max-w-[86vw] md:max-w-[88vw] xl:max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-start">
            {/* Logo and Caption */}
            <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
              <div className="md:block flex flex-col items-center justify-center text-center md:text-left w-full md:w-[410px]">
                <img
                  className="w-12 cursor-pointer"
                  src={"https://i.ibb.co/41gGKnr/msp-logo.png"}
                  alt=""
                />
                <p className="text-white text-[11px] lg:text-[13px] xl:text-[15.5px] font-semibold mt-3">
                  &copy; {new Date().getFullYear()} Makkal Sinthani Peravai,
                  Inc. All rights reserved.
                </p>
              </div>
              <p className="text-white text-opacity-40 text-[11px] lg:text-[13px] xl:text-[15.5px] mt-1.5 font-medium mx-auto md:mx-0 w-[320px] max-w-[86vw] lg:w-[370px] xl:w-[410px]">
                All trademarks, logos, and brand names are the property of their
                respective owners.
              </p>
            </div>

            {/* Social Links */}
            <div className="mx-auto md:mx-0 flex space-x-4">
              <Link
                to="https://www.youtube.com/@makkalsinthanaiperavai"
                target="_blank"
              >
                <YoutubeIcon />
              </Link>
              <Link
                to="https://www.instagram.com/makkalsinthanaiperavai/"
                target="_blank"
              >
                <InstagramIcon />
              </Link>
              <Link
                to="https://www.facebook.com/makkalsinthanaiperavaierode"
                target="_blank"
              >
                <img src={FacebookIcon} className="w-5" alt="" />
              </Link>
              <Link
                to="https://www.makkalsinthanaiperavai.org/"
                target="_blank"
              >
                <img src={WebsiteIcon} className="w-4 mt-0.5" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
