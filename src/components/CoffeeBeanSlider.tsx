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
import bean1 from "@/assets/bean1.jpg";
import bean2 from "@/assets/bean2.jpg";
import bean3 from "@/assets/bean3.jpg";
import bean4 from "@/assets/bean4.jpg";
import bean5 from "@/assets/bean5.jpg";
import bean6 from "@/assets/bean6.jpg";
import bean7 from "@/assets/bean7.jpg";
import bean8 from "@/assets/bean8.jpg";
import bean9 from "@/assets/bean9.jpg";
import bean10 from "@/assets/bean10.jpg";
import logo from "@/assets/logo.png";

const coffeeImages = [
  { src: bean1, alt: "Premium Robusta Coffee Beans" },
  { src: bean2, alt: "Arabica Coffee in Burlap" },
  { src: bean3, alt: "Green Coffee Beans" },
  { src: bean4, alt: "Monsooned Malabar Beans" },
  { src: bean5, alt: "Coffee Cherries on Branch" },
  { src: bean6, alt: "Freshly Roasted Espresso" },
  { src: bean7, alt: "Premium Roasted Coffee Beans Close-up" },
  { src: bean8, alt: "Coffee Beans Pouring from Sack" },
  { src: bean9, alt: "Assorted Coffee Bean Varieties" },
  { src: bean10, alt: "Coffee Plantation Landscape" },
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
            delay: 3000,
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
              <Card className="overflow-hidden border border-border bg-card">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border-2 border-accent p-6 md:p-8 rounded-lg shadow-xl">
                    <img src={logo} alt="Kape Kapi Logo" className="h-32 md:h-40 w-auto" />
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors" />
        <CarouselNext className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors" />
      </Carousel>
      <div className="flex justify-center gap-2 mt-6">
        {coffeeImages.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-accent" : "w-2 bg-muted hover:bg-accent/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
