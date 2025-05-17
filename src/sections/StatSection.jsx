import React from "react";
import { Star } from "lucide-react";

function StatSection() {
  return (
    <section className="relative w-full py-12 lg:py-18 my-12 bg-[url(/BackgroundMI.png)] bg-fixed bg-center object-cover overflow-hidden">
      <div className="bg-black/60 w-full absolute inset-0"></div>
      <div className="mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 text-center">
          <div className="flex flex-col items-center text-white">
            <span className="font-bold text-6xl">90+</span>
            <span className="font-medium text-sm">Pendaftar</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="font-bold text-6xl">8+</span>
            <span className="font-medium text-sm">
              Mentor dan Asisten Mentor
            </span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="font-bold text-6xl flex items-center">
              5
              <Star size={32} />
            </span>
            <span className="font-medium text-sm">Review & Ulasan</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="font-bold text-6xl">100+</span>
            <span className=" text-sm">Lulusan</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatSection;
