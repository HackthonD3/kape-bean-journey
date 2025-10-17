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
import logo from "@/assets/logo.png";

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
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="flex justify-center mb-8">
        <div className="bg-card/50 backdrop-blur-sm p-4 rounded-2xl border-2 border-primary/30 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(218,165,32,0.3)] animate-fade-in">
          <img src={logo} alt="Kape Kapi Logo" className="h-24 md:h-32" />
        </div>
      </div>
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
              <Card className="overflow-hidden border-2 border-primary/30 bg-card/80 backdrop-blur-sm hover:border-accent hover:shadow-[0_0_20px_rgba(218,165,32,0.4)] transition-all duration-500 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-primary text-primary-foreground hover:bg-accent hover:shadow-[0_0_15px_rgba(218,165,32,0.5)] transition-all" />
        <CarouselNext className="bg-primary text-primary-foreground hover:bg-accent hover:shadow-[0_0_15px_rgba(218,165,32,0.5)] transition-all" />
      </Carousel>
      <div className="flex justify-center gap-2 mt-6">
        {coffeeImages.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-accent shadow-[0_0_10px_rgba(218,165,32,0.6)]" : "w-2 bg-primary/50 hover:bg-primary"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
