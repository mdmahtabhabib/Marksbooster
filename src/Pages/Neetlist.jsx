import Nav from "../Components/Nav";
import Footer from "../Components/Footer" ;
import { Link } from "react-router-dom";

function Neetlist(){
    const chapters = [
  { no: 1, name: "The Living World", questions: 15, slug: "LivingWorld" },
  { no: 2, name: "Biological Classification", questions: 20, slug: "BiologicalClassification" },
  { no: 3, name: "Plant Kingdom", questions: 25, slug: "PlantKingdom" },
  { no: 4, name: "Animal Kingdom", questions: 30, slug: "AnimalKingdom" },

  { no: 5, name: "Morphology of Flowering Plants", questions: 20, slug: "PlantMorphology" },
  { no: 6, name: "Anatomy of Flowering Plants", questions: 18, slug: "PlantAnatomy" },

  { no: 7, name: "Cell: The Unit of Life", questions: 35, slug: "CellUnitOfLife" },
  { no: 8, name: "Biomolecules", questions: 28, slug: "biomolecules" },
  { no: 9, name: "Cell Cycle and Cell Division", questions: 22, slug: "cell-division" },

  { no: 10, name: "Photosynthesis in Higher Plants", questions: 30, slug: "photosynthesis" },
  { no: 11, name: "Respiration in Plants", questions: 20, slug: "cell" },
  { no: 12, name: "Plant Growth and Development", questions: 18, slug: "cell" },

  { no: 13, name: "Breathing and Exchange of Gases", questions: 20, slug: "cell" },
  { no: 14, name: "Body Fluids and Circulation", questions: 25, slug: "cell" },
  { no: 15, name: "Excretory Products and Elimination", questions: 22, slug: "cell" },
  { no: 16, name: "Locomotion and Movement", questions: 18, slug: "cell" },
  { no: 17, name: "Neural Control and Coordination", questions: 25, slug: "cell" },
  { no: 18, name: "Chemical Coordination and Integration", questions: 20, slug: "cell" },

  { no: 19, name: "Reproduction in Organisms", questions: 15, slug: "cell" },
  { no: 20, name: "Sexual Reproduction in Flowering Plants", questions: 25, slug: "cell" },
  { no: 21, name: "Human Reproduction", questions: 25, slug: "cell" },
  { no: 22, name: "Reproductive Health", questions: 20, slug: "cell" },

  { no: 23, name: "Principles of Inheritance and Variation", questions: 35, slug: "cell" },
  { no: 24, name: "Molecular Basis of Inheritance", questions: 40, slug: "cell" },
  { no: 25, name: "Evolution", questions: 25, slug: "cell" },

  { no: 26, name: "Human Health and Disease", questions: 25, slug: "cell" },
  { no: 27, name: "Microbes in Human Welfare", questions: 20, slug: "cell" },
  { no: 28, name: "Biotechnology: Principles and Processes", questions: 25, slug: "cell" },
  { no: 29, name: "Biotechnology and its Applications", questions: 20, slug: "BiotechnologyApplications" },

  { no: 30, name: "Organisms and Populations", questions: 20, slug: "cell" },
  { no: 31, name: "Ecosystem", questions: 25, slug: "cell" },
  { no: 32, name: "Biodiversity and Conservation", questions: 20, slug: "cell" }
];
    return(
       <section className="min-h-screen bg-gray-50" >
        <Nav />
        <div className="bg-blue-100 py-10 px-5 text-center"  >
            <span className="inline-block bg-white text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4" >
                NEET BIOLOGY
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3" >
                Biology Chapter List
            </h1>
            <p className=" text-gray-500 text-sm max-w-xl mx-auto" >
                Complete NEET biology syllabus - class 11 & 12.
                Click any chapter to start practicing flashcard
            </p>

            {/* Stat */}
            <div className="flex item-center justify-center gap-8 mt-6" >
                <div>
                    <p className="text-xl font-bold text-blue-800" >32</p>
                    <p className="text-xs text-gray-500" >Chapters</p>
                </div>
                <div className="border-1 border-blue-200 h-10" ></div>
                <div>
                    <p className="text-xl font-bold text-blue-800" >480+</p>
                    <p className="text-xs text-gray-500">Flashcard</p>
                </div>
                <div className="border-1 border-blue-200 h-10"></div>
                <div>
                    <p className="text-xl font-bold text-blue-800" >NEET </p>
                    <p className="text-xs text-gray-500 " >pattern based</p>
                </div>
            </div>
        </div>
        {/*Chapter list*/}
        <div className="max-w-3xl mx-auto px-5 py-10" >
            <div className="flex items-center justify-between mb-6" >
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest" >
                    All Chapter 
                </h2>
                <span className="text-sm text-gray-500" >{chapters.length} chapters total</span>
            </div>

            <div className="flex flex-col gap-3" >
                {chapters.map((ch) => (
                    <Link to={`/Neetlist/${ch.slug}`}>
                    <div key={ch.no} className="bg-white border border-blue-100 rounded-2xl px-5 py-4 flex iterms-center justify-between hover:bg-blue-100  hover:shadow-md transition-all cursor-pointer group " >
                        <div className="flex items-center gap-4" >
                            <div className="w-9 h-9 bg-blue-50 group-hover:bg-blue-200  rounded-xl flex items-center justify-center text-sm font-bold text-blue-700 tansition-colors flex-shrink-0" >
                                {ch.no}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-blue-900" >
                                    {ch.name}
                                </p >
                                <p className="text-sm text-gray-500 mt-0.5" >{ch.questions} Flashcard</p>
                            </div>
                        </div>

                        <div className=" flex items-center gap-3" >
                            <span className="hidden sm:block text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full" >start</span>
                            <span className="text-blue-300 group-hover:text-blue-600 transition-colors text-lg " >→</span>
                        </div>
                         </div>
                </Link>
                ))}

            </div >
            {/*Bottom CTA */}
            <div className="mt-10 bg-blue-100 rounded-2xl p-6 text-center" >
                <p className="text-sm font-bold text-blue-900 mb-1" >Want full NEET preparation ?</p>
                <p className="text-xs text-gray-600 mb-4" >
                    Get access to all chapters , flashcards and PYQs at ₹499
                </p>
                <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-8 py-2.5 rounded-xl transition-colors">
                    Get started -₹499 
                </button>
            </div>

        </div>
        <Footer />

       </section>
    )
};
export default Neetlist;