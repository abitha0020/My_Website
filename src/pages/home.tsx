import Navbar from "@/components/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";
export default function Home(){
    return(
        <div className="bg-black">
            <Navbar />
            <About />
            <Projects />
        </div>
    );
}