
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Neetlist from "./Pages/Neetlist";
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  return (
  <BrowserRouter>
   < ScrollToTop />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Neetlist" element={< Neetlist />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;