"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import MovieCard from "../components/MovieCard";
import Hero from "../components/Hero";
import { Movie } from "../types/movies";
import MovieList from "../components/MovieList";
export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/movies");
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

  return (
    <main className="relative min-h-screen bg-zinc-900 overflow-x-hidden">
      <Hero />
      <div className="pb-40">
        <MovieList title="Trending Now" category="trending" />
        <MovieList title="Popular on Netflix" category="popular" />
        <MovieList title="Top Rated" category="top_rated" />
        <MovieList title="Upcoming" category="upcoming" />
      </div>
    </main>
  );
}
