import Navbar from "../components/Navbar";
import Header from "../components/Home/Header";
import About from "../components/Home/About";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Header />
        <About />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
