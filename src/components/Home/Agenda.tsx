import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Agenda = ({ snapAlign = "start" }) => {
  // List of image URLs
  const contents = [
    "1) முனைவர் சொ. சேதுபதி அவர்களுக்கு 'பாரதி விருது' வழங்கும் நிகழ்வு",
    "2) தவத்திரு குன்றக்குடி அடிகளார் அவர்களின் திருவுருவப் படத்திறப்பு",
    "3) தலைமை : திரு எஸ்கேஎம். மயிலானந்தன் அவர்கள்",
    "4) தலைவர். தேசிய நல விழிப்புணர்வு இயக்கம், ஈரோடு",
    "5) வரவேற்புரை: திரு ந. அன்பரசு அவர்கள், செயலாளர், மக்கள் சிந்தனைப் பேரவை",
    "6) விழா அறிமுகவுரை: திரு த. ஸ்டாலின் குணசேகரன் அவர்கள், தலைவர், மக்கள் சிந்தனைப் பேரவை",
    "7) 'பாரதி ஜோதி'யை ஏற்றி அணிவகுப்பைத் துவக்கி வைத்தல்: டாக்டர் என்.எஸ். சத்தியசுந்தரி அவர்கள்",
    "8) தலைவர், பவானி நதி பாதுகாப்புக் கூட்டமைப்பு, கோபி",
    "9) தவத்திரு குன்றக்குடி அடிகளார் அவர்களின் திருவுருவப் படத்தைத் திறந்து வைத்து உரை: திரு பொன்னீலன் அவர்கள், சாகித்திய அகாதெமி விருது பெற்ற எழுத்தாளர்",
  ];

  return (
    <div
      style={{ scrollSnapAlign: snapAlign }}
      className="h-auto text-center md:text-start mt-20 pb-20 flex flex-col items-center bg-red-900 justify-start px-8"
    >
      <h1 className="text-[21px] md:text-[40px] xl:text-[50px] text-amber-500 font-bold mb-10 mt-12 md:mt-32">
        பாரதி விழா 2024 தொகுப்பு
      </h1>
      <div className="space-y-0">
        {contents.map((contents, index) => {
          // Only add animations for all but the last image container
          const isAnimationVisible = index < contents.length - 1;

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
                    marginBottom: "-10rem",
                    rotate: "120deg",
                    filter: "hue-rotate(200deg) brightness(0.8)",
                  }}
                  className="hidden lg:block"
                />
              ) : null}
              {/* Image Container */}
              <div
                className={`min-w-[320px] sm:w-[560px] flex justify-center items-center text-center bg-gray-200 p-8 md:w-[600px] lg:w-[500px] md:h-[360px] lg:h-[300px] xl:w-[600px] rounded-lg shadow-lg overflow-hidden ${
                  index % 2 === 0 ? "left-0" : "right-0"
                }`}
              >
                <h1 className="text-[25px]">{contents}</h1>
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
                    marginBottom: "-10rem",
                    rotate: "-120deg",
                    transform: "scaleX(-1)",
                    filter: "hue-rotate(200deg) brightness(0.8)",
                  }}
                  className="hidden lg:block"
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
