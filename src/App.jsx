
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Neetlist from "./Pages/Neetlist";
import ScrollToTop from "./Components/ScrollToTop";
import ComingSoon from "./Pages/ComingSoon";
import Cell from "./Neet/Cell";
import Cards from "./comp/Card";
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
     <Route path="/Neetlist/cell" element={<Cards title="cell biology" flashcards={Cell}   />} />
     <Route path="/Neetlist/BiotechnologyApplications" element={<Cards title="Biotechnology application" flashcards={BiotechnologyApplications} /> } />
     <Route path="/Neetlist/LivingWorld" element={<Cards title="Living World" flashcards={LivingWorld}   />} />
     <Route path="/Neetlist/BiologicalClassification" element={<Cards title="Biological classification" flashcards={BiologicalClassification}   />} />
     <Route path="/Neetlist/PlantKingdom" element={<Cards title="Plant Kingdom" flashcards={PlantKingdom}   />} />
     <Route path="/Neetlist/AnimalKingdom" element={<Cards title="Animal Kingdom" flashcards={AnimalKingdom}   />} />
     <Route path="/Neetlist/PlantMorphology" element={<Cards title="Plant Morphology" flashcards={PlantMorphology} />} />
    <Route path="/Neetlist/PlantAnatomy" element={<Cards title="Plant Anatomy" flashcards={PlantAnatomy} />} />
     <Route path="/Neetlist/CellUnitOfLife" element={<Cards title="Cell" flashcards={CellUnitOfLife} />} />
     <Route path="/Neetlist/biomolecules" element={<Cards title="Biomolecules" flashcards={Biomolecules} />} />
     <Route path="/Neetlist/cell-division" element={ < Cards title="Cell Dvision" flashcards={Celldivision} /> } />
     <Route path="/Neetlist/photosynthesis" element={ < Cards title="Photosynthesis " flashcards={Photosynthesis} /> } />
     <Route path="/Neetlist/respiration" element={ < Cards title="Respiration " flashcards={Respiration} /> } />
     <Route path="/Neetlist/plantgd" element={ < Cards title="Plant growth and development " flashcards={PlantGD} /> } />
     <Route path="/Neetlist/breathingandexchange" element={ < Cards title="Breathing and exchange of gases " flashcards={Breathingandexchange} /> } />
     <Route path="/Neetlist/bodyfluids" element={ < Cards title="Body fluids and circulation " flashcards={Bodyfluids} /> } />
      <Route path="/Neetlist/excretory-product" element={ < Cards title="Excretory products and their elimination " flashcards={Excretoryproduct} /> } />
      <Route path="/Neetlist/locomotion-and-movement" element={ < Cards title="Locomotion And Movement " flashcards={Locomotionandmovement} /> } />
      <Route path="/Neetlist/neural-control-and-coordination" element={ < Cards title="Neural Control And Coordination " flashcards={Neuralcontrol} /> } />
      <Route path="/Neetlist/chemical-control-and-coordination" element={ < Cards title="Chemical Control And Coordination " flashcards={Chemicalcoordination} /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App;