import { Button } from "@nextui-org/react";

const Form = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen pt-20 px-4">
        <div className="bg-red-900 shadow-lg rounded-2xl w-full overflow-hidden max-w-5xl">
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              தொடர்பு கொள்க
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    className="block text-amber-500 font-semibold mb-2"
                    htmlFor="name"
                  >
                    பெயர்
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="உங்கள் பெயரை உள்ளிடவும்"
                  />
                </div>

                {/* Age */}
                <div>
                  <label
                    className="block text-amber-500 font-semibold mb-2"
                    htmlFor="age"
                  >
                    வயது
                  </label>
                  <input
                    type="number"
                    id="age"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="உங்கள் வயதை உள்ளிடவும்"
                  />
                </div>

                {/* Education */}
                <div>
                  <label
                    className="block text-amber-500 font-semibold mb-2"
                    htmlFor="education"
                  >
                    கல்வித்தகுதி
                  </label>
                  <input
                    type="text"
                    id="education"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="உங்கள் கல்வித்தகுதியை உள்ளிடவும்"
                  />
                </div>

                {/* Occupation */}
                <div>
                  <label
                    className="block text-amber-500 font-semibold mb-2"
                    htmlFor="occupation"
                  >
                    பணி
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="உங்கள் பணியை உள்ளிடவும்"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-amber-500 font-semibold mb-2"
                    htmlFor="email"
                  >
                    மின்னஞ்சல்
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="உங்கள் மின்னஞ்சலை உள்ளிடவும்"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label
                    className="block text-amber-500 font-semibold mb-2"
                    htmlFor="whatsapp"
                  >
                    வாட்ஸ் ஆப்
                  </label>
                  <input
                    type="text"
                    id="whatsapp"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="உங்கள் வாட்ஸ் ஆப் எண்ணை உள்ளிடவும்"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="mt-5">
                <label
                  className="block text-amber-500 font-semibold mb-2"
                  htmlFor="address"
                >
                  முகவரி
                </label>
                <textarea
                  id="address"
                  className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="உங்கள் முகவரியை உள்ளிடவும்"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full mt-6 bg-amber-500 text-red-900 font-medium h-12 text-[17px] rounded-lg transition duration-200"
              >
                சமர்ப்பிக்கவும்
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
