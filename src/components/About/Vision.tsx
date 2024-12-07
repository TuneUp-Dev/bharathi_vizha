import { useState } from "react";

const Vision = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto h-auto pt-20 md:pt-10 px-5 sm:px-10 lg:pt-36 flex flex-col-reverse lg:flex-row justify-between items-start gap-y-10 lg:gap-y-0 lg:gap-x-20">
      {/* Vision Text */}
      <div className="text-black">
        <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] text-red-900 font-bold mb-5 text-center lg:text-left">
          நோக்கங்கள்
        </h1>
        <p
          className={`text-[16px] sm:text-[17px] leading-relaxed text-justify lg:text-left transition-all duration-500 ease-in-out`}
          style={{
            overflow: isExpanded ? "visible" : "hidden",
            display: "-webkit-box",
            WebkitLineClamp: isExpanded ? "unset" : 14,
            WebkitBoxOrient: "vertical",
          }}
        >
          மக்கள் சிந்தனைப் பேரவை அடிப்படையில் சமூக முன்னேற்றத்திற்கும்
          மாற்றத்திற்குமான ஓர் அமைப்பு. கல்வி, அறிவு, சிந்தனை ஆகிய முப்பரிமான,
          லட்சியத்தைக் கொண்ட இயக்கமாகவும், இலக்கியம், வரலாறு, மொழியியல்,
          அறிவியல், சமூகவியல், வாழ்வியல் உள்ளிட்ட துறைகளில் தனிக்கவனம்
          செலுத்தும் அமைப்பாகவும் விளங்குகிறது. போரற்ற உலகம், வன்முறையற்ற
          சமூகம், சாதி, மதம், பொருளாதாரம், ஆகியவற்றில் ஏற்ற இறக்கங்களும்,
          ஏற்றத்தாழ்வுகளும் இல்லாத பகையும், வன்மும் அற்ற பண்பட்ட மனிதநேயம்
          மிக்கச் சமூக அமைப்பை உருவாக்கும் திசை நோக்கிச் சிந்திப்பதும்
          செயல்படுவதும் இவ்வமைப்பின் அடிப்படைக் கொள்கையாகும். கலை, இலக்கியம்,
          பண்பாடு ஆகியவை இவ்வமைப்பின் தளங்கள். புத்தக வாசிப்பு அறிவைப்
          பெருக்கும், ஆற்றலை வளர்க்கும், ஜனநாயகத்தை மேம்படுத்தும், உலகக்
          கண்ணோட்டத்தை உருவாக்கும், தனித் திறன்களை கற்பிக்கும் என்பதால் பேரவை
          புத்தகத் திருவிழாவை உயிரோட்டத்துடன் நடத்துவதை பிரதான நோக்கமாகக்
          கொண்டுள்ளது. சாதி, மதம், அரசியல் கட்சி சார்பற்ற அமைப்பாகச் செயல்படுவது
          இவ்வமைப்பின் முக்கிய நோக்கம். வேற்றுமைகள் ஆயிரம் இருந்தாலும்
          அவற்றையெல்லாம் தாண்டி மனிதர்களை உளப் பூர்வமாக ஒன்றுபடுத்தும்
          இலட்சியமும், மனிதர்களை சமூக நோக்கோடு சிந்திக்கத் தூண்டும் நோக்கமும்
          இவ்வமைப்பின் பிரதான குறிக்கோள்களாகும். உலகப் பார்வை, இந்திய
          ஒருமைப்பாடு ஆகியவற்றில் நம்பிக்கை இருப்பினும் அமைப்பின் செயல்பாட்டு
          எல்லை என்பது தமிழ் கூறும் நல்லுலக்கம் தான் என பேரவை வரையறுத்துள்ளது.
          பேரவையின் லட்சியங்களை நிறைவேற்ற தமிழ்நாட்டில் உள்ள தமிழர்களை
          மட்டுமல்லாது உலகத் தமிழர்களிடையே ஒருமைப்பாட்டையும், சேர்ந்துழைக்கும்
          சிந்தனையையும் வளர்ப்பதை பேரவை நோக்கமாகக் கொண்டுள்ளது. சமூக
          மாற்றத்திற்காகத் தொடர்ந்து பன்முக நோக்கில் செயல்பட்டு வந்தாலும் சமூக
          சேவை இவ்வமைப்பின் முக்கிய நோக்கமாக திகழ்கிறது.
        </p>
        {/* Read More Button */}
        <button
          onClick={handleToggle}
          className="text-red-900 mt-3 font-medium underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Bharathiyar Image */}
      <img
        src={"https://i.ibb.co/cF4jZ41/bharathi.png"}
        className="rounded-2xl w-full mx-auto max-w-[300px] sm:max-w-[400px] object-cover"
        alt="Subramania Bharathiyar"
      />
    </div>
  );
};

export default Vision;
