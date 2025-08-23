'use client';

import { useState } from 'react';

interface LocationSelectorProps {
  defaultLocation?: string;
  onLocationChange?: (location: string) => void;
}

export default function LocationSelector({ 
  defaultLocation = 'IBADAN',
  onLocationChange 
}: LocationSelectorProps) {
  const [location, setLocation] = useState(defaultLocation);

  const handleLocationChange = (newLocation: string) => {
    setLocation(newLocation);
    onLocationChange?.(newLocation);
  };

  return (
    <div className="inline-flex items-center gap-2 bg-[#E3DDF2] px-4 py-2 rounded-full">
      <span className="text-red-500">📍</span>
      <select 
        value={location}
        onChange={(e) => handleLocationChange(e.target.value)}
        className="text-[#0479B7] bg-transparent border-none outline-none font-semibold"
      >
        <option value="IBADAN">IBADAN</option>
        <option value="LAGOS">LAGOS</option>
        <option value="ABUJA">ABUJA</option>
      </select>
    </div>
  );
}