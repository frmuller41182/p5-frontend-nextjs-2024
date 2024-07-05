import { db } from "@/db/db";

export type Stock = {
  id?: string;
  name: string;
  symbol: string;
  industry: string;
  summary: string;
  website: string;
  logoUrl: string;
  price: number;
};

export const getStocks = async (): Promise<Stock[]> => {
  const stocks = await db.stock.findMany();
  return stocks;
};

export const serverSearchStocks = async (search: string) => {
  const results = await db.stock.findMany({
    where: {
      OR: [
        { name: { contains: search } },
        { symbol: { contains: search } },
        { industry: { contains: search } },
      ],
    },
  });
  const stocks = results.map((res: any) => ({
    ...res,
    release_date: new Date(res.release_date),
  }));
  return stocks as Stock[];
};

type TradeStockParams = {
  userId: string;
  stockSymbol: string;
  quantity: number;
};

export async function buyStock({
  userId,
  stockSymbol,
  quantity,
}: TradeStockParams) {
  try {
    const portfolio = await db.portfolio.findUnique({
      where: { userId },
      include: { stocks: true },
    });

    if (!portfolio) {
      throw new Error("Portfolio not found");
    }

    const stockIdObj = await db.stock.findFirst({
      where: { symbol: stockSymbol },
      select: { id: true },
    });

    const stockId = stockIdObj?.id;

    if (!stockId) {
      throw new Error("Stock not found");
    }

    const existingStock = portfolio.stocks.find(
      (stock) => stock.stockId === stockId
    );

    if (existingStock) {
      await db.portfolioStock.update({
        where: { id: existingStock.id },
        data: { quantity: { increment: quantity } },
      });
    } else {
      await db.portfolioStock.create({
        data: {
          portfolioId: portfolio.id,
          stockId,
          quantity,
        },
      });
    }
  } catch (error) {
    console.error("Error buying stock:", error);
  }
}

export async function sellStock({
  userId,
  stockSymbol,
  quantity,
}: TradeStockParams) {
  try {
    const portfolio = await db.portfolio.findUnique({
      where: { userId },
      include: { stocks: true },
    });

    if (!portfolio) {
      throw new Error("Portfolio not found");
    }
    const stockIdObj = await db.stock.findFirst({
      where: { symbol: stockSymbol },
      select: { id: true },
    });

    const stockId = stockIdObj?.id;

    if (!stockId) {
      throw new Error("Stock not found");
    }

    const existingStock = portfolio.stocks.find(
      (stock) => stock.stockId === stockId
    );

    if (existingStock) {
      await db.portfolioStock.update({
        where: { id: existingStock.id },
        data: { quantity: { decrement: quantity } },
      });
    } else {
      throw new Error("Stock not found in portfolio");
    }
  } catch (error) {
    console.error("Error selling stock:", error);
  }
}

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};
