
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Neetlist from "./Pages/Neetlist";
import ScrollToTop from "./Components/ScrollToTop";
import ComingSoon from "./Pages/ComingSoon";
import Cell from "./Neet/Cell";
import Cards from "./comp/Card";
import DynamicChapter from "./Pages/DynamicChapter";
import BiotechnologyApplications from "./Neet/BiotechnologyApplications";
import LivingWorld from "./Neet/LivingWorld";
import BiologicalClassification from "./Neet/BiologicalClassification";
import PlantKingdom from "./Neet/PlantKingdom";
import AnimalKingdom from "./Neet/AnimalKingdom";
import PlantMorphology from "./Neet/PlantMorphology";
import PlantAnatomy from "./Neet/PlantAnatomy";
import CellUnitOfLife from "./Neet/CellUnitOfLife";
import Biomolecules from "./Neet/Biomolecules";
import Celldivision from "./Neet/Celldivision";
import Photosynthesis from "./Neet/Photosynthesis";
import Respiration from "./Neet/Respiration";
import PlantGD from "./Neet/PlantGD.JS";
import Breathingandexchange from "./Neet/Breathingandexchange";
import Bodyfluids from "./Neet/Bodyfluids";
import Excretoryproduct from "./Neet/Excretoryproduct";
import Locomotionandmovement from "./Neet/Locomotionandmovement";
import Neuralcontrol from "./Neet/Neuralcontrol";
import Chemicalcoordination from "./Neet/Chemicalcoordination";


function App() {
  return (
  <BrowserRouter>
   < ScrollToTop />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Neetlist" element={< Neetlist />} />
     <Route path="/ComingSoon" element={< ComingSoon />} />
     <Route path="/Neetlist/:slug" element={<DynamicChapter />} />
     
    </Routes>
    </BrowserRouter>
  )
}

export default App;