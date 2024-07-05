import { formatCurrency } from "@/lib/stock";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface StockCardProps {
  image: string;
  name: string;
  symbol: string;
  industry: string;
  price: number;
  summary: string;
}

const StockCard: React.FC<StockCardProps> = ({
  image,
  name,
  symbol,
  industry,
  price,
  summary,
}) => {
  return (
    <Card className="max-w-xs shadow-lg transform transition-transform hover:shadow-2xl hover:-translate-y-1">
      <CardHeader className="flex items-center space-x-4">
        <div className="h-16 w-16 bg-white overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <CardTitle className="text-lg font-bold">
            {name} ({symbol})
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Industry:</strong> {industry}
        </p>
        <p>
          <strong>Price:</strong> {formatCurrency(price)}
        </p>
        <p>{summary}</p>
      </CardContent>
    </Card>
  );
};

export default StockCard;
