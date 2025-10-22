import { CoffeeBeanSlider } from "@/components/CoffeeBeanSlider";
import { SectionDivider } from "@/components/SectionDivider";
import { ProductCard } from "@/components/ProductCard";
import { Mail, Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import heroBeans1 from "@/assets/hero-beans-1.jpg";
import heroCoffeeCup from "@/assets/hero-coffee-cup.jpg";
import heroBeans2 from "@/assets/hero-beans-2.jpg";
import heroEspresso from "@/assets/hero-espresso.jpg";
import heroBeans3 from "@/assets/hero-beans-3.jpg";
import heroLatteLarge from "@/assets/hero-latte-large.jpg";
import heroCoffeeBag from "@/assets/hero-coffee-bag.jpg";
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
    { label: "Soul", id: "soul" },
    { label: "Purpose", id: "purpose" },
    { label: "Vision", id: "vision" },
    { label: "Origins", id: "origins" },
    { label: "Certifications", id: "certifications" },
    { label: "Products", id: "products" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              Kape Kapi
            </h1>
            
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle() + " cursor-pointer hover:bg-accent/10 hover:text-accent transition-all"}
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
                    className="text-left px-4 py-2 rounded-lg hover:bg-muted hover:text-accent transition-all text-foreground"
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
      <section className="py-16 px-4 relative overflow-visible min-h-[700px] flex items-center">
        {/* Decorative coffee bean images - positioned strategically */}
        <div className="absolute top-12 left-8 w-56 h-64 opacity-90 z-0">
          <img src={heroBeans1} alt="" className="w-full h-full object-cover" style={{ clipPath: 'polygon(0 20%, 100% 0, 80% 100%, 0 80%)' }} />
        </div>
        
        <div className="absolute top-64 left-1/4 w-40 h-40 opacity-85 z-0">
          <img src={heroBeans3} alt="" className="w-full h-full object-cover rounded-full shadow-lg" />
        </div>
        
        <div className="absolute bottom-16 left-12 w-64 h-48 opacity-90 z-0">
          <img src={heroBeans2} alt="" className="w-full h-full object-cover rounded-2xl shadow-lg" />
        </div>
        
        <div className="absolute top-20 right-8 w-32 h-32 opacity-80 z-0">
          <img src={heroBeans3} alt="" className="w-full h-full object-cover rounded-full shadow-md" />
        </div>
        
        {/* Decorative dots pattern */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 opacity-10 z-0">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></div>
            ))}
          </div>
        </div>
        
        {/* Main hero content */}
        <div className="container mx-auto max-w-6xl relative z-20 pt-8">
          <div className="flex flex-col items-end max-w-4xl ml-auto mr-8">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest">Discover the Art of Coffee</p>
            <h1 className="text-6xl md:text-8xl font-bold mb-10 leading-none text-right">
              <span className="text-foreground block">Premium</span>
              <span className="text-foreground block">Perfect Coffee</span>
              <span className="text-accent block mt-2" style={{ color: 'hsl(38, 70%, 50%)' }}>Everytime</span>
            </h1>
            
            <div className="flex items-center gap-4 mb-12">
              <div className="flex -space-x-4">
                {[heroBeans1, heroBeans2, heroBeans3, heroBeans1, heroBeans2].map((img, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-3 border-background overflow-hidden shadow-md">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-base text-muted-foreground font-medium">500+ Satisfied Customers</p>
            </div>
          </div>
          
          {/* Right side CTA */}
          <div className="absolute top-8 right-4 bg-card border-2 border-accent rounded-xl p-6 shadow-xl max-w-xs hidden xl:block z-30">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                <span className="text-white text-xs font-bold">▶</span>
              </div>
              <span className="text-sm font-bold text-foreground">Join Free</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
              Elevate Your<br />Coffee Experience
            </h3>
            <button className="text-sm text-accent font-semibold hover:underline">
              Discover More →
            </button>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Ready to Explore Section */}
      <section className="py-20 bg-gradient-cream">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wide">Have A Good Day</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Ready To Explore<br />Our Premium Coffee<br />Beans?
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-10 text-lg">
                From morning brews to evening relaxations, our beans ensure every cup is a delight. Enjoy the perfect blend of flavor and aroma with every sip.
              </p>
              
              {/* Product Showcase */}
              <div className="bg-card border border-border rounded-xl p-6 inline-block shadow-md animate-fade-in hover-scale">
                <div className="flex items-center justify-center">
                  <div className="w-48 h-48 rounded-lg overflow-hidden">
                    <img src={heroBeans1} alt="Premium Coffee Beans" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="w-96 h-96 relative">
                <img src={heroBeans1} alt="" className="w-full h-full object-cover rounded-full shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 1: The Soul of Kape Kapi */}
      <section id="soul" className="py-16 scroll-mt-20 bg-gradient-cream">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            The Soul of Kape Kapi
          </h2>
          <div className="bg-card border-2 border-border p-8 md:p-12 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Kape Kapi & Exports is a coffee manufacturing and exporting company based in the heart of India's premier coffee-growing region — Karnataka, South India. We are committed to supporting local coffee farmers by sourcing our beans directly from them, ensuring fair practices and sustainable livelihoods. This direct relationship allows us to deliver the highest quality Indian coffee beans to both domestic and international markets.
              </p>
              <p>
                With complete vertical integration and full ownership throughout our supply chain, we provide our clients with unmatched traceability and rigorous quality control at every stage — from farm to export.
              </p>
              <p>
                Specializing in wholesale green coffee beans, Kape Kapi focuses exclusively on business-to-business bulk distribution. We take pride in supplying premium-grade Indian green coffee beans to roasters, importers, and specialty coffee businesses around the world.
              </p>
              <p>
                At Kape Kapi, quality is more than a standard — it's a passion. Together with our dedicated team, we strive to produce a coffee experience that is distinctive, memorable, and truly exceptional. Because like our customers, we are passionate about coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: Purpose & Promise */}
      <section id="purpose" className="py-16 scroll-mt-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Purpose & Promise
          </h2>
          <div className="bg-card border-2 border-border p-8 md:p-12 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale">
            <p className="text-lg leading-relaxed text-foreground">
              Our mission is to deliver the finest Indian coffee to the world by building direct partnerships with farmers, promoting sustainable agriculture, and upholding the highest standards of quality, ethics, and traceability. We are committed to supporting sustainability certifications that protect the environment, empower farming communities, and ensure a transparent and responsible coffee supply chain.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: Guiding Purpose */}
      <section id="vision" className="py-16 scroll-mt-20 bg-gradient-cream">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Guiding Purpose
          </h2>
          <div className="bg-card border-2 border-border p-8 md:p-12 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale">
            <p className="text-lg text-foreground leading-relaxed">
              Our vision is to become a global leader in ethically sourced Indian coffee — a company trusted for its integrity, quality, and commitment to sustainability. We aim to inspire a coffee industry where every cup contributes to a healthier planet, thriving communities, and a fairer future for all.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Signature Blends & Origins */}
      <section id="origins" className="py-16 scroll-mt-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Signature Blends & Origins
          </h2>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border-2 border-border hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale">
              <h3 className="text-2xl font-semibold text-accent mb-4">Growing Regions</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Low to mid-altitude ranges (200–1,000 meters above sea level)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Shade-grown farms under forest canopies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Rich, red loamy soils with good drainage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Regions like Coorg (Kodagu), Chikmagalur, and Hassan districts, Wayanad (Kerala)</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl border-2 border-border hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale">
              <h3 className="text-2xl font-semibold text-accent mb-4">Taste Profile</h3>
              <p className="text-foreground mb-4">
                Indian Robusta from Karnataka is known for its strong, full-bodied taste. It offers:
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Low acidity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Earthy, nutty undertones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Dark chocolate, woody, or spicy notes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>A lingering, heavy crema – ideal for espresso blends</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl border-2 border-border hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale">
              <h3 className="text-2xl font-semibold text-accent mb-4">Processing Methods</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Often cultivated using traditional, eco-friendly methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Supports sustainable biodiversity in the Western Ghats region</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Available in naturally sun-dried and washed (wet-processed) forms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Also processed into Monsooned Robusta, giving it a unique mellow, aged character</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Certifications */}
      <section id="certifications" className="py-16 scroll-mt-20 bg-gradient-cream">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Certifications
          </h2>
          <div className="bg-card border-2 border-border p-8 md:p-12 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                At Kape Kapi & Exports, we recognize the importance of ethical and environmentally responsible coffee production. Sustainability certifications play a vital role in ensuring that coffee is grown, processed, and traded in ways that protect ecosystems, support farmer livelihoods, and promote transparency across the supply chain.
              </p>
              <p>
                We work closely with farms that follow sustainable practices and aim to meet globally recognized certification standards such as Rainforest Alliance, Fairtrade, Organic (India, USDA, EU), and 4C. These certifications verify:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Environmentally sound farming methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Fair labour conditions and community support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Traceability from farm to export</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Safe and sustainable post-harvest processing</span>
                </li>
              </ul>
              <p className="italic text-accent font-semibold">
                By aligning with certified practices, we help build a more responsible coffee industry — one that benefits both people and the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Expertly Curated Range */}
      <section id="products" className="py-16 scroll-mt-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Expertly Curated Range
          </h2>
          
          {/* Bento-style grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Large card - spans 2 columns */}
            <div className="md:col-span-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="h-full bg-card border border-border hover:shadow-lg transition-shadow duration-300 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Robusta Coffee – Naturals</h3>
                <ul className="space-y-3">
                  {["Robusta Coffee Cherry AAA", "Robusta Coffee Cherry AA", "Robusta Coffee Cherry A", "Robusta Coffee Cherry AB", "Robusta Coffee Cherry PB", "Robusta Coffee Cherry C"].map((item, index) => (
                    <li key={index} className="text-foreground flex items-start gap-3 hover:text-accent transition-colors">
                      <span className="text-accent mt-1 text-lg">●</span>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Medium cards */}
            <div className="md:col-span-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="h-full bg-card border border-border hover:shadow-lg transition-shadow duration-300 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Robusta Coffee – Washed</h3>
                <ul className="space-y-3">
                  {["Robusta Parchment AA", "Robusta Parchment A", "Robusta Parchment AB", "Robusta Parchment PB", "Robusta Parchment C"].map((item, index) => (
                    <li key={index} className="text-foreground flex items-start gap-3 hover:text-accent transition-colors">
                      <span className="text-accent mt-1 text-lg">●</span>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tall card */}
            <div className="md:col-span-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="h-full bg-card border border-border hover:shadow-lg transition-shadow duration-300 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-accent mb-6">Arabica Coffee – Naturals</h3>
                <ul className="space-y-3">
                  {["Arabica Coffee Cherry AAA", "Arabica Coffee Cherry AA", "Arabica Coffee Cherry A", "Arabica Coffee Cherry AB", "Arabica Coffee Cherry PB", "Arabica Coffee Cherry C"].map((item, index) => (
                    <li key={index} className="text-foreground flex items-start gap-3 hover:text-accent transition-colors">
                      <span className="text-accent mt-1 text-lg">●</span>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Small card */}
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="h-full bg-card border border-border hover:shadow-lg transition-shadow duration-300 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Arabica Coffee – Washed</h3>
                <ul className="space-y-2">
                  {["Plantation AA", "Plantation A", "Plantation AB"].map((item, index) => (
                    <li key={index} className="text-foreground flex items-start gap-2 hover:text-accent transition-colors">
                      <span className="text-accent mt-1">●</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Featured card */}
            <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <div className="h-full bg-accent/5 border-2 border-accent hover:shadow-lg transition-shadow duration-300 rounded-lg p-6">
                <div>
                  <h3 className="text-xl font-bold text-accent mb-4">Specialty Coffees</h3>
                  <ul className="space-y-2">
                    {["Kapi Royale", "Monsoon Malabar Coffee"].map((item, index) => (
                      <li key={index} className="text-foreground flex items-start gap-2 hover:text-accent transition-colors">
                        <span className="text-accent mt-1">●</span>
                        <span className="text-sm font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-cream scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
            We'd Love to Hear From You
          </h2>
          <p className="text-center mb-12 text-lg text-foreground">
            For inquiries, orders, and partnership opportunities, please reach out to us:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow duration-300">
              <Mail className="w-12 h-12 mb-4 text-accent" />
              <h3 className="font-semibold mb-2 text-foreground">Email</h3>
              <a href="mailto:info@kapekapiexports.com" className="hover:text-accent transition-colors text-foreground">
                info@kapekapiexports.com
              </a>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow duration-300">
              <Phone className="w-12 h-12 mb-4 text-accent" />
              <h3 className="font-semibold mb-2 text-foreground">Phone</h3>
              <a href="tel:+911234567890" className="hover:text-accent transition-colors text-foreground">
                +91 12345 67890
              </a>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow duration-300">
              <MapPin className="w-12 h-12 mb-4 text-accent" />
              <h3 className="font-semibold mb-2 text-foreground">Address</h3>
              <p className="text-foreground">Kushalnagar, Karnataka, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 border-t border-border">
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
