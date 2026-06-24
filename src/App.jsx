
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Neetlist from "./Pages/Neetlist";
import ScrollToTop from "./Components/ScrollToTop";
import ComingSoon from "./Pages/ComingSoon";
import Cell from "./Neet/Cell";
import Cards from "./comp/Card";
import DynamicChapter from "./Pages/DynamicChapter";
import Dashboard from "./app/Dashboard";
import { class8Data } from "./Components/data/Dashboard/class8";
import DashboardPage from "./app/DashboardPage";
import Subject10 from "./Components/data/Subject/SubjectlistdataClass10";
import Subjectlist from "./app/Subjectlist";
import SubjectlistPage from "./app/SubjectlistPage";
import Chapterlist from "./app/Chapterlist";



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
    
     <Route path="/home/:classId/:tool" element={<SubjectlistPage /> } />
      <Route path="/home/:classId/:tool/:subject" element={<div> subject clicked</div>} />
      <Route path="/home/class8/flashcard/physics" element={<Chapterlist />} />
     
    </Routes> 
    </BrowserRouter>
  )
}

export default App;