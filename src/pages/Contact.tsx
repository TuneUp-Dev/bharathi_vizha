import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactMain from "../components/Contact/ContactMain";
import Form from "../components/Contact/Form";
import Joiners from "../components/Contact/Joiners";
import Quote from "../components/Contact/Quote";

const Contact = () => {
  return (
    <>
      <div className="overflow-y-scroll h-screen scroll-smooth transition-all duration-300 ease-linear scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100">
        <Navbar />
        <ContactMain />
        <Joiners />
        <Quote />
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
