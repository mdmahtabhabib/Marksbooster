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
function Home(){
   return (
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
    <ComingSoon />
</div>
  )
}
export default Home;