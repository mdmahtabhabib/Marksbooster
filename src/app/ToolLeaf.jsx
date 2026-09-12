import { useParams } from "react-router-dom";
import ComingSoon from "@/Pages/ComingSoon";
import FlashcardlistPage from "@/Features/Flashcard/FlashcardlistPage";
import NotesPage from "@/Features/shortnotes/shortnotes";

export default function ToolLeaf() {
    const { tool } = useParams() ;

    if (tool === "flashcard") return <FlashcardlistPage />;
    else if (tool === "short-notes") return <NotesPage />;
    return <ComingSoon /> ;
    
   
    
};