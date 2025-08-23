import Image from "next/image";
import SearchBar from "./components/SearchBar";
import EventGrid from "./components/EventGrid";
import LocationSelector from "./components/LocationSelector";
import PartnerSection from "./components/partners";
import PopularEvents from "./components/PopularEvents";
import Navbar from "./navbar";
import Footer from "./footer";
import Stats from "./components/Stats";
export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Bar */}
        <Navbar />

        {/* Search Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-6 text-black">Find Events In</h1>
          <LocationSelector defaultLocation="IBADAN" />

          {/* Filter Tabs */}
          <div className="flex flex-row justify-center items-center gap-4 my-6">
            <button className="tab-button active flex items-center gap-2">
              <Image
                src="/icons/searchallicon.png"
                alt="Search All Icon"
                width={16}
                height={16}
                className="inline-block"
              />{" "}
              Search All
            </button>
            <button className="tab-button flex items-center gap-2">
              <Image
                src="/icons/eventicon.png"
                alt="Events Icon"
                width={16}
                height={16}
                className="inline-block"
              />
              Events
            </button>
            <button className="tab-button flex items-center gap-2">
              <Image
                src="/icons/contesticon.png"
                alt="Contest Icon"
                width={16}
                height={16}
                className="inline-block"
              />
              Contests
            </button>
            <button className="tab-button flex items-center gap-2">
              <Image
                src="/icons/formicon.png"
                alt="Form Icon"
                width={16}
                height={16}
                className="inline-block"
              />
              Forms
            </button>
          </div>

          <SearchBar />
        </section>

        {/* Event Listings */}
        <EventGrid />
        {/* Popular Events Section */}
        <PopularEvents />
        {/* Stats Section */}
        <Stats />
        {/* Partners Section */}
        <PartnerSection />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
