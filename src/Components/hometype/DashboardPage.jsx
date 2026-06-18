import { useParams } from "react-router-dom";
import Dashboard from "../Dashboard";
import { class8Data } from "../data/class8";
import { class9Data } from "../data/class9";
import { class10Data } from "../data/class10";

export default function DashboardPage () {
    const {classId}  = useParams();

    const dataMap = {
         class8 : class8Data ,
          class9: class9Data ,
          class10 : class10Data
        };

   const data = dataMap[classId];  
   return <Dashboard {...data} />;   
};