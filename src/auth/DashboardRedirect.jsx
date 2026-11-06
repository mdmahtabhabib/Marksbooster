import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import Spinner from "@/Components/ui/Spinner";

export default function DashboardRedirect(){
    const {unlockedClasses } = useContext(AuthContext);

    if (unlockedClasses === null ) return <Spinner />;
    const myClass = unlockedClasses[0];
    return <Navigate to={ myClass ? `/home/${myClass}` : "/"} replace />
}
