import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function AppCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full max-w-lg"
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center items-center">
        <div className="w-[70px] h-[40px] relative">
          <CarouselPrevious className="absolute left-0 rounded-md text-primary" />
          <CarouselNext className="absolute right-0 rounded-md text-primary" />
        </div>
      </div>
    </Carousel>
  );
}
