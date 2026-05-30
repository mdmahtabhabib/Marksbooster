import Stats from "./Components/Stats"
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import Features from "./Components/Features"
import Cources from "./Components/Cources"
import Testimonials from "./Components/Testimonials"
import Faq from "./Components/Faq"
function App() {
  return (
    <div className="bg-[#F0F4FF] font-sans ">
    <Nav />
    <Hero />
    <Stats />
    <Features />
    <Cources />
    <Testimonials />
    <Faq />
    </div>
  )
}

export default App