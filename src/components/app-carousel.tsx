import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HappyClientCard from "@/components/happy-client-card";
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
          delay: 3000,
        }),
      ]}
      className="w-full max-w-5xl"
    >
      <CarouselContent className="-ml-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                  <HappyClientCard />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center items-center mt-10">
        <div className="w-[82px] h-[40px] relative">
          <CarouselPrevious className="absolute left-0 rounded-md bg-text-primary border-none p-5 text-white" />
          <CarouselNext className="absolute right-0 rounded-md bg-text-primary border-none p-5  text-white" />
        </div>
      </div>
    </Carousel>
  );
}
