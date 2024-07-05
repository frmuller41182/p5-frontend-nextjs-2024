"use client";

import { useEffect, useState } from "react";

import StockCard from "./StockCard";
import { Stock } from "@/lib/stock";
import { actionSearchStocks } from "@/actions/searchStocks";
import StockCardPlaceholder from "./StockCardPlaceholder";

type StockSearchProps = {
  search: string;
};
export default function StockSearch({ search }: StockSearchProps) {
  const [stockResults, setStockResults] = useState<Stock[] | null>(null);

  useEffect(() => {
    actionSearchStocks(search).then(setStockResults);
    setStockResults(null);
  }, [search]);

  if (stockResults === null) {
    return (
      <main className="p-6 flex flex-wrap gap-2">
        <StockCardPlaceholder />
        <StockCardPlaceholder />
        <StockCardPlaceholder />
        <StockCardPlaceholder />
      </main>
    );
  }

  if (stockResults.length === 0) {
    return <div className="p-4">No results.</div>;
  }

  return (
    <main className="p-6 flex justify-center flex-wrap gap-8">
      {stockResults.map((stock) => (
        <StockCard
          key={stock.id}
          image={stock.logoUrl}
          name={stock.name}
          symbol={stock.symbol}
          industry={stock.industry}
          price={stock.price}
          summary={stock.summary}
        />
      ))}
    </main>
  );
}
