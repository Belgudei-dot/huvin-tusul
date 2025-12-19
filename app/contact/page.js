"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState(false);

  return (
    <div
      className={`w-full min-h-screen transition duration-200 ${
        theme ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 pt-5">
        {/* Home button */}
        <div
          className={`w-[250px] h-[70px] rounded-[10px] flex items-center justify-center transition duration-300 hover:border hover:bg-white ${
            theme ? "bg-lime-600 text-white" : "bg-red-500 text-black"
          }`}
        >
          <Link
            href="/"
            className="text-[40px] font-bold text-white hover:text-black"
          >
            ← Home
          </Link>
        </div>

        {/* Switch button */}
        <button
          className="border-2 px-4 py-2 rounded-md text-[24px] font-bold"
          onClick={() => setTheme(!theme)}
        >
          Switch
        </button>
      </div>

      {/* Main content */}
      <div className={`flex justify-center mt-[-100px]`}>
        <div className={`pr-[70px] flex flex-col space-y-[220px]`}>
          {/* Contact Info */}
          <div className="w-[800px] h-[200px] bg-lime-500 rounded-b-[40px] text-white pb-[300px]">
            <div className="flex justify-center text-[70px] pb-[70px]">
              Contact Info
            </div>
            <div className="flex justify-center gap-[50px]">
              <div className="font-bold text-[50px]">99100099</div>
              <div className="font-bold text-[50px]">99093165</div>
            </div>
          </div>

          {/* Email Address */}
          <div className="w-[800px] h-[300px] bg-lime-600 rounded-t-[40px] text-white pb-[100px]">
            <div className="flex justify-center text-[70px] pb-[50px]">
              Email Address
            </div>
            <div className="flex flex-col items-center font-bold text-[40px]">
              <div>bbolor.m21@gmail.com</div>
              <div>otgonbaatar.j11@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
