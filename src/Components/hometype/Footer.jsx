function Footer(){
    return(
        <footer className=" bg-white border-t border-blue-100 px-5 md:px-10 py-8 " >
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between  gap-8" >
                <div>
                    <div className="text-lg font-bold text-blue-900 mb-1" >
                        Marks<span>Booster</span>
                    </div>
                    <p className="text-sm text-gray-400" >Helping Indian students study smarter</p>
                </div>
                <div className="grid grid-cols-3 gap-8 text-xs text-gray-500 " >
                    <div>
                        <p className="font-semibold text-gray-600 mb-2" >Classes</p>
                        <p className="mb-1 hover:text-blue-600 cursor-pointer" >Class 8</p>
                        <p className="mb-1 hover:text-blue-600 cursor-pointer" >Class 9</p>
                        <p className="hover:text-blue-600 cursor-pointer" >Class 10</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-600 mb-2" >Feature</p>
                        <p className="mb-1 hover:text-blue-600 cursor-pointer">Flashcard</p>
                        <p className="mb-1 hover:text-blue-600 cursor-pointer">PYQ Papers </p>
                        <p className="hover:text-blue-600 cursor-pointer" >Unlimited question</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-600 mb-2" >Company</p>
                        <p className="mb-1 hover:text-blue-600 cursor-pointer" >About</p>
                        <p className="mb-1 hover:text-blue-600 cursor-pointer" >Privacy</p>
                        <p className="hover:text-blue-600 cursor-pointer" >Terms</p>
                    </div>
                </div>
            </div>
            <div className="max-w-5xl mx-auto border-t border-blue-50 mt-6 pt-6" >
                <p className="text-sm text-gray-500 text-center" >© 2026 Marksbooster. All rights reserved. Made with love for Indian students.</p>
            </div>
        </footer>
    )

};
export default Footer;