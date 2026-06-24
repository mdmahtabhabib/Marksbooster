import { useParams } from "react-router-dom";
import physics10 from "../Components/data/Chapters/class10/physics10";
import chemistry10 from "../Components/data/Chapters/class10/chemistry10";
import biology10 from "../Components/data/Chapters/class10/biology10";
import maths10 from "../Components/data/Chapters/class10/maths10";
import sst10 from "../Components/data/Chapters/class10/sst10";
import english10 from "../Components/data/Chapters/class10/english10";
import physics9 from "../Components/data/Chapters/class9/physics9";
import chemistry9 from "../Components/data/Chapters/class9/chemistry9";
import biology9 from "../Components/data/Chapters/class9/biology9";
import english9 from "../Components/data/Chapters/class9/english9";
import sst9 from "../Components/data/Chapters/class9/sst9";
import maths9 from "../Components/data/Chapters/class9/maths9,js";
import physics8 from "../Components/data/Chapters/class8/physics8";
import chemistry8 from "../Components/data/Chapters/class8/chemistry8";
import biology8 from "../Components/data/Chapters/class8/biology8";
import sst8 from "../Components/data/Chapters/class8/sst";
import maths8 from "../Components/data/Chapters/class8/maths8";
import english8 from "../Components/data/Chapters/class8/english8";

import Chapterlist from "./Chapterlist";


function ChapterlistPage(){
    const {classId , tool , subject} = useParams();

    const chapterMap = {
        class8:{ physics : physics8 ,
                 chemistry : chemistry8 ,
                  biology : biology8  , 
                  maths : maths8 ,
                  socialscience : sst8 ,
                  english : english8
                },
        class9 :{
               physics : physics9 ,
               chemistry : chemistry9 ,
               biology : biology9, 
               maths : maths9 ,
               socialscience : sst9 , 
               english : english9
        },  
        class10 :{
               physics : physics10 ,
               chemistry : chemistry10 ,
               biology : biology10 , 
               maths : maths10,
               socialscience : sst10 , 
               english : english10
        }  
    };
    const chapters = chapterMap[classId][subject];
     
   return ( <Chapterlist chapters ={chapters} classId={classId} tool={tool} subject={subject} />);

};
export default ChapterlistPage;