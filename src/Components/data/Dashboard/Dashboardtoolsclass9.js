import { BookOpen, Clock, Target , AlertCircle , Flame , ChevronRight, CheckCircle2 , TrendingUp , Layers, FileText , HelpCircle , Bot , MapIcon , MessageSquare  , Bookmark, Route, icons, Bluetooth , CalendarDays ,GalleryVerticalEnd, ClipboardList,  FileQuestion} from "lucide-react" 

  const tools9 = [
    {
      name: "Flashcards" ,
      desc: "Concept-wise, all subjects",
      icon: GalleryVerticalEnd ,
      route : "/home/class9/flashcard" ,
      color : "blue",
      
    } , 
    {
      name : "Short notes" , 
      desc : "For quick revision" ,
      icon : FileText ,
      route : "/home/class9/pyq" ,
      color : "indigo",
    } ,

    {
      name : "Syllabus Tracker",
    desc : "Track your syllabus progress",
    icon : ClipboardList,
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

    {
      name : "Revision planner" ,
      desc : "Visual chapter summaries ",
      icon :CalendarDays , 
      route : "/home/class9/mindmap" ,
      color : "violet",

    },
    {
      name : "Topic-wise Questions" ,
      desc : "Find questions by topic" ,
      icon : FileQuestion ,
      route : "/home/class9/topic-question",
      color : "cyan",
    } ,
    
    
    
  ];

  export default tools9 ;