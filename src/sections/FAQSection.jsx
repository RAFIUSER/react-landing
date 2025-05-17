import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    q: "Apakah kami perlu membawa laptop?",
    a: "Ya, para peserta diharapkan untuk membawa laptopnya masing-masing.",
  },
  {
    q: "Apa yang akan kami pelajari di SINTAK?",
    a: "Para peserta akan mempelajari cara membangun website dengan menggunakan React JS.",
  },
];

function FAQSection() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section className="py-12">
      <div className="max-w-5xl gap-4 mx-auto flex flex-col items-center">
        <h1 className="font-bold text-4xl">FAQ</h1>
        <div className="flex flex-col gap-2 w-full">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 rounded-md px-4 py-2"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left"
              >
                  <h3 className="font-semibold">{faq.q}</h3>
                  <ChevronDown className="" />
              </button>
                {openDropdown === index && (
                  <p className="text-gray-500">{faq.a}</p>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
