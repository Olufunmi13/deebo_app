"use client";

import Image from "next/image";
import { useState } from "react";
import { EventCard as EventCardType } from "@/app/types";

interface EventCardProps {
  event: EventCardType;
}

const getEventTypeIcon = (type: 'Event' | 'Contest' | 'Form') => {
  switch (type) {
    case 'Event':
      return '/icons/eventIcon.png';
    case 'Contest':
      return '/icons/contestIcon.png';
    case 'Form':
      return '/icons/formIcon.png';
    default:
      return '/icons/eventIcon.png';
  }
};


export default function EventCard({ event }: EventCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40 sm:h-48 md:h-52 lg:h-48">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <Image
            src={getEventTypeIcon(event.type)}
            alt=""
            width={14}
            height={14}
            className="opacity-75"
          />
          <span className="text-sm font-medium">{event.type}</span>
        </div>
        <button
          onClick={toggleFavorite}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 p-1.5 sm:p-2 bg-white rounded-full hover:bg-gray-50 transition-all duration-200 shadow-sm active:scale-95"
          aria-label={isFavorited ? "Unlike event" : "Like event"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-200 ${
              isFavorited
                ? "fill-red-500 stroke-red-500"
                : "fill-none stroke-current"
            }`}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 line-clamp-1">
          {event.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">
          {event.description}
        </p>
        <div className="flex justify-between items-center">
          <button className=" text-black border px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-gray-800 transition-colors">
            {event.type === "Event"
              ? "Get Ticket"
              : event.type === "Contest"
              ? "Vote Now"
              : "View Details"}
          </button>
          <span className="font-bold text-sm sm:text-base">
            ₦ {event.price.toLocaleString()}
          </span>
        </div>
      </div>
      
    </div>
  );
}
