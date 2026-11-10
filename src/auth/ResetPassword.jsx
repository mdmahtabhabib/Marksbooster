import { useContext, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { AuthContext } from "@/context/AuthContext";
import Spinner from "@/Components/ui/Spinner";

export default function ResetPassword(){
    const {session, authLoading} = useContext(AuthContext);
    const [password , setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message , setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        if (password !== confirmPassword){
            setMessage("Passwords do not match");
            return;
        }
        setMessage("");
        setLoading(true);

        const {error} = await supabase.auth.updateUser({ password }) ;

        setLoading(false) ;

        if (error) {
            setMessage(error.message)
        }else{
            navigate("/dashboard" , {replace: true});
        }
    }
    if (authLoading) return <Spinner />

    return(
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-slate-50 flex flex-col items-center justify-center px-4 py-10" >
            <Link to="/" className="text-2xl font-bold tracking-tight mb-6" >
              <span className="text-blue-900" >Marks</span>
              <span className="text-blue-400" >Booster</span>
            </Link>

            <div className="w-full max-w-md bg-white border border-blue-100 rounded-2xl shadow-md p-6 sm:p-8">
                {!session ?(
                    <div className="text-center" >
                    <h1 className="text-xl sm:text-2xl font-bold text-blue-900" >Link expired</h1>
                     <p className="text-sm text-gray-500 mt-2 mb-6" >
                        This reset link is invalid or has already been used
                     </p>
                     <Link to="/forgot-password" className="text-blue-600 font-semibold hover:text-blue-700" >
                      Request a new link
                     </Link>
                    </div>
                ) :(
                    <>
                        
                        <h1 className="text-xl sm:text-2xl font-bold text-blue-900 text-center" >Set a new password</h1>
                        < p className="text-sm text-gray-500 text-center mt-1 mb-6" >
                            Choose a password you'll remember
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4" >
                            <div className="flex flex-col gap-1.5" >
                             <label htmlFor="password" className="text-sm font-semibold text-slate-700"> New password</label>
                             <input id="password" required minLength={6} value={password} type="password"  placeholder="At least 6 characters" onChange={(e) => {setPassword(e.target.value)}} 
                             className="border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-100 transition-all"/>
                            </div>

                            <div className="flex flex-col gap-1.5" >
                             <label htmlFor="confirmPassword" className="text-sm font-semibold text-slate-700"> Confirm New password</label>
                             <input id="confirmPassword" required  value={confirmPassword} type="password"  placeholder="Re-enter password" onChange={(e) => {setConfirmPassword(e.target.value)}} 
                             className="border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-100 transition-all"/>
                            </div>

                            <button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-xl mt-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" >
                             {loading ? "Saving" : "Save new password"}
                            </button>

                        </form>

                        {message && (
                            <p className="mt-4 text-sm text-center font-medium text-red-600" >{message}</p>
                        )}
                         
                    </>
                )}
            </div>

        </div>
    )
}