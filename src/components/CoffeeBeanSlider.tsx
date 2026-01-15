import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import heroCoffeeCherries from "@/assets/hero-coffee-cherries.jpg";
import greenBean1 from "@/assets/green-bean1.jpg";
import greenBean2 from "@/assets/green-bean2.jpg";
import greenPlantation from "@/assets/green-plantation.jpg";
import redCherry1 from "@/assets/red-cherry1.jpg";
import redCherry2 from "@/assets/red-cherry2.jpg";
import redCherry3 from "@/assets/red-cherry3.jpg";
import logo from "@/assets/logo.png";

const coffeeImages = [
  { src: heroCoffeeCherries, alt: "Kape Kapi Coffee Cherries" },
  { src: greenBean1, alt: "Fresh Green Coffee Beans" },
  { src: redCherry1, alt: "Red Coffee Cherries on Branch" },
  { src: greenBean2, alt: "Green Coffee Beans in Burlap Sack" },
  { src: redCherry2, alt: "Harvested Coffee Cherries in Basket" },
  { src: greenPlantation, alt: "Lush Coffee Plantation Landscape" },
  { src: redCherry3, alt: "Hand-Picking Red Coffee Cherries" },
];

export const CoffeeBeanSlider = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full px-4 max-w-7xl mx-auto">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {coffeeImages.map((image, index) => (
            <CarouselItem key={index} className="basis-full">
              <Card className="overflow-hidden border-2 border-primary/30 bg-card/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[400px] md:h-[500px] object-cover animate-fade-pulse"
                  />
                  <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-background/95 backdrop-blur-md p-3 md:p-4 rounded-2xl border-2 border-primary/50 shadow-[0_0_30px_rgba(34,139,34,0.4)] animate-scale-in hover:scale-105 transition-transform duration-500">
                    <img src={logo} alt="Kape Kapi Logo" className="h-16 md:h-20 w-auto drop-shadow-2xl" />
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-primary text-primary-foreground hover:bg-accent hover:shadow-[0_0_15px_rgba(34,139,34,0.5)] transition-all" />
        <CarouselNext className="bg-primary text-primary-foreground hover:bg-accent hover:shadow-[0_0_15px_rgba(34,139,34,0.5)] transition-all" />
      </Carousel>
      <div className="flex justify-center gap-2 mt-6">
        {coffeeImages.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-accent shadow-[0_0_10px_rgba(220,38,38,0.6)]" : "w-2 bg-primary/50 hover:bg-primary"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
