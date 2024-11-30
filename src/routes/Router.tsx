import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import First from "../pages/First";
import Home from "../pages/Home";
import Second from "../pages/Second";
import Third from "../pages/Third";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/1998-2006" element={<First />} />
        <Route path="/2007-2015" element={<Second />} />
        <Route path="/2016-2023" element={<Third />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Router;
