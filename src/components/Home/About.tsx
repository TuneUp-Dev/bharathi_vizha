const About = ({ snapAlign = "start" }) => {
  return (
    <div
      style={{ scrollSnapAlign: snapAlign }}
      className="w-full max-w-[1200px] mx-auto h-auto pt-20 md:pt-10 px-5 sm:px-10 lg:pt-36 flex flex-col-reverse lg:flex-row justify-between items-center gap-y-10 lg:gap-y-0 lg:gap-x-20"
    >
      {/* About Text */}
      <div className="text-black">
        <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] text-red-900 font-bold mb-5 text-center lg:text-left">
          முன்னுரை
        </h1>
        <p className="text-[16px] sm:text-[18px] leading-relaxed text-justify lg:text-left">
          இந்தியாவின் தலைசிறந்த கவிஞர்களில் ஒருவராகும். அவர் 1882 ஆம் ஆண்டு
          டிசம்பர் 11 அன்று தமிழ்நாட்டின் எட்டயபுரத்தில் பிறந்தார். பாரதியார்
          தனியுரிமை, சமத்துவம், தேசபக்தி, மகளிர் சுதந்திரம் மற்றும் சமூக
          நீதிக்காக பாடுபட்ட கவிஞர், எழுத்தாளர் மற்றும் தேசியவாதியாகத்
          திகழ்ந்தார். தான் எழுதிய கவிதைகள் மூலம் தமிழ் இலக்கியத்திற்கு புதிய
          ஒளியை வழங்கியவர். அவர் "தமிழ் காற்று", "பஞ்சாலி சபதம்", "குயில் பாடல்"
          போன்ற அற்புதமான படைப்புகளை உருவாக்கினார். பாரதியின் கவிதைகள் பொதுவாக
          தேசபக்தியும், சமூக மாற்றங்களுக்கும் வலியுறுத்தியது.
        </p>
      </div>

      {/* Bharathiyar Image */}
      <img
        src={"https://i.ibb.co/dLdNXDW/1998.jpg"}
        className="rounded-2xl w-full mx-auto max-w-[360px] sm:max-w-[400px] object-cover"
        alt=""
      />
    </div>
  );
};

export default About;
