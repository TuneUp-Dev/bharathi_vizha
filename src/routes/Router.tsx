import { Route, Routes } from 'react-router-dom'
import About from '../pages/about';
import Contact from '../pages/contact';
import First from '../pages/first';
import Home from '../pages/home';
import Second from '../pages/second';
import Third from '../pages/third';

const Router = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/first" element={<First/>} />
            <Route path="/second" element={<Second/>} />
            <Route path="/third" element={<Third />}/>
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    </>
  )
}

export default Router;