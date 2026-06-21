
import Nav from "../Components/Nav"
import Footer from "../Components/Footer";
import { BookOpen, Clock, Target , AlertCircle , Flame , ChevronRight, CheckCircle2 , TrendingUp , Layers, FileText , HelpCircle , Bot , MapIcon , MessageSquare  , Bookmark, Route, icons, Bluetooth} from "lucide-react"



// the tools grid - all tools data
  const tools = [
    {
      name: "Flashcards" ,
      desc: "Concept-wise, all subjects",
      icon: Layers ,
      route : "/home/dashboard/flashcard/subject" ,
      color : "blue",
      
    } , 
    {
      name : "PYQ Papers" , 
      desc : "Previous year papers" ,
      icon : FileText ,
      route : "/pyq" ,
      color : "indigo",
    } ,
    {
      name : "Mind Maps" ,
      desc : "Visual chapter summaries ",
      icon : MapIcon , 
      route : "/mindmaps" ,
      color : "violet",

    },
    {
      name : "Topic-wise Questions" ,
      desc : "Find questions by topic" ,
      icon : HelpCircle ,
      route : "/topic-questions",
      color : "rose",
    } ,
    
    {
      name : "Syllabus Tracker",
    desc : "Track your syllabus progress",
    icon : Layers,
    route : "/syllabus",
    color : "emerald",
    },
    {
      name : "Study Timer" ,
      desc : "pomodoro + break reminders", 
      icon : Clock,
      route : "/timer",
      color : "amber",
    } ,
    
  ];

function ProgressBar ({percent , color = "bg-blue-500"}){
  return (
    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden" >
      <div className={ `h-full ${color} rounded-full transition-all duration-500 `} style={{ width : `${percent}%`}}  />
    </div>
  )
};

// Color tokens - light theme variants 
const colorMap = {
  blue : {bg: "bg-blue-50" , text: "text-blue-600" , border:"group-hover:border-blue-200" },
  indigo : {bg: "bg-indigo-50" , text: "text-indigo-600" , border:"group-hover:border-indigo-200" },
  emerald : {bg: "bg-emerald-50" , text: "text-emerald-600" , border:"group-hover:border-emerald-200" },
  amber : {bg: "bg-amber-50" , text: "text-amber-600" , border:"group-hover:border-amber-200" },
  rose: {bg: "bg-rose-50" , text: "text-rose-600" , border:"group-hover:border-rose-200" },
  violet : {bg: "bg-violet-50" , text: "text-violet-600" , border:"group-hover:border-violet-200" },
}

function Dashboard({ student, todayStudyMinutes, dailyGoalMinutes, syllabusPercent, continueChapter,}) {
   const studyPercent = Math.min( 100 , Math.round((todayStudyMinutes / dailyGoalMinutes)*100));
   const studyHours = Math.floor(todayStudyMinutes/60);
   const studyMins = todayStudyMinutes % 60;
  return(
    <>
    <div className="min-h-screen bg-slate-50 text-slate-900" >
 <Nav />
  {/* ============ MAIN CONTENT ============ */}
  <main className="max-w-5xl mx-auto px-4 py-6 pb-12 flex flex-col gap-6 "  >
  {/* Greeting */}
  <div className="flex items-center justify-between flex-wrap gap-2" >
    <div >
   <h1 className="text-xl sm:text-2xl font-bold text-slate-900" >Welcome back, {student.name} 👋</h1>
   <p className="text-sm text-slate-500 mt-0.5" > {student.className} .CBSE</p>
   </div>
  </div>

  {/* continue sttudying (tip priority action ) */}

  <a href={continueChapter.route} className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4 hover:border-blue-300 hover:shadow-sm transition-all group"  >
   <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0" >
    <BookOpen size={20} className="text-blue-600" />
   </div>
   <div className="flex-1 min-w-0" >
    <div className="text-[11px] text-slate-400 uppercase tracking-wide font-semibold mb-0.5 " >Continue where you left off</div>
    <div className="font-bold truncate text-slate-900" >{continueChapter.title}</div>
    <div className="text-xs text-slate-500 truncate" >{continueChapter.subtitle}</div>
   </div>
   <div className="text-right shrink-0" >
    <div className="text-sm font-bold text-blue-600 mb-1" >{continueChapter.progress}%</div>
    <ChevronRight size={18} className="text-slate-400 group-hover:text-blue-500 transition-colors ml-auto"  />
   </div>
  </a>

  {/* --- Today strip --- */}
  <div className="bg-white border border-slate-200 rounded-2xl p-4  flex items-center gap-5" >
    <div className="relative w-16 h-16 shrink-0" >
      <div className="absolute inset-0 rounded-full"  style={{
                background: `conic-gradient(#3b82f6 ${studyPercent * 3.6}deg, #e2e8f0 0deg)`,
              }} /> 
      
      <div className="absolute inset-1.5 rounded-full bg-white flex flex-col items-center justify-center" >
        <span className="text-xs font-bold text-slate-900" >{studyHours}h {studyMins}m</span>
      </div>
    </div>
    <div className="flex-1 grid grid-cols-1 gap-x-6 gap-y-2" >
      <div>
        <div className="flex items-center justify-between mb-1" >
          <span className="text-xs font-semibold text-slate-500" >Today's goal</span>
          <span>{todayStudyMinutes} / {dailyGoalMinutes}m</span>
        </div>
        < ProgressBar percent={studyPercent} color="bg-blue-500"  /> 
      </div>

      </div>
    </div>
    <div className="bg-white border border-slate-200 rounded-2xl p-4  flex items-center gap-5">
      <div className="flex-1 grid grid-cols-1 gap-x-6 gap-y-2" >
        <div className="flex items-center justify-between mb-1" >
          <span className="text-xs font-semibold text-slate-500" >Syllabus</span>
          <span>{syllabusPercent}%</span>
        </div>
         < ProgressBar percent={syllabusPercent} color="bg-emerald-500" />
    </div>
  </div>

 {/* YOUR TOOLS - the real home */}

 <div>
  <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3" >Your Tools</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" >
    {tools.map((tool) => {
      const Icon = tool.icon;
      const c = colorMap[tool.color];
      return( 
        <a key={tool.name}  href={tool.route} className={`bg-white border border-slate-200 rounded-2xl p-4 flex flex-col gap-2 hover:shadow-sm transition-all group ${c.border}`} >
          <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center `} >
            <Icon size={19} className={c.text} />
          </div>
          <div>
            <div className="text-sm font-bold leading-tight text-slate-900" >
              {tool.name}
            </div>
            <div className="text-xs text-slate-500 mt-0.5 leading-tight">
              {tool.desc}
            </div>
          </div>
        </a>
       );
    })}
    
  </div>
 </div>
 <Footer />
  </main>
  </div>
    </>
  )
  
}
export default Dashboard;