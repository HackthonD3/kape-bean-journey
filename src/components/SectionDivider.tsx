import floatingBean from "@/assets/floating-bean.png";

export const SectionDivider = () => {
  return (
    <div className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center gap-8 opacity-20">
        <img src={floatingBean} alt="" className="w-8 h-8 animate-float" style={{ animationDelay: "0s" }} />
        <img src={floatingBean} alt="" className="w-6 h-6 animate-float" style={{ animationDelay: "0.5s" }} />
        <img src={floatingBean} alt="" className="w-10 h-10 animate-float" style={{ animationDelay: "1s" }} />
        <img src={floatingBean} alt="" className="w-8 h-8 animate-float" style={{ animationDelay: "1.5s" }} />
        <img src={floatingBean} alt="" className="w-6 h-6 animate-float" style={{ animationDelay: "2s" }} />
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </div>
  );
};
