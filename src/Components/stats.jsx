function Stats(){
    const stats = [
        {val:"499" , label:"per year"} ,
        {val:"3 classes" , label:"8th , 9th , & 10th "},
        {val:"8 Tools" , label:"in one platform"},
        {val:"AI powered" , label:"doubt solving"},
        {val:"7 Days" , label:"free trial"},
        {val:"All in one" , label:"just in one click"}
    ];
    return(
        <div className="bg-white border-y border-blue-100 py-6 px-5 md:px-10" >
            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center " >
            {stats.map((s,i)=> 
     <div key={i} > 
        <h1 className="text-xl md:text-2xl font-bold text-blue-800" >{s.val}</h1>
        <p className="text-xs text-gray-400 mt-1" >{s.label}</p>
     </div>
        
        )}
        </div>
        </div>
    )
};
export default Stats ;