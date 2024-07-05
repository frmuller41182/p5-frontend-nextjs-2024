"use client";

import SearchBox from "@/components/SearchBox";
import StockSearch from "@/components/StockSearch";
import React, { useState } from "react";

export default function Page() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <SearchBox onChange={setSearch} />
      <StockSearch search={search} />
    </div>
  );
}
