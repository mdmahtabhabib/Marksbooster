import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import Flashcard from "./Flashcard";
import { supabase } from "../../lib/supabase";
import Spinner from "../../Components/ui/Spinner";

function FlashcardlistPage(){
    const {chapterSlug}  = useParams();

    const  [chapter , setChapter ] = useState(null);
    const [loading , setLoading ] = useState(true);

    useEffect( () =>{
        async function loadchapter(){
         setLoading(true);
         const {data , error } = await supabase
         .from("chapters")
         .select("title, flashcards(*)")
         .eq("slug" , chapterSlug)
         .order ("position" , {foreignTable : "flashcards"})
         .single();

         if (error) {
            console.log(error.message);
            setChapter(null);
         }else{
            setChapter(data);
         }
         setLoading(false)
        }
         loadchapter();
        },[chapterSlug]);
            
        
   
     if(loading) return <Spinner /> ;

     if (!chapter || chapter.flashcards.length ===0) {
      return (
         <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 " >
            <p className="text-slate-400 text-center" >No flashcards for this chapter yet . check back soon .</p>
         </div>
      )
     }
    return( <Flashcard title={chapter.title} flashcards={chapter.flashcards} />)
}


export default FlashcardlistPage;