"use server";

import { serverSearchStocks } from "@/lib/stock";

export async function actionSearchStocks(query: string) {
  const stocks = await serverSearchStocks(query);
  return stocks;
}
