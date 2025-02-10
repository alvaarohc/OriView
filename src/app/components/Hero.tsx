'use client';

import Stars from "./Stars";

export default function Hero() {
  return (
    <section className="overflow-hidden relative flex justify-center items-center h-[80vh] mb-20">
      <Stars />
      <h1 className="text-5xl lg:text-7xl w-[80%] text-center font-black z-10">
        What's happening in the universe?
      </h1>
    </section>
  );
}
