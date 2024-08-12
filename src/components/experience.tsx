import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import experienceData from '../Datas/internship.json';
import Title from "./ui/title";
export default function Experience(){
    return(
        <div className="container">
            <Title title="EXPERIENCE" ></Title>
            {experienceData.experience.map((experience)=>(
               <Card key={experience.id} className="mb-8 mx-auto sm:mx-20">
                    <CardHeader className="flex flex-row">
                        <div className="flex-shrink-0 flex flex-col justify-center">
                            <img 
                                src={ experience.company_logo} 
                                alt={`${experience.title} Logo`} 
                                className=" w-14 h-14 object-contain" 
                            />
                        </div>
                        <div className="px-5">
                            <CardTitle>{experience.title}</CardTitle>
                            <CardDescription>{experience.position} | {experience.duration}</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p>{experience.responsibilities[0]}</p>
                    </CardContent>
               </Card>
            ))}
        </div>
    );
}