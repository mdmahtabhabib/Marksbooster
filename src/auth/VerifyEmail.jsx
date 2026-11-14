import { useContext, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { AuthContext } from "@/context/AuthContext";


export default function VerifyEmail(){
    const location = useLocation();
    const email = location.state?.email;
    const {session } = useContext(AuthContext);
    const name = session?.user?.user_metadata?.full_name;

    const [code , setCode ] = useState("");
    const [message, setMessage ] = useState("");
    const [isError, setIsError] = useState(false) ;
    const [loading , setLoading] = useState(false);
    const [verified , setVerified] = useState(false);

    async function handleVerify(e){
        e.preventDefault();
        setMessage("");
        setLoading(true);

        const { error } = await supabase.auth.verifyOtp({email, token:code, type: "email"});

        setLoading(false);

        if(error){
            setIsError(true) ;
            setMessage(error.message);
        } else{
            setVerified(true);
        }
        
    }


async function handleResend(){
    setMessage("");
    setLoading(true);

    const { error } = await supabase.auth.resend({ type : "signup" , email});
    setLoading(false);

    if (error){
        setIsError(true);
        setMessage(error.message);
    } else {
        setIsError(false);
        setCode("");
        setMessage(`New code sent to ${email}`);
    }
}
   if (!email) return <Navigate to="/signup" replace />

   return(
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-slate-50 flex flex-col items-center justify-center px-4 py-10" >
        <Link to="/" className="text-2xl font-bold tracking-tight mb-6" >
        <span className="text-blue-900" >Marks</span>
        <span className="text-blue-400" >Booster</span>
        </Link>

        <div className="w-full max-w-md bg-white border border-blue-100 rounded-2xl shadow-md p-6 sm:p-8">
        {verified ?(
            <div className="text-center" >
              <p className="text-5xl mb-4" >🎉</p>
              <h1 className="text-xl sm:text-2xl font-bold text-blue-900" >Email confirmed!</h1>
              <p className="text-sm text-gray-500 mt-2 mb-6" >
              Welcome to MarksBooster{name ? `, ${name}` : ""}. Your account is ready.
              </p>
              <Link to="/dashboard" replace
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors" >
                Continue
              </Link>

            </div>
        ) :(

            <>
            <h1 className="text-xl sm:text-2xl font-bold text-blue-900 text-center" > Check your email </h1>
            <p className="text-sm text-gray-500 text-center mt-1 mb-6" >
            We sent a 6-digit code to <span className="font-semibold text-slate-700" >{email}</span>
            </p>

            <form onSubmit={handleVerify} className="flex flex-col gap-4">
                <input aria-label="6-digit-code" required value={code}
                inputMode="numeric" autoComplete="one-time-code" maxLength={6} placeholder="000000"
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))} 
                className="border border-slate-200 rounded-xl px-4 py-3 text-center text-2xl font-bold tracking-[0.5em] focus:ring-2 focus:ring-blue-100 transition-all"/>

                <button type="submit" disabled={loading || code.length !==6}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                 {loading ? "Verifying" : "Verify"}
                </button>
            </form>

            {message &&(
                <p className={`mt-4 text-sm text-center font-medium ${isError ? "text-red-600" : "text-emerald-600"}`} > {message}</p>
            )}

            <button type="button" onClick={handleResend} disabled={loading} 
            className="mt-4 w-full text-sm font-semibold text-blue-600 hover:text-blue-700 disabled:opacity-50">
             Didn't get it? Resend code 
            </button>

            <p className="text-sm text-gray-500 text-center mt-4" > 
            Wrong email?{" "}
            <Link to="/signup" className="text-blue-600 font-semibold hover:text-blue-700"  > Sign up again</Link>
            </p>
            </>
        )}
        </div>

    </div>
   )
}
