import { useState } from "react";

const Organizer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-red-900 w-full h-auto">
      <div className="mt-20 py-12 px-5 sm:px-10 w-full max-w-[1200px] mx-auto">
        <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] text-amber-500 font-bold mb-5 text-center lg:text-left">
          பேரவையின் நிறுவனர்:
        </h1>
        <div className="w-full h-auto mt-8 flex flex-col lg:flex-row justify-between items-start gap-y-10 lg:gap-y-0 lg:gap-x-20">
          {/* Bharathiyar Image */}
          <img
            src={"https://i.ibb.co/9nSzXKr/Stalin-Gunasekaran.jpg"}
            className="rounded-2xl w-full mx-auto max-w-[360px] sm:max-w-[400px] object-cover"
            alt="Founder"
          />

          {/* Organizer Text */}
          <div className="text-black">
            <p
              className={`text-white text-[16px] sm:text-[17px] leading-relaxed text-justify lg:text-left transition-all duration-500 ease-in-out`}
              style={{
                overflow: isExpanded ? "visible" : "hidden",
                display: "-webkit-box",
                WebkitLineClamp: isExpanded ? "unset" : 8,
                WebkitBoxOrient: "vertical",
              }}
            >
              மக்கள் சிந்தனைப் பேரவையின் நிறுவனர் த. ஸ்டாலின் குணசேகரன். இவர்
              தனது பத்தாவது வயதில் 32 சக பள்ளி மாணவர்களை ஒன்றிணைத்து 'மாணவர்
              முன்னேற்ற சங்கம்' என்ற ஒரு அமைப்பைத் தொடங்கியவர் அந்த அமைப்பின்
              பெயரை தொடங்கி இரண்டு ஆண்டுகளில் 'பாரதி மாணவர் மன்றம்' என்று
              மாற்றியவர் மாணவர்கள் அல்லாத வேலைக்கு செல்லும் இளைஞர்களையும்
              இணைத்திடும் விதத்தில் 'பாரதி இளைஞர் மன்றம்' என்று இவ்வமைப்பு
              இரண்டாவது முறையாக பெயர் மாற்றம் பெற்றது. பாரதி பெயரில் இவர்
              தொடர்ந்து நடத்தி வந்த அமைப்புகளும் நிகழ்வுகளும் தான் பிற்காலத்தில்
              மக்கள் சிந்தனை பேரவை நடத்தி வருகிற 'பாரதி விழா'க் களுக்கு
              அழிப்படை. 'பகத்சிங் இளைஞர் அமைப்பையும் இணையாக நடத்தி வந்தார்.
              பின்னர் இவற்றை எல்லாம் ஒன்றிணைத்து 'இளைஞர் எழுச்சி இயக்கம்' என்ற
              அமைப்பை ஏற்படுத்தினார். ஒரு கட்டத்தில் இளைஞர்களுக்கான இயக்கமாக
              மட்டுமல்லாது ஒட்டுமொத்த மக்களுக்குமான அமைப்பைத் தோற்றுவிக்க எண்ணி
              அவரால் 1998 இல் தொடங்கப்பட்ட இயக்கம்தான் 'மக்கள் சிந்தனைப் பேரவை'.
              1982 இல் ஈரோட்டில் 'பாரதி நூற்றாண்டு விழா' வை மிகச் சிறப்பாக
              நடத்தினார். பாரதியின் கருத்துக்களை அடிப்படையாகக் கொண்டு
              பட்டிமன்றம், கலையரங்கம், கருத்தரங்கம் என தொடர்ந்து 40
              ஆண்டுகளுக்கும் மேலாக நிகழ்ச்சிகள் நடத்தி வருபவர். 'மக்கள்
              சிந்தனைப் பேரவை' தொடங்கப்பட்ட பின்னர் 'பாரதி விழா' வை பேரவை
              சார்பில் மாநில தன்மையோடு கடந்த 26 ஆண்டுகளாக முன் நின்று நடத்தி
              வருகிறார். திருவள்ளுவர், பாரதி, பாரதிதாசன் தமிழ் ஒளி,
              பட்டுக்கோட்டை உள்ளிட்ட அனைத்து முக்கிய கவிஞர்களின் கருத்துக்களால்
              பெரிதும் ஏற்கப்பட்டிருக்கும் இவர் பாரதி பெயரில் விழா நடத்தினாலும்
              தமிழ் சிந்தனை மரபிலுள்ள முற்போக்குக் கருத்துக்கள் அனைத்தையும்
              முழுமையாக ஏற்றுப் பரப்பி வருபவர்.
            </p>
            <button
              onClick={toggleReadMore}
              className="mt-1 text-amber-500 font-semibold hover:underline"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizer;
