function Testimonials(){
 const Testimonials = [
    { name: "Priya sharma", cls: "Class 10 , patna" , text: "The AI doubt solver saved me so much Time. I used to wait for tution for anser - now I get them instantly!" , stars : 5},
    { name: "Rahul Kumar", cls: "Class 9 , Ranchi" , text: "The syllabus tracker keeps me motivatd. I can see exactly how much i have completed every day." , stars : 5},
    { name: "Ananya Singh", cls: "Class 8 , Bhagalpur" , text: "Flashcards made revision so easy . My marks improved from 72% to 89% in one term!" , stars : 5}
 ];
    return(
        <section id="Testimonials" className="bg-white border-y border-blue-100 py-14 md:py-16 px-5 md:px-8 " >
            <div className="max-w-5xl mx-auto" >
                <p className="text-sm text-gray-500 uppercase tracking-widest text-center mb-2" >Reviews</p>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-10 " >Students love Marksbooster</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" >
                 {Testimonials.map((t ,i) => 
                 <div key={i} className="bg-[#F0F4FF] rounded-2xl p-6 border border-blue-100  " > 
                 <div className="flex gap-1 mb-4"  >
                    {[...Array(t.stars)].map((_, j) => <span className="text-yellow-400 text-sm" >★</span> )}
                 </div>
                   <p className="text-sm text-gray-600 leading-relaxed mb-5" >{t.text}</p>
                   <div>
                   <p className="text-xl font-bold text-blue-900 " >{t.name}</p>
                   <p className="text-sm text-gray-400" >{t.cls}</p>
                   </div>
                 </div>
                 )}   
                </div>

            </div>
        </section>
    )

};
export default Testimonials;