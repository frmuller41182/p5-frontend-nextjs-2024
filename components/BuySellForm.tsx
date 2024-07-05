"use client";

import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { actionBuyStock, actionSellStock } from "@/actions/tradeStocks";

type BuySellFormProps = {
  userId: string;
  fetchPortfolio: () => void;
};

export default function BuySellForm({
  userId,
  fetchPortfolio,
}: BuySellFormProps) {
  const stockSymbolRef = useRef<HTMLInputElement | null>(null);
  const quantityRef = useRef<HTMLInputElement | null>(null);
  const [operationType, setOperationType] = useState<string>("buy");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const stockSymbol = stockSymbolRef.current?.value;
    const quantity = quantityRef.current?.value;

    if (!stockSymbol || !quantity) return;

    if (operationType === "buy") {
      await actionBuyStock(userId, stockSymbol, parseInt(quantity));
    } else {
      await actionSellStock(userId, stockSymbol, parseInt(quantity));
    }
    fetchPortfolio();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto space-y-4"
    >
      <h2 className="text-xl font-bold mb-4">Buy/Sell Form</h2>
      <div>
        <label
          htmlFor="stockSymbol"
          className="block text-sm font-medium text-gray-700"
        >
          Stock
        </label>
        <Input
          type="text"
          id="stockSymbol"
          ref={stockSymbolRef}
          placeholder="Enter stock symbol"
          required
        />
      </div>
      <div>
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-gray-700"
        >
          Quantity
        </label>
        <Input
          type="number"
          id="quantity"
          ref={quantityRef}
          placeholder="Enter quantity"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Operation Type
        </label>
        <div className="flex space-x-4">
          <Button
            type="button"
            onClick={() => setOperationType("buy")}
            className={`px-4 py-2 rounded-md ${
              operationType === "buy"
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border-blue-500"
            }`}
          >
            Buy
          </Button>
          <Button
            type="button"
            onClick={() => setOperationType("sell")}
            className={`px-4 py-2 rounded-md ${
              operationType === "sell"
                ? "bg-red-500 text-white"
                : "bg-white text-red-500 border-red-500"
            }`}
          >
            Sell
          </Button>
        </div>
      </div>
      <Button type="submit" className="w-full">
        Submit Order
      </Button>
    </form>
  );
}
