import { packages } from "@/lib/data";
import Image from "next/image";
import React from "react";

export default function Packages() {
  return (
    <section>
      <div className="container">
        <h2 className="text-4xl font-bold mb-7 text-white/90">Core Packages</h2>
        <div className="flex gap-3">
          {packages.map((item, index) => (
            <div
              key={index}
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
              className="relative flex-grow h-[30rem] rounded-xl"
            >
              <Image
                src={item.image}
                fill
                alt="packages for customer"
                className="cover rounded-xl z-0"
              />
              <div className="h-1/3 absolute bottom-0 bg-black/70 z-10 text-white p-5 rounded-b-xl">
                <h3 className="text-2xl font-bold">{item.package}</h3>
                <small className="text-base">{item.description}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
