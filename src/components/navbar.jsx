import React from "react";
import { CodeXml, Rocket } from "lucide-react";

function NavBar() {
  return (
    <header className="sticky top-0 w-full bg-white/95 border border-gray-300 z-50">
      <div className="px-4 mx-auto h-16 flex items-center justify-between max-w-7xl">
        <div className="flex gap-2 items-center">
          <CodeXml size={24} />
          <h1 className="text-red-600 font-bold text-xl">SINTAK.</h1>
        </div>
        <nav className="hidden lg:flex">
          <ul className="flex gap-4">
            <li>
              <a href="#tentang" className="hover:text-red-500">
                Tentang
              </a>
            </li>
            <li>
              <a href="#materi" className="hover:text-red-500">
                Materi
              </a>
            </li>
            <li>
              <a href="#timeline" className="hover:text-red-500">
                Timeline
              </a>
            </li>
          </ul>
        </nav>

        <a
          href=""
          className="bg-red-500 text-white px-4 py-2 
            rounded-md flex items-center gap-2 hover:bg-red-400"
        >
          <Rocket size={18} />
          Daftar Sekarang!
        </a>
      </div>
    </header>
  );
}

export default NavBar;
