import React from "react";
import { CodeXml, GithubIcon, LinkedinIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full border border-gray-200">
      <div className="mx-auto p-4 max-w-7xl flex flex-col md:flex-row gap-4 text-center items-center justify-between">
        <div>
          <div className="flex gap-2 items-center">
            <CodeXml size={24} />
            <h1 className="text-red-600 font-bold text-xl">SINTAK.</h1>
          </div>
        </div>
        <span className="text-gray-500">
          Copyright &copy; 2025 Kgs. M. Rafiussyakban. All Rights Reserved.{" "}
        </span>
        <div className="flex gap-2 text-gray-500">
          <a href="https://github.com" target="blank">
            <GithubIcon size={24} />
          </a>
          <a href="htttp://instagram.com">
            <LinkedinIcon size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
