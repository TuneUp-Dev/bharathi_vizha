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

export default Router;