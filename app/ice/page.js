"use client";
import { useState } from "react";
import Image from "next/image";

export default function Cream() {
  const [open, setOpen] = useState({});

  const toggle = (id) => {
    setOpen((p) => ({ ...p, [id]: !p[id] }));
  };

  const products = [
    {
      id: 1,
      title: "cucumber",
      price: 6,
      image: "/cucumber.webp",
      temperature: "Should kept in 10℃",
    },
    {
      id: 2,
      title: "Prickly cucumber",
      price: 6,
      image: "/PC.jpg",
      temperature: "Should kept in 10℃",
    },
  ];

  return (
    <div className="size-full flex-1 flex flex-col">
      <h1 className="font-bold pt-[30px] pl-[30px] text-[50px] w-full">
        Cucumber in stock
      </h1>

      {/* AUTO GRID — NO ERROR */}
      <div className="grid grid-cols-2 gap-20 mt-10 ml-10">
        {products.map((item) => (
          <div key={item.id} className="relative flex">
            {/* PRODUCT CARD */}
            <div
              onClick={() => toggle(item.id)}
              className="border border-black rounded-l-[30px] bg-white
                        w-[350px] h-[450px] p-5 cursor-pointer z-10"
            >
              <Image
                src={item.image}
                width={300}
                height={300}
                alt={item.title}
                className="w-[300px]"
              />
              <h2 className="font-bold mt-3">{item.title}</h2>
              <p className="text-gray-600">${item.price}</p>
              <p>{item.temperature}</p>
            </div>

            {/* GREEN SLIDER */}
            <div
              className={`
                absolute left-[350px] top-0
                w-[250px] h-[450px] bg-lime-600 rounded-r-[30px]
                flex justify-center items-center text-white
                transition-all duration-500
                ${
                  open[item.id]
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[-250px] opacity-0"
                }
              `}
            >
              grown freshly on Mongolian soil
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
