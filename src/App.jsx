
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase" ;
import Home from "./Components/hometype/Home";
import Neetlist from "./Pages/Neetlist";
import ScrollToTop from "./Components/hometype/ScrollToTop";
import ComingSoon from "./Pages/ComingSoon";
import DynamicChapter from "./Pages/DynamicChapter";
import DashboardPage from "./app/DashboardPage";
import SubjectlistPage from "./app/SubjectlistPage";
import ChapterlistPage from "./app/ChapterlistPage";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import Studytimer from "./Features/Studytimer";
import Test from "./comp/test";
import FlashcardlistPage from "./Features/flashcard/flashcardlistPage";






function App() {
  const [session , setSession] = useState(null);
  const [authLoading , setAuthLoading] = useState(true);

  useEffect(() => {
     async function checkSession() {
      const { data , error } = await supabase.auth.getSession();
      if (error) {
        console.log("Session check failed" , error.message);
        setAuthLoading(false);
        return;
      }
      setSession(data.session);
      setAuthLoading(false);
    } 
    checkSession();

    const {data} = supabase.auth.onAuthStateChange((event , session) => {
      setSession(session);
      setAuthLoading(false);
    });

    return () => {data.subscription.unsubscribe()}
     } 
      , [] );
      
  return (
    <AuthContext.Provider value={{session , authLoading }}>
    <div>
  <BrowserRouter>
   < ScrollToTop />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Neetlist" element={< Neetlist />} />
     <Route path="/ComingSoon" element={< ComingSoon />} />
     <Route path="/Neetlist/:slug" element={<DynamicChapter />} />
     <Route path="/home/:classId"  element={ <ProtectedRoute> <DashboardPage /> </ProtectedRoute> } />
    
     <Route path="/home/:classId/:tool" element={<ProtectedRoute> <SubjectlistPage /></ProtectedRoute> } />
      <Route path="/home/:classId/:tool/:subject" element={<ProtectedRoute><ChapterlistPage /></ProtectedRoute>} />
      <Route path="/home/:classId/:tool/:subject/:chapterSlug" element={<ProtectedRoute><FlashcardlistPage /></ProtectedRoute>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/timer" element = {<Studytimer/>} />
      <Route path="/notes" element = {<Test/>} />
     
     
    </Routes> 
    </BrowserRouter>

    
    </div>
    </AuthContext.Provider>
  )
}

export default App;