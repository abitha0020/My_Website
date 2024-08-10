import { Button } from "./ui/button";
export default function About(){
    return(
        <div className="h-[600px] flex">
            <div className="w-1/2  flex flex-col justify-center">
                <div className="mx-auto w-1/2">
                    <p className="text-lg text-center">Welcome to my corner of the web where creativity meets technology.</p>
                    <p className="text-center py-2">I'm <span className="italic text-4xl">Abitha Baby</span></p>
                    <p className="text-center">a passionate </p>
                    <p className="py-2 font-bold text-center text-2xl">Web Developer,</p>
                    <p className="text-center">dedicated to crafting innovative solutions and turning ideas into reality.</p> 
                    <Button className="w-[100px]" >C V</Button>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center">
                <img src="src\assets\profile.jpg" alt="Profile image" className="p-3 w-[500px] h-[500px] rounded-[100%]" />
            </div>
        </div>
    );
}