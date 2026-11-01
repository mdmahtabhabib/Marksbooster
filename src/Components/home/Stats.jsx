function Stats(){
    const stats = [
        {val:" ₹499" , label:"	per year, all tools included"} ,
        {val:"Exam-focused" , label:"most-asked questions with answers"},
        {val:"6 Tools" , label:"everything in one platform"},
        {val:"Smart Revision" , label:"Revise faster"},
        {val:"NCERT based" , label:"aligned with CBSE syllabus"},
        {val:"All in one" , label:"just in one click"}
        
    ];
    return(
        <div className="bg-white border-y border-blue-100 py-6 px-5 md:px-10" >
            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center " >
            {stats.map((s,i)=> 
     <div key={i} > 
        <h1 className="text-xl md:text-2xl font-bold text-blue-800" >{s.val}</h1>
        <p className="text-sm text-gray-400 mt-1" >{s.label}</p>
     </div>
        
        )}
        </div>
        </div>
    )
};
export default Stats ;