import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Lottie from 'lottie-react';
import movieLoader from './../assets/movieLoader.json';
import { Switch } from "@/components/ui/switch"
import { Label } from '@radix-ui/react-dropdown-menu'
import { fetchMovieDetailsFromPlaylist } from '@/Api/localApi';
function convertMinutesToHours(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} h ${remainingMinutes} m`;
}
function PlaylistView() {
    const {id} = useParams()

    const [loading,setLoading] = useState(true)
    const [movie,setMovie] = useState({})

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          const data = await fetchMovieDetailsFromPlaylist(id);
          setMovie(data);
          console.log(data,"set")
          setLoading(false);
        };
    
        fetchData();
      }, [id]);
    
    
  if (loading) {
    return (
      <div className='flex w-full h-full items-center justify-center bg-gray-800'>
        <Lottie animationData={movieLoader} />
      </div>
    );
  }
    return (
        <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6 font-['Poppins']">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h1 className="text-3xl font-bold">My Playlist</h1>
              <p className="text-gray-500 dark:text-gray-400">View and manage the movies in your playlist</p>
            </div>
            <div className="grid gap-6">
              <div className="flex items-center justify-between">
                <div className="grid gap-1">
                  <h2 className="text-xl font-semibold">Playlist Summary</h2>
                  <p className="text-gray-500 dark:text-gray-400">{`Total runtime: ${convertMinutesToHours(movie.runtime)}`}</p>
                </div>
                <div className="flex items-center space-x-2">
      <Switch id="public" />
      <Label htmlFor="public">Available Public</Label>
    </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                
              <div className="grid gap-4">
              {
                      movie.movies.map(e=>{
                        return <div key ={e.pkid}>
                        <img
                    src={`https://image.tmdb.org/t/p/w500${e.poster}`}
                    alt="Movie Poster"
                    width={300}
                    height={450}
                    className="rounded-lg object-cover aspect-[2/3]"
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold line-clamp-2">{e.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{convertMinutesToHours(e.runtime)}</p>
                    
                  </div>
                        </div>

                      })
                }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default PlaylistView
