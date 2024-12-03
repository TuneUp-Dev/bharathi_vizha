import Newspaper from "../../assets/bharathi.png";

const Postscript = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto h-auto mt-20 px-5 sm:px-10 flex justify-center items-end">
      <div className="w-full bg-gray-100 rounded-xl text-center px-5 sm:px-10 lg:px-16 py-8">
        {/* Title */}
        <h1 className="text-[15px] sm:text-[22px] lg:text-[25px] text-black underline underline-offset-4 font-semibold mb-8">
          பின்குறிப்பு
        </h1>

        {/* Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-y-10 lg:gap-y-0 gap-x-10">
          {/* Text Section */}
          <div className="flex-1 text-start">
            <h1 className="text-[24px] sm:text-[36px] lg:text-[50px] text-red-900 font-bold mb-5 leading-[60px]">
              பேரவையின் ஜப்பான் கிளை சார்பில் பாரதி விழா:
            </h1>
            <p className="text-[14px] sm:text-[16px] leading-relaxed font-medium">
              இந்தியாவின் தலைசிறந்த கவிஞர்களில் ஒருவராகும். அவர் 1882 ஆம் ஆண்டு
              டிசம்பர் 11 அன்று தமிழ்நாட்டின் எட்டயபுரத்தில் பிறந்தார்.
              பாரதியார் தனியுரிமை, சமத்துவம், தேசபக்தி, மகளிர் சுதந்திரம்
              மற்றும் சமூக நீதிக்காக பாடுபட்ட கவிஞர், எழுத்தாளர் மற்றும்
              தேசியவாதியாகத் திகழ்ந்தார். தான் எழுதிய கவிதைகள் மூலம் தமிழ்
              இலக்கியத்திற்கு புதிய ஒளியை வழங்கியவர். அவர் "தமிழ் காற்று".
            </p>
          </div>

          {/* Image Section */}
          <img
            src={Newspaper}
            className="w-full mx-auto max-w-[150px] sm:max-w-[200px] lg:max-w-[250px] rounded-xl object-cover"
            alt="Newspaper"
          />
        </div>
      </div>
    </div>
  );
};

export default Postscript;
