import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Lottie from 'lottie-react';
import movieLoader from './../assets/movieLoader.json';
import { fetchMovieDetails } from '@/Api/apicalls';
import Detail from '@/components/Detail';

export default function Movie() {

    const {id} = useParams()
    const [loading,setLoading] = useState(false)
    const [movie,setMovie] = useState({})
    const [recommendedMovies,setRecommendedMovies] = useState( [
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
      ])
 const findMovieDetail = async ()=>{
    const data = await fetchMovieDetails(id)
     setMovie(e =>data)
     setLoading(false)

 }
  const [playlist, setPlaylist] = useState([])
  const addToPlaylist = (movie) => {
    setPlaylist([...playlist, movie])
  }
//   findMovieDetail()
  if(loading)
  {  
     return <div className='flex w-full h-full items-center justify-center bg-gray-800'><Lottie animationData={movieLoader} /></div>;
  }
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      {/* <Detail data = {movie}/> */}
      <div className="mt-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
           
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground text-yellow-500" />
            </div>
            <div className="text-gray-500 dark:text-gray-400">4.8 (12,345 reviews)</div>
          </div>
          
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <img
            src="/placeholder.svg"
            alt="Similar Movie 1"
            width={300}
            height={450}
            className="rounded-lg object-cover w-full aspect-[2/3]"
          />
          <img
            src="/placeholder.svg"
            alt="Similar Movie 2"
            width={300}
            height={450}
            className="rounded-lg object-cover w-full aspect-[2/3]"
          />
          <img
            src="/placeholder.svg"
            alt="Similar Movie 3"
            width={300}
            height={450}
            className="rounded-lg object-cover w-full aspect-[2/3]"
          />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold">Recommended Movies</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {recommendedMovies.map((movie, index) => (
            <div key={index} className="grid gap-4 relative group">
                <Link>
              <p href="#" className="absolute inset-0 z-10" prefetch={false}>
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
      </div>
    </div>
  )
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}