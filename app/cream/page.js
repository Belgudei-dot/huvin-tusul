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
      title: "Average Tomato",
      price: 6,
      image: "/roma.webp",
      temperature: "Should kept in 5℃",
    },
    {
      id: 2,
      title: "Cherry Tomato",
      price: 6,
      image: "/cherry tomato.jpg",
      temperature: "Should kept in 5℃",
    },
  ];

  return (
    <div className="size-full flex-1 flex flex-col justify-center items-center">
      <h1 className="font-bold pt-[30px] pl-[30px] text-[50px] w-full text-left">
        Tomatoes in stock
      </h1>

      <div className="flex h-full w-full items-center pl-20 flex-1 gap-80">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative flex items-center justify-center"
          >
            {/* PRODUCT BOX — CLICK TO SLIDE */}
            <div
              onClick={() => toggle(item.id)}
              className="
                border border-black rounded-[30px] bg-white
                flex flex-col items-center justify-center
                w-[350px] h-[350px] p-10 cursor-pointer
                relative z-10
              "
            >
              <Image
                src={item.image}
                width={350}
                height={200}
                alt={item.title}
                className="w-[250px]"
              />
              <h2 className="font-bold mt-3">{item.title}</h2>
              <p className="text-gray-600">${item.price}</p>
              <p>{item.temperature}</p>
            </div>

            {/* GREEN PANEL — CONNECTED + SLIDING */}
            <div
              className={`
                absolute left-[350px] top-0 mt-[20px]
                w-[220px] h-[300px] bg-lime-600
                rounded-r-[30px] flex justify-center items-center text-white
                transition-all duration-500 ease-out
                ${
                  open[item.id]
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[-220px] opacity-0"
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
