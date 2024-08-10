import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="">
            <div className="container mx-auto flex justify-between h-[100px] px-4 sm:px-6 lg:px-8 ">
                <div className="self-center">
                    <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">Abitha Baby</h3>
                </div>
                <div className="hidden md:flex self-center">
                    <a href="#" className="mx-2 sm:mx-4 text-sm sm:text-base font-medium leading-6 text-white tracking-[0.2px] hover:shadow-[0_2px_0_0_rgba(255,255,255,1)] transition duration-200">About</a>
                    <a href="#" className="mx-2 sm:mx-4 text-sm sm:text-base font-medium leading-6 text-white tracking-[0.2px] hover:shadow-[0_2px_0_0_rgba(255,255,255,1)] transition duration-200">Project</a>
                    <a href="#" className="mx-2 sm:mx-4 text-sm sm:text-base font-medium leading-6 text-white tracking-[0.2px] hover:shadow-[0_2px_0_0_rgba(255,255,255,1)] transition duration-200">Experience</a>
                    <a href="#" className="mx-2 sm:mx-4 text-sm sm:text-base font-medium leading-6 text-white tracking-[0.2px] hover:shadow-[0_2px_0_0_rgba(255,255,255,1)] transition duration-200">Achievements</a>
                    <a href="#" className="mx-2 sm:mx-4 text-sm sm:text-base font-medium leading-6 text-white tracking-[0.2px] hover:shadow-[0_2px_0_0_rgba(255,255,255,1)] transition duration-200">Contact</a>
                </div>
                {/* Mobile menu button */}
                <div className="flex md:hidden self-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">About</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Project</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Experience</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Achievements</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
