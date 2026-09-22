import { useParams } from "react-router-dom";
import ComingSoon from "@/Pages/ComingSoon";
import FlashcardlistPage from "@/Features/Flashcard/FlashcardlistPage";
import ShortNotesListPage from "@/Features/shortnotes/shortnoteslistPage";

export default function ToolLeaf() {
    const { tool } = useParams() ;

    if (tool === "flashcard") return <FlashcardlistPage />;
    else if (tool === "short-notes") return <ShortNotesListPage />;
    return <ComingSoon /> ;
    
   
    
};