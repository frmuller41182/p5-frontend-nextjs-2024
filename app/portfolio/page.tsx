"use client";

import { useEffect, useState } from "react";
import PortfolioInsights from "@/components/PortfolioInsights";
import PortfolioWelcomeMessage from "@/components/PortfolioWelcomeMessage";
import BuySellForm from "@/components/BuySellForm";
import { actionGetPortfolioInsights } from "@/actions/getUserPortfolio";
import { PortfolioStock } from "@/lib/portfolio";

type Portfolio = {
  cashBalance: { cashBalance: number };
  portfolioValue: number;
  stocks: PortfolioStock[];
};

export default function PortfolioPage() {
  //Hard coding a user of the DB because I am not passing it as a prompt form the layout like we saw in class yet. @Frank to fix
  const userId = "84dd939b-73d5-457a-85b9-85ce874688ff";
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);

  const fetchPortfolio = async () => {
    const portfolio = actionGetPortfolioInsights(userId).then(setPortfolio);
  };

  useEffect(() => {
    fetchPortfolio();
  }, [userId]);

  return (
    <main className="p-8 space-y-8">
      <PortfolioWelcomeMessage />
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1">
          <PortfolioInsights
            userId={userId}
            portfolio={portfolio}
            fetchPortfolio={fetchPortfolio}
          />
        </div>
        <div className="flex-1">
          <BuySellForm userId={userId} fetchPortfolio={fetchPortfolio} />
        </div>
      </div>
    </main>
  );
}
