import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import bean1 from "@/assets/bean1.jpg";
import bean2 from "@/assets/bean2.jpg";
import bean3 from "@/assets/bean3.jpg";
import bean4 from "@/assets/bean4.jpg";
import bean5 from "@/assets/bean5.jpg";
import bean6 from "@/assets/bean6.jpg";

const coffeeImages = [
  { src: bean1, alt: "Premium Robusta Coffee Beans" },
  { src: bean2, alt: "Arabica Coffee in Burlap" },
  { src: bean3, alt: "Green Coffee Beans" },
  { src: bean4, alt: "Monsooned Malabar Beans" },
  { src: bean5, alt: "Coffee Cherries on Branch" },
  { src: bean6, alt: "Freshly Roasted Espresso" },
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
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {coffeeImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden border-2 border-primary/20 bg-card hover:border-accent transition-all duration-300 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-primary text-primary-foreground hover:bg-primary/90" />
        <CarouselNext className="bg-primary text-primary-foreground hover:bg-primary/90" />
      </Carousel>
      <div className="flex justify-center gap-2 mt-6">
        {coffeeImages.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-primary" : "w-2 bg-primary/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
