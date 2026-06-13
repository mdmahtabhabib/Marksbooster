import Stats from "./Stats";
import Nav from "./Nav";
import Hero from "./Hero";
import Features from "./Features";
import Cources from "./Cources";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Banner from "./Banner";
import Footer from "./Footer";
import ComingSoon from "../Pages/ComingSoon";
import { Helmet } from "react-helmet-async";

function Home(){
   return (
    <>
    <Helmet>
        <title>MarksBooster - Free NEET Biology Notes & Flashcards</title>
        <meta name="description" content="Free NEET Biology notes, flashcards, PYQs for class 8-10 students. Just ₹499/year." />
      </Helmet>
<div>
     <Nav />
    <Hero />
    <Stats />
    <Features />
    <Cources />
    <Testimonials />
    <Faq />
    <Banner />
    <Footer />
    
</div>
</>
  )
}
export default Home;