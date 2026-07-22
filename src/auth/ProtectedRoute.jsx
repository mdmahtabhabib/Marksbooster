import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate , useLocation } from "react-router-dom";
import Spinner from "../Components/ui/Spinner";

export default function ProtectedRoute({children}){
    const {session , authLoading} = useContext(AuthContext);
    const location = useLocation();

    if(authLoading) {
        return <Spinner/>;
    }

    return session? children :<Navigate to="/login" state={{from : location}} /> ;
    
}