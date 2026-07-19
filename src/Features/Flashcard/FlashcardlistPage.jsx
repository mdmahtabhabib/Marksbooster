import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import Flashcard from "./flashcard";
import { supabase } from "../../lib/supabase";

function FlashcardlistPage(){
    const {chapterSlug}  = useParams();

    const  [chapter , setChapter ] = useState(null);
    const [loading , setLoading ] = useState(true);

    useEffect( () =>{
        async function loadchapter(){
         const {data , error } = await supabase
         .from("chapters")
         .select("title, flashcards(*)")
         .eq("slug" , chapterSlug)
         .order ("position" , {foreignTable : "flashcards"})
         .single();

         if (error) {
            console.log(error.message);
         }else{
            setChapter(data);
         }
         setLoading(false)
        }
         loadchapter();
        },[chapterSlug]);
            
        
   
     if(loading) return <p>Loading...</p>
    return( <Flashcard title={chapter.title} flashcards={chapter.flashcards} />)
}


export default FlashcardlistPage;