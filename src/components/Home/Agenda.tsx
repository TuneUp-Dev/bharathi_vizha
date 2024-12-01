import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Agenda = ({ snapAlign = "start" }) => {
  // List of image URLs
  const images = [
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
  ];

  return (
    <div
      style={{ scrollSnapAlign: snapAlign }}
      className="h-[860px] sm:h-[1500px] md:h-[1500px] xl:h-[1800px] text-center md:text-start mt-20 flex flex-col items-center bg-red-900 justify-start px-8"
    >
      <h1 className="text-[21px] md:text-[40px] xl:text-[50px] text-amber-500 font-bold mb-10 mt-12 md:mt-32">
        பாரதி விழா 2024 தொகுப்பு
      </h1>
      <div className="space-y-0">
        {images.map((image, index) => {
          // Only add animations for all but the last image container
          const isAnimationVisible = index < images.length - 1;

          return (
            <div
              key={index}
              className={`min-w-[320px] h-[240px] xl:h-auto lg:h-[440px] sm:min-w-[560px] sm:h-[400px] md:h-[400px] lg:min-w-[960px] xl:min-w-[1200px] mt-[-90px] md:mt-[-120px] pt-[140px] flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              style={{
                scrollSnapAlign:
                  window.innerWidth >= 1024 ? snapAlign : "initial",
              }}
            >
              {" "}
              {/* Lottie Animation on the right for inverse rows */}
              {isAnimationVisible && index % 2 !== 0 ? (
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/951d063e-1c45-4210-abb7-451ac04ccc9b/pet0scTJjB.json"
                  style={{
                    width: "300px",
                    marginTop: "15rem",
                    rotate: "120deg",
                    filter: "hue-rotate(200deg) brightness(0.8)",
                  }}
                  className="hidden md:block"
                />
              ) : null}
              {/* Image Container */}
              <div
                className={`min-w-[320px] sm:w-[560px] md:w-[600px] lg:w-[500px] md:h-[360px] lg:h-[300px] xl:w-[600px] xl:h-[400px] rounded-lg shadow-lg overflow-hidden ${
                  index % 2 === 0 ? "left-0" : "right-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Image_${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Lottie Animation */}
              {isAnimationVisible && index % 2 === 0 ? (
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/951d063e-1c45-4210-abb7-451ac04ccc9b/pet0scTJjB.json"
                  style={{
                    width: "300px",
                    marginTop: "15rem",
                    rotate: "-120deg",
                    transform: "scaleX(-1)",
                    filter: "hue-rotate(200deg) brightness(0.8)",
                  }}
                  className="hidden md:block"
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Agenda;
