import { CoffeeBeanSlider } from "@/components/CoffeeBeanSlider";
import { SectionDivider } from "@/components/SectionDivider";
import { Mail, Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import floatingBean from "@/assets/floating-bean.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About Us", id: "about" },
    { label: "Origins", id: "origins" },
    { label: "Sustainability", id: "sustainability" },
    { label: "Products", id: "products" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-golden bg-clip-text text-transparent">
              Kape Kapi
            </h1>
            
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle() + " cursor-pointer hover:bg-primary/20 hover:text-primary transition-all"}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-4 py-2 rounded-lg hover:bg-primary/20 hover:text-primary transition-all text-foreground"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 animate-fade-in-up relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse"></div>
        <CoffeeBeanSlider />
      </section>

      <SectionDivider />

      {/* Section 1: About Us */}
      <section id="about" className="py-12 scroll-mt-20 relative">
        <img 
          src={floatingBean} 
          alt="" 
          className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 animate-[spin_20s_linear_infinite] opacity-60" 
        />
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center animate-fade-in-up hover:text-accent transition-colors">
            About Us
          </h2>
          <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/50 p-8 md:p-12 rounded-2xl shadow-[0_0_25px_rgba(34,139,34,0.2)] hover:shadow-[0_0_45px_rgba(34,139,34,0.5)] transition-all duration-500 animate-fade-in hover:scale-[1.02] group">
            <div className="space-y-6 text-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">
              <p>
                Kape Kapi & Exports is a Karnataka-based coffee sourcing and processing company rooted in the misty highlands of the Coorg region, one of India's most renowned coffee origins. We work in close partnership with the farming community to promote sustainable and responsible coffee cultivation, ensuring long-term environmental stewardship and improved livelihoods for growers.
              </p>
              <p>
                Our network includes over <span className="text-primary font-semibold">600 farmers</span>, collectively producing more than <span className="text-primary font-semibold">9,000 tonnes</span> of certified coffee. We offer a diverse range of sustainably sourced coffees, including Rainforest Alliance, 4C, Organic, and Fairtrade certifications, with full traceability from farm to the customer.
              </p>
              <p>
                Our coffees are shade-grown in forest-like estates at high altitudes, yielding premium Robusta and Arabica single-origin coffees with distinctive cup profiles. By procuring coffee directly from farmers and processing it at our state-of-the-art facility, we deliver customized, customer-specific solutions that meet the quality expectations of international markets.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-card/80 backdrop-blur-sm border-2 border-accent/50 p-8 rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.15)] hover:shadow-[0_0_35px_rgba(220,38,38,0.4)] transition-all duration-500 animate-fade-in hover:scale-[1.02] group">
              <h3 className="text-2xl font-bold text-accent mb-4">Our Mission</h3>
              <p className="text-foreground leading-relaxed">
                To deliver the finest Indian coffees to global markets through direct farmer partnerships, sustainable agriculture, and the highest standards of quality, ethics, and traceability, while supporting internationally recognized certifications that protect the environment and empower farming communities.
              </p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/50 p-8 rounded-2xl shadow-[0_0_20px_rgba(34,139,34,0.15)] hover:shadow-[0_0_35px_rgba(34,139,34,0.4)] transition-all duration-500 animate-fade-in hover:scale-[1.02] group">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-foreground leading-relaxed">
                To be a globally trusted leader in ethically sourced Indian coffee, driven by integrity, quality, and sustainability, creating positive impact for people and the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: Coffee Origins & Terroir */}
      <section id="origins" className="py-12 scroll-mt-20 relative">
        <img 
          src={floatingBean} 
          alt="" 
          className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 animate-[spin_20s_linear_infinite] opacity-60" 
        />
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center animate-fade-in-up hover:text-accent transition-colors">
            Coffee Origins & Terroir
          </h2>
          <p className="text-center text-foreground/80 mb-8 max-w-3xl mx-auto">
            India's diverse geography and climate play a defining role in the character of its coffees. At Kape Kapi, our coffees are sourced from some of South India's most distinguished coffee-growing regions.
          </p>

          <div className="space-y-6">
            {/* Primary Origins */}
            <div className="bg-card p-6 rounded-xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,139,34,0.3)] group animate-fade-in">
              <h3 className="text-2xl font-semibold text-primary mb-4 group-hover:scale-105 transition-transform">Primary Origins</h3>
              <p className="text-foreground mb-4">
                Our primary sourcing regions include <span className="text-primary font-semibold">Coorg and Chikmagalur in Karnataka</span>, the <span className="text-primary font-semibold">Wayanad region of Kerala</span>, with select coffees sourced from <span className="text-primary font-semibold">Tamil Nadu</span>. These regions are globally recognized for producing high-quality Arabica and Robusta coffees and are known for their long-standing coffee heritage and responsible farming traditions.
              </p>
            </div>

            {/* Growing Conditions */}
            <div className="bg-card p-6 rounded-xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,139,34,0.3)] group animate-fade-in">
              <h3 className="text-2xl font-semibold text-primary mb-4 group-hover:scale-105 transition-transform">Growing Conditions</h3>
              <p className="text-foreground">
                Coffee is cultivated under native forest shade, intercropped with indigenous trees and spices. This shade-grown system protects biodiversity, conserves soil moisture, and allows cherries to mature slowly, resulting in greater flavor complexity and consistency. The forest canopy also creates a stable microclimate that supports sustainable farming and climate resilience.
              </p>
            </div>

            {/* Soil & Climate */}
            <div className="bg-card p-6 rounded-xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,139,34,0.3)] group animate-fade-in">
              <h3 className="text-2xl font-semibold text-primary mb-4 group-hover:scale-105 transition-transform">Soil & Climate</h3>
              <p className="text-foreground">
                The coffee-growing regions are characterized by rich loamy soils, high organic matter, and excellent drainage. Combined with monsoon-fed rainfall and moderate temperatures, these conditions create an ideal environment for healthy coffee plants and optimal bean development. Seasonal rainfall patterns play a critical role in flowering, cherry development, and overall cup quality.
              </p>
            </div>

            {/* Altitude Range */}
            <div className="bg-card p-6 rounded-xl border-2 border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(220,38,38,0.3)] group animate-fade-in">
              <h3 className="text-2xl font-semibold text-accent mb-4 group-hover:scale-105 transition-transform">Altitude Range</h3>
              <p className="text-foreground mb-4">Altitude is a key factor influencing flavor, density, and cup profile.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Arabica Coffees</h4>
                  <p className="text-foreground text-sm">
                    Cultivated at elevations ranging from <span className="font-semibold">3,280 to 4,920 feet</span> above sea level. These higher altitudes contribute to refined acidity, aromatic complexity, and balanced sweetness, resulting in elegant and nuanced cup profiles.
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-accent/20">
                  <h4 className="font-semibold text-accent mb-2">Robusta Coffees</h4>
                  <p className="text-foreground text-sm">
                    Grown at <span className="font-semibold">1,970 to 2,950 feet</span> above sea level, where warmer temperatures and fertile soils produce coffees with a fuller body, strength, and distinctive intensity, well suited for espresso and blends.
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 mt-4 italic text-sm">
                Higher elevations and slow cherry maturation allow sugars to develop gradually, enhancing cup clarity, sweetness, and balance across both Arabica and Robusta offerings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: Sustainably Sourced */}
      <section id="sustainability" className="py-12 scroll-mt-20 relative">
        <img 
          src={floatingBean} 
          alt="" 
          className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 animate-[spin_20s_linear_infinite] opacity-60" 
        />
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center animate-fade-in-up hover:text-accent transition-colors">
            Sustainably Sourced Indian Coffee
          </h2>
          <p className="text-center text-foreground/80 mb-8 max-w-3xl mx-auto">
            Direct from Farmers — At Kape Kapi, sustainability is central to how we source, process, and supply coffee.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Farmer Network */}
            <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/40 p-6 rounded-2xl hover:shadow-[0_0_30px_rgba(34,139,34,0.4)] transition-all duration-500 animate-fade-in hover:scale-[1.02] group">
              <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">Farmer Network & Scale</h3>
              <p className="text-foreground leading-relaxed">
                Our sourcing network comprises over <span className="text-primary font-semibold">600 coffee farmers</span>, collectively producing more than <span className="text-primary font-semibold">9,000 tonnes</span> of certified coffee each year. These farmers form the backbone of our supply chain, enabling us to meet international demand while maintaining strict quality and compliance standards.
              </p>
            </div>

            {/* Direct Sourcing */}
            <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/40 p-6 rounded-2xl hover:shadow-[0_0_30px_rgba(34,139,34,0.4)] transition-all duration-500 animate-fade-in hover:scale-[1.02] group">
              <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">Direct Sourcing & Fair Practices</h3>
              <p className="text-foreground leading-relaxed">
                Through long-term procurement relationships, we provide farmers with assured market access and transparent pricing mechanisms. This approach reduces dependency on intermediaries, improves income stability, and strengthens trust across the supply chain.
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-card/80 backdrop-blur-sm border-2 border-accent/40 p-6 rounded-2xl hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-500 animate-fade-in hover:scale-[1.02] group">
              <h3 className="text-xl font-bold text-accent mb-4 group-hover:text-primary transition-colors">Sustainability Certifications</h3>
              <p className="text-foreground leading-relaxed">
                Kape Kapi operates in alignment with <span className="text-accent font-semibold">4C sustainability principles</span> and actively supports farmer compliance with <span className="text-accent font-semibold">Rainforest Alliance, Fairtrade, and Organic</span> standards. These certifications ensure environmental protection, social responsibility, and adherence to global compliance expectations.
              </p>
            </div>

            {/* Traceability */}
            <div className="bg-card/80 backdrop-blur-sm border-2 border-accent/40 p-6 rounded-2xl hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-500 animate-fade-in hover:scale-[1.02] group">
              <h3 className="text-xl font-bold text-accent mb-4 group-hover:text-primary transition-colors">Traceability & Quality Assurance</h3>
              <p className="text-foreground leading-relaxed">
                Our vertically integrated curing and processing facilities provide complete farm-to-export traceability. Each lot is monitored through documented processes covering sourcing, curing, processing, storage, and dispatch, ensuring quality consistency and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Products */}
      <section id="products" className="py-12 scroll-mt-20 relative overflow-hidden">
        <img 
          src={floatingBean} 
          alt="" 
          className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 animate-float opacity-60" 
        />
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center animate-fade-in-up hover:text-accent transition-colors">
            Our Coffee Range
          </h2>
          <p className="text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
            Kape Kapi offers a wide range of premium Indian coffees, sourced directly from farmers in Coorg and surrounding regions.
          </p>
          
          {/* Bento-style grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Robusta Natural */}
            <div className="md:col-span-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="h-full bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border-2 border-primary/40 hover:border-primary hover:shadow-[0_0_30px_rgba(34,139,34,0.5)] transition-all duration-500 rounded-2xl p-8 group hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors mb-2">Robusta Coffees</h3>
                <p className="text-sm text-foreground/70 mb-4">Natural (Sun-Dried) – Coffee Cherry</p>
                <ul className="space-y-2 mb-4">
                  {["AAA", "AA", "A", "AB", "PB", "C"].map((grade, index) => (
                    <li key={index} className="text-foreground flex items-start gap-3 hover:text-primary transition-all duration-300 hover:translate-x-2">
                      <span className="text-primary mt-1">●</span>
                      <span className="text-base">{grade}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/80 italic">Full-bodied, bold, and naturally sweet with characteristic cocoa and malt notes.</p>
              </div>
            </div>

            {/* Robusta Washed */}
            <div className="md:col-span-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="h-full bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-2 border-primary/30 hover:border-primary hover:shadow-[0_0_30px_rgba(34,139,34,0.5)] transition-all duration-500 rounded-2xl p-8 group hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors mb-2">Robusta Washed</h3>
                <p className="text-sm text-foreground/70 mb-4">(Parchment)</p>
                <ul className="space-y-2 mb-4">
                  {["AA", "A", "AB", "PB", "C"].map((grade, index) => (
                    <li key={index} className="text-foreground flex items-start gap-3 hover:text-primary transition-all duration-300 hover:translate-x-2">
                      <span className="text-primary mt-1">●</span>
                      <span className="text-base">{grade}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/80 italic">Clean and balanced, with enhanced clarity and a smooth finish.</p>
              </div>
            </div>

            {/* Arabica Natural */}
            <div className="md:col-span-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="h-full bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm border-2 border-accent/50 hover:border-accent hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] transition-all duration-500 rounded-2xl p-8 group hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-accent group-hover:scale-105 transition-transform mb-2">Arabica Coffees</h3>
                <p className="text-sm text-foreground/70 mb-4">Natural (Sun-Dried) – Coffee Cherry</p>
                <ul className="space-y-2 mb-4">
                  {["AAA", "AA", "A", "AB", "PB", "C"].map((grade, index) => (
                    <li key={index} className="text-foreground flex items-start gap-3 hover:text-accent transition-all duration-300 hover:translate-x-2">
                      <span className="text-accent mt-1">●</span>
                      <span className="text-base">{grade}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/80 italic">Sweet, fruit-forward, and aromatic with hints of chocolate, nuts, and mild citrus.</p>
              </div>
            </div>

            {/* Arabica Washed */}
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="h-full bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border-2 border-primary/30 hover:border-primary hover:shadow-[0_0_30px_rgba(34,139,34,0.5)] transition-all duration-500 rounded-2xl p-6 group hover:scale-[1.02]">
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors mb-2">Arabica Washed</h3>
                <p className="text-xs text-foreground/70 mb-3">(Plantation)</p>
                <ul className="space-y-2 mb-3">
                  {["AA", "A", "AB"].map((grade, index) => (
                    <li key={index} className="text-foreground flex items-start gap-2 hover:text-primary transition-all duration-300 hover:translate-x-2">
                      <span className="text-primary mt-1">●</span>
                      <span className="text-sm">{grade}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-foreground/80 italic">Refined acidity, balanced body, and smooth, elegant flavor.</p>
              </div>
            </div>

            {/* Specialty Coffees */}
            <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <div className="h-full bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm border-2 border-accent hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-500 rounded-2xl p-6 group hover:scale-[1.05] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent animate-pulse"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-accent group-hover:scale-105 transition-transform mb-4">Specialty Coffees</h3>
                  <ul className="space-y-2">
                    {["Kaapi Royale", "Monsooned Malabar", "Barrel-Aged Coffees"].map((item, index) => (
                      <li key={index} className="text-foreground flex items-start gap-2 hover:text-accent transition-all duration-300 hover:translate-x-2">
                        <span className="text-accent mt-1">●</span>
                        <span className="text-sm font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Processing & Cup Profile */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/40 p-8 rounded-2xl hover:shadow-[0_0_30px_rgba(34,139,34,0.4)] transition-all duration-500 animate-fade-in">
              <h3 className="text-2xl font-bold text-primary mb-4">Processing Methods</h3>
              <ul className="space-y-3 text-foreground">
                <li><span className="font-semibold text-primary">Washed:</span> Clean, bright, and balanced cups with refined acidity.</li>
                <li><span className="font-semibold text-primary">Natural (Sun-dried):</span> Sweet, full-bodied, fruit-forward coffees.</li>
                <li><span className="font-semibold text-accent">Honey & Specialty:</span> Wine-, whisky-, and rum-barrel aged, plus flavour-infused coffees for premium markets.</li>
              </ul>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border-2 border-accent/40 p-8 rounded-2xl hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-500 animate-fade-in">
              <h3 className="text-2xl font-bold text-accent mb-4">Cup Profile Highlights</h3>
              <ul className="space-y-3 text-foreground">
                <li><span className="font-semibold text-primary">Arabica:</span> Clean cup, balanced acidity, notes of chocolate, nuts, citrus, and spice; smooth, medium body.</li>
                <li><span className="font-semibold text-accent">Robusta (Kaapi Royale / Washed):</span> Bold and clean, with cocoa, malt, and roasted grain notes; full-bodied with excellent crema.</li>
              </ul>
            </div>
          </div>

          {/* Specialty Coffee Details */}
          <div className="mt-8 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30 p-8 rounded-2xl hover:shadow-[0_0_35px_rgba(220,38,38,0.3)] transition-all duration-500 animate-fade-in">
            <h3 className="text-2xl font-bold text-accent mb-4">Barrel-Aged Specialty Coffees</h3>
            <p className="text-foreground leading-relaxed">
              Our wine-barrel, whisky-barrel, and rum-barrel aged coffees are carefully matured in authentic barrels to develop unique flavor profiles. During the aging process, the beans absorb subtle notes of oak, vanilla, dried fruit, and spice, creating a complex, rich, and aromatic cup. These specialty coffees are crafted for premium markets, offering a truly distinctive tasting experience that combines tradition, innovation, and exceptional quality.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-card/30 scroll-mt-20 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in-up text-primary">
            Contact Us
          </h2>
          <p className="text-center mb-12 text-lg text-foreground">
            For inquiries, orders, and partnership opportunities, please reach out to us:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300 group border border-primary/20">
              <Phone className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform text-primary" />
              <h3 className="font-semibold mb-4 text-foreground text-lg">Phone</h3>
              <div className="space-y-2">
                <a href="tel:+918086037232" className="block hover:text-primary transition-colors text-foreground">
                  +91 8086037232
                </a>
                <a href="tel:+919902612812" className="block hover:text-primary transition-colors text-foreground">
                  +91 9902612812
                </a>
                <a href="tel:+918921710388" className="block hover:text-primary transition-colors text-foreground">
                  +91 8921710388
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300 group border border-primary/20">
              <MapPin className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform text-accent" />
              <h3 className="font-semibold mb-4 text-foreground text-lg">Address</h3>
              <div className="text-foreground text-sm leading-relaxed">
                <p className="font-semibold text-primary">KAPE KAPI & EXPORTS</p>
                <p>Floor No. SY No 7/6</p>
                <p>KIADB Industrial Area</p>
                <p>Building No 22/P2 & 1/P2</p>
                <p>C/O Coorg Commodities and Coffee Curers</p>
                <p>Kushalnagara, Kodagu</p>
                <p>Karnataka, India - 571234</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 border-t border-primary/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Kape Kapi & Exports. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
