 import { Link } from "react-router-dom";

 function Hero() {
   return (
 <section className=" bg-blue-100 py-16 md:py-32 px-5 text-center  ">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-900">The smartest way for <br /> 
      class 8-10 students to <br />
       <span className="text-blue-500"> study & score higher</span></h1>
      <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto mt-3 mb-8 leading-relaxed">Flashcard , PYQ , doubt solver, mind maps , syllabus tracker -everything you needs in one simple platform. CBSE & State Board . just at 499/year</p>
      <div>
        <Link to="/Neetlist/cell" className="bg-blue-600 text-white px-3 py-2 rounded-md">
          choose your class
        </Link>
      </div>
    </section>
 )};
 export default Hero ;