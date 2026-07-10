import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate , useLocation } from "react-router-dom";

export default function ProtectedRoute({children}){
    const {session , authLoading} = useContext(AuthContext);
    const location = useLocation();

    if(authLoading) {
        return <h1>Loading...</h1>;
    }

    return session? children :<Navigate to="/login" state={{from : location}} /> ;
    
}