import { BookOpen, Clock, Target , AlertCircle , Flame , ChevronRight, CheckCircle2 , TrendingUp , Layers, FileText , HelpCircle , Bot , MapIcon , MessageSquare  , Bookmark, Route, icons, Bluetooth} from "lucide-react" 

  const tools10 = [
     {
      name: "Flashcards" ,
      desc: "Concept-wise, all subjects",
      icon: Layers ,
      route : "/home/class10/flashcard" ,
      color : "blue",
      
    } , 
    {
      name : "Short notes" , 
      desc : "A whole chapter on one page" ,
      icon : FileText ,
      route : "/home/class10/pyq" ,
      color : "indigo",
    } ,
    {
      name : "Concept check" ,
      desc : "Check if you're exam ready ",
      icon : MapIcon , 
      route : "/home/class10/mindmap" ,
      color : "violet",

    },
    {
      name : "PYQ paper" ,
      desc : "	previous year questions complete" ,
      icon : HelpCircle ,
      route : "/home/class10/topic-question",
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

  export default tools10 ;