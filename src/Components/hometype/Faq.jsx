import { useState } from "react";

function Faq(){
    const faqs = [ 
        {q: "which boards are supported ? " , a: "we support CBSE and most state Boares including bihar board and jharkhand Board. content is aligned with the latest syllabus"},
        {q: "can I access all 3 classes with one subscription?" , a:"No - each plan is class specific. This ensures you only sees content relevant to you . You can upgrade anytime"},
        {q: "Can I access MarksBooster on multiple devices?", a: "Yes. You can access your account from any supported device using your login credentials." } ,
        {q: "Who is MarksBooster designed for?",  a: "MarksBooster is designed for students of Classes 8, 9, and 10 who want to improve their understanding, revision, and exam performance."},
        {q:"What payment methods are accepted ?" , a:" we accept UPI , Paytm , PhonPe , NetBanking and all major debit/credit cards via Razorpay"}
     ];
     const [openFaq , setOpenFaq] = useState(null);
    return (
        <section className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20" >
            <p className="text-sm text-gray-500 uppercase tracking-widest text-center mb-2  " >FAQ</p>
            <h2 className="text-2xl md:3xl font-bold text-blue-900 text-center mb-10" >common question</h2>
            <div className="space-y-3" >
                {faqs.map((faq , i) => (
                    <div key={i} className="bg-white rounded-2xl border border-blue-100 overflow-hidden" >
                        <button onClick={() => setOpenFaq(openFaq ===i ? null:i) } className="w-full text-left px-6 py-4 flex items-center justify-between" >
                            <p className="text-sm font-semibold text-blue-900 pr-4" >{faq.q}</p>
                            <span className="text-blue-500 text-lg flex-shrink-0" >{openFaq=== i ? '-' : '+'}</span>
                        </button>
                        {openFaq ===i && (
                            <div className="px-6 pb-5">
                                <p>{faq.a}</p>
                            </div>
                        )}
                    </div>
                ) )}
            </div>
        </section>
    )
};
export default Faq;