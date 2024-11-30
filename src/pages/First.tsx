import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FirstMain from "../components/First/FirstMain";

const First = () => {
  return (
    <>
      <div className="overflow-y-scroll h-screen pt-20 scroll-smooth transition-all duration-300 ease-linear snap-y snap-mandatory scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100">
        <Navbar />
        <FirstMain />
        <Footer snapAlign="none" />
      </div>
    </>
  );
};

export default First;
