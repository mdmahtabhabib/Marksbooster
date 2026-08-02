import { useParams } from "react-router-dom";
import ComingSoon from "@/Pages/ComingSoon";
import FlashcardlistPage from "@/Features/Flashcard/FlashcardlistPage";

export default function ToolLeaf() {
    const { tool } = useParams() ;

    if (tool === "flashcard") return <FlashcardlistPage />;
    return <ComingSoon />
};