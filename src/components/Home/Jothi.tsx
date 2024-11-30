import JothiImg from "../../assets/background.webp";

const Jothi = ({ snapAlign = "start" }) => {
  return (
    <div
      style={{ scrollSnapAlign: snapAlign }}
      className="w-full max-w-[1200px] mx-auto h-auto pt-10 px-5 sm:px-10 lg:pt-36 flex justify-center items-center"
    >
      <div className="w-full bg-gray-100 rounded-xl flex flex-col lg:flex-row justify-between items-center gap-y-10 lg:gap-y-0 px-5 sm:px-10 lg:px-16 py-8">
        {/* Image */}
        <img
          src={JothiImg}
          className="w-full max-w-[300px] sm:max-w-[400px] rounded-xl object-cover"
          alt="Jothi"
        />

        {/* Text Content */}
        <div className="w-full h-auto">
          <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] text-red-900 font-bold mb-5 text-center lg:text-left">
            பாரதி ஜோதி
          </h1>
          <p className="text-[14px] sm:text-[16px] font-medium leading-relaxed text-justify lg:text-left">
            இந்தியாவின் தலைசிறந்த கவிஞர்களில் ஒருவராகும். அவர் 1882 ஆம் ஆண்டு
            டிசம்பர் 11 அன்று தமிழ்நாட்டின் எட்டயபுரத்தில் பிறந்தார். பாரதியார்
            தனியுரிமை, சமத்துவம், தேசபக்தி, மகளிர் சுதந்திரம் மற்றும் சமூக
            நீதிக்காக பாடுபட்ட கவிஞர், எழுத்தாளர் மற்றும் தேசியவாதியாகத்
            திகழ்ந்தார். தான் எழுதிய கவிதைகள் மூலம் தமிழ் இலக்கியத்திற்கு புதிய
            ஒளியை வழங்கியவர். அவர் "தமிழ் காற்று".
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jothi;
