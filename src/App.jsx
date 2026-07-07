
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase" ;
import Home from "./Components/Home";
import Neetlist from "./Pages/Neetlist";
import ScrollToTop from "./Components/ScrollToTop";
import ComingSoon from "./Pages/ComingSoon";
import DynamicChapter from "./Pages/DynamicChapter";
import DashboardPage from "./app/DashboardPage";
import SubjectlistPage from "./app/SubjectlistPage";
import ChapterlistPage from "./app/ChapterlistPage";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import { AuthContext } from "./context/AuthContext";






function App() {
  const [session , setSession] = useState(null);

  useEffect(() => {
     async function checkSession() {
      const { data , error } = await supabase.auth.getSession();
      if (error) {
        console.log("Session check failed" , error.message);
        return;
      }
      setSession(data.session);
    } 
    checkSession();

    const {data} = supabase.auth.onAuthStateChange((event , session) => {
      setSession(session);
    });

    return () => {data.subscription.unsubscribe()}
     } 
      , [] );
      
  return (
    <AuthContext.Provider value={session}>
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
      <Route path="/login" element={<Login/>} />
     
     
    </Routes> 
    </BrowserRouter>

    
    </div>
    </AuthContext.Provider>
  )
}

export default App;