import React from "react";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[40rem] relative">
      <Image
        src="/images/car-header.jpg"
        alt="Car Sale Website"
        fill
        className="object-cover"
      />
      <div className="container flex flex-col justify-center items-center text-white !z-[99] h-full -translate-y-10">
        <h1 className="capitalize z-[99] text-6xl font-bold">
          Discover Your Dream Car
        </h1>
        <small className="capitalize text-2xl font-semibold z-[99]">
          Browse our wide selection of high-quality vehicles and find the
          perfect one for you.
        </small>
        <Link href="#" className="relative mt-12">
          <span className="absolute top-0 left-0 h-full w-full rounded bg-gray-700">
          </span>
          <span className="mt-1 ml-1 fold-bold relative inline-block h-full w-full rounded border-2 border-gray-950 bg-gray-950 px-3 py-1 text-xl font-bold text-white transition duration-100 hover:-translate-x-1 hover:-translate-y-1 focus:-translate-x-1 focus:-translate-y-1 active:scale-95">
            Explore Now
          </span>
        </Link>
      </div>
    </header>
  );
}
