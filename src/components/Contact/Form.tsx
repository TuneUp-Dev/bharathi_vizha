import { Button } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    education: "",
    occupation: "",
    email: "",
    whatsapp: "",
    address: "",
  });
  const [buttonMessage, setButtonMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5002/api/send-email",
        {
          response: `
          name: ${formData.name}
          Age: ${formData.age}
          Education: ${formData.education}
          Occupation: ${formData.occupation}
          Email: ${formData.email}
          WhatsApp: ${formData.whatsapp}
          Address: ${formData.address}
        `,
        }
      );

      setButtonMessage("சமர்ப்பிக்கப்பட்டது!");
      setFormData({
        name: "",
        age: "",
        education: "",
        occupation: "",
        email: "",
        whatsapp: "",
        address: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setButtonMessage("சமர்ப்பிப்பு தோல்வியடைந்தது!");
    } finally {
      setIsLoading(false);

      // Reset button message after 5 seconds
      setTimeout(() => {
        setButtonMessage("");
      }, 5000);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen pt-20 px-4">
        <div className="bg-red-900 shadow-lg rounded-2xl w-full overflow-hidden max-w-5xl">
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              தொடர்பு கொள்க
            </h2>
            <form onSubmit={handleSubmit}>
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
                    onChange={handleChange}
                    value={formData.name}
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
                    onChange={handleChange}
                    value={formData.age}
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
                    onChange={handleChange}
                    value={formData.education}
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
                    onChange={handleChange}
                    value={formData.occupation}
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
                    onChange={handleChange}
                    value={formData.email}
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
                    onChange={handleChange}
                    value={formData.whatsapp}
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
                  onChange={handleChange}
                  value={formData.address}
                  id="address"
                  className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="உங்கள் முகவரியை உள்ளிடவும்"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full mt-6 bg-amber-500 text-red-900 font-medium h-12 text-[17px] rounded-lg transition duration-200"
                disabled={isLoading}
              >
                {isLoading
                  ? "சமர்ப்பிக்கப்படுகிறது..."
                  : buttonMessage || "சமர்ப்பிக்கவும்"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
