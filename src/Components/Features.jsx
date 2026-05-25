function Features(){
 const Feature = [
   { icon:"🗂" , title: "Flashcard", desc:"Every conept covered chapter by chapter for all subject"},
   { icon:"📄" , title: "PYQ Papers", desc:"Previous year papers worth 3000 in market - all digital"},
   { icon:"📄" , title: "Sample Paper", desc:"Exam-style mock tests for practice"},
   { icon:"✅" , title: "Syllabus Tracker", desc:"Track completed and pending chapters"},
   { icon:"⏱" , title: "Study Timer", desc:"Track study sessions with pomodoro mode"},
   { icon:"🗺" , title: "Mind Maps", desc:"visual learning that makes complex topics simple"},
   { icon:"📝" , title: "Topicwise Question", desc:"Find questions by topic by topic instantly"},
   { icon:"💬" , title: "Study planner", desc:"Organise your daily study schedule"} 
 ];

return(
   
   <section id="Features" className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20" >
    <p className="text-sm text-gray-500 uppercase tracking-widest text-center mb-2  " >FEATURES</p>
    <h2 className="text-2xl md:text-3xls font-bold text-blue-900 text-center mb-4" >Everything you needs for smart study</h2>
    <p className=" max-w-xl mx-auto  text-gray-500 text-sm text-center mb-10 " >One subscription unlocks all tools , no hidden costs</p>
    <div className="grid grid-col-2 sm:grid-cols-2 md:grid-cols-4 gap-4" >
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