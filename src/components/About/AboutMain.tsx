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
              className="text-justify text-white text-opacity-80 font-medium text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] mt-12 lg:mt-0"
              style={{
                overflow: isExpanded ? "visible" : "hidden",
                display: "-webkit-box",
                WebkitLineClamp: isExpanded ? "unset" : 12,
                WebkitBoxOrient: "vertical",
              }}
            >
              இது ஒரு சாதி, மத, அரசியல் கட்சி சார்பற்ற பொதுநல
              அமைப்பாகும்.1998இல் ஈரோடு நகரில் தொடங்கப்ட்ட இவ்வமைப்பு சென்ற
              ஆண்டு வெள்ளி விழவை நடத்தி முடித்துள்ளது. இப்போது இது மாநிலந்
              தழுவிய அமைப்பு. சமூக முன்னேற்றமும், சமூக மாற்றமும் இந்த அமைப்பின்
              பிரதான குறிக்கோள்களாக விளங்குகின்றன. ‘பேரற்ற உலகம்’ என்ற உலகப்
              பிரகடனத்திலிருந்து 'போதைப்பழக்கமில்லாத் தமிழகம்’ என்ற மாநில மக்கள்
              பிரச்சினை வரை ஆழ்ந்து கவனித்து- உள்வாங்கி அவற்றுக்கான
              தீர்வுக்காகச் சிந்திக்கும் அமைப்பு. செயல்படும் இயக்கம். வாசிக்க
              வேண்டுவதும் யோசிக்கத்தூண்டுவதும் சிந்தனைப் பேரவையின் தனித்துவம்
              மிக்க பணிகள்.
            </p>
            {/* <button
              onClick={toggleReadMore}
              className="mt-1 text-amber-500 font-semibold hover:underline"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMain;
