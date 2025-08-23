"use client";

import Image from "next/image";
import { useState } from "react";
import { locationsByTab, tabs, type Location } from "@/app/data/location";

// Helper function to chunk array into columns
const chunkArray = (array: Location[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

export default function InspirationSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Create vertical columns of 3 locations each
  const locationColumns = chunkArray(locationsByTab[activeTab], 3);

  return (
    <section className="bg-white py-10 px-4 sm:px-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        Inspiration for future Adventures
      </h2>

      {/* Tabs */}
      <div className="flex space-x-8 border-b border-gray-200 overflow-x-auto mb-6 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm whitespace-nowrap font-medium transition-colors ${
              tab === activeTab
                ? "border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Locations Grid - Vertical Columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4">
        {locationColumns.map((column, colIndex) => (
          <div
            key={colIndex}
            className="border-r border-gray-200 last:border-r-0"
          >
            {column.map((location, rowIndex) => (
              <div
                key={location.name}
                className={`
                  py-4
                  ${
                    rowIndex !== column.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }
                `}
              >
                <div className="flex items-center justify-between px-2">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{location.name}</span>
                    <span className="text-xs text-blue-600">
                      {location.results} Results
                    </span>
                  </div>
                  <Image
                    src="/icons/gpsIcon.png"
                    alt=""
                    width={16}
                    height={16}
                    className="opacity-60"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
