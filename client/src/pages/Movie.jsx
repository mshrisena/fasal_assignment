import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Lottie from 'lottie-react';
import movieLoader from './../assets/movieLoader.json';
import { fetchMovieDetails } from '@/Api/apicalls';
import Detail from '@/components/Detail';

export default function Movie() {
  if(localStorage.getItem("token") === null){
   window.location.replace("/sign-in")
  }
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [recommendedMovies, setRecommendedMovies] = useState([
    {
      title: "The Godfather",
      image: "/placeholder.svg",
      genre: "Crime, Drama",
      year: 1972,
      duration: "175 min",
      boxOffice: "$134.97M",
      director: "Francis Ford Coppola",
      cast: [
        { name: "Marlon Brando", image: "/placeholder-user.jpg" },
        { name: "Al Pacino", image: "/placeholder-user.jpg" },
        { name: "James Caan", image: "/placeholder-user.jpg" },
      ],
    },
    {
      title: "Pulp Fiction",
      image: "/placeholder.svg",
      genre: "Crime, Drama",
      year: 1994,
      duration: "154 min",
      boxOffice: "$107.93M",
      director: "Quentin Tarantino",
      cast: [
        { name: "John Travolta", image: "/placeholder-user.jpg" },
        { name: "Samuel L. Jackson", image: "/placeholder-user.jpg" },
        { name: "Uma Thurman", image: "/placeholder-user.jpg" },
      ],
    },
    {
      title: "The Dark Knight",
      image: "/placeholder.svg",
      genre: "Action, Crime, Drama",
      year: 2008,
      duration: "152 min",
      boxOffice: "$534.86M",
      director: "Christopher Nolan",
      cast: [
        { name: "Christian Bale", image: "/placeholder-user.jpg" },
        { name: "Heath Ledger", image: "/placeholder-user.jpg" },
        { name: "Aaron Eckhart", image: "/placeholder-user.jpg" },
      ],
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchMovieDetails(id);
      setMovie(data);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  const [playlist, setPlaylist] = useState([]);
  const addToPlaylist = (movie) => {
    setPlaylist([...playlist, movie]);
  };

  if (loading) {
    return (
      <div className='flex w-full h-full items-center justify-center bg-gray-800'>
        <Lottie animationData={movieLoader} />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      <Detail data={movie} />
{/*       
      <div className="mt-12">
        <h2 className="text-2xl font-bold">Recommended Movies</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {recommendedMovies.map((movie, index) => (
            <div key={index} className="grid gap-4 relative group">
              <Link to={`/movie/${movie.title}`}>
                <p className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </p>
              </Link>
              <img
                src="/placeholder.svg"
                alt={movie.title}
                width={450}
                height={600}
                className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              />
              <div className="grid gap-1">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  {movie.genre}
                </div>
                <h3 className="font-semibold">{movie.title}</h3>
                <div className="flex items-center gap-4 text-sm">
                  <div>{movie.year}</div>
                  <div>{movie.duration}</div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="font-semibold">{movie.boxOffice}</div>
                  <div className="text-gray-500 dark:text-gray-400">Box Office Revenue</div>
                </div>
                <div className="flex items-center gap-4">
                  {movie.cast.map((actor, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <Avatar className="w-12 h-12 border">
                        <img src="/placeholder.svg" alt={actor.name} />
                        <AvatarFallback>{actor.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="text-xs mt-1">{actor.name}</div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" onClick={() => addToPlaylist(movie)} className="w-full">
                  Add to Playlist
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

