import { useParams } from "react-router-dom";
import Subject8 from "../Components/data/Subject/SubjectlistdataClass8";
import Subject9 from "../Components/data/Subject/SubjectlistdataClass9";
import Subject10 from "../Components/data/Subject/SubjectlistdataClass10";
import Subjectlist from "./Subjectlist";

function SubjectlistPage (){
  const  {classId , tool} = useParams();
  
  const subjectMap = {
    class8 : Subject8 ,
    class9 : Subject9 ,
    class10 : Subject10,
  };
const subjects = subjectMap[classId];

return <Subjectlist subjects={subjects} classId={classId} tool ={tool} />
};

export default SubjectlistPage ;