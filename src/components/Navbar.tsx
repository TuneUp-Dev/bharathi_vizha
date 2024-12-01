import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/msp_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div
        className={`w-full h-[60px] md:h-[80px] bg-amber-500 rounded-b-[14px] md:rounded-b-[20px] px-10 md:px-20 flex justify-between items-center fixed top-0 left-0 z-50 ${
          isMenuOpen ? "shadow-none" : "shadow-sm"
        }`}
      >
        {/* Logo */}
        <div>
          <Link to={"/"}>
            <img src={Logo} className="w-[40px] md:w-[60px]" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex list-none justify-between items-center gap-x-10 text-red-800 text-[18px] font-medium">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About us" },
            { path: "/1998-2006", label: "1998 - 2006" },
            { path: "/2007-2015", label: "2007 - 2015" },
            { path: "/2016-2023", label: "2016 - 2023" },
          ].map((link) => (
            <li
              key={link.path}
              className={`cursor-pointer hover:text-white transition-all duration-300 ease-in-out ${
                isActive(link.path) ? "underline underline-offset-4" : ""
              }`}
            >
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Contact Us Button (Visible in all screen sizes) */}
        <div className="hidden lg:block">
          <Button className="bg-red-800 text-white" size="lg">
            Contact us
          </Button>
        </div>

        {/* Hamburger Menu Icon */}
        <div
          className="lg:hidden text-red-800 text-2xl md:text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed pt-[90px] md:pt-[125px] top-0 z-40 left-0 min-h-[250px] sm:min-h-[250px] w-full px-20 bg-amber-500 rounded-b-[20px] md:rounded-b-[60px] shadow-md grid grid-cols-2 sm:grid-cols-3 items-center gap-y-3 md:gap-y-5 py-8 md:py-20 transition-all duration-700 ease-in-out ${
          isMenuOpen ? "top-0" : "-top-[200px]"
        } lg:hidden`}
      >
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About us" },
          { path: "/1998-2006", label: "1998 - 2006" },
          { path: "/2007-2015", label: "2007 - 2015" },
          { path: "/2016-2023", label: "2016 - 2023" },
        ].map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-red-800 text-[18px] font-medium ${
              isActive(link.path) ? "underline underline-offset-4" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Button className="bg-red-800 text-white" size="lg">
          Contact us
        </Button>
      </div>
    </>
  );
};

export default Navbar;
