import { ExternalLink, Instagram, User } from "lucide-react";
import React from "react";

function RegisterSection() {
  return (
    <section className="w-full py-16">
      <div className="px-4 max-w-7xl mx-auto">
        <div className="w-full grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-6 space-x-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Jangan Sampai Ketinggalan!</h1>
              <p className="text-gray-500 ">
                Segera daftarkan dirimu untuk menjadi bagian dari SINTAK yang
                pastinya akan membuat skill web development-mu menjadi
                berkembang.
              </p>
            </div>
            <a
              href="#"
              className="bg-red-500 text-white px-4
                    py-2 rounded-md"
            >
              Daftar Sekarang
            </a>
            <a
              href="#"
              className="border-gray-300 border px-4
                    py-2 rounded-md"
            >
              Pelajari Selengkapnya
            </a>
          </div>
          <div className="bg-gray-50 space-y-4 border border-gray-200 px-4 py-2 rounded-xl">
            <h1 className="font-semibold text-xl">Informasi Kontak</h1>
            <div className="space-y-2">
              <a href="" className="flex items-center gap-2">
                <User size={24} color="red" />
                +62 858 9690 4814
              </a>
              <a href="" className="flex items-center gap-2">
                <Instagram size={24} color="red" />
                @hmjmi_poslri
              </a>
              <a href="" className="flex items-center gap-2">
                <Instagram size={24} color="red" />
                @gdg_polsri
              </a>
              <a href="" className="flex items-center gap-2">
                <ExternalLink size={24} color="red" />
                Website HMJ MI Polsri
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;
