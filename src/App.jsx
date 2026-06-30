
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "./lib/supabase" ;
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
import ChapterlistPage from "./app/ChapterlistPage";
import Signup from "./auth/Signup";





function App() {

  useEffect(() => {
     async function checkSession() {
      const { data , error } = await supabase.auth.getSession();
      console.log(data);
      console.log(error);
    } 
    checkSession();
    
      
     } 
      , [] );
  return (
    <div>
  <BrowserRouter>
   < ScrollToTop />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Neetlist" element={< Neetlist />} />
     <Route path="/ComingSoon" element={< ComingSoon />} />
     <Route path="/Neetlist/:slug" element={<DynamicChapter />} />
     <Route path="/home/:classId"  element={ <DashboardPage />} />
    
     <Route path="/home/:classId/:tool" element={<SubjectlistPage /> } />
      <Route path="/home/:classId/:tool/:subject" element={<ChapterlistPage />} />
      <Route path="/signup" element={<Signup />} />
     
     
    </Routes> 
    </BrowserRouter>

    
    </div>
  )
}

export default App;