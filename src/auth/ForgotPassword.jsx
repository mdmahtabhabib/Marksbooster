import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Link } from "react-router-dom";

export default function ForgotPassword(){
    const [email , setEmail ] = useState ("");
    const [message , setMessage ] = useState("");
    const [isError , setIsError] = useState(false);
    const [loading , setLoading ] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();

        setMessage("")
        setLoading(true);

        const {error} = await supabase.auth.resetPasswordForEmail(email , {
            redirectTo : `${window.location.origin}/reset-password` ,
        }) ;
        
        setLoading(false) ; 

        if(error){
            setIsError(true);
            setMessage(error.message);
        }else{
            setIsError(false);
            setMessage("If this email has an account, a reset link is on its way . Check your inbox and spam folder") ;
        }
    }

    return( 
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-slate-50 flex flex-col items-center justify-center px-4 py-10" >
            <Link  to="/" className="text-2xl font-bold tracking-tight mb-6" >
            <span className="text-blue-900">Marks</span>
            <span className="text-blue-400">Booster</span>
            </Link>

            <div className="w-full max-w-md bg-white border border-blue-100 rounded-2xl shadow-md p-6 sm:p-8" >
                <h1 className="text-xl sm:text-2xl font-bold text-blue-900 text-center" >Forgot your password?</h1>
                <p className="text-sm text-gray-500 text-center mt-1 mb-6" >Enter your email and we'll send you a reset link</p>


            <form onSubmit={handleSubmit} className="flex flex-col gap-4" >
                <div className="flex flex-col gap-1.5" >
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700"  >Email</label>
                    <input id="email" required value={email} type="email" placeholder="you@gmail.com" onChange={(e) => {setEmail(e.target.value)}}
                    className="border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus: ring-blue-300 transition-all" />
                </div>

                <button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-xl mt-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ">       
                {loading ? "Sending" : "Send reset link"}
                </button>
            </form>

            {message && (
                <p className={`mt-4 text-sm text-center font-medium ${isError ? "text-red-600" : "text-emerald-600"}`} >{message}</p>
            )}

            <p className="text-sm text-gray-500 text-center mt-6" >
             Remembered it?{" "}
             <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700" >Log in</Link>
            </p>
            </div>
        </div>
    )
};