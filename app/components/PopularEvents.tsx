"use client";

import Image from "next/image";
import { useState } from "react";

interface PopularEvent {
  id: string;
  title: string;
  image: string;
  stats: string;
  type: "sold" | "votes";
  category: "Event" | "Contest" | "Form";
}

const popularEvents: PopularEvent[] = [
  {
    id: "1",
    title: "Ilorin Singles Party",
    image: "/image/Event2.png",
    stats: "1.5k",
    type: "sold",
    category: "Event",
  },
  {
    id: "2",
    title: "Miss Campus OAU",
    image: "/image/Event3.png",
    stats: "59.8k",
    type: "sold",
    category: "Contest",
  },
  {
    id: "3",
    title: "Valentine Social",
    image: "/image/Events4.png",
    stats: "39k",
    type: "votes",
    category: "Form",
  },
  {
    id: "4",
    title: "Freak Fest",
    image: "/image/Events5.png",
    stats: "1.9k",
    type: "sold",
    category: "Event",
  },
];


export default function PopularEvents() {
  const [isFavorited, setIsFavorited] = useState<Record<string, boolean>>({});

  const toggleFavorite = (eventId: string) => {
    setIsFavorited(prev => ({...prev, [eventId]: !prev[eventId]}));

  };
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Most Popular</h2>
        <p className="text-gray-600 max-w-2xl text-center mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularEvents.map((event) => (
          <div key={event.id} className="relative group rounded-2xl shadow-lg pb-3.5">
            <div className="relative aspect-[4/5]  overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Category Tag */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                {event.category === "Event" && (
                  <div className="flex items-center gap-1.5">
                    <Image
                      src="/icons/eventIcon.png"
                      alt=""
                      width={14}
                      height={14}
                    />
                    <span>Event</span>
                  </div>
                )}
                {event.category === "Contest" && (
                  <div className="flex items-center gap-1.5">
                    <Image
                      src="/icons/contestIcon.png"
                      alt=""
                      width={14}
                      height={14}
                    />
                    <span>Contest</span>
                  </div>
                )}
                {event.category === "Form" && (
                  <div className="flex items-center gap-1.5">
                    <Image
                      src="/icons/formIcon.png"
                      alt=""
                      width={14}
                      height={14}
                    />
                    <span>Form</span>
                  </div>
                )}
              </div>
              <button
                onClick={() => toggleFavorite(event.id)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 p-1.5 sm:p-2 bg-white rounded-full hover:bg-gray-50 transition-all duration-200 shadow-sm active:scale-95"
                aria-label={isFavorited[event.id] ? "Unlike event" : "Like event"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-200 ${
                    isFavorited[event.id]
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
            <div className="mt-4 flex justify-between items-center p-3">
              <h3 className="font-semibold text-lg">{event.title}</h3>
              <p className="text-blue-600">
                {event.stats} {event.type}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-2xl px-8 flex flex-col md:flex-row items-center justify-center mx-auto">
        <div className="max-w-md mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Gift a ticket to a Friend</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Send a Free Ticket
          </button>
        </div>
        <div className="relative w-60 h-60 md:w-96 md:h-96">
          <Image
            src="/image/Event1.png"
            alt="Gift illustration"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
