"use client";
import { useState } from "react";
import Image from "next/image";

export default function Cream() {
  const [open, setOpen] = useState({});

  const toggle = (id) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const products = [
    {
      id: 1,
      title: "Potato",
      price: 4,
      image: "/potato.jpg",
      temperature: "Should kept in 7-13℃",
    },
    {
      id: 2,
      title: "Sweet Potato",
      price: 4,
      image: "/sp.jpeg",
      temperature: "Should kept in 7-13℃",
    },
  ];

  return (
    <div className="size-full flex-1 flex flex-col items-center">
      <h1 className="font-bold pt-[30px] pl-[30px] text-[50px] w-full text-left">
        Potatoes in stock
      </h1>

      <div className="grid grid-cols-2 pr-80 gap-x-75 gap-y-8 mt-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative flex items-center justify-center"
          >
            {/* PRODUCT */}
            <div
              onClick={() => toggle(item.id)}
              className="border border-black rounded-[30px] bg-white
                         w-[350px] h-[450px] p-5 cursor-pointer z-10"
            >
              <Image
                src={item.image}
                width={300}
                height={300}
                alt={item.title}
                className="w-[400px]"
              />
              <h2 className="font-bold mt-3">{item.title}</h2>
              <p className="text-gray-600">${item.price}</p>
              <p>{item.temperature}</p>
            </div>

            {/* GREEN SLIDING PANEL */}
            <div
              className={`
                absolute left-[350px]
                w-[250px] h-[400px] bg-lime-600 rounded-r-[30px]
                flex justify-center items-center text-white
                transition-all duration-500 ease-out
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
