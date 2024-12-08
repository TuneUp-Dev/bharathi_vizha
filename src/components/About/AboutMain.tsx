import { useState } from "react";

const AboutMain = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="bg-red-900 w-full h-auto flex flex-col justify-center items-center pt-32 pb-16 gap-y-10">
        <h1 className="text-[29px] sm:text-[40px] lg:text-[50px] xl:text-[70px] text-amber-500 font-bold text-center">
          மக்கள் சிந்தனைப் பேரவை
        </h1>
        <div className="w-[90vw] md:w-[600px] lg:w-[1000px] xl:w-[1200px] flex flex-col lg:flex-row justify-between items-center lg:items-start gap-x-14">
          {/* Image */}
          <div className="w-full max-w-[300px] sm:min-w-[310px] bg-white rounded-2xl flex justify-center items-center p-7">
            <img
              src={"https://i.ibb.co/pRn6QQ0/msp.png"}
              className="w-full object-cover"
              alt="MSP Logo"
            />
          </div>
          <div className="flex flex-col items-start">
            <p
              className="text-[14px] sm:text-[16px] text-white font-medium leading-relaxed text-justify lg:text-left"
              style={{
                overflow: isExpanded ? "visible" : "hidden",
                display: "-webkit-box",
                WebkitLineClamp: isExpanded ? "unset" : 11,
                WebkitBoxOrient: "vertical",
              }}
            >
              1998 இல் ஈரோடு நகரில் வழக்குரைஞர் த. ஸ்டாலின் குணசேகரன் அவர்களால்
              தோற்றுவிக்கப்பட்ட பொதுநல அமைப்பு. தொடங்கப்பட்டவுடன் நேரடியாக
              முக்கிய நிகழ்வுகள் நடத்தப்பட்டன. அந்நிகழ்வுகளில் ஆர்வமுடன்
              பார்வையாளர்களாகப் பங்கேற்றோரைக் கண்டறிந்து அவர்களை
              உறுப்பினர்களாக்கி படிப்படியாக ஒரு அமைப்பு வடிவத்திற்கு இட்டுச்
              செல்லப்பட்டது. பாரதி விழா, அரசுப் பள்ளி ஆசிரியர்களுக்குப் பாராட்டு
              விழா, உள்ளிட்ட நிகழ்வுகள் தேசிய அறிவியல் தினம் உள்ளிட்ட ஆண்டு
              நிகழ்ச்சிகளும் பல பயிலரங்குகள், பயிற்சிப் பட்டறைகள், மாநாடுகள்,
              கருத்தரங்குகள் என தொடர்ந்து பல நிகழ்வுகள் நடத்தப்பட்டன. 2005 இல்
              இருந்து கடந்த 20 ஆண்டுகளுக்காக ஆண்டு தோரும் ஆகஸ்ட் மாதம் 12
              நாள்களுக்கு ஈரோடு புத்தகத்த திருவிழா பேரவையால் நடத்தப்பட்டது.
              ஆண்டுதோறும் பிப்ரவரி 28 ஆம் தேதி 'தேசிய அறிவியல் தினம்'.
              கருத்தரங்குகள், நூல் வெளியீடுகள், பயிலரங்குகள், பயிற்சிப்
              பட்டறைகள், மாநாடுகள் என்று பல வடிவங்களிலும் நிகழ்வுகள்
              நடத்தப்படுகின்றன. புயல், வெள்ளம், இயற்க்கைப் பேரிடர் காலங்களில்
              பேரவையின் நூற்றுக்கணக்கான தன்னார்வத் தொண்டர்களுடன் பேரவைத் தலைமை
              களத்தில் இறங்கி நிவாரணப் பணிகளில் ஈடுபட்டது. இவ்வாறு கடந்த 26
              ஆண்டுகளாக இடையறாது செயல்பட்டு ஒரு அமைப்பாக உருவெடுத்து தற்போது
              மாநிலத் தழுவிய அமைப்பாக விரிவடைந்துள்ளது. ஆயிரக்கணக்கில்
              உறுப்பினர்கள் உள்ளனர். இது ஒரு சாதி, மத, கென்று அரசியல் கட்சி
              சார்பில்லாத அமைப்பு.
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
    </>
  );
};

export default AboutMain;
