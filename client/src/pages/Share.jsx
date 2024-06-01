import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import movieLoader from './../assets/movieLoader.json';
import { baseurl, changePlaylistVisisbilty, fetchMovieDetailsFromPlaylist } from '@/Api/localApi';
import NotPublic from '@/components/NotPublic';
import Nomovie from '@/components/Nomovie';


function convertMinutesToHours(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} h ${remainingMinutes} m`;
}

function Share() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
  
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await fetchMovieDetailsFromPlaylist(id);
            console.log(data,"palylistdata")
            setMovie(data);
            console.log(data, "set");
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
 if(!movie.isPublic){
  return <div>
     <NotPublic/>
  </div>
 } 
 console.log(movie,"hvbjnk")
    return (
        <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6 font-['Poppins']">
            <div className="grid gap-6">
                <div className="grid gap-2">
                <h2 className="mb-5 border-b pb-2 text-3xl font-semibold mt-0">
  {`Playlist Made by ${movie.name}`}
</h2>

                    <p className="text-gray-500 dark:text-gray-400">View and manage the movies in your playlist</p>
                </div>
                <div className="grid gap-6 grid-flow-row">
                    <div className="flex flex-row items-center justify-between">
                        <div className="grid gap-1">
                            <h2 className="text-xl font-semibold">Playlist Summary</h2>
                            <p className="text-gray-500 dark:text-gray-400">{`Total runtime: ${convertMinutesToHours(movie.runtime)}`}</p>
                        </div>
                        
                    </div>
                    <div className="flex flex-wrap gap-6">
                        {movie.movies.length === 0 ?  <Nomovie text={"The playlist is currently empty"}/>: movie.movies.map(e => (
                          <Link to={`/movie/${e.id}`}>
                            <div key={e.pkid} className="w-64 hover:cursor-pointer" >
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${e.poster}`}
                                    alt="Movie Poster"
                                    width={300}
                                    height={450}
                                    className="rounded-lg object-cover aspect-[2/3]"
                                />
                                <div className='flex items-center justify-between pr-[20px] p-3'>
                                <div className="grid gap-1">
                                    <h3 className="font-semibold line-clamp-2">{e.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">{convertMinutesToHours(e.runtime)}</p>
                                </div>
                                
                                </div>
                            </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Share;
