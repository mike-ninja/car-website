import React from "react";

export default function Contact() {
  return (
    <section className="text-gray-600 relative pb-10">
      <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13084.145129330984!2d33.6250901!3d34.930627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de280445aa00c9%3A0x6b878db4fdc0d756!2sJIMMYS%20CARS!5e0!3m2!1sen!2sfi!4v1695907560501!5m2!1sen!2sfi"
            style={{ filter: "grayscale(0.5) contrast(1.2) opacity(0.4)" }}
          >
          </iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Agion Anargiron, Larnaca 6053, Cyprus
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-red-500 leading-relaxed">example@email.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-slate-300 px-4 rounded-xl flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Contact us by email or use the contact form below.
          </p>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-slate-100 rounded border border-slate-400 focus:border-slate-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-slate-100 rounded border border-slate-400 focus:border-slate-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-slate-100 rounded border border-slate-400 focus:border-slate-600 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            >
            </textarea>
          </div>

          <button className="relative mt-10">
            <span className="absolute top-0 left-0 h-full w-full rounded bg-gray-700">
            </span>
            <span className="mt-1 ml-1 fold-bold relative inline-block h-full w-full rounded border-2 border-gray-950 bg-gray-950 px-3 py-1 text-xl font-bold text-white transition duration-100 hover:-translate-x-1 hover:-translate-y-1 focus:-translate-x-1 focus:-translate-y-1 active:scale-95">
             Send 
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
