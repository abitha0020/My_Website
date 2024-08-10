import Title from "./ui/title";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import projectsData from '../Datas/projects.json';
  
  export default function Projects() {
    return (
        <div className="container">
            <Title title="PROJECTS" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
                {projectsData.map((project) => (
                    <Card key={project.id} className="flex flex-col justify-between">
                        <div>
                            <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-auto rounded-md h-[300px]"
                                />    
                            <CardHeader>
                                <CardTitle>{project.name}</CardTitle>
                                <CardDescription className="pt-1">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mt-2">Technologies: {project.technologies.join(', ')}</p>
                            </CardContent>
                        </div>
                        <CardFooter>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                View Project
                            </a>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
