function Navbar(){
    return(
        <nav>
            <div className="container mx-auto flex justify-between h-[100px]">
                <div className="self-center ">
                    <h3 className="text-white font-bold text-4xl">Abitha Baby</h3>
                </div>
                <div className="flex self-center">
                    <a href="#" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">Home</a>
                    <a href="#" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">Product</a>
                    <a href="#" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">About</a>
                    <a href="#" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">Content</a>
                </div>
                <div className="self-center">
                    <button className="w-[140px] h-[52px] leading-6 text-[17px] text-white tracking-[0.2px] border border-white">Login</button>
                </div>    
            </div>
        </nav>
    );
}
export default Navbar;