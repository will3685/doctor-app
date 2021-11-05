import React from "react";
import { Routes, Route} from 'react-router-dom';

import Home from "./Home/Home";
import About from "./About/About";
import Contato from "./Contato/Contato";


const App = () => {
  return (     
   <Routes>
     <Route exact path="/" element={<Home />} />
     <Route exact path="/about" element={<About />} />
     <Route exact path="/contato" element={<Contato />} />
   </Routes>
  )
}

export default App