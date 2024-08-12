import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import achievementData from "../Datas/achievements.json"; 

export default function AchievementsCarousel() {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-8">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {achievementData.achievements.map((achievement, index) => (
            <CarouselItem key={index} className="basis-full sm:basis-1/2 ">
              <Card className="h-full">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 object-cover rounded-t-md"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 sm:right-4 z-10" />
      </Carousel>
    </div>
  );
}