
import Nav from "./Nav"
import { BookOpen, Clock, Target , AlertCircle , Flame , ChevronRight, CheckCircle2 , TrendingUp , Layers, FileText , HelpCircle , Bot , MapIcon , MessageSquare  , Bookmark} from "lucide-react"

// From Supabase auth: supabase.auth.getUser()
const student = {
    name : "Aman", 
    className: "class 9",
};

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
  </main>
    </>
  )
  
}
