import AboutMain from "../components/About/AboutMain";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="overflow-y-scroll h-screen pt-20 scroll-smooth transition-all duration-300 ease-linear snap-y snap-mandatory scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100">
        <Navbar />
        <AboutMain />
        <Footer />
      </div>
    </>
  );
};

export default About;
