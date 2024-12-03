import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SecondMain from "../components/Second/SecondMain";

const Second = () => {
  return (
    <>
      <div className="overflow-y-scroll h-screen pt-20 scroll-smooth transition-all duration-300 ease-linear snap-y snap-mandatory scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100">
        <Navbar />
        <SecondMain />
        <Footer />
      </div>
    </>
  );
};

export default Second;
