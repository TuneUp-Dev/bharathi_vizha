<<<<<<< HEAD
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
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
=======
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About';
import Contact from '../pages/Contact';
import First from '../pages/First';
import Home from '../pages/Home';
import Second from '../pages/Second';
import Third from '../pages/Third';

const Router = () => {
  return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/First" element={<First/>} />
            <Route path="/Second" element={<Second/>} />
            <Route path="/Third" element={<Third />}/>
            <Route path="/Contact" element={<Contact/>} />
        </Routes>

  )
}
>>>>>>> main

export default Router;
