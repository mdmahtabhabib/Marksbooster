import { Link } from "react-router-dom";
import Nav from "@/Components/home/Nav";
import Footer from "@/Components/home/Footer";

function NotFound(){
    return(
        <div>
            <Nav />
            <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6"  >
                <div className="max-w-xl text-center">
                    <h1 className="text-6xl md:text-7xl font-extrabold text-blue-700 mb-4" >404</h1>
                     <p className="text-xl md:text-2xl text-slate-700 mb-2" >Page not found</p>
                     <p>The page you are looking for doesn't exist or has moved</p>
                     <Link to="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg">
                     Go to Home 
                     </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
} ;
export default NotFound ;