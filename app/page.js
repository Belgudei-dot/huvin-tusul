"use client";

import Link from "next/link";
import { useTheme } from "./Providers/themeContext";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`${
        theme ? "bg-gray-900" : "bg-white"
      } transition duration-200 min-h-screen w-full`}
    >
      {/* Navbar */}
      <div
        className={`w-full h-20 flex justify-center transition duration-200 items-center gap-10 fixed top-0 left-0 z-50 ${
          theme ? "bg-lime-600" : "bg-red-500"
        }`}
      >
        <button
          className={`${
            theme ? "bg-black text-white" : "bg-white text-black"
          } border-2 px-2 transition duration-200 py-[3px] rounded-md`}
          onClick={() => setTheme(!theme)}
        >
          switch
        </button>

        <div className={"flex gap-20"}>
          <Link className="text-[40px] font-bold text-white" href="/veg">
            product
          </Link>
          <Link
            className="text-[40px] gap-[5px] font-bold text-white"
            href="/contact"
          >
            contact
          </Link>
          <Link
            className="text-[40px] gap-[5px] font-bold text-white"
            href="/about"
          >
            about
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="pt-24 flex justify-center">
        <img className="w-[700px] h-[700px]" src="/load.png" alt="Tomatoes" />
      </div>
    </div>
  );
}
