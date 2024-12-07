const Jothi = () => {
  return (
    <>
      <div className="w-full max-w-[1200px] mx-auto h-auto mt-24 px-5 sm:px-10 flex flex-col justify-between items-center">
        <h1 className="text-[38px] sm:text-[40px] lg:text-[50px] text-red-900 font-bold lg:font-extrabold mb-5 text-center lg:text-left">
          பாரதி ஜோதி
        </h1>
        <div className="w-full max-w-[1200px] mx-auto h-auto mt-2 flex justify-center items-center">
          <div className="w-full bg-gray-100 rounded-xl flex flex-col lg:flex-row justify-between items-start gap-y-10 lg:gap-x-10 lg:gap-y-0 px-5 sm:px-10 lg:px-16 py-8">
            {/* Image */}
            <img
              src={
                "https://i.ibb.co/CzcnW2Z/Whats-App-Image-2024-12-06-at-17-23-00.jpg"
              }
              className="w-full max-w-[300px] mx-auto sm:max-w-[380px] rounded-xl object-cover"
              alt="Jothi"
            />

            {/* Text Content */}
            <div className="w-full h-auto">
              <p className="text-[14px] sm:text-[16px] font-medium leading-relaxed text-justify lg:text-left">
                ஈரோடு கருங்கல்பாளையத்தில் 'மனிதறுக்கு மரணமில்லை' என்ற தலைப்பில்
                பாரதியாற்றிய இறுதிப் பேருரையை இன்றைய தலைமுறைக்கு நினைவூட்டும்
                நோக்கில் உரையாற்றிய இடத்திலிருந்து விழா அரங்கிற்கு இளைஞர்களால்
                எடுத்து வரப்படுவதே 'பாரதி ஜோதி' அறியாமையை, கல்லாமையை, இல்லாமையை
                சுட்டெரிக்கும் ஜோதி; நேர்மையும் உண்மையும் வாய்மையும் மிக்க
                மனிதர்களுக்கு 'என்றென்றும் மரணம் இல்லை' என்பதை எடுத்துரைக்கும்
                ஜோதி, சாதியம், தீண்டாமை, மதவெறி, வன்முறை, பெண்ணடிமை போன்ற
                அனைத்துவித மனிதநேயமற்ற நடைமுறைகளுக்கு எதிராக ஏந்தி வரப்படுவதே
                இந்த 'பாரதி ஜோதி'.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jothi;
