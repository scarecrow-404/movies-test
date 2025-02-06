import { Play, Info } from "lucide-react";
import Image from "next/image";
import HeroImage from "../assets/HeroImage.png";
export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image
          src={HeroImage}
          alt="Featured Show"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
      </div>

      <div className="absolute bottom-1/3 left-8 md:left-16 max-w-xl">
        <div className="flex items-center mb-4">
          <span className="text-red-600 font-bold mr-2">N</span>
          <span className="text-gray-300 uppercase text-sm">SERIES</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          DEVIL IN OHIO
        </h1>

        <p className="text-white text-lg mb-6">
          Determined to protect a young patient who escaped a mysterious cult, a
          psychiatrist takes the girl in, putting her own family — and life — in
          danger.
        </p>

        <div className="flex space-x-4">
          <button className="flex items-center px-6 py-2 bg-white rounded-md hover:bg-gray-200 transition">
            <Play className="w-6 h-6 mr-2" />
            <span className="font-semibold">Play</span>
          </button>
          <button className="flex items-center px-6 py-2 bg-gray-500/70 text-white rounded-md hover:bg-gray-500/50 transition">
            <Info className="w-6 h-6 mr-2" />
            <span className="font-semibold">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
