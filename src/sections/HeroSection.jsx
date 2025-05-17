import { Calendar, Clock, MapPin } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <section className="w-full py-12">
      <div className="px-4 gap-4 mx-auto max-w-7xl grid lg:grid-cols-[1fr_500px] items-center">
        <div className="space-y-4 flex flex-col">
          <h1 className="text-4xl lg:text-6xl font-bold ">
            Kembangkan Skill Web Development-mu dengan Mengikuti Kelas Terbuka
            SINTAK.
          </h1>
          <p className="text-shadow-md lg:text-xl text-gray-500">
            Pelajari Materi Pengembangan Website Dengan React dan NextJS Bersama
            HMJ Manajemen Informtika dan Google Developer Group on Campus
            Polsri.
          </p>
          <div className="flex gap-2 flex-col text-center md:flex-row mt-2">
            <a href="" className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-400">Daftar Sekarang</a>
            <a href="" className="py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-300">Pelajari Selengkapnya</a>
          </div>
          <div className="mt-2 flex gap-2 justify-center md:justify-start items-center">
            <Calendar size={24} />
            <span>Senin, 19 Mei 2025</span>
            <Clock size={24} />
            <span>13.30 - 15.30</span>
            <MapPin />
            <span>Kampus Polsri</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="/profile.png" alt="profile" width={400} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
