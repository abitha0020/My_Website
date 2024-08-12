import Navbar from "@/components/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Achievements from "@/components/achievements";
import ContactMe from "@/components/contact";
export default function Home(){
    return(
        <div className="bg-black">
            <Navbar />
            <About />
            <Projects />
            <Experience />
            <Achievements />
            <ContactMe />
        </div>
    );
}