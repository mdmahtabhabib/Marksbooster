import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";






export default function Signup() {
    const [email, setEmail] = useState("") ;
const [password, setPassword] = useState("");
const [message , setMessage] = useState("");
const [isError , setIsError] = useState(false);
const [loading , setLoading] = useState(false);
const [confirmPassword , setConfirmPassword] = useState("");
 async function handleSubmit(e){
    e.preventDefault();

    if (password !== confirmPassword) {
        setIsError(true);
        setMessage("Password do not match");
        return;
    }

     setLoading(true);

    const {data , error } = await supabase.auth.signUp({
        email , 
        password,
    });

    setLoading(false);

    if (error) {
        console.log("Signup failed" , error );
        setIsError(true);
        setMessage(error.message)

    } else {
        console.log("Signup successful:" , data);
        setIsError(false);
         setMessage("Signup successfull! Please check you email.")
    };
    
};
    return (
        <>
        
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-slate-50 flex flex-col items-center justify-center px-4 py-10 " >
          
            {/*logo same as nav*/}
            <Link to="/" className="text-2xl font-bold tracking-tight mb-6" >
            <span className="text-blue-900" >Marks</span>
            <span className="text-blue-400" >Booster</span>
            </Link>  
             
             {/*Card */}
             <div className="w-full max-w-md bg-white border border-blue-100 rounded-2xl shadow-md p-6 sm:p-8" >
                <h1 className="text-xl sm:text-2xl font-bold text-blue-900 text-center" >Create you account</h1>
                <p className="text-sm text-gray-500 text-center mt-1 mb-6" >
                    Start studying smarter - everything in one place
                </p>
           <form onSubmit={handleSubmit} className="flex flex-col gap-4" >

            <div className="flex flex-col gap-1.5" >
                <label htmlFor="email" className="text-sm font-semibold text-slate-700" >Email</label>
            <input id="email" required value={email} type="email" placeholder="you@gmail.com" onChange={(e) =>{setEmail(e.target.value)}}
            className="border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-100 transition-all" />
            </div>
            
            <div className="flex flex-col gap-1.5" >
                <label htmlFor="password" className="text-sm font-semibold text-slate-700" >Password</label>
            <input id="password" required minLength={6}  value={password} placeholder="At least 6 characters"  type="password" onChange={(e) =>{setPassword(e.target.value)}}
             className="border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-100 transition-all"/>
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="confirmPassword" className="text-sm font-semibold text-slate-700">Confirm Password</label>
            <input id="confirmPassword" required value={confirmPassword}  type="password" placeholder="Re-enter password" onChange={(e) => {setConfirmPassword(e.target.value)}}
              className="border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-100 transition-all"/>
            </div>
            <button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-xl mt-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" >{loading ? "Signing Up" : " Sign Up"}</button>
            
           </form>
           {message && (
            <p className={`mt-4 text-sm text-center font-medium ${ isError ? "text-red-600" : "text-emerald-600"}` } >{message}</p>
           )}
           <p>
            Already have an account ?{ " "}
            <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700" >
            Log in
            </Link>
           </p>
           </div>
        </div>
   </> );
}