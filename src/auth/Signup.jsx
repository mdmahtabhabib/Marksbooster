import { useState } from "react";
import { supabase } from "../lib/supabase";





export default function Signup() {
    const [email, setEmail] = useState("") ;
const [password, setPassword] = useState("");
const [message , setMessage] = useState("");
const [loading , setLoading] = useState(false);
const [confirmPassword , setConfirmPassword] = useState("");
 async function handleSubmit(e){
    e.preventDefault();

    if (password !== confirmPassword) {
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
        setMessage(error.message)

    } else {
        console.log("Signup successful:" , data);
         setMessage("Signup successfull! Please check you email.")
    };
    
};
    return (
        
        <div>
           <form onSubmit={handleSubmit} >
            <input className="border rounded-lg px-3 py-2" value={email} type="email" onChange={(e) =>{setEmail(e.target.value)}} />
            <input className="border rounded-lg px-3 py-2" value={password} type="password" onChange={(e) =>{setPassword(e.target.value)}} />
            <input className="border rounded-lg px-3 py-2" value={confirmPassword}  type="password" onChange={(e) => {setConfirmPassword(e.target.value)}} />
            <button className="bg-blue-600 text-white p-2 rounded-xl" type="submit" disabled={loading} >{loading ? "Signing Up" : " Sign Up"}</button>
            
           </form>
           <p>{message}</p>
        </div>
    );
}