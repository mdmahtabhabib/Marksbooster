import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";

function Nav(){
  const {session , unlockedClasses } = useContext(AuthContext);
  const myClass = unlockedClasses?.[0];

  async function handleLogout(){
    const {error} = await supabase.auth.signOut();

    if ( error) { 
      console.log("Logout failed" , error.message)
    }
  }
return(
<nav className="bg-white border-2 border-blue-100 px-5 py-5 flex items-center justify-between shadow-sm sticky top-0 z-50  ">
      <div className="text-xl font-bold text-blue-900 tracking-tight">
        <Link to="/" >
        <span className="text-blue-900">Marks</span>
        <span className="text-blue-400">booster</span>
        </Link>
      </div>
      <div className=" hidden md:flex gap-8 text-sm text-gray-500">
        <a href="#" className="hover:text-blue-600 transition-colors">Feature</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Reveiw</a>
        <a href="#" className="hover:text-blue-600 transition-colors">FAQ</a>
      </div>
      <div className="flex items-center gap-3">
      
      {myClass && (
        <Link to={`/home/${myClass}`} className="text-sm font-semibold text-blue-700 hover:text-blue-900" >
        My Dashboard
        </Link>
      )}

        <div  className="bg-blue-700 text-white text-sm px-5 py-2 rounded-xl transition-colors hover:bg-blue-800">
        
        { session ? ( 
          <button onClick={handleLogout} > Logout</button>
        ):(
          <Link to="/login" > Login/register</Link>
        )
      }
        
        </div>
      </div>
    </nav>
)} ;
export default Nav;