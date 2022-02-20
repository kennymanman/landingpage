import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home"
import About from './Pages/About';
import Contact from './Pages/Contact';
import Soon from './Pages/Soon';
import './App.css';


export default function App() {
  return (
    <div>
   
 <Routes>

        <Route path="/" element={<Home />} exact /> 
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="soon" element={<Soon />} />
      </Routes>
      
    </div>
  )
}

