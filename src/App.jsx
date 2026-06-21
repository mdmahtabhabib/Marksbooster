
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Neetlist from "./Pages/Neetlist";
import ScrollToTop from "./Components/ScrollToTop";
import ComingSoon from "./Pages/ComingSoon";
import Cell from "./Neet/Cell";
import Cards from "./comp/Card";
import DynamicChapter from "./Pages/DynamicChapter";
import Dashboard from "./app/Dashboard";
import { class8Data } from "./Components/data/class8";
import DashboardPage from "./Components/hometype/DashboardPage";
import Subject10 from "./Components/data/SubjectlistdataClass10";
import Subjectlist from "./app/Subjectlist";



function App() {
  return (
  <BrowserRouter>
   < ScrollToTop />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Neetlist" element={< Neetlist />} />
     <Route path="/ComingSoon" element={< ComingSoon />} />
     <Route path="/Neetlist/:slug" element={<DynamicChapter />} />
     <Route path="/home/:classId"  element={ <DashboardPage />} />
    
     <Route path="/home/class10/flashcard" element={<Subjectlist subjects={Subject10} /> } />
     
    </Routes> 
    </BrowserRouter>
  )
}

export default App;