import { useState } from "react";
import { supabase } from "../lib/supabase";





export default function Signup() {
    const [email, setEmail] = useState("") ;
const [password, setPassword] = useState("");
const [message , setMessage] = useState("");
 async function handleSubmit(e){
    e.preventDefault();
    const {data , error } = await supabase.auth.signUp({
        email , 
        password,
    });
    if (error) {
        console.log("Signup failed" , error );
    } else {
        console.log("Signup successful:" , data)
    };
    if (error){
        setMessage(error.message)
    }else{
        setMessage("Signup successfull! Please check you email.")
    }
};
    return (
        
        <div>
           <form onSubmit={handleSubmit} >
            <input className="border rounded-lg px-3 py-2" value={email} type="email" onChange={(e) =>{setEmail(e.target.value)}} />
            <input className="border rounded-lg px-3 py-2" value={password} type="password" onChange={(e) =>{setPassword(e.target.value)}} />
            <button type="submit" >Sign Up</button>
            
           </form>
           <p>{message}</p>
        </div>
    );
}