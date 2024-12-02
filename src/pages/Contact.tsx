import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactMain from "../components/Contact/ContactMain";

const Contact = () => {
  return (
    <>
      <div className="overflow-y-scroll h-screen scroll-smooth transition-all duration-300 ease-linear md:snap-y md:snap-mandatory scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100">
        <Navbar />
        <ContactMain snapAlign="start" />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
