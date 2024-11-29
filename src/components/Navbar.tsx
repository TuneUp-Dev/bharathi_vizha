import { Button } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/msp.png";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="w-full h-[100px] bg-amber-500 shadow-sm rounded-b-[60px] px-20 flex justify-between items-center fixed top-0 left-0 z-50">
        <div>
          <img src={Logo} className="w-[70px]" alt="Logo" />
        </div>
        <ul className="list-none flex justify-between items-center gap-x-10 text-red-800 text-[18px] font-medium">
          <li
            className={`cursor-pointer hover:text-white transition-all duration-300 ease-in-out ${
              isActive("/") ? "underline underline-offset-4" : ""
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`cursor-pointer hover:text-white transition-all duration-300 ease-in-out ${
              isActive("/about") ? "underline underline-offset-4" : ""
            }`}
          >
            <Link to="/about">About us</Link>
          </li>
          <li
            className={`cursor-pointer hover:text-white transition-all duration-300 ease-in-out ${
              isActive("/timeline/1998-2007")
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            <Link to="/timeline/1998-2007">1998 - 2007</Link>
          </li>
          <li
            className={`cursor-pointer hover:text-white transition-all duration-300 ease-in-out ${
              isActive("/timeline/2008-2017")
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            <Link to="/timeline/2008-2017">2008 - 2017</Link>
          </li>
          <li
            className={`cursor-pointer hover:text-white transition-all duration-300 ease-in-out ${
              isActive("/timeline/2018-2024")
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            <Link to="/timeline/2018-2024">2018 - 2024</Link>
          </li>
        </ul>
        <div>
          <Button className="bg-red-800 text-white" size="lg">
            Contact us
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
