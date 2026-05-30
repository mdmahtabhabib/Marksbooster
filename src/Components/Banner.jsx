function Banner (){
    return(
        <section className="bg-blue-700 px-5 md:px-10 py-12 text-center" >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" >Ready to start scoring heigher</h2>
            <p className="text-blue-200 text-sm mb-8" > Join students across India already studying smarter with Markbooster</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3" >
                <a href="#pricing">
                    <button className="w-full sm:w-auto bg-white hover:bg-blue-50 text-blue-700 font-bold text-sm px-10 py-3.5 rounded-xl transition-colors " >choose your class</button>
                </a>
            </div>
            <p className="text-blue-300 text-sm mt-5 ">₹499/year · No hidden fees · Secure payment via Razorpay  </p>
        </section>
    )

};
export default Banner;