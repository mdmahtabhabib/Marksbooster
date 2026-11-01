import { Link } from "react-router-dom";


function Features(){
 const Feature = [
   { icon:"🗂" , title: "Flashcards", desc:"Flip-and-recall cards for quick chapter revision"},
   { icon:"📄" , title: "Short Notes", desc:"The whole chapter in short, exam-focused notes"},
   { icon:"📝" , title: "Important Questions", desc:"Most-asked exam questions with model answers, sorted by marks"},
   { icon:"✅" , title: "Concept Check", desc:"Track your syllabus by ticking off completed chapters"},
   { icon:"⏱" , title: "Study Timer", desc:"Track study sessions with time graph"},
   { icon:"📈" , title: "Syllabus Tracker", desc:"Track you syllabus by just clicking completed chapter"},
   /*{ icon:"📝" , title: "Topicwise Question", desc:"Find questions by topic by topic instantly"},
   { icon:"💬" , title: "Study planner", desc:"Organise your daily study schedule"} */
 ];

return(
   
   <section id="Features" className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20" >
    <p className="text-sm text-gray-500 uppercase tracking-widest text-center mb-2  " >FEATURES</p>
    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-4" >Everything you need for smart study</h2>
    <p className=" max-w-xl mx-auto  text-gray-500 text-sm text-center mb-10 " >One subscription unlocks all tools, no hidden costs</p>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4" >
     {Feature.map((f, i) =>(
     <div key={i} className="bg-white rounded-2xl p-5 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all" > 
      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl mb-4">{f.icon}</div>
      <h3 className="text-xl font-bold text-blue-900 mb-2" >{f.title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed  " >{f.desc}</p>
      </div>)
   )} 
    </div>
    
   </section>
   

)};
export default Features;