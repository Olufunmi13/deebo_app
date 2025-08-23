"use client";

import { useState } from "react";
import Image from "next/image";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch?.(searchQuery);
  };

  return (
    <div className="relative max-w-2xl mx-auto flex gap-2 items-centerssss">
      <div className="relative flex items-center w-full">
        <div className="absolute left-4 pointer-events-none">
          <Image
            src="/icons/search.png"
            alt=""
            width={16}
            height={16}
            className="opacity-60"
          />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for polls, forms & conditions"
          className="w-full pl-12 pr-24 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleSearch}
        className=" bg-black text-white px-6 py-0.5 rounded-full hover:bg-gray-800 transition-colors"
      >
        Search
      </button>
    </div>
  );
}
