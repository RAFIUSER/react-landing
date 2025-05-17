import React from "react";
import { BookOpenCheck, Code2Icon, LayoutTemplate, PanelsTopLeft, } from "lucide-react";

function MateriSection() {
  const dataMateri = [
    {
      ikon: PanelsTopLeft,
      judul: "Pengenalan Konsep Landing Page Yang Efektif",
      deskripsi: "Belajar Bagaimana Konsep Pembuatan Landing Page Yang Menarik",
    },
    {
      ikon: Code2Icon,
      judul: "Dasar-Dasar React: Komponen, Props, Dan State",
      deskripsi: "Memahami Fundamental React Dan Penerapannya.",
    },
    {
      ikon: LayoutTemplate,
      judul: "Styling Menggunakan Tailwind CSS",
      deskripsi: "Belajar Cara Penggunaan Tailwind Dalam Aplikasi React.",
    },
    {
      ikon: BookOpenCheck,
      judul: "Penerapan React Ke Dalam Kasus Nyata",
      deskripsi:
        "Memahami Penggunaan React Untuk Menyelesaikan Masalah Yang Ada.",
    },
  ];
  return (
    <section id="materi" className="py-12 lg:py-32">
      <div className="px-4 mx-auto max-w-5xl gap-4 flex items-center flex-col">
        <div className="text-center space-y-4">
          <h1 className="font-bold text-4xl md:text-6xl">
            Materi Yang Akan Dibahas
          </h1>
          <p className="text-gray-500 md:text-lg">
            Kurikulum SINTAK dirancang untuk membantu kamu memmahami dasar-dasar
            React dalam mengembangkan serta bagaimana penerapannya dalam dunia
            nyata.
          </p>
        </div>
        <div className="mx-auto items-center gap-6 grid grid-cols-1 md:grid-cols-2">
          {dataMateri.map((data) => (
            <div className="flex gap-2 items-center">
              <div className="bg-red-100 p-2 rounded-full">
                <data.ikon size={24} color="red" />
              </div>
              <div>
                <h1 className="font-semibold text-xl">{data.judul}</h1>
                <p className="text-sm text-gray-500">{data.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MateriSection;
