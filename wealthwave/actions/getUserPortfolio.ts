"use server";

import { serverGetUserPortfolio } from "@/lib/portfolio";

export async function actionGetPortfolioInsights(userId: string) {
  const portfolioInsights = await serverGetUserPortfolio(userId);
  return portfolioInsights;
}
