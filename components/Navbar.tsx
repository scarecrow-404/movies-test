"use client";

import { useState, useEffect } from "react";
import { Bell, Search, ChevronDown } from "lucide-react";
import { Button } from "./ui/Button";
import Image from "next/image";
import Avatar from "../assets/Avatar.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "bg-zinc-900" : "bg-transparent"
      } fixed top-0 z-50 w-full transition duration-500`}
    >
      <div className="flex items-center space-x-2 md:space-x-10 px-4 md:px-16 py-4">
        <h1 className="text-red-600 text-2xl md:text-4xl font-bold">NETFLIX</h1>

        <div className="hidden md:flex space-x-4">
          <button className="text-sm font-light text-white hover:text-gray-300 ">
            Home
          </button>
          <button className="text-sm font-light text-white hover:text-gray-300">
            TV Shows
          </button>
          <button className="text-sm font-light text-white hover:text-gray-300">
            Movies
          </button>
          <button className="text-sm font-light text-white hover:text-gray-300">
            New & Popular
          </button>
          <button className="text-sm font-light text-white hover:text-gray-300">
            My List
          </button>
        </div>

        <div className="flex-1" />

        <div className="flex items-center space-x-4 text-sm font-light">
          <Search className="hidden sm:inline h-6 w-6 text-white cursor-pointer" />
          <Bell className="h-6 w-6 text-white cursor-pointer" />
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image src={Avatar} alt="Profile" className="rounded-sm w-8 h-8" />

            <ChevronDown className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}
