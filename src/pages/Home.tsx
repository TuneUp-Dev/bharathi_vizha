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
      <div className="overflow-y-scroll h-screen pt-20 scroll-smooth transition-all duration-300 ease-linear snap-y snap-mandatory scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100">
        <Navbar />
        <Header snapAlign="start" />
        <About snapAlign="start" />
        <Vision snapAlign="start" />
        <Agenda snapAlign="start" />
        <Jothi snapAlign="start" />
        <AboutMSP snapAlign="start" />
        <Postscript snapAlign="start" />
        <Footer snapAlign="start" />
      </div>
    </>
  );
};

export default Home;
