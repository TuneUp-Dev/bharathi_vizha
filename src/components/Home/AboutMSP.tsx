import Logo from "../../assets/msp_logo.png";

const AboutMSP = () => {
  return (
    <>
      <div className="w-full h-auto mt-24">
        <div className="bg-red-900 w-full h-auto">
          <div className="w-full max-w-[1200px] mx-auto h-auto px-5 sm:px-10 flex justify-center items-center">
            <div className="w-full rounded-xl flex flex-col-reverse lg:flex-row justify-between items-start gap-y-10 lg:gap-x-10 lg:gap-y-0 px-5 sm:px-10 lg:px-16 py-8">
              {/* Text Content */}
              <div className="w-full h-auto">
                <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] text-amber-500 font-bold mb-5 text-center lg:text-left leading-[55px]">
                  மக்கள் சிந்தனைப் பேரவை
                </h1>
                <p className="text-[14px] sm:text-[16px] text-white font-medium leading-relaxed text-justify lg:text-left">
                  1998 இல் ஈரோடு நகரில் தோற்றுவிக்கப்பட்ட பொதுநல அமைப்பு.
                  தொடங்கப்பட்டவுடன் நேரடியாக நிகழ்வுகள் நடத்தப்பட்டன.
                  அந்நிகழ்வுகளில் ஆர்வமுடன் பங்கேற்றோரை கண்டறிந்து அவர்களை
                  உறுப்பினர்களாக்கி படிப்படியாக ஏடு அமைப்பை வடிவத்திற்கு இட்டுச்
                  செல்லப்பட்டது. பாரதி விழா, அரசு பள்ளி ஆசிரியர்களுக்கு பாராட்டு
                  விழா, உள்ளிட்ட நிகழ்வுகள் நடத்தப்பட்டன.
                </p>
              </div>

              {/* Image */}
              <div className="w-full max-w-[300px] sm:min-w-[310px] bg-white rounded-2xl flex justify-center items-center p-7">
                <img
                  src={Logo}
                  className="w-full object-cover"
                  alt="MSP Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMSP;
