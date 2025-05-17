import React from "react";
import AboutCard from "../components/about-card";
import { Rocket } from "lucide-react";

function AboutSection() {
  const dataAbout = [
    {
      id: 1,
      icon: Rocket,
      title: "Pembelajaran Praktis",
      desc: "Dapatkan pengalaman hands-on membangun landing page dengan teknologi modern React dan Next.js",
    },
    {
      id: 2,
      icon: Rocket,
      title: "Network",
      desc: "Perluas` jaringan dengan sesama mahasiswa dan komunitas developer di POLSRI.",
    },
    {
      id: 3,
      icon: Rocket,
      title: "Pembelajaran Praktis",
      desc: "Dapatkan pengalaman hands-on membangun landing page dengan teknologi modern React dan Next.js.",
    },
  ];

  return (
    <section id="tentang" className="w-full py-12 lg:py-32">
      <div className="flex flex-col mx-auto max-w-5xl gap-4 px-6">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Mengenal Lebih Dekat SINTAK
          </h1>
          <p className="text-gray-500 text-sm md:text-lg">
            SINTAK adalah kelas terbuka yang diselenggarakan oleh HMJ Manajemen
            Informatika dan Google Developer Groups on Campus POLSRI untuk
            memperkenalkan mahasiswa pada pengembangan web modern menggunakan
            React dan Next.js dengan bantuan AI.
          </p>
        </div>
        <div className="mx-auto flex flex-col md:flex-row gap-4">
          {dataAbout.map(data => (
            <AboutCard
              key={data.id}
              Icon={data.icon}
              Title={data.title}
              Subtitle={data.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
