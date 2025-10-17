import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  items: string[];
}

export const ProductCard = ({ title, items }: ProductCardProps) => {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-2 border-accent/40 hover:border-accent hover:shadow-[0_0_25px_rgba(218,165,32,0.4)] transition-all duration-500 group">
      <CardHeader>
        <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-foreground flex items-start gap-2 hover:text-accent transition-colors">
              <span className="text-accent mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
