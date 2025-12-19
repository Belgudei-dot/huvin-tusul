"use client";
import Link from "next/link";
import { useTheme } from "../Providers/themeContext";

export default function Home() {
  const { theme, setTheme, isEnglish, setIsEnglish } = useTheme();
  return (
    <div
      className={`w-full min-h-screen transition duration-200 flex flex-col items-center
     ${theme ? "bg-gray-800" : "bg-white"}`}
    >
      {/* Navbar */}

      <div
        className={`flex justify-between transition duration-200 rounded-b-[15px] items-center px-20 w-[1050px] h-[100px] mb-40 ${
          theme ? "bg-lime-600" : "bg-red-500"
        }
        `}
      >
        <button
          className={`border-2 px-2 py-[3px] transition duration-200 text-white rounded-md ${
            theme ? "bg-red-500" : "bg-green-600"
          }`}
          onClick={() => {
            setTheme(!theme);
          }}
        >
          switch
        </button>
        <Link
          href="/contact"
          className="text-[40px] font-bold text-black hover:scale-110 text-white transition duration-300 ease-in-out"
        >
          contact
        </Link>

        <Link
          href="/about"
          className="text-[40px] font-bold text-black hover:scale-110 text-white transition duration-300 ease-in-out"
        >
          about
        </Link>

        <Link
          href="/"
          className="text-[40px] font-bold text-black hover:scale-110 text-white transition duration-300 ease-in-out"
        >
          Home
        </Link>
      </div>

      {/* Products */}
      <div className="flex gap-20 justify-center">
        {/* Vegetable */}
        <Link
          href="/mian"
          className={`group border border-[5px] transition duration-200 rounded-[5px] transition duration-300 ease-in-out hover:scale-110 ${
            theme ? "border-amber-500" : "border-red-500"
          }`}
        >
          <div
            className={`relative w-[300px] h-[200px] transition duration-200 overflow-hidden ${
              theme ? "bg-white" : "bg-white"
            }`}
          >
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://static.vecteezy.com/system/resources/thumbnails/047/830/714/small/a-vibrant-assortment-of-fresh-vegetables-including-peppers-onions-lettuce-broccoli-tomatoes-corn-and-garlic-arranged-on-a-white-background-png.png"
              alt="Vegetables"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gray-500/70 flex justify-center items-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
              big healthy greens section
            </div>
          </div>

          <div className="mt-2 flex justify-center items-center border border-black w-[300px] h-[50px] font-bold bg-lime-600 text-white group-hover:bg-white group-hover:text-lime-600 transition duration-300">
            Vegetable Product
          </div>
        </Link>

        {/* Fruit */}
        <Link
          href="/fruit"
          className={`group border border-[5px] rounded-[5px] transition duration-300 ease-in-out hover:scale-110  ${
            theme ? "border-lime-600" : "border-amber-500"
          }`}
        >
          <div className={`relative w-[300px] h-[200px] overflow-hidden`}>
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://www.darty.com/darty-et-vous/sites/darty-et-vous/files/2025-01/fruits.jpg"
              alt="Fruits"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gray-500/70 flex justify-center items-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
              juicy sweet fruits section
            </div>
          </div>

          <div className="mt-2 flex justify-center items-center border border-black w-[300px] h-[50px] font-bold bg-red-500 text-white group-hover:bg-white group-hover:text-red-500 transition duration-300">
            Fruit Product
          </div>
        </Link>
      </div>
    </div>
  );
}
