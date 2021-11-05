import React from "react";
import { Routes, Route} from 'react-router-dom';

import Home from "./Home/Home";
import About from "./About/About";


const App = () => {
  return (     
   <Routes>
     <Route exact path="/" element={<Home />} />
     <Route exact path="/about" element={<About />} />
   </Routes>
  )
}

export default App