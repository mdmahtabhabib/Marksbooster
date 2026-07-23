import { useParams } from "react-router-dom";
import physics10 from "../data/class10/chapters/physics10";
import chemistry10 from "../data/class10/chapters/chemistry10";
import biology10 from "../data/class10/chapters/biology10";
import maths10 from "../data/class10/chapters/maths10";
import sst10 from "../data/class10/chapters/sst10";
import english10 from "../data/class10/chapters/english10";
import physics9 from "../data/class9/chapters/physics9";
import chemistry9 from "../data/class9/chapters/chemistry9";
import biology9 from "../data/class9/chapters/biology9";
import english9 from "../data/class9/chapters/english9";
import sst9 from "../data/class9/chapters/sst9";
import maths9 from "../data/class9/chapters/maths9.js";
import physics8 from "../data/class8/chapters/physics8";
import chemistry8 from "../data/class8/chapters/chemistry8";
import biology8 from "../data/class8/chapters/biology8";
import sst8 from "../data/class8/chapters/sst8";
import maths8 from "../data/class8/chapters/maths8";
import english8 from "../data/class8/chapters/english8";
import physicsneet from "../data/neet/chapters/physicsneet";
import chemistryneet from "../data/neet/chapters/chemistryneet";
import zoologyneet from "../data/neet/chapters/zoologyneet";
import botanyneet from "../data/neet/chapters/botanyneet";

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
        },
        neet :{ physics : physicsneet ,
                chemistry : chemistryneet ,
                zoology : zoologyneet , 
                botany : botanyneet

        }
    };
    const chapters = chapterMap[classId][subject];
     
   return ( <Chapterlist chapters ={chapters} classId={classId} tool={tool} subject={subject} />);

};
export default ChapterlistPage;