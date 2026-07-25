import { BookOpen, Clock, Target , AlertCircle , Flame , ChevronRight, CheckCircle2 , TrendingUp , Layers, FileText , HelpCircle , Bot , MapIcon , MessageSquare  , Bookmark, Route, icons, Bluetooth} from "lucide-react" 

  const tools8 = [
    {
      name: "Flashcards" ,
      desc: "Concept-wise, all subjects",
      icon: Layers ,
      route : "/home/class8/flashcard" ,
      color : "blue",
      
    } , 
    {
      name : "Short notes" , 
      desc : "A whole chapter on one page" ,
      icon : FileText ,
      route : "/home/class8/pyq" ,
      color : "indigo",
    } ,
    {
      name : "Concept check" ,
      desc : "Check if you're exam ready ",
      icon : MapIcon , 
      route : "/home/class8/mindmap" ,
      color : "violet",

    },
    {
      name : "Important Q&A" ,
      desc : "	Exam-oriented, all question types" ,
      icon : HelpCircle ,
      route : "/home/class8/topic-question",
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
      desc : "Focus time, tracked", 
      icon : Clock,
      route : "/timer",
      color : "amber",
    } ,
    
  ];

  export default tools8 ;