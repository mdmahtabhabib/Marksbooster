function Nav(){
return(
<nav className="bg-white border-2 border-blue-100 px-5 py-5 flex items-center justify-between shadow-sm sticky top-0 z-50  ">
      <div className="text-xl font-bold text-blue-900 tracking-tight">
        <span className="text-blue-900">Khel</span>
        <span className="text-blue-400">booster</span>
      </div>
      <div className=" hidden md:flex gap-8 text-sm text-gray-500">
        <a href="#" className="hover:text-blue-600 transition-colors">Feature</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Reveiw</a>
        <a href="#" className="hover:text-blue-600 transition-colors">FAQ</a>
      </div>
      <div className="flex items-center gap-3">
        
        <a href="#" className="bg-blue-700 text-white text-sm px-5 py-2 rounded-xl transition-colors hover:bg-blue-800">
          Login/Register
        </a>
      </div>
    </nav>
)} ;
export default Nav;