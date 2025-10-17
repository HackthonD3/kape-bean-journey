import { CoffeeBeanSlider } from "@/components/CoffeeBeanSlider";
import { SectionDivider } from "@/components/SectionDivider";
import { ProductCard } from "@/components/ProductCard";
import { Mail, Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
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
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Kape Kapi Logo" className="h-10 md:h-12 w-auto" />
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-golden bg-clip-text text-transparent">
                Kape Kapi
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle() + " cursor-pointer hover:bg-accent/20 hover:text-accent transition-all"}
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
                    className="text-left px-4 py-2 rounded-lg hover:bg-accent/20 hover:text-accent transition-all text-foreground"
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
      <section className="py-16 animate-fade-in-up">
        <CoffeeBeanSlider />
      </section>

      <SectionDivider />

      {/* Section 1: The Soul of Kape Kapi */}
      <section id="soul" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center animate-fade-in-up hover:text-accent transition-colors">
            The Soul of Kape Kapi
          </h2>
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
      </section>

      <SectionDivider />

      {/* Section 2: Purpose & Promise */}
      <section id="purpose" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center animate-fade-in-up hover:text-accent transition-colors">
            Purpose & Promise
          </h2>
          <div className="bg-gradient-coffee text-primary-foreground p-8 md:p-12 rounded-2xl shadow-[0_0_30px_rgba(218,165,32,0.3)] hover:shadow-[0_0_40px_rgba(218,165,32,0.5)] transition-all duration-500 border border-accent/30">
            <p className="text-lg leading-relaxed">
              Our mission is to deliver the finest Indian coffee to the world by building direct partnerships with farmers, promoting sustainable agriculture, and upholding the highest standards of quality, ethics, and traceability. We are committed to supporting sustainability certifications that protect the environment, empower farming communities, and ensure a transparent and responsible coffee supply chain.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: Guiding Purpose */}
      <section id="vision" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center animate-fade-in-up hover:text-accent transition-colors">
            Guiding Purpose
          </h2>
          <div className="bg-card/50 border-2 border-accent/50 p-8 md:p-12 rounded-2xl shadow-[0_0_25px_rgba(218,165,32,0.2)] hover:shadow-[0_0_35px_rgba(218,165,32,0.4)] transition-all duration-500">
            <p className="text-lg text-foreground leading-relaxed">
              Our vision is to become a global leader in ethically sourced Indian coffee — a company trusted for its integrity, quality, and commitment to sustainability. We aim to inspire a coffee industry where every cup contributes to a healthier planet, thriving communities, and a fairer future for all.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Signature Blends & Origins */}
      <section id="origins" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center animate-fade-in-up hover:text-accent transition-colors">
            Signature Blends & Origins
          </h2>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border-2 border-primary/20">
              <h3 className="text-2xl font-semibold text-primary mb-4">Growing Regions</h3>
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

            <div className="bg-card p-6 rounded-xl border-2 border-primary/20">
              <h3 className="text-2xl font-semibold text-primary mb-4">Taste Profile</h3>
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

            <div className="bg-card p-6 rounded-xl border-2 border-primary/20">
              <h3 className="text-2xl font-semibold text-primary mb-4">Processing Methods</h3>
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
      <section id="certifications" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center animate-fade-in-up hover:text-accent transition-colors">
            Certifications
          </h2>
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
            <p className="italic text-primary">
              By aligning with certified practices, we help build a more responsible coffee industry — one that benefits both people and the planet.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Expertly Curated Range */}
      <section id="products" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center animate-fade-in-up hover:text-accent transition-colors">
            Expertly Curated Range
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              title="Robusta Coffee – Naturals"
              items={[
                "Robusta Coffee Cherry AAA",
                "Robusta Coffee Cherry AA",
                "Robusta Coffee Cherry A",
                "Robusta Coffee Cherry AB",
                "Robusta Coffee Cherry PB",
                "Robusta Coffee Cherry C",
              ]}
            />
            <ProductCard
              title="Robusta Coffee – Washed"
              items={[
                "Robusta Parchment AA",
                "Robusta Parchment A",
                "Robusta Parchment AB",
                "Robusta Parchment PB",
                "Robusta Parchment C",
              ]}
            />
            <ProductCard
              title="Arabica Coffee – Naturals"
              items={[
                "Arabica Coffee Cherry AAA",
                "Arabica Coffee Cherry AA",
                "Arabica Coffee Cherry A",
                "Arabica Coffee Cherry AB",
                "Arabica Coffee Cherry PB",
                "Arabica Coffee Cherry C",
              ]}
            />
            <ProductCard
              title="Arabica Coffee – Washed"
              items={[
                "Plantation AA",
                "Plantation A",
                "Plantation AB",
              ]}
            />
            <ProductCard
              title="Specialty Coffees"
              items={[
                "Kapi Royale",
                "Monsoon Malabar Coffee",
              ]}
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-card/30 scroll-mt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/src/assets/bean3.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in-up text-primary">
            We'd Love to Hear From You
          </h2>
          <p className="text-center mb-12 text-lg text-foreground">
            For inquiries, orders, and partnership opportunities, please reach out to us:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300 group">
              <Mail className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform text-primary" />
              <h3 className="font-semibold mb-2 text-foreground">Email</h3>
              <a href="mailto:info@kapekapiexports.com" className="hover:text-accent transition-colors text-foreground">
                info@kapekapiexports.com
              </a>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300 group">
              <Phone className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform text-primary" />
              <h3 className="font-semibold mb-2 text-foreground">Phone</h3>
              <a href="tel:+911234567890" className="hover:text-accent transition-colors text-foreground">
                +91 12345 67890
              </a>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300 group">
              <MapPin className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform text-primary" />
              <h3 className="font-semibold mb-2 text-foreground">Address</h3>
              <p className="text-foreground">Kushalnagar, Karnataka, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 border-t border-accent/30">
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
