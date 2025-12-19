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
      title: "cucumber",
      price: 6,
      image: "/cucumber.webp",
      temperature: "Should kept in 10℃",
    },
    {
      id: 2,
      title: "Cabbage",
      price: 6,
      image: "/iceberg.jpg",
      temperature: "Should kept in 5℃",
    },
    {
      id: 4,
      title: "Average Tomato",
      price: 6,
      image: "/roma.webp",
      temperature: "Should kept in 5℃",
    },
    {
      id: 3,
      title: "Cherry Tomato",
      price: 6,
      image: "/cherry tomato.jpg",
      temperature: "Should kept in 5℃",
    },
    {
      id: 5,
      title: "carrot",
      price: 6,
      image: "/carrot.jpeg",
      temperature: "Should kept in 0-2℃",
    },
    {
      id: 6,
      title: "Onion",
      price: 6,
      image: "/box onion.jpg",
      temperature: "Should kept in 7-13℃",
    },
    {
      id: 7,
      title: "Bell Pepper",
      price: 4,
      image: "/bellPepper.jpg",
      temperature: "Should kept in 7-13℃",
    },
    {
      id: 8,
      title: "Potato",
      price: 4,
      image: "/potatoes-box.jpg",
      temperature: "Should kept in 7-13℃",
    },
  ];

  return (
    <div className="size-full flex-1 flex flex-col justify-center items-center">
      <h1 className="font-bold pt-[30px] pl-[30px] text-[50px] w-full text-left bg-lime-500 text-white">
        Vegetable A-Z
      </h1>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-2 gap-10 p-10 w-full">
        {products.map((item) => (
          <div key={item.id} className="relative w-[300px]">
            {/* PRODUCT CARD */}
            <div
              onClick={() => toggle(item.id)}
              className="border border-black rounded-[30px] bg-white w-[300px] h-[350px]
                         flex flex-col items-center justify-center p-5 cursor-pointer"
            >
              <Image
                src={item.image}
                width={200}
                height={150}
                alt={item.title}
                className="w-[400px] h-[450px] object-contain"
              />
              <h2 className="font-bold mt-3">{item.title}</h2>
              <p className="text-gray-600">${item.price}</p>
              <p>{item.temperature}</p>
            </div>

            {/* SLIDING GREEN BOX */}
            <div
              className={`
                absolute top-1/2 -translate-y-1/2
                w-[350px] h-[250px] bg-lime-600 rounded-r-[30px]
                flex justify-center items-center text-white text-center px-3
                transition-all duration-500 ease-out

                ${
                  open[item.id]
                    ? "left-[300px] opacity-100"
                    : "left-[200px] opacity-0"
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
