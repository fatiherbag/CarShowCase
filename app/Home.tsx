"use client";

import { Hero, SearchBar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="dicover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Car Catalogue</h1>
          <p>Explore all cars.</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            {/* <CustomFilter title="fuel" />
            <CustomFilter title="year" /> */}
          </div>
        </div>
      </div>
    </main>
  );
}