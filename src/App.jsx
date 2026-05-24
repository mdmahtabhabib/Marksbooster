import Stats from "./Components/stats"
function App() {
  return (
    <div className="bg-gray-300">
    <nav className="bg-white border-2 border-blue-100 px-5 py-5 flex items-center justify-between shadow-sm sticky top-0 z-50  ">
      <div className="text-xl font-bold text-blue-900 tracking-tight">
        <span className="text-blue-900">Marks</span>
        <span className="text-blue-400">booster</span>
      </div>
      <div className=" hidden md:flex gap-8 text-sm text-gray-500">
        <a href="#" className="hover:text-blue-600 transition-colors">Feature</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Reveiw</a>
        <a href="#" className="hover:text-blue-600 transition-colors">FAQ</a>
      </div>
      <div className="flex items-center gap-3">
        
        <a href="#" className="bg-blue-700 text-white text-sm px-5 py-2 rounded-xl transition-colors hover:bg-blue-800">
          Login/Register
        </a>
      </div>
    </nav>
    <section className=" bg-blue-100 py-16 md:py-32 px-5 text-center  ">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-900">The smartest way for <br /> 
      class 8-10 students to <br />
       <span className="text-blue-500"> study & score higher</span></h1>
      <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto mt-3 mb-8 leading-relaxed">Flashcard , PYQ , doubt solver, mind maps , syllabus tracker -everything you needs in one simple platform. CBSE & State Board . just at 499/year</p>
      <div>
        <a href="#" className="bg-blue-600 text-white px-3 py-2 rounded-md">
          choose your class
        </a>
      </div>
    </section>
    <Stats />
    </div>
  )
}

export default App