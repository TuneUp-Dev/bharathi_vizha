import Logo from "../../assets/msp_logo.png";

const AboutMSP = () => {
  return (
    <>
      <div className="w-full h-auto mt-24">
        <div className="bg-red-900 w-full h-auto">
          <div className="w-full max-w-[1200px] mx-auto h-auto px-5 sm:px-10 flex justify-center items-center">
            <div className="w-full rounded-xl flex flex-col-reverse lg:flex-row justify-between items-center gap-y-10 lg:gap-x-10 lg:gap-y-0 px-5 sm:px-10 lg:px-16 py-8">
              {/* Text Content */}
              <div className="w-full h-auto">
                <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] text-amber-500 font-bold mb-5 text-center lg:text-left leading-[55px]">
                  மக்கள் சிந்தனைப் பேரவை
                </h1>
                <p className="text-[14px] sm:text-[16px] text-white font-medium leading-relaxed text-justify lg:text-left">
                  இந்தியாவின் தலைசிறந்த கவிஞர்களில் ஒருவராகும். அவர் 1882 ஆம்
                  ஆண்டு டிசம்பர் 11 அன்று தமிழ்நாட்டின் எட்டயபுரத்தில்
                  பிறந்தார். பாரதியார் தனியுரிமை, சமத்துவம், தேசபக்தி, மகளிர்
                  சுதந்திரம் மற்றும் சமூக நீதிக்காக பாடுபட்ட கவிஞர், எழுத்தாளர்
                  மற்றும் தேசியவாதியாகத் திகழ்ந்தார். தான் எழுதிய கவிதைகள் மூலம்
                  தமிழ் இலக்கியத்திற்கு புதிய ஒளியை வழங்கியவர். அவர் "தமிழ்
                  காற்று".
                </p>
              </div>

              {/* Image */}
              <img
                src={Logo}
                className="w-full max-w-[300px] sm:max-w-[400px] rounded-xl object-cover shadow-md md:shadow-none"
                alt="MSP Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMSP;
