const Vision = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto h-auto mt-32 px-5 sm:px-10 flex flex-col lg:flex-row justify-between items-start gap-y-10 lg:gap-y-0 lg:gap-x-20">
      {/* Bharathiyar Image */}
      <img
        src={"https://i.ibb.co/cF4jZ41/bharathi.png"}
        className="rounded-2xl w-full mx-auto max-w-[300px] sm:max-w-[400px] object-cover"
        alt="Subramania Bharathiyar"
      />

      {/* Vision Text */}
      <div className="text-black">
        <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] text-red-900 font-bold mb-5 text-center lg:text-left">
          நோக்கம்
        </h1>
        <p className="text-[15px] sm:text-[17px] leading-relaxed text-justify lg:text-left">
          மக்களிடையே தமிழ் மொழியின் தொன்மை, சிறப்பு, தனித்தன்மை போன்றவை குறித்த
          விழிப்புணர்வை ஏற்படுத்துவது... தமிழ் இலக்கியம், வரலாறு, அறிவியல்,
          சமூகவியல் சிந்தனைகளை விதைப்பது... சமூக முன்னேற்றத்திற்கும்
          மாற்றத்திற்குமான தமிழ் இலக்கிய கருத்துக்களை எடுத்துச் சொல்வது...
          மனிதம் சார்ந்த, மக்கள் சார்ந்த, நாடு சார்ந்த, உலகம் சார்ந்த பல அறிய
          கருத்துக்களை நூற்றாண்டுகளுக்கு முன்பே சொல்லிச் சென்றவர் மகாகவி பாரதி.
          இக்காலத்திற்கு ஏற்ற வகையில் பாரதியின் சமூகச் சிந்தனைகளின் அடிப்படைகளை
          மக்கள் மையமாக்குவது... பாரதியின் வழியில் பலரை படைப்பாளர்களாகவும்,
          கவிஞர்களாகவும், எழுத்தாளர்களாகவும், சமூகச் சிந்தனையாளர்களாகவும்,
          உருவாக்கிட தொடர்ச்சியாக முயற்சிப்பது... அனைவருக்கும் கல்வி,
          அனைவருக்கும் உணவு, அனைவருக்கும் வாழ்க்கை என்ற பாரதியின்
          முழக்கத்தையும், சமூக ஏற்றத்தாழ்வுகள், மதமாச்சாரியங்கள், பொருளாதார ஏற்ற
          இறக்கங்களற்ற சமூக அமைப்பை உருவாக்கக் கலை கண்ட பாரதியின்
          லட்சியங்களையும் மனதிற் கொண்டு அவற்றை நனவாக்கும் முயற்சிகளில் என் ஒன்றே
          மக்கள் சிந்தனை பேரவையில் ஆண்டுதோறும் நடத்தப்படும் 'பாரதி விழா'. இது
          வெற்று விழா அல்ல... மொழி உணர்வை, இலக்கிய உணர்ச்சியை, சமூக சிந்தனையை
          மக்களிடையே மேம்படுத்த நடத்தப்படும் உயிரோட்டம் மிக்க பெருநிகழ்வு.
        </p>
      </div>
    </div>
  );
};

export default Vision;
