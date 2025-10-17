import floatingBean from "@/assets/floating-bean.png";
import bean1 from "@/assets/bean1.jpg";
import bean2 from "@/assets/bean2.jpg";
import bean3 from "@/assets/bean3.jpg";

const coffeeImages = [bean1, bean2, bean3];

export const SectionDivider = () => {
  const randomImage = coffeeImages[Math.floor(Math.random() * coffeeImages.length)];
  
  return (
    <div className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-30">
        <img src={floatingBean} alt="" className="w-10 h-10 animate-float" style={{ animationDelay: "0s" }} />
        <img src={floatingBean} alt="" className="w-6 h-6 animate-float" style={{ animationDelay: "0.3s" }} />
        <img src={floatingBean} alt="" className="w-12 h-12 animate-float" style={{ animationDelay: "0.6s" }} />
        <img src={floatingBean} alt="" className="w-8 h-8 animate-float" style={{ animationDelay: "0.9s" }} />
        <img src={floatingBean} alt="" className="w-10 h-10 animate-float" style={{ animationDelay: "1.2s" }} />
        <img src={floatingBean} alt="" className="w-7 h-7 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>
      <div className="container mx-auto px-4 flex items-center justify-center gap-8">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent flex-1" />
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent/50 shadow-[0_0_20px_rgba(218,165,32,0.4)] animate-pulse">
          <img src={randomImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent flex-1" />
      </div>
    </div>
  );
};
