"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { colorsGraph } from "@/lib/graph";
import { getRandomColor } from "@/lib/graph";

type PortfolioStockGraph = {
  id: string;
  quantity: number;
  stock: {
    name: string;
    symbol: string;
    price: number;
  };
};

type PortfolioGraphProps = {
  stocks: PortfolioStockGraph[];
};

export default function PortfolioGraph({ stocks }: PortfolioGraphProps) {
  const data = stocks.map((portfolioStock) => ({
    name: portfolioStock.stock.name,
    value: portfolioStock.quantity * portfolioStock.stock.price,
    color: getRandomColor(),
  }));

  return (
    <div className="w-full flex justify-center">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="40%"
            cy="50%"
            labelLine={false}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  colorsGraph[index % colorsGraph.length] || getRandomColor()
                }
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" verticalAlign="middle" align="right" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
