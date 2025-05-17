import React from "react";

function AboutCard({ Icon, Title, Subtitle }) {
  return (
    <div className="border border-gray-300 rounded-lg px-6 py-4 max-w-sm">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <div className="bg-red-200 rounded-full p-4">
          <Icon size={32} />
        </div>
        <div>
          <h1 className="text-xl font-semibold">{Title}</h1>
          <p className="text-gray-600">{Subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
