import WelcomeMessage from "@/components/WelcomeMessage";
import StockCard from "@/components/StockCard";
import { getStocks } from "@/lib/stock";

export default async function Home() {
  const stocks = await getStocks();
  const stocksPreview = stocks.slice(0, 4);
  return (
    <div className="p-8">
      <WelcomeMessage />
      <div className="p-6 flex justify-center flex-wrap gap-8">
        {stocksPreview.map((stock) => (
          <StockCard
            key={stock.symbol}
            image={stock.logoUrl}
            name={stock.name}
            symbol={stock.symbol}
            industry={stock.industry}
            price={stock.price}
            summary={stock.summary}
          />
        ))}
      </div>
    </div>
  );
}
