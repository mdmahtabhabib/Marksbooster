
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Neetlist from "./Pages/Neetlist";
import ScrollToTop from "./Components/ScrollToTop";
import ComingSoon from "./Pages/ComingSoon";
import Cell from "./Neet/Cell";
import Cards from "./comp/Card";
import BiotechnologyApplications from "./Neet/BiotechnologyApplications";


function App() {
  return (
  <BrowserRouter>
   < ScrollToTop />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Neetlist" element={< Neetlist />} />
     <Route path="/ComingSoon" element={< ComingSoon />} />
     <Route path="/Neetlist/cell" element={<Cards title="cell biology" flashcards={Cell}   />} />
     <Route path="/Neetlist/BiotechnologyApplications" element={<Cards title="Biotechnology application" flashcards={BiotechnologyApplications} /> } />
    
     
    </Routes>
    </BrowserRouter>
  )
}

export default App;