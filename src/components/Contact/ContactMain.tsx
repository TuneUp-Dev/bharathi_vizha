import logo from "../../assets/msp_logo.png";

const ContactMain = ({ snapAlign = "start" }) => {
  return (
    <div
      className="min-h-screen bg-gray-100 md:mt-20"
      style={{ scrollSnapAlign: snapAlign }}
    >
      {/* Header Section */}
      <header className="bg-red-900 h-screen flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-[20px] md:text-4xl font-bold">
          எங்களுடன் தொடர்புகொள்ளுங்கள்
        </h1>
        <p className="text-base md:text-lg mt-4 text-amber-500">
          சமூகத்தில் மாற்றத்தை உருவாக்க எங்கள் முயற்சியில் சேருங்கள்!
        </p>
      </header>

      {/* Who Can Join Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-red-900 text-center mb-8">
          யார் சேரலாம்?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "தொழில்முறை நிபுணர்கள்",
              description:
                "உங்கள் திறன் மற்றும் அனுபவத்தால் மாற்றத்தை உருவாக்குங்கள்.",
            },
            {
              title: "மாணவர்கள்",
              description:
                "சமூகத்திற்கு பங்களிக்கும்போது கற்றுக்கொண்டு வளருங்கள்.",
            },
            {
              title: "தன்னார்வத்தினர்கள்",
              description:
                "சமூகத்தில் தாக்கம் உள்ள மாற்றத்தை உருவாக்க எங்களுடன் சேருங்கள்.",
            },
            // Uncomment the below item if you want a fourth grid item
            // {
            //   title: "ஆளுநர்கள்",
            //   description: "நமது முயற்சிக்கு ஆதரவாக நிதி உதவி செய்யுங்கள்.",
            // },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-100 shadow-lg rounded-lg p-4"
            >
              <img
                src={logo}
                alt={item.title}
                className="w-full h-32 md:h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-4">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative bg-amber-500 py-12 px-4 md:py-16 md:px-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('../assets/logo.png')" }}
        ></div>
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-red-900">
            "உலகில் நீங்கள் பார்க்க விரும்பும் மாற்றமாக இருங்கள்"
          </h2>
          <p className="text-sm md:text-lg mt-4 text-white">
            சமூகத்தில் நீண்டகால தாக்கத்தை உருவாக்க எங்களுடன் சேருங்கள்.
          </p>
        </div>
      </section>

      {/* ----ContactMain Form----  */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="bg-red-900 shadow-2xl rounded-lg w-full max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-stretch">
            {/* Right Side: Logo at the Top for Mobile */}
            <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6">
              <img
                src={logo}
                alt="Organization Logo"
                className="w-full h-auto object-contain max-h-60 md:max-h-full"
              />
            </div>

            {/* Left Side: Contact Form at the Bottom for Mobile */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6 text-center md:text-left">
                Contact Us
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-amber-500 font-medium mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-amber-500 font-medium mb-2"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your location"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-amber-500 font-medium mb-2">
                    Are you a College Student?
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center text-white">
                      <input
                        type="radio"
                        name="collegeStudent"
                        value="yes"
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center text-white">
                      <input
                        type="radio"
                        name="collegeStudent"
                        value="no"
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-amber-500 font-medium mb-2"
                    htmlFor="contact"
                  >
                    Contact Details
                  </label>
                  <input
                    type="text"
                    id="contact"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your contact details"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 text-white font-medium py-3 rounded-lg hover:bg-red-700 transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
