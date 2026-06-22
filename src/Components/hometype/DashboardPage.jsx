import { useParams } from "react-router-dom";
import Dashboard from "../../app/Dashboard";
import { class8Data } from "../data/Dashboard/class8";
import { class9Data } from "../data/Dashboard/class9";
import { class10Data } from "../data/Dashboard/class10";
import tools10 from "../data/Dashboard/Dashboardtoolsclass10";
import tools9 from "../data/Dashboard/Dashboardtoolsclass10 copy";
import tools8 from "../data/Dashboard/Dashboardtoolsclass10 copy 2";

export default function DashboardPage () {
    const {classId}  = useParams();

    const dataMap = {
         class8 : class8Data ,
          class9: class9Data ,
          class10 : class10Data
        };

        const toolsMap = {
          class8 : tools8 ,
          class9: tools9 ,
          class10 : tools10

     }; 

   const data = dataMap[classId];  
   const tools = toolsMap[classId];
   return <Dashboard {...data} tools={tools} />;   
};