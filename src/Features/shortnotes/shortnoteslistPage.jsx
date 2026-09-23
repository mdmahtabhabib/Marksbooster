import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import ShortNotes from "./shortnotes";
import { supabase } from "../../lib/supabase";
import Spinner from "../../Components/ui/Spinner";


function ShortNotesListPage(){

    const {chapterSlug} = useParams();
   
    const  [chapter , setChapter ] = useState(null);
    const [loading , setLoading ] = useState(true);

    useEffect( () =>{

        let cancelled = false;

        async function loadchapter(){
         setLoading(true);
         const { data, error } = await supabase
         .from("chapters")
         .select("title, short_notes(*)")
         .eq("slug", chapterSlug)
         .single();

          
         if (cancelled) return;

         if (error) {
            console.log(error.message);
            setChapter(null);
         }else{
            setChapter(data);
         }
         setLoading(false)
        }
         loadchapter();

         return() => {cancelled = true ;};
        },[chapterSlug]);
            
        
   
     if(loading) return <Spinner /> ;

      if (!chapter || !chapter.short_notes) {
      return (
         <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 " >
            <p className="text-slate-400 text-center" >No short notes for this chapter yet . check back soon .</p>
         </div>
      )
     }

    return <ShortNotes chapter={{ ...chapter.short_notes, title: chapter.title }} />

}

export default ShortNotesListPage;
