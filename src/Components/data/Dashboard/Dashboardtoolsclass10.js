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
      name : "PYQ Papers" , 
      desc : "Previous year papers" ,
      icon : FileText ,
      route : "/home/class10/pyq" ,
      color : "indigo",
    } ,
    {
      name : "Mind Maps" ,
      desc : "Visual chapter summaries ",
      icon : MapIcon , 
      route : "/home/class10/mindmap" ,
      color : "violet",

    },
    {
      name : "Topic-wise Questions" ,
      desc : "Find questions by topic" ,
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
      desc : "pomodoro + break reminders", 
      icon : Clock,
      route : "/timer",
      color : "amber",
    } ,
    
  ];

  export default tools10 ;