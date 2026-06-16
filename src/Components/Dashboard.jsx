
import Nav from "./Nav"
import { BookOpen, Clock, Target , AlertCircle , Flame , ChevronRight, CheckCircle2 , TrendingUp , Layers, FileText , HelpCircle , Bot , MapIcon , MessageSquare  , Bookmark, Route} from "lucide-react"

// From Supabase auth: supabase.auth.getUser()
const student = {
    name : "Probol", 
    className: "class 9",
};

//From study sessoins table : SUM(duration) where date = today
const todayStudyMinutes = 95 ;
const dailyGoalMinutes = 120 ;

//from syllabus progress table : AVG COMPLETEEION % across chapters
const syllabuspercent = 42;

//from "chapters" + "syllabus progress" : last chapter the student opened
const continueChapter = {
  title: "Acid , Bases and Salts",
  subtitle : "Science .Flashcard . 18/30 cards done " ,
  progress : 60,
  route : "/flashcard/acids-bases-and-salt"
}

export default function Dashboard() {
  return(
    <>
 <Nav />

  {/* ============ MAIN CONTENT ============ */}
  <main className="max-w-5xl mx-auto px-4 py-6 pb-12 flex flex-col gap-6"  >
  {/* Greeting */}
  <div className="flex items-center justify-between flex-wrap gap-2" >
    <div>
   <h1 className="text-xl sm:text-2xl font-bold text-slate-900" >Welcome back, {student.name} 👋</h1>
   <p className="text-sm text-slate-500 mt-0.5" > {student.className} .CBSE</p>
   </div>
  </div>

  {/* continue sttudying (tip priority action ) */}

  <a href={continueChapter.route} className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4 hover:border-blue-300 hover:shadaw-sm transition-all group"  >
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

  </main>
    </>
  )
  
}
