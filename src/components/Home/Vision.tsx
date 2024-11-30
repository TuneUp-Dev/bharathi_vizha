import Bharathi from "../../assets/bharathi.png";

const Vision = ({ snapAlign = "start" }) => {
  return (
    <div
      style={{ scrollSnapAlign: snapAlign }}
      className="w-full max-w-[1200px] mx-auto h-auto pt-10 px-5 sm:px-10 lg:pt-36 flex flex-col lg:flex-row justify-between items-center gap-y-10 lg:gap-y-0 lg:gap-x-20"
    >
      {/* Bharathiyar Image */}
      <img
        src={Bharathi}
        className="rounded-2xl w-full max-w-[300px] sm:max-w-[400px] object-cover"
        alt="Subramania Bharathiyar"
      />

      {/* Vision Text */}
      <div className="text-black">
        <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] text-red-900 font-bold mb-5 text-center lg:text-left">
          நோக்கம்
        </h1>
        <p className="text-[16px] sm:text-[18px] leading-relaxed text-justify lg:text-left">
          இந்தியாவின் தலைசிறந்த கவிஞர்களில் ஒருவராகும். அவர் 1882 ஆம் ஆண்டு
          டிசம்பர் 11 அன்று தமிழ்நாட்டின் எட்டயபுரத்தில் பிறந்தார். பாரதியார்
          தனியுரிமை, சமத்துவம், தேசபக்தி, மகளிர் சுதந்திரம் மற்றும் சமூக
          நீதிக்காக பாடுபட்ட கவிஞர், எழுத்தாளர் மற்றும் தேசியவாதியாகத்
          திகழ்ந்தார். தான் எழுதிய கவிதைகள் மூலம் தமிழ் இலக்கியத்திற்கு புதிய
          ஒளியை வழங்கியவர். அவர் "தமிழ் காற்று", "பஞ்சாலி சபதம்", "குயில் பாடல்"
          போன்ற அற்புதமான படைப்புகளை உருவாக்கினார்.
        </p>
        <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-justify lg:text-left">
          பாரதியின் கவிதைகள் பொதுவாக தேசபக்தியும், சமூக மாற்றங்களுக்கும்
          வலியுறுத்தியது. தொடர்ந்த போராட்டங்கள் மற்றும் ஆங்கிலேயர்களின் தடுக்காத
          தாக்குதல்களினால் பாரதி கடுமையான வாழ்க்கை சவால்களை சந்திக்க நேர்ந்தது.
          அதுவும் அவரது தைரியம் மற்றும் சிந்தனைகளின் தீவிரம் குறையவில்லை. 1921
          ஆம் ஆண்டு செப்டம்பர் 11 அன்று, வெறும் 39 வயதிலேயே அவர் மரணமடைந்தார்.
          பாரதியார் தனது கவிதைகளாலும், ஆழமான எண்ணங்களாலும், தமிழர் மனதில்
          நிலைத்த இடத்தைப் பெற்றவர்.
        </p>
      </div>
    </div>
  );
};

export default Vision;
