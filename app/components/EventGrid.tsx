"use client";

import { useState } from "react";
import EventCard from "./EventCard";
import { EventCard as EventCardType } from "@/app/types";

const ITEMS_PER_PAGE = 8;

interface EventGridProps {
  initialEvents?: EventCardType[];
}

const sampleEvents: EventCardType[] = [
  {
    id: '1',
    title: 'Laff Matters 10.0',
    price: 5000,
    description: 'Short description to be truncated after first line...',
    type: 'Event',
    image: '/image/cardImg-1.jpg'
  },
  {
    id: '2',
    title: 'Laff Matters 10.0',
    price: 5000,
    description: 'Short description to be truncated after first line...',
    type: 'Form',
    image: '/image/cardImg-2.jpg'
  },
  {
    id: '3',
    title: 'Laff Matters 10.0',
    price: 5000,
    description: 'Short description to be truncated after first line...',
    type: 'Contest',
    image: '/image/cardImg-3.jpg'
  },
  {
    id: '4',
    title: 'Laff Matters 10.0',
    price: 5000,
    description: 'Short description to be truncated after first line...',
    type: 'Event',
    image: '/image/cardImg-4.jpg'
  },
  {
    id: '5',
    title: 'Laff Matters 10.0',
    price: 5000,
    description: 'Short description to be truncated after first line...',
    type: 'Event',
    image: '/image/cardImg-5.jpg'
  },
  {
    id: '6',
    title: 'Laff Matters 10.0',
    price: 5000,
    description: 'Short description to be truncated after first line...',
    type: 'Event',
    image: '/image/cardImg-6.jpg'
  },
  {
    id: '7',
    title: 'Laff Matters 10.0',
    price: 5000,
    description: 'Short description to be truncated after first line...',
    type: 'Event',
    image: '/image/cardImg-7.jpg'
  },
  {
    id: '8',
    title: 'Laff Matters 10.0',
    price: 5000,
    description: 'Short description to be truncated after first line...',
    type: 'Event',
    image: '/image/cardImg-8.jpg'
  },
  {
    id: '9',
    title: 'Laff Matters 10.0',
    price: 5000,
    description: 'Short description to be truncated after first line...',
    type: 'Event',
    image: '/image/cardImg-8.jpg'
  },
];


export default function EventGrid({ initialEvents = sampleEvents }: EventGridProps) {
  const [visibleEvents, setVisibleEvents] = useState<EventCardType[]>(
    initialEvents.slice(0, ITEMS_PER_PAGE)
  );
  const [hasMore, setHasMore] = useState(initialEvents.length > ITEMS_PER_PAGE);

  const handleViewMore = () => {
    const currentLength = visibleEvents.length;
    const nextItems = initialEvents.slice(
      currentLength,
      currentLength + ITEMS_PER_PAGE
    );

    if(nextItems.length > 0 ){
      setVisibleEvents((prev) => [...prev, ...nextItems]);
      setHasMore(currentLength + ITEMS_PER_PAGE < initialEvents.length);
    }
    else // No more items to load
    setVisibleEvents(initialEvents.slice(0, ITEMS_PER_PAGE));
      setHasMore(true);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleViewMore}
            className="px-6 py-2.5 text-sm font-medium border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}
