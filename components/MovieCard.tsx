import Image from "next/image";
import { Movie } from "../types/movies";
import { useState } from "react";
import { Play, Plus, ThumbsUp } from "lucide-react";
import { Button } from "./ui/Button";
interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative min-h-[200px] min-w-[300px] cursor-pointer transition duration-200 ease-out md:h-[250px] md:min-w-[400px] md:hover:scale-105 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.posterPath}
        alt={movie.title}
        className="w-full h-64 object-cover rounded-sm"
      />

      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 rounded-sm flex flex-col justify-between p-4">
          <h3 className="text-white font-semibold">{movie.title}</h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Button size="sm" className="w-full">
                <Play className="h-4 w-4 mr-1" /> Play
              </Button>
              <Button size="icon" variant="secondary">
                <Plus className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary">
                <ThumbsUp className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-white">
              <span className="text-green-400">98% Match</span>
              <span>release {movie.releaseYear}</span>
              <span className="border border-white/40 px-1 text-xs">HD</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-white">
              <span>Suspenseful</span>
              <span>•</span>
              <span>Sci-fi TV</span>
              <span>•</span>
              <span>Teen</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
