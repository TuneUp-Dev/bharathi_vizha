import Bharathi from "../../assets/bharathi.png";

const Vision = ({ snapAlign = "start" }) => {
  return (
    <div
      style={{ scrollSnapAlign: snapAlign }}
      className="w-full max-w-[1200px] mx-auto h-auto pt-20 md:pt-10 px-5 sm:px-10 lg:pt-36 flex flex-col lg:flex-row justify-between items-start gap-y-10 lg:gap-y-0 lg:gap-x-20"
    >
      {/* Bharathiyar Image */}
      <img
        src={Bharathi}
        className="rounded-2xl w-full mx-auto max-w-[300px] sm:max-w-[400px] object-cover"
        alt="Subramania Bharathiyar"
      />

      {/* Vision Text */}
      <div className="text-black">
        <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] text-red-900 font-bold mb-5 text-center lg:text-left">
          நோக்கம்
        </h1>
        <p className="text-[16px] sm:text-[18px] leading-relaxed text-justify lg:text-left">
          அறிவார்ந்த மேம்பட்ட - பண்பட்ட தமிழகத்தை உருவாக்கும் உயர்ந்த
          நோக்கத்தில் மக்கள் சிந்தனைப் பேரவையால் நடத்தப்படும் பல நிகழ்வுகளில்
          ஒன்று 'பாரதி விழா'
        </p>
      </div>
    </div>
  );
};

export default Vision;
