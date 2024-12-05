import React from "react";
import bgImage from "../../assets/bg.webp";
import { Player } from "@lottiefiles/react-lottie-player";

const Agenda = () => {
  // List of image URLs
  const contents = [
    "1) முனைவர் சொ. சேதுபதி அவர்களுக்கு 'பாரதி விருது' வழங்கும் நிகழ்வு",
    "2) தவத்திரு குன்றக்குடி அடிகளார் அவர்களின் திருவுருவப் படத்திறப்பு",
    "3) தலைமை : திரு எஸ்கேஎம். மயிலானந்தன் அவர்கள் \n( தலைவர். தேசிய நல விழிப்புணர்வு இயக்கம், ஈரோடு)",
    "4) வரவேற்புரை: திரு ந. அன்பரசு அவர்கள், \n( செயலாளர், மக்கள் சிந்தனைப் பேரவை )",
    "5) விழா அறிமுகவுரை: திரு த. ஸ்டாலின் குணசேகரன் அவர்கள், \n(தலைவர், மக்கள் சிந்தனைப் பேரவை)",
    "6) 'பாரதி ஜோதி'யை ஏற்றி அணிவகுப்பைத் துவக்கி வைத்தல்: டாக்டர் என்.எஸ். சத்தியசுந்தரி அவர்கள் \n(தலைவர், பவானி நதி பாதுகாப்புக் கூட்டமைப்பு, கோபி)",
    "7) தவத்திரு குன்றக்குடி அடிகளார் அவர்களின் திருவுருவப் படத்தைத் திறந்து வைத்து உரை: திரு பொன்னீலன் அவர்கள், \n(சாகித்திய அகாதெமி விருது பெற்ற எழுத்தாளர்)",
    "8) 'பாரதி விருது' வழங்கி விழாச் சிறப்புரை: தவத்திரு குன்றக்குடி பொன்னம்பல அடிகளார் அவர்கள்",
    "9) ஏற்புரை: விருதாளர் முனைவர் சொ. சேதுபதி அவர்கள் \n(கிருங்கை சேதுபதி)",
    "10) நன்றியுரை: பேராசிரியர் கோ. விஜயராமலிங்கம் அவர்கள் \n(துணைத் தலைவர், மக்கள் சிந்தனைப் பேரவை)",
  ];

  return (
    <div
      className="h-auto text-center md:text-start mt-32 pb-16 md:pb-20 flex flex-col items-center justify-start px-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-[21px] md:text-[40px] xl:text-[50px] text-amber-500 font-bold mb-10 mt-20">
        பாரதி விழா 2024 தொகுப்பு
      </h1>
      <div className="space-y-10 md:space-y-0 min-w-full">
        {contents.map((content, index) => {
          // Split content by newline and render parts with <br />
          const formattedContent = content.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ));

          const isAnimationVisible = index < contents.length - 1;

          return (
            <div
              key={index}
              className={`w-[90vw] mx-auto h-auto xl:h-auto lg:h-[440px] sm:min-w-[560px] md:h-[400px] lg:min-w-[960px] xl:min-w-[1200px] md:mt-[-120px] md:pt-[140px] flex flex-col md:flex-row items-center justify-center ${
                index === contents.length - 1
                  ? "lg:pl-[38.8rem] lg:justify-end"
                  : index % 2 === 0
                  ? "lg:justify-start"
                  : "lg:justify-end"
              }`}
            >
              {isAnimationVisible && index % 2 !== 0 ? (
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/951d063e-1c45-4210-abb7-451ac04ccc9b/pet0scTJjB.json"
                  style={{
                    width: "300px",
                    marginTop: "15rem",
                    marginBottom: "-10rem",
                    marginLeft: "23rem",
                    marginRight: "-3rem",
                    rotate: "120deg",
                    filter: "hue-rotate(200deg) brightness(0.8)",
                  }}
                  className="hidden lg:block"
                />
              ) : null}
              <div
                className={`w-[90vw] mx-auto sm:w-[560px] flex justify-center items-center text-center bg-gray-200 p-8 md:w-[600px] lg:min-w-[450px] md:h-[360px] lg:h-[300px] xl:w-[600px] rounded-lg shadow-lg overflow-hidden ${
                  index % 2 === 0 ? "left-0" : "right-0"
                }`}
              >
                <h1 className="text-[14px] md:text-[20px] lg:text-[21px] xl:text-[22px] font-medium">
                  {formattedContent}
                </h1>
              </div>
              {isAnimationVisible && index % 2 === 0 ? (
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/951d063e-1c45-4210-abb7-451ac04ccc9b/pet0scTJjB.json"
                  style={{
                    width: "300px",
                    marginTop: "15rem",
                    marginBottom: "-10rem",
                    marginRight: "23rem",
                    marginLeft: "-3rem",
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
      <h1 className="text-[12px] md:text-[15px] xl:text-[19px] text-center text-red-900 bg-amber-500 p-5 rounded-xl font-bold mb-10 mt-20 md:mt-24 lg:mt-28">
        பாரதி விருது கேடயம் மற்றும் தகுதிப் பட்டயத்துடன் பொற்கிழியாக ரூ.
        50,000/- தொகையை உள்ளடக்கியதாகும்
      </h1>
    </div>
  );
};

export default Agenda;
