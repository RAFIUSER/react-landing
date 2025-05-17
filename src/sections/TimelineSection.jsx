import React from "react";

const dataTimeline = [
  {
    judul: "Pengenalan React",
    deskripsi: "Instalasi dan pengenalan konsep dasar React",
    jadwal: "Senin, 19 Mei 2025",
  },
  {
    judul: "Projek React Pertama: Name Card",
    deskripsi: "Membuat projek sederhana kartu nama menggunakan React",
    jadwal: "Selasa, 20 Mei 2025",
  },
  {
    judul: "Studi Kasus 1: Landing Page SINTAK",
    deskripsi: "Membangun Landing Page SINTAK 1 halaman dengan React",
    jadwal: "Rabu, 21 Mei 2025",
  },
  {
    judul: "Studi Kasus 2: Website Coffe Shop",
    deskripsi: "Membangun website 3 halaman dengan tema Coffe Shop",
    jadwal: "Kamis & Jumat, 20-21 Mei 2025",
  },
  {
    judul: "Persiapan Project Akhir",
    deskripsi: "Membuat projek sederhana kartu nama menggunakan React",
    jadwal: "Selasa, 20 Mei 2025",
  },
];

function TimelineSection() {
  return (
    <section id="timeline" className="w-full py-12 md:py-32">
      <div className="mx-auto max-w-5xl px-4 space-y-4">
        <div className="text-center space-y-4">
          <h1 className="font-bold text-4xl md:text-6xl">
            Timeline Pembelajaran
          </h1>
          <p className="text-gray-500 md:text-lg">
            Alur Pembelajaran Di SINTAK Yang Berlangsung Selama 2 Pekan.
          </p>
        </div>
        <div className="space-y-4">
          {dataTimeline.map((data) => (
            <div className="flex justify-between border 
            border-gray-200 rounded-md px-6 gap-2 py-4 items-center">
              <div>
                <h3 className="font-semibold">{data.judul}</h3>
                <p className="text-sm text-gray-500">{data.deskripsi}</p>
              </div>
              <span>{data.jadwal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
