export interface Location {
  name: string;
  results: number;
}

export interface LocationGroup {
  [key: string]: Location[];
}

export const locationsByTab: LocationGroup = {
  "Popular": [
    { name: "Lagos", results: 300 },
    { name: "Ogun", results: 250 },
    { name: "Zamfara", results: 180 },
    { name: "Warri", results: 220 },
    { name: "Delta", results: 190 },
    { name: "Abeokuta", results: 280 },
    { name: "Abuja", results: 150 },
    { name: "Osun", results: 120 },
    { name: "Oyo", results: 200 },
    { name: "Jos", results: 90 },
    { name: "Kaduna", results: 110 },
    { name: "Kano", results: 170 },
    { name: "Calabar", results: 80 },
    { name: "Uyo", results: 60 },
    { name: "Benin", results: 150 },
    { name: "Asaba", results: 90 },
    { name: "Ondo", results: 120 },
    { name: "Akure", results: 200 },
    { name: "Imo", results: 400 },
    { name: "Ibadan", results: 180 },
    { name: "Port Harcourt", results: 220 },
    { name: "Aba", results: 300 },
    { name: "Abia", results: 150 },
    { name: "Owerri", results: 100 },
  ],
  "Arts & Culture": [
    { name: "Abuja", results: 150 },
    { name: "Osun", results: 120 },
    { name: "Oyo", results: 200 },
    { name: "Jos", results: 90 },
    { name: "Kaduna", results: 110 },
    { name: "Kano", results: 170 },
  ],
  "Outdoors": [
    { name: "Calabar", results: 80 },
    { name: "Uyo", results: 60 },
    { name: "Benin", results: 150 },
    { name: "Asaba", results: 90 },
    { name: "Warri", results: 120 },
    { name: "Port Harcourt", results: 200 },
  ],
  "Music & Festivals": [
    { name: "Lagos", results: 400 },
    { name: "Ibadan", results: 180 },
    { name: "Port Harcourt", results: 220 },
    { name: "Abuja", results: 300 },
    { name: "Benin", results: 150 },
    { name: "Owerri", results: 100 },
  ],
  "House Parties": [
    { name: "Lagos", results: 400 },
    { name: "Ibadan", results: 180 },
    { name: "Port Harcourt", results: 220 },
    { name: "Abuja", results: 300 },
    { name: "Benin", results: 150 },
    { name: "Owerri", results: 100 },
  ],
  "Beach": [
    { name: "Lagos", results: 400 },
    { name: "Ibadan", results: 180 },
    { name: "Port Harcourt", results: 220 },
    { name: "Abuja", results: 300 },
    { name: "Benin", results: 150 },
    { name: "Owerri", results: 100 },
  ],
  "Technology": [
    { name: "Lagos", results: 400 },
    { name: "Ibadan", results: 180 },
    { name: "Port Harcourt", results: 220 },
    { name: "Abuja", results: 300 },
    { name: "Benin", results: 150 },
    { name: "Owerri", results: 100 },
  ],
  "Conferences": [
    { name: "Lagos", results: 400 },
    { name: "Ibadan", results: 180 },
    { name: "Port Harcourt", results: 220 },
    { name: "Abuja", results: 300 },
    { name: "Benin", results: 150 },
    { name: "Owerri", results: 100 },
  ],
};

export const tabs = Object.keys(locationsByTab);