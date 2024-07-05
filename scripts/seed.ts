import { db } from "@/db/db";
import { createPortfolio } from "@/lib/portfolio";
import { Stock } from "@/lib/stock";
import { readFile } from "fs/promises";

const fileContent = await readFile("stocks.json", "utf-8");
const stocks: Array<Stock> = JSON.parse(fileContent);

for (const stockunit of stocks) {
  await db.stock.create({
    data: stockunit,
  });
  console.log(
    `Succesfully added ${stockunit.name} as a new Stock entry into the DB.`
  );
}

const newUser = async () => {
  const user = await db.user.create({
    data: {
      name: "Marco Aurleio",
      cashBalance: 300000,
      email: "marcusaurelius@gmail.com",
    },
    select: {
      id: true,
    },
  });
  return user.id;
};

const userId = await newUser();

await createPortfolio(userId);
