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
import PlantGD from "../Neet/PlantGD";
import Breathingandexchange from "../Neet/Breathingandexchange";
import Bodyfluids from "../Neet/Bodyfluids";
import Excretoryproduct from "../Neet/Excretoryproduct";
import Locomotionandmovement from "../Neet/Locomotionandmovement";
import Neuralcontrol from "../Neet/Neuralcontrol";
import Chemicalcoordination from "../Neet/Chemicalcoordination";
import BiotechnologyApplications from "../Neet/BiotechnologyApplications";

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

  plantgd: {
    title: "Plant Growth and Development",
    flashcards: PlantGD,
  },

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

  BiotechnologyApplications: {
    title: "Biotechnology and its Applications",
    flashcards: BiotechnologyApplications,
  },
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