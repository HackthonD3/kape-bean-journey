import { CoffeeBeanSlider } from "@/components/CoffeeBeanSlider";
import { SectionDivider } from "@/components/SectionDivider";
import { ProductCard } from "@/components/ProductCard";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-cream">
      {/* Header */}
      <header className="bg-primary/5 py-6 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex justify-center">
          <img src={logo} alt="Kape Kapi Export Logo" className="h-20 md:h-24" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 animate-fade-in-up">
        <div className="container mx-auto px-4 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Premium Indian Coffee Exports
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sourced directly from Karnataka's finest coffee-growing regions
          </p>
        </div>
        <CoffeeBeanSlider />
      </section>

      <SectionDivider />

      {/* Section 1: The Soul of Kape Kapi */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
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
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Purpose & Promise
          </h2>
          <div className="bg-gradient-coffee text-primary-foreground p-8 md:p-12 rounded-2xl shadow-xl">
            <p className="text-lg leading-relaxed">
              Our mission is to deliver the finest Indian coffee to the world by building direct partnerships with farmers, promoting sustainable agriculture, and upholding the highest standards of quality, ethics, and traceability. We are committed to supporting sustainability certifications that protect the environment, empower farming communities, and ensure a transparent and responsible coffee supply chain.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: Guiding Purpose */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Guiding Purpose
          </h2>
          <div className="bg-accent/10 border-2 border-accent/30 p-8 md:p-12 rounded-2xl">
            <p className="text-lg text-foreground leading-relaxed">
              Our vision is to become a global leader in ethically sourced Indian coffee — a company trusted for its integrity, quality, and commitment to sustainability. We aim to inspire a coffee industry where every cup contributes to a healthier planet, thriving communities, and a fairer future for all.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Signature Blends & Origins */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
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
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
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
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
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
      <section className="py-16 bg-gradient-coffee text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            We'd Love to Hear From You
          </h2>
          <p className="text-center mb-12 text-lg">
            For inquiries, orders, and partnership opportunities, please reach out to us:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Mail className="w-12 h-12 mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:info@kapekapiexports.com" className="hover:text-accent transition-colors">
                info@kapekapiexports.com
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <Phone className="w-12 h-12 mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+911234567890" className="hover:text-accent transition-colors">
                +91 12345 67890
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-12 h-12 mb-4" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p>Kushalnagar, Karnataka, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
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
