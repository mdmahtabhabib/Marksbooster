import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
function ComingSoon (){
    return(
         <div>
            <Nav />
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
            
      <div className="max-w-3xl text-center">
        
        <h1 className="text-6xl md:text-7xl font-extrabold text-blue-700 mb-6">
          Coming Soon
        </h1>

        <p className="text-xl md:text-2xl text-slate-700 mb-4">
          MarksBooster is preparing something special for
          Class 8, 9 & 10 students.
        </p>

        <p className="text-lg text-slate-500 mb-10">
          Flashcards • PYQs • Sample Papers • Mind Maps •
          Smart Revision • Study Planner
        </p>

        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold mb-10">
          🚀 Launching Soon
        </div>

        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg">
            Stay Updated
          </button>
        </div>

      </div>
    </div>
    <Footer />
    </div>
    )
};
export default ComingSoon;