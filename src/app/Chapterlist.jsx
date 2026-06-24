import Nav from "../Components/Nav";
import { Atom , FlaskConical ,Leaf , BookOpenText , Globe2 , Calculator , ChevronRight , Lock } from "lucide-react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";






 
const Colorstyle = {
  blue : {bg: "bg-blue-50" , text :"text-blue-600" , border:"hover:border-blue-300"} ,
  purple : {bg: "bg-purple-50" , text :"text-purple-600" , border:"hover:border-purple-300"} ,
  green : {bg: "bg-green-50" , text :"text-green-600" , border:"hover:border-green-300"} ,
  orange : {bg: "bg-orange-50" , text :"text-orange-600" , border:"hover:border-orange-300"} ,
  rose : {bg: "bg-rose-50" , text :"text-rose-600" , border:"hover:border-rose-300"} ,
  indigo : {bg: "bg-indigo-50" , text :"text-indigo-600" , border:"hover:border-indigo-300"} ,

  red : {bg: "bg-red-50" , text :"text-red-600" , border:"hover:border-red-300"} ,
  yellow : {bg: "bg-yellow-50" , text :"text-yellow-600" , border:"hover:border-yellow-300"} ,
  emerald : {bg: "bg-emerald-50" , text :"text-emerald-600" , border:"hover:border-emerald-300"} ,
  teal : {bg: "bg-teal-50" , text :"text-teal-600" , border:"hover:border-teal-300"} ,
  cyan : {bg: "bg-cyan-50" , text :"text-cyan-600" , border:"hover:border-cyan-300"} ,
  sky : {bg: "bg-sky-50" , text :"text-sky-600" , border:"hover:border-sky-300"} ,
  violet : {bg: "bg-violet-50" , text :"text-violet-600" , border:"hover:border-violet-300"} ,
  fuchsia : {bg: "bg-fuchsia-50" , text :"text-fuchsia-600" , border:"hover:border-fuchsia-300"} ,
  pink : {bg: "bg-pink-50" , text :"text-pink-600" , border:"hover:border-pink-300"} ,
  lime : {bg: "bg-lime-50" , text :"text-lime-600" , border:"hover:border-lime-300"} ,
  amber : {bg: "bg-amber-50" , text :"text-amber-600" , border:"hover:border-amber-300"} ,
  stone : {bg: "bg-stone-50" , text :"text-stone-600" , border:"hover:border-stone-300"} ,
  slate : {bg: "bg-slate-50" , text :"text-slate-600" , border:"hover:border-slate-300"} ,
  zinc : {bg: "bg-zinc-50" , text :"text-zinc-600" , border:"hover:border-zinc-300"} ,
};

function Chapterlist ({ chapters,  subject , classId , tool}){
    return(
        <div>
            <Nav />
            
                   <div className="flex flex-col items-center  p-3 max-w-5xl m-auto" >
            <div className="text-blue-800 font-bold text-2xl md:text-3xl" >choose your Chapter</div>
            <div className="text-slate-500 text-md md:text-2xl font-semibold " >start Practice</div>
            </div>
           <div className=" grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-5xl px-4 " >
            
            {chapters.map((list) => {
                
                const c = Colorstyle[list.color];
                return(
                    <Link to={list.slug} key={list.id}  >
                    <div className="border border-slate-300 shadow-sm rounded-2xl m-3 p-3 flex text-center " >
                        <div className="flex gap-3 items-center w-full   " >
                        <div className={` w-10 h-10 ${c.bg}  rounded-xl flex items-center justify-center `} >
                        
                        <div className={`${c.text}`}>{list.icon}</div>
                        </div>
                        <div>
                <div className="font-semibold  " >{list.chapter}</div>
                
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

export default Chapterlist;