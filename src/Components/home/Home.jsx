import Stats from "./Stats";
import Nav from "./Nav";
import Hero from "./Hero";
import Features from "./Features";
import Cources from "./Cources";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Banner from "./Banner";
import Footer from "./Footer";
import ComingSoon from "../../Pages/ComingSoon";
import { Helmet } from "react-helmet-async";

function Home(){
   return (
    <>
    <Helmet>
        <title>MarksBooster | Flashcards, Short Notes & Practice for Exams</title>
        <meta name="description" content="Chapter-wise flashcards, one-page short notes, concept-check quizzes and important questions to help you score more in your exams. Now live for CBSE Class 9." />

      </Helmet>
<div>
     <Nav />
    <Hero />
    <Stats />
    <Features />
    <Cources />

   {/* <Testimonials /> */}

    <Faq />
    <Banner />
    <Footer />
    
</div>
</>
  )
}
export default Home;