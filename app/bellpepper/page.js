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
      title: "Bell Pepper (Red)",
      price: 4,
      image: "/Gpepper.jpg",
      temperature: "Should kept in 7-13℃",
    },
    {
      id: 2,
      title: "Bell Pepper (Yellow)",
      price: 4,
      image: "/Ypepper.png",
      temperature: "Should kept in 7-13℃",
    },
    {
      id: 3,
      title: "Bell Pepper (Green)",
      price: 4,
      image: "/bellPepper.jpg",
      temperature: "Should kept in 7-13℃",
    },
  ];

  return (
    <div className="size-full flex-1 flex flex-col items-center">
      <h1 className="font-bold pt-[30px] pl-[30px] text-[50px] w-full text-left">
        Bell Peppers in stock
      </h1>

      {/* GRID: 2 on top, 1 centered below */}
      <div className="grid grid-cols-2 pr-80 gap-x-75 gap-y-8 mt-10">
        {/* Top row — two peppers */}
        {products.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="relative flex items-center justify-center"
          >
            {/* PRODUCT BOX */}
            <div
              onClick={() => toggle(item.id)}
              className="border border-black rounded-l-[30px] bg-white
                         w-[350px] h-[450px] p-5
                         flex flex-col items-center justify-center
                         cursor-pointer relative z-10"
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

            {/* GREEN SLIDING PANEL */}
            <div
              className={`
                absolute left-[350px] top-0
                w-[250px] h-[450px] bg-lime-600 rounded-r-[30px]
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

        {/* Bottom row — centered box */}
        <div className="col-span-2 flex justify-center mt-4">
          <div className="relative flex items-center justify-center">
            {/* PRODUCT BOX */}
            <div
              onClick={() => toggle(products[2].id)}
              className="border border-black rounded-l-[30px] bg-white
                         w-[350px] h-[450px] p-5
                         flex flex-col items-center justify-center
                         cursor-pointer relative z-10"
            >
              <Image
                src={products[2].image}
                width={350}
                height={300}
                alt={products[2].title}
                className="w-[300px]"
              />
              <h2 className="font-bold mt-3">{products[2].title}</h2>
              <p className="text-gray-600">${products[2].price}</p>
              <p>{products[2].temperature}</p>
            </div>

            {/* GREEN SLIDER (bottom panel) */}
            <div
              className={`
                absolute left-[350px] top-0
                w-[250px] h-[450px] bg-lime-600 rounded-r-[30px]
                flex justify-center items-center text-white
                transition-all duration-500 ease-out
                ${
                  open[products[2].id]
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[-250px] opacity-0"
                }
              `}
            >
              grown freshly on Mongolian soil
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
