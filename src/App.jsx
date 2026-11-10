
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase" ;
import Home from "./Components/home/Home";

import ScrollToTop from "./Components/home/ScrollToTop";
import ComingSoon from "./Pages/ComingSoon";

import DashboardPage from "./app/DashboardPage";
import SubjectlistPage from "./app/SubjectlistPage";
import ChapterlistPage from "./app/ChapterlistPage";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import Studytimer from "./Features/Studytimer";

import PurchaseRoute from "./auth/PurchaseRoute";
import ToolLeaf from "./app/ToolLeaf";
import SyllabusTracker from "./Features/Syllabustracker/Syllabustracker";
import NotFound from "./Pages/NotFound";

import DashboardRedirect from "./auth/DashboardRedirect";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";







function App() {
  const [session , setSession] = useState(null);
  const [authLoading , setAuthLoading] = useState(true);
  const [unlockedClasses , setUnlockedClasses] = useState(null);
    const userId = session?.user?.id;


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
      
  useEffect(() => {
    let cancelled = false;

    async function loadUnlockedClasses(){
      setUnlockedClasses(null);
      if (!userId) return;

      const { data : rows , error } = await supabase
      .from("purchases")
      .select("products(unlocks_class)")
      .eq("payment_status" , "completed");
      if (cancelled) return;

      if (error){
        console.error(error);
        setUnlockedClasses([]);
        return;
      }

      setUnlockedClasses(rows.filter((row) => row.products !== null).map((row) => row.products.unlocks_class));
    }

    loadUnlockedClasses();
    return () => { cancelled = true; };
  }, [userId]);


      
      
      
  return (
    <AuthContext.Provider value={{session , authLoading , unlockedClasses }}>
    <div>
  <BrowserRouter>
   < ScrollToTop />
    <Routes>
     <Route path="/" element={<Home />} />    
     <Route path="/ComingSoon" element={< ComingSoon />} />
     <Route path="/home/:classId"  element={ <ProtectedRoute> <PurchaseRoute > <DashboardPage /></PurchaseRoute> </ProtectedRoute> } />
     <Route path="/home/:classId/:tool" element={<ProtectedRoute><PurchaseRoute > <SubjectlistPage /></PurchaseRoute ></ProtectedRoute> } />
      <Route path="/home/:classId/:tool/:subject" element={<ProtectedRoute><PurchaseRoute ><ChapterlistPage /></ PurchaseRoute ></ProtectedRoute>} />
      <Route path="/home/:classId/:tool/:subject/:chapterSlug" element={<ProtectedRoute><PurchaseRoute ><ToolLeaf /></ PurchaseRoute ></ProtectedRoute>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/timer" element = {<Studytimer/>} />
      <Route path="/tracker" element = {<SyllabusTracker/>} />
      <Route path="/syllabus" element = {<SyllabusTracker/>} />
      <Route path="/dashboard" element = {<ProtectedRoute> <DashboardRedirect /> </ProtectedRoute>} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={< NotFound />} />
      


      
      
    
     
     
    </Routes> 
    </BrowserRouter>

    
    </div>
    </AuthContext.Provider>
  )
}

export default App;
