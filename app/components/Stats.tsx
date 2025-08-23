"use client";

const StarIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 2l6.57 13.77L45 17.58l-10.5 10.23L37.14 42 24 35.77 10.86 42l2.64-14.19L3 17.58l14.43-1.81L24 2z"
      fill="#FFD700"
    />
  </svg>
);

const VoteIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="24" fill="#E3F2FD" />
    <path
      d="M20 28l6 6L38 18"
      stroke="#2196F3"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TicketIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 16v-4H8v4c2.21 0 4 1.79 4 4s-1.79 4-4 4v4h32v-4c-2.21 0-4-1.79-4-4s1.79-4 4-4z"
      fill="#FFA726"
    />
  </svg>
);

const stats = [
  {
    value: "4.5",
    label: "Stars",
    type: "rating",
    icon: StarIcon,
  },
  {
    value: "800M",
    label: "Votes",
    type: "votes",
    icon: VoteIcon,
  },
  {
    value: "700k",
    label: "Tickets",
    type: "sold",
    icon: TicketIcon,
  },
];

const categories = [
  { name: "Music Concerts", icon: "🎵" },
  { name: "Sports Events", icon: "⚽" },
  { name: "Theater & Performing Arts", icon: "🎭" },
  { name: "Comedy Shows", icon: "😄" },
  { name: "Workshops & Seminars", icon: "📚" },
  { name: "Conferences & Expos", icon: "🎪" },
  { name: "Food & Drink Festivals", icon: "🍽" },
  { name: "Fashion Shows", icon: "👗" },
];

export default function Stats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl sm:text-4xl font-semibold max-w-3xl mx-auto mb-12">
        Join Millions Getting Socially Active with Deebo!
      </h1>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-2">
              <stat.icon />
            </div>
            <div className="text-xl font-bold">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-8">Event Categories</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-600 bg-blue-100 text-blue-600 hover:bg-blue-100 transition-colors"
            >
              <span>{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* See More Button */}
      <button className="mt-6 px-6 py-2 text-sm font-medium bg-black rounded-full text-white hover:text-black hover:bg-white transition-colors">
        See More
      </button>
    </section>
  );
}
