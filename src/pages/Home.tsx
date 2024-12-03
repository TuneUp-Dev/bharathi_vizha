import Navbar from "../components/Navbar";
import Header from "../components/Home/Header";
import About from "../components/Home/About";
import Vision from "../components/Home/Vision";
import Agenda from "../components/Home/Agenda";
import Jothi from "../components/Home/Jothi";
import AboutMSP from "../components/Home/AboutMSP";
import Postscript from "../components/Home/Postscript";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="overflow-y-scroll h-screen scroll-smooth transition-all duration-300 ease-linear scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100">
        <Navbar />
        <Header />
        <About />
        <Vision />
        <Agenda />
        <Jothi />
        <AboutMSP />
        <Postscript />
        <Footer />
      </div>
    </>
  );
};

export default Home;
