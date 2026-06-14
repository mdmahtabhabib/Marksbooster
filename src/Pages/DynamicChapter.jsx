import { useParams } from "react-router-dom";
import Cards from "../comp/Card";

// Import all flashcard data
import LivingWorld from "../Neet/LivingWorld";
import BiologicalClassification from "../Neet/BiologicalClassification";
import PlantKingdom from "../Neet/PlantKingdom";
import AnimalKingdom from "../Neet/AnimalKingdom";
import PlantMorphology from "../Neet/PlantMorphology";
import PlantAnatomy from "../Neet/PlantAnatomy";
import CellUnitOfLife from "../Neet/CellUnitOfLife";
import Biomolecules from "../Neet/Biomolecules";
import Celldivision from "../Neet/Celldivision";
import Photosynthesis from "../Neet/Photosynthesis";
import Respiration from "../Neet/Respiration";
// import PlantGD from "../Neet/PlantGD";
import Breathingandexchange from "../Neet/Breathingandexchange";
import Bodyfluids from "../Neet/Bodyfluids";
import Excretoryproduct from "../Neet/Excretoryproduct";
import Locomotionandmovement from "../Neet/Locomotionandmovement";
import Neuralcontrol from "../Neet/Neuralcontrol";
import Chemicalcoordination from "../Neet/Chemicalcoordination";
import BiotechnologyApplications from "../Neet/BiotechnologyApplications";
import ReproductionInOrganisms from "../Neet/ReproductionInOrganisms";
import Sexualreproductioninfloweringplants from "../Neet/Sexualreproductioninfloweringplants";
import Humanreproduction from "../Neet/Humanreproduction";
import Reproductivehealth from "../Neet/Reproductivehealth";
import Principlesofinheritance from "../Neet/Principlesofinheritance";
import Molecularbasis from "../Neet/Molecularbasis";
import Evolution from "../Neet/Evolution";
import Humanhealth from "../Neet/Humanhealth";
import Microbesinhuman from "../Neet/Microbesinhuman";
import Biotechprinciples from "../Neet/Biotechprinciples";
import Organismsandpopulations from "../Neet/Organismsandpopulations";
import Ecosystem from "../Neet/Ecosystem";
import Biodiversityandconservation from "../Neet/Biodiversityandconservation";

const chapters = {
  LivingWorld: {
    title: "Living World",
    flashcards: LivingWorld,
  },

  BiologicalClassification: {
    title: "Biological Classification",
    flashcards: BiologicalClassification,
  },

  PlantKingdom: {
    title: "Plant Kingdom",
    flashcards: PlantKingdom,
  },

  AnimalKingdom: {
    title: "Animal Kingdom",
    flashcards: AnimalKingdom,
  },

  PlantMorphology: {
    title: "Morphology of Flowering Plants",
    flashcards: PlantMorphology,
  },

  PlantAnatomy: {
    title: "Anatomy of Flowering Plants",
    flashcards: PlantAnatomy,
  },

  CellUnitOfLife: {
    title: "Cell: The Unit of Life",
    flashcards: CellUnitOfLife,
  },

  biomolecules: {
    title: "Biomolecules",
    flashcards: Biomolecules,
  },

  "cell-division": {
    title: "Cell Cycle and Cell Division",
    flashcards: Celldivision,
  },

  photosynthesis: {
    title: "Photosynthesis in Higher Plants",
    flashcards: Photosynthesis,
  },

  Respiration: {
    title: "Respiration in Plants",
    flashcards: Respiration,
  },

  //plantgd: {
   // title: "Plant Growth and Development",
   // flashcards: PlantGD,
 // },

  breathingandexchange: {
    title: "Breathing and Exchange of Gases",
    flashcards: Breathingandexchange,
  },

  bodyfluids: {
    title: "Body Fluids and Circulation",
    flashcards: Bodyfluids,
  },

  "excretory-product": {
    title: "Excretory Products and Elimination",
    flashcards: Excretoryproduct,
  },

  "locomotion-and-movement": {
    title: "Locomotion and Movement",
    flashcards: Locomotionandmovement,
  },

  "neural-control-and-coordination": {
    title: "Neural Control and Coordination",
    flashcards: Neuralcontrol,
  },

  "chemical-control-and-coordination": {
    title: "Chemical Coordination and Integration",
    flashcards: Chemicalcoordination,
  },

  "BiotechnologyApplications": {
    title: "Biotechnology and its Applications",
    flashcards: BiotechnologyApplications,
  },
   
 "reproduction-in-organims" :{ title: "Reproduction in organism " , flashcards: ReproductionInOrganisms  } ,
 "Sexual-reproduction-flowering-plants" :{ title: "Sexual reproduction in Flowering plants " , flashcards: Sexualreproductioninfloweringplants  } ,
 "human-reproduction":{ title: "Human Reproduction" , flashcards: Humanreproduction},
 "reproductive-health":{ title: "Reproductive Health" , flashcards: Reproductivehealth } ,
 "Principles-of-inheritance":{ title: "Principle of inheritance and variation" , flashcards: Principlesofinheritance } ,
 "molecular-basis":{ title: "Molecular Basis Of Inheritance" , flashcards: Molecularbasis } ,
  "evolution":{ title: "Evolution" , flashcards: Evolution } ,
   "human-health":{ title: "Human health and disease" , flashcards: Humanhealth } ,
   "microbes-in-human":{ title: "Microbes In Human Welfare" , flashcards: Microbesinhuman} ,
   "biotech-principles":{ title: "Biotechnology: Principles and Processes" , flashcards: Biotechprinciples} ,
    "organisms-and-populations":{ title: "Organisms And Populations" , flashcards: Organismsandpopulations} ,
    "ecosystem":{ title: "Ecosystem" , flashcards: Ecosystem} ,
      "biodiversity-and-conservation":{ title: "Biodiversity and conservation" , flashcards: Biodiversityandconservation} ,
};

function DynamicChapter(){
    const {slug} = useParams();
    const chapter = chapters[slug];

    if (!chapter){
    return(
        <div className="min-h-screen flex items-center justify-center" >
            <h1 className="text-2xl font-bold" >
                Chapter not found
            </h1>
        </div>
    );
}
return (
    < Cards title={chapter.title} flashcards={chapter.flashcards} />
); }

export default DynamicChapter;