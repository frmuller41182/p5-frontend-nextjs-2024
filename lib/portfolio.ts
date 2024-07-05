import { db } from "@/db/db";

export type PortfolioStock = {
  id: string;
  portfolioId: string;
  stockId: string;
  quantity: number;
  createdAt: Date;
  stock: {
    id: string;
    name: string;
    symbol: string;
    industry: string;
    summary: string;
    website: string;
    logoUrl: string;
    price: number;
  };
};

export type PortfolioInsights = {
  cashBalance: { cashBalance: number };
  portfolioValue: number;
  stocks: PortfolioStock[];
};

export type Portfolio = {
  cashBalance: { cashBalance: number };
  portfolioValue: number;
  stocks: PortfolioStock[];
};

export async function createPortfolio(userId: string) {
  try {
    const stocks = await db.stock.findMany({
      take: 5,
    });
    const portfolio = await db.portfolio.create({
      data: {
        userId: userId,
      },
    });
    const portfolioStocks = stocks.map((stock) => ({
      portfolioId: portfolio.id,
      stockId: stock.id,
      quantity: Math.floor(Math.random() * 100) + 1,
    }));

    await db.portfolioStock.createMany({
      data: portfolioStocks,
    });

    console.log(`Portfolio created for user ${userId}`);
  } catch (error) {
    console.error("Error creating portfolio:", error);
  } finally {
    await db.$disconnect();
  }
}

export async function serverGetUserPortfolio(userId: string) {
  const portfolio = await db.portfolio.findUnique({
    where: { userId },
    include: {
      stocks: {
        include: {
          stock: true,
        },
      },
    },
  });

  if (!portfolio) {
    return null;
  }

  const stocksToRemove = portfolio.stocks.filter(
    (portfolioStock) => portfolioStock.quantity <= 0
  );

  if (stocksToRemove.length > 0) {
    await db.portfolioStock.deleteMany({
      where: {
        id: {
          in: stocksToRemove.map((stock) => stock.id),
        },
      },
    });
  }

  const updatedPortfolio = await db.portfolio.findUnique({
    where: { userId },
    include: {
      stocks: {
        include: {
          stock: true,
        },
      },
    },
  });

  if (!updatedPortfolio) {
    throw new Error("Portfolio not found");
  }

  const cashBalance = await db.user.findUnique({
    where: { id: userId },
    select: { cashBalance: true },
  });

  if (!cashBalance) {
    throw new Error("Cash balance not found");
  }

  const portfolioValue = updatedPortfolio.stocks.reduce(
    (total, portfolioStock) =>
      total + portfolioStock.quantity * portfolioStock.stock.price,
    0
  );

  return {
    cashBalance,
    portfolioValue,
    stocks: updatedPortfolio.stocks,
  };
}
