import AboutMain from "../components/About/AboutMain";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/About/Gallery";
import Vision from "../components/About/Vision";

const About = () => {
  return (
    <>
      <div className="overflow-y-scroll h-screen scroll-smooth transition-all duration-300 ease-linear scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100">
        <Navbar />
        <AboutMain />
        <Vision />
        <Gallery />
        <Footer />
      </div>
    </>
  );
};

export default About;
