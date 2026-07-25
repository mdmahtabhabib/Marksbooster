import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate , useLocation, useParams } from "react-router-dom";
import Spinner from "../Components/ui/Spinner";

export default function PurchaseRoute({children}){
    const {   unlockedClasses , authLoading} = useContext(AuthContext);
    const {classId } = useParams();
    const location = useLocation();

    if(authLoading || unlockedClasses === null ) {
        return <Spinner/>;
    }

    return unlockedClasses.includes(classId) ? children :<Navigate to="/" state={{from : location}} /> ;
    
}