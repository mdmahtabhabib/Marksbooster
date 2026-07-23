import { useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import { class8Data } from "../data/class8/class8";
import { class9Data } from "../data/class9/class9";
import { class10Data } from "../data/class10/class10";
import tools10 from "../data/class10/Dashboardtoolsclass10";
import tools9 from "../data/class9/Dashboardtoolsclass9";
import tools8 from "../data/class8/Dashboardtoolsclass8";
import { neetData } from "../data/neet/classneet";
import toolsneet from "../data/neet/Dashboardtoolsneet";

export default function DashboardPage () {
    const {classId}  = useParams();

    const dataMap = {
         class8 : class8Data ,
          class9: class9Data ,
          class10 : class10Data ,
          neet    : neetData,
        };

        const toolsMap = {
          class8 : tools8 ,
          class9: tools9 ,
          class10 : tools10,
          neet : toolsneet

     }; 

   const data = dataMap[classId];  
   const tools = toolsMap[classId];
   return <Dashboard {...data} tools={tools} />;   
};