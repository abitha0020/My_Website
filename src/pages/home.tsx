import Navbar from "@/components/navbar";
import About from "@/components/about";
export default function Home(){
    return(
        <div className="bg-black">
            <Navbar />
            <About />
        </div>
    );
}