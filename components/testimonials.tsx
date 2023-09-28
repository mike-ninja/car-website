import React from "react";

import Image from "next/image";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="h-[60rem] relative">
      <div className="z-10 relative overflow-hidden -mt-10 h-[30rem]">
        <div className="px-4 pt-32 bg-gradient-to-b from-slate-700 to-slate-900 relative z-20">
          <div className="container text-center text-white">
            <h4 className="font-semibold text-3xl">
              {testimonials[0].testimonal}
            </h4>
            <small className="text-2xl">- {testimonials[0].writer}</small>
          </div>
        </div>

        <div className="absolute top-0 right-0 bottom-0 transform -skew-y-6 bg-slate-900 w-1/2 z-0">
        </div>

        <div className="absolute top-0 left-0 bottom-0 transform skew-y-6 bg-slate-900 w-1/2 z-0">
        </div>
      </div>
      <Image
        src="/images/testimonials.jpg"
        alt="Car Sale Website"
        fill
        className="object-cover z-0 object-top"
      />
      <div>testimonials</div>
    </section>
  );
}
