import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThirdMain from "../components/Third/ThirdMain";

const Third = () => {
  return (
    <>
      <div className="overflow-y-scroll h-screen pt-20 scroll-smooth transition-all duration-300 ease-linear snap-y snap-mandatory scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100">
        <Navbar />
        <ThirdMain />
        <Footer />
      </div>
    </>
  );
};

export default Third;
