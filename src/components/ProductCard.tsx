import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  items: string[];
}

export const ProductCard = ({ title, items }: ProductCardProps) => {
  return (
    <Card className="bg-card border-primary/20 hover:border-accent transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-foreground flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
