"use client";
import { useState } from "react";
import Image from "next/image";

export default function Cream() {
  const [open, setOpen] = useState(false);

  const product = {
    id: 1,
    title: "Lemon and Lime",
    price: 4,
    image: "/LemonLime.webp",
    temperature: "Should be kept in 7-13℃",
  };

  return (
    <div className="size-full flex-1 flex flex-col justify-center items-center">
      <h1 className="flex font-bold pt-[30px] gap-5 pl-[30px] text-[50px] bg-yellow-600 w-full text-left text-white">
        <p className="text-yellow-400">Lemon </p> and{" "}
        <p className="text-lime-600">Limes</p> in stock
      </h1>

      <div className="relative flex h-full w-full items-center justify-center flex-1">
        {/* PRODUCT CARD (CLICK TO SLIDE GREEN CARD OUT) */}
        <div
          onClick={() => setOpen(!open)}
          className="border border-black rounded-[30px] p-5 w-[350px] h-[350px]
                     flex flex-col items-center justify-center bg-white relative z-10
                     cursor-pointer transition-all"
        >
          <Image
            src={product.image}
            width={350}
            height={300}
            alt={product.title}
            className="w-[1000px]"
          />
          <h2 className="font-bold mt-3">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
          <p>{product.temperature}</p>
        </div>

        {/* SLIDING GREEN PANEL */}
        <div
          className={`
            absolute left-[calc(50%+175px)] top-1/2 -translate-y-1/2
            w-[250px] h-[300px] bg-lime-600 rounded-r-[30px]
            flex justify-center items-center text-white
            transition-all duration-500 ease-out
            ${
              open
                ? "translate-x-0 opacity-100"
                : "translate-x-[-260px] opacity-0"
            }
          `}
        >
          grown freshly on Mongolian soil
        </div>
      </div>
    </div>
  );
}
