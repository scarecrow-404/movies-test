import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
export default function Home() {
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
