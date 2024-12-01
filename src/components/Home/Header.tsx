import { useEffect, useState } from "react";
import Background from "../../assets/background.webp";

const Header = ({ snapAlign = "start" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <>
      <div
        style={{ scrollSnapAlign: snapAlign }}
        className="w-full h-screen md:h-[600px] lg:h-[700px] xl:h-[800px] xl:max-h-screen bg-red-950 overflow-hidden relative noto"
      >
        {/* Background Image */}
        <div className="w-full h-full flex xl:block justify-center items-end">
          <img
            src={Background}
            className="min-w-[140vh] sm:w-[650px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] h-auto mx-auto bottom-[-30px] xl:mt-24 z-10 relative object-cover select-none"
            alt="Background"
          />
          <div className="absolute bottom-0 z-30 w-full h-[60px] md:h-[100px] bg-gradient-to-t from-red-950 to-transparent"></div>
        </div>

        <div
          className={`absolute md:hidden top-[110px] text-center w-full flex justify-center items-center transform text-amber-500 font-bold transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          } text-[50px] sm:text-[60px]`}
        >
          <span className="">
            பாரதி விழா
            <span className="absolute text-[23px] sm:text-[23px] text-white top-[53px] sm:top-[60px] -ml-[30px]">
              2024
            </span>
          </span>
        </div>

        <div className="hidden md:block">
          {/* Left Text */}
          <div
            className={`absolute z-0 top-[120px] sm:top-1/2 left-[75px] transform -translate-y-1/2 text-amber-500 font-bold transition-all duration-1000 ease-in-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            } text-[40px] sm:text-[60px] md:text-[65px] lg:text-[100px] xl:text-[13vw]`}
          >
            பாரதி
          </div>
          {/* Right Text */}
          <div
            className={`absolute z-0 top-[120px] sm:top-1/2 right-[75px] transform -translate-y-1/2 text-amber-500 font-bold text-right transition-all duration-1000 ease-in-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            } text-[40px] sm:text-[60px] md:text-[65px] lg:text-[100px] xl:text-[13vw]`}
          >
            விழா
            <span className="absolute text-[12px] sm:text-[18px] md:text-[20px] lg:text-[28px] xl:text-[40px] text-white top-[44px] sm:top-[60px] md:top-[80px] lg:top-[110px] xl:top-[190px] right-0">
              2024
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
