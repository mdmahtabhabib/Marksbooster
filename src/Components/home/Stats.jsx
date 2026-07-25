function Stats(){
    const stats = [
        {val:" ₹499" , label:"per year"} ,
        {val:"Unlimited Question" , label:"solve without limits"},
        {val:"AI powered" , label:"doubt solving"},
        {val:"Smart Revision" , label:"Revise faster"},
        {val:"8 Tools" , label:"in one platform"},
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