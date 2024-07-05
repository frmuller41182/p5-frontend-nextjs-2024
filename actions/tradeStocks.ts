"use server";

import { buyStock, sellStock } from "@/lib/stock";

export async function actionBuyStock(
  userId: string,
  stockSymbol: string,
  quantity: number
) {
  const result = await buyStock({
    userId,
    stockSymbol,
    quantity,
  });
  return result;
}

export async function actionSellStock(
  userId: string,
  stockSymbol: string,
  quantity: number
) {
  const result = await sellStock({
    userId,
    stockSymbol,
    quantity,
  });
  return result;
}
