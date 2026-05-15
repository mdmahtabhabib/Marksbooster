function App() {
  return (
    <div className="bg-gray-300">
    <nav className="bg-white border-2 border-blue-100 px-5 py-5 flex items-center justify-between shadow-sm sticky top-0 z-50  ">
      <div className="text-xl font-bold text-blue-900 tracking-tight">
        <span className="text-blue-900">Hello</span>
        <span className="text-blue-400">aage</span>
      </div>
      <div className="flex gap-8 text-sm text-gray-500">
        <a href="#" className="hover:text-blue-600 transition-colors">Feature</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Reveiw</a>
        <a href="#" className="hover:text-blue-600 transition-colors">FAQ</a>
      </div>
      <div className="flex items-center gap-3">
        <button href="#" className="border-1 border-blue-200 px-4 py-1 rounded-2xl text-blue-700 hover:bg-blue-50 text-black transition-colors">
          Log In
        </button>
        <button href="#" className="bg-blue-700 text-white text-sm px-5 py-2 rounded-xl transition-colors hover:bg-blue-800">
          start free trial
        </button>
      </div>
    </nav>
    </div>
  )
}

export default App