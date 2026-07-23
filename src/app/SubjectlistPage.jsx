import { useParams } from "react-router-dom";
import Subject8 from "../data/class8/SubjectlistdataClass8";
import Subject9 from "../data/class9/SubjectlistdataClass9";
import Subject10 from "../data/class10/SubjectlistdataClass10";
import Subjectneet from "../data/neet/SubjectlistdataClassneet";
import Subjectlist from "./Subjectlist";

function SubjectlistPage (){
  const  {classId , tool} = useParams();
  
  const subjectMap = {
    class8 : Subject8 ,
    class9 : Subject9 ,
    class10 : Subject10,
    neet : Subjectneet,
  };
const subjects = subjectMap[classId];

return <Subjectlist subjects={subjects} classId={classId} tool ={tool} />
};

export default SubjectlistPage ;