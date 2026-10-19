import { useParams } from "react-router-dom";
import ComingSoon from "@/Pages/ComingSoon";
import FlashcardlistPage from "@/Features/Flashcard/FlashcardlistPage";
import ShortNotesListPage from "@/Features/shortnotes/shortnoteslistPage";
import ConceptchecklistPage from "@/Features/Conceptcheck/ConceptchecklistPage";

export default function ToolLeaf() {
    const { tool } = useParams() ;

    if (tool === "flashcard") return <FlashcardlistPage />;
    else if (tool === "short-notes") return <ShortNotesListPage />;
    else if (tool === "concept-check") return <ConceptchecklistPage />
    return <ComingSoon /> ;
    
   
    
};