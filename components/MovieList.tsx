"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";
import { Movie } from "../types/movies";

interface MovieListProps {
  title: string;
  category: string;
}

export default function MovieList({ title, category }: MovieListProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${process.env.NEST_URL}/api/movies/${category}`
        );
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);
  const handleScroll = (direction: "left" | "right") => {
    const container = document.getElementById(`slider-${category}`);
    if (!container) return;

    const scrollAmount = direction === "left" ? -500 : 500;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setScrollPosition(container.scrollLeft + scrollAmount);
  };

  return (
    <div className="space-y-2 md:space-y-4 px-4 md:px-16 mt-4">
      <h2 className="text-white text-xl md:text-2xl font-semibold">{title}</h2>
      <div className="group relative">
        <ChevronLeft
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125 text-white ${
            scrollPosition <= 0 ? "hidden" : ""
          }`}
          onClick={() => handleScroll("left")}
        />

        <div
          id={`slider-${category}`}
          className="flex items-center space-x-2 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {movies.length > 0 &&
            movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
        </div>

        <ChevronRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125 text-white"
          onClick={() => handleScroll("right")}
        />
      </div>
    </div>
  );
}
