import Nav from "../Components/Nav";
import { Atom , FlaskConical ,Leaf , BookOpenText , Globe2 , Calculator , ChevronRight , Lock } from "lucide-react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Subject10 from "../Components/data/SubjectlistdataClass10";


 
const Colorstyle = {
    blue : {bg: "bg-blue-50" , text :"text-blue-600" , border:"hover:border-blue-300"} ,
    purple : {bg: "bg-purple-50" , text :"text-purple-600" , border:"hover:border-purple-300"} ,
    green : {bg: "bg-green-50" , text :"text-green-600" , border:"hover:border-green-300"} ,
    orange : {bg: "bg-orange-50" , text :"text-orange-600" , border:"hover:border-orange-300"} ,
    rose : {bg: "bg-rose-50" , text :"text-rose-600" , border:"hover:border-rose-300"} ,
    indigo : {bg: "bg-indigo-50" , text :"text-indigo-600" , border:"hover:border-indigo-300"} ,
    
};

function Subjectlist ({subjects}){
    return(
        <div>
            <Nav />
            
                   <div className="flex flex-col items-center  p-3 max-w-5xl m-auto" >
            <div className="text-blue-800 font-bold text-2xl md:text-4xl" >choose your Subject</div>
            <div className="text-slate-500 text-md md:text-2xl font-semibold " >start Practice</div>
            </div>
           <div className=" grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-5xl px-4 " >
            
            {subjects.map((list) => {
                const Icon = list.icon;
                const c = Colorstyle[list.color];
                return(
                    <Link to={list.slug} key={list.id}  >
                    <div className="border border-slate-300 shadow-sm rounded-2xl m-3 p-3 flex text-center " >
                        <div className="flex gap-3 items-center w-full   " >
                        <div className={` w-10 h-10 ${c.bg}  rounded-xl flex items-center justify-center `} >
                        <Icon size={20} className={`${c.text}`} />
                        </div>
                        <div>
                <div className="font-semibold  " >{list.Subject}</div>
                <div className="text-slate-500 text-sm " >{list.ChapterCount}</div>
                </div>
                <ChevronRight className="text-right ml-auto " />
                </div>
                
                </div>
                </Link>)
            })}
           </div>
        < Footer />
        </div>
    )
};

export default Subjectlist;