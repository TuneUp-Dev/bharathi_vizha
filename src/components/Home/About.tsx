const About = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto h-auto mt-20 px-5 sm:px-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-y-10 lg:gap-y-0 lg:gap-x-20">
      {/* About Text */}
      <div className="text-black">
        <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] text-red-900 font-bold mb-5 text-center lg:text-left">
          முன்னுரை
        </h1>
        <p className="text-[16px] sm:text-[17px] leading-relaxed text-justify lg:text-left">
          மக்கள் சிந்தனைப் பேரவையின் தொடக்கத்தில் இருந்து ஆண்டுதோறும் மகாகவி
          பாரதியின் பிறந்தநாள் ஆகிய டிசம்பர் 11ஆம் தேதி பேரவை சார்பில் பாரதி
          விழா கொண்டாடப்பட்டு வருகிறது. இதுவரை 26 ஆண்டுகள் - ஆண்டு தவறாமல், தேதி
          மாறாமல் ஈரோடு நகரில் 'பாரதி விழா' பேரவையால் நடத்தி வரப்பட்டுள்ளது.
          பேரவை நடத்தும் இப் பாரதி விழாவில் மாநில அளவிலான ஒரு முக்கிய ஆளுமைக்கு
          பாரதி விருது வழங்குவது, ஒரு தனித்துவம் மிக்க சான்றோர் ஒருவரின்
          திருவுருவ படத்தை திறப்பது, இலக்கிய சொற்பொழிவுகள் இடம்பெறுவது ஆகிய
          மூன்று முக்கிய அம்சங்கள் இடம்பெறுகின்றன.
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
