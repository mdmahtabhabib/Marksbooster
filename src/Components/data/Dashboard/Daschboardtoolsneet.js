import { BookOpen, Clock, Target , AlertCircle , Flame , ChevronRight, CheckCircle2 , TrendingUp , Layers, FileText , HelpCircle , Bot , MapIcon , MessageSquare  , Bookmark, Route, icons, Bluetooth} from "lucide-react" 

  const toolsneet = [
    {
      name: "Flashcards" ,
      desc: "Concept-wise, all subjects",
      icon: Layers ,
      route : "/home/neet/flashcard" ,
      color : "blue",
      
    } , 
    {
      name : "PYQ Papers" , 
      desc : "Previous year papers" ,
      icon : FileText ,
      route : "/home/neet/pyq" ,
      color : "indigo",
    } ,
    {
      name : "Mind Maps" ,
      desc : "Visual chapter summaries ",
      icon : MapIcon , 
      route : "/home/neet/mindmap" ,
      color : "violet",

    },
    {
      name : "Topic-wise Questions" ,
      desc : "Find questions by topic" ,
      icon : HelpCircle ,
      route : "/home/neet/topic-question",
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

  export default toolsneet ;