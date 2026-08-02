
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
import Test from "./comp/test";
import PurchaseRoute from "./auth/PurchaseRoute";
import ToolLeaf from "./app/ToolLeaf";






function App() {
  const [session , setSession] = useState(null);
  const [authLoading , setAuthLoading] = useState(true);
  const [unlockedClasses , setUnlockedClasses] = useState(null);

  useEffect(() => {
    async function loadUnlockedClasses(session){
      if (!session){
         setUnlockedClasses([]);
         return;
      }
      const { data : rows , error } = await supabase
      .from("purchases")
      .select("products(unlocks_class)")
      .eq("payment_status" , "completed");

       if (error){
        console.error(error);
        setUnlockedClasses([]);
        return
      }

      setUnlockedClasses(rows.map((row) => row.products.unlocks_class ));

    }

     async function checkSession() {
      const { data , error } = await supabase.auth.getSession();
      if (error) {
        console.log("Session check failed" , error.message);
        setAuthLoading(false);
        return;
      }
      setSession(data.session);
     await loadUnlockedClasses(data.session);

      setAuthLoading(false);
    } 
    checkSession();

    const {data} = supabase.auth.onAuthStateChange((event , session) => {
      setSession(session);
      loadUnlockedClasses(session);
      setAuthLoading(false);
    });

    return () => {data.subscription.unsubscribe()}
     } 
      , [] );

      
      
      
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
      <Route path="/notes" element = {<Test/>} />
     
     
    </Routes> 
    </BrowserRouter>

    
    </div>
    </AuthContext.Provider>
  )
}

export default App;