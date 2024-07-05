"use client";

import { Portfolio } from "@/lib/portfolio";
import PortfolioGraph from "./PortfolioGraph";
import { formatCurrency } from "@/lib/stock";
import PortfolioInsightsPlaceholder from "./PortfolioInsightsPlacehodler";

type PortfolioInsightsProps = {
  userId: string;
  portfolio: Portfolio | null;
  fetchPortfolio: () => void;
};

export default function PortfolioInsights({
  portfolio,
}: PortfolioInsightsProps) {
  if (!portfolio) {
    //Adding cool loading visual.
    return <PortfolioInsightsPlaceholder />;
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-full">
      <h2 className="text-xl font-bold mb-4">Portfolio Insights</h2>
      <div className="grid grid-cols-1 gap-6 mb-6">
        <div>
          <p>
            <strong>Cash Balance:</strong>
            {formatCurrency(portfolio.cashBalance.cashBalance)}
          </p>
          <p>
            <strong>Portfolio Value:</strong>
            {formatCurrency(portfolio.portfolioValue)}
          </p>
        </div>
        <div className="w-full">
          <PortfolioGraph stocks={portfolio.stocks} />
        </div>
      </div>
      <h3 className="text-lg font-bold mb-4">Stocks</h3>
      <ul className="space-y-2">
        {portfolio.stocks.map((portfolioStock) => (
          <li key={portfolioStock.id} className="mb-2 p-2 border rounded-lg">
            <p>
              <strong>
                {portfolioStock.stock.name} ({portfolioStock.stock.symbol}):
              </strong>{" "}
              {portfolioStock.quantity} shares @
              {formatCurrency(portfolioStock.stock.price)} each
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
