import { Link } from "react-router-dom";
function Cources(){
    const Cources = [
        {class: "Class 8" , tag: "Foundation" , price: 499 , Subjects: ["Mathematic" , "Science" , "Social Science" , "English" , "Hindi"], desc:"Perfect for building strong fundamentals in class 8" , label: "Buy Now" , cnt:"/ComingSoon"  } ,
        {class: "Class 9" , tag: "Foundation" , price: 499 , Subjects: ["Mathematic" , "Science" , "Social Science" , "English" , "Hindi"], desc:"Ideal for class 9 foundation students   ", label: "Buy Now" , cnt:"/ComingSoon"} ,
        {class: "Class 10" , tag: "Board" , price: 499 , Subjects: ["Mathematic" , "Science" , "Social Science" , "English" , "Hindi"], desc:"Everything you need to ace your class 10 board exams", label: "Buy Now" , cnt:"/ComingSoon"} ,
        {class: "NEET Biology",tag: "Free",price: 0,Subjects: ["Cell Biology", "Genetics", "Physiology", "Ecology", "Evolution"], desc: "All chapter flashcards for NEET Biology ", label: "Start Now" , cnt:"/Neetlist"}
    ];
    
return(
    <section id="Course" className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20" >
        <p className="text-xl text-gray-500 text-center tracking-widest mb-2 " >PRICING</p>
         <h1 className="text-2xl md:text-3xl text-center font-bold text-blue-900 mb-4" >Choose your class</h1>
         <p className="text-center text-gray-500 text-sm mb-10 " >Same price, Same features, just pick up your class</p>
         <div className=" grid grid-cols-1 sm:grid-cols-4 gap-6 items-start" >
            {Cources.map((Course , i) => (
                <div key={i} className="bg-white rounded-3xl border p-7  relative transition-all border-blue-100 hover:border-blue-300 hover:shadow-md " > 
                <div className="mb-5" >
                <p className="text-sm text-blue-500 font-semibold uppercase tracking-widest mb-2" >{Course.tag}</p>
                <h3 className="text-2xl font-bold text-blue-900" >{Course.class}</h3>
                <p className="text-sm text-gray-500 leading-relaxed" >{Course.desc}</p>
                </div>
                <div className="flex items-end mb-1 " >
                    <span className="text-4xl font-bold text-blue-900" >{Course.price}</span>
                    <span className="text-gray-500 text-sm mb-1" >/year</span>
                </div> 
                <p className="text-sm text-gray-500 mb-6" >That's just ₹41/month </p>
                <div className="space-y-2 mb-8" >
                 <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3" >Subject covered</p> 
                 {Course.Subjects.map((sub , j) => (
                    <div key={j} className="flex items-center gap-2" >
                        <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center text-sm text-blue-600" >✓</div>
                        <p className="text-sm text-gray-700">{sub}</p>
                    </div>
                 )
                )}
                <div className="flex items-center gap-2 pt-2" >
                <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center justify-center text-sm text-blue-600" >✓</div> 
                <p className="text-sm text-gray-700" >All 8 tools included</p>
                </div>      
                </div>
                <Link to={Course.cnt} >
                 <button className="w-full font-semibold text-xl py-3.5 rounded-xl transition-colors bg-blue-600 hover:bg-blue-800 text-white shadow-md shadow-blue-200 cursor-pointer " >{Course.label}</button> 
                 </Link>  
                </div>
            )
        )}
         
         <div></div>
         </div>
    </section>
)
};
export default Cources ;