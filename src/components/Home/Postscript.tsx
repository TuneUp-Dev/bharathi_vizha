import { useState } from "react";

const Postscript = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
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
            <h1 className="text-[24px] sm:text-[36px] lg:text-[40px] text-red-900 font-bold mb-5 leading-[30px] md:leading-[50px]">
              பேரவையின் ஜப்பான் கிளை சார்பில் பாரதி விழா:
            </h1>
            <p
              className="text-[14px] sm:text-[16px] leading-relaxed font-medium"
              style={{
                overflow: isExpanded ? "visible" : "hidden",
                display: "-webkit-box",
                WebkitLineClamp: isExpanded ? "unset" : 5,
                WebkitBoxOrient: "vertical",
              }}
            >
              மக்கள் சிந்தனை பேரவையின் கால் நூற்றாண்டு காலத் தொடர் சேவை -
              தொடர்ச்சியான இயக்கம் - ஈரோடு பாரதி விழா - ஈரோடு புத்தகத் திருவிழா
              உள்ளிட்ட நிகழ்வுகள் ஏற்படுத்திய தாக்கத்தின் விளைவாக ஜப்பான்
              நாட்டில் வாழும் தமிழ் உணர்வாளர்கள் சிலர் இணைந்து பேரவையின் கிளையை
              ஜப்பான் நாட்டில் தலைநகரமான டோக்கியோ நகரில் தொடங்கினர். டோக்கியோ
              நகளில் 2003 ஆம் ஆண்டு அக்கிளை சார்பில் முதல் பாரதி விழாவை மிகவும்
              சிறப்பாக நடத்தி முடித்தனர்.
              <br />
              <br />
              2024 ல் இரண்டாம் ஆண்டு பாரதி விழாவை அறிவியல் நாளோடு இணைத்து பெரு
              நிகழ்வாக நடத்தினர். 30-11-2024 ஆம் தேதி மாலை டோக்கியோ நகரில் உள்ள
              முக்கிய அங்கு ஒன்றில் நிகழ்வு நடைபெற்றது. இந்நிகழ்வில்
              தமிழகத்திலிருந்து சிறப்பு விருந்தினராக பங்கேற்ற ஐஎஸ்ஆர் ஏலின்,
              முன்னாள் இயக்குனர் டாக்டர் மயில்சாமி அண்ணாதுரை அவர்களும், சென்னை
              பல்கலைக்கழக தமிழ் மொழி துறைத் தலைவர் முனைவர் W.மணிகண்டன் அவர்களும்
              அழைக்கப்பட்டிருந்தனர்.
              <br />
              <br /> பேரவையின் தலைவர் த.ஸ்டாலின் குணசேகரன் ஈரோட்டில் இருந்தவாறு
              இணையம் வழியாக விழா அறிமுக உரையாற்றினார்.
            </p>
            <button
              onClick={toggleReadMore}
              className="mt-1 text-red-900 font-semibold hover:underline"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Image Section */}
          <img
            src={"https://i.ibb.co/dW7QZ3v/japan.jpg"}
            className="w-full mx-auto sm:max-w-[200px] lg:max-w-[300px] rounded-xl object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Postscript;
