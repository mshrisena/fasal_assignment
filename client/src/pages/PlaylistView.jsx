import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import movieLoader from './../assets/movieLoader.json';
import { Switch } from "@/components/ui/switch";
import { Label } from '@radix-ui/react-dropdown-menu';
import { baseurl, changePlaylistVisisbilty, fetchMovieDetailsFromPlaylist } from '@/Api/localApi';
import { Share, Trash2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import axios from 'axios';
import Nomovie from '@/components/Nomovie';

function convertMinutesToHours(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} h ${remainingMinutes} m`;
}

function PlaylistView() {
    if(localStorage.getItem("token") === null){
       window.location.replace("/sign-in")
      }
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const changeVisibility = async (e)=>{
       const res = await changePlaylistVisisbilty(e,id)
       if (res.data) {
        // If the update is successful, update the state of 'movie' with the new visibility
        setMovie(prevMovie => ({
          ...prevMovie,
          isPublic: e
        }));
    }}
    const share = async ()=>{
        let url = window.location.href
        try {
            await navigator.clipboard.writeText(url.replace("playlist","share"));
            toast({
                title:"link copied to clipboard"
            })
          } catch (err) {
            console.error('Failed to copy: ', err);
          }
        
    }
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

    return (
        <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6 font-['Poppins']">
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <h1 className="text-3xl font-bold">My Playlist</h1>
                    <p className="text-gray-500 dark:text-gray-400">View and manage the movies in your playlist</p>
                </div>
                <div className="grid gap-6 grid-flow-row">
                    <div className="flex flex-row items-center justify-between">
                        <div className="grid gap-1">
                            <h2 className="text-xl font-semibold">Playlist Summary</h2>
                            <p className="text-gray-500 dark:text-gray-400">{`Total runtime: ${convertMinutesToHours(movie.runtime)}`}</p>
                        </div>
                        <div className='flex gap-[20px]'>
                        <div className="flex items-center space-x-2">
                            <Switch id="public" checked = {movie.isPublic} onCheckedChange = { (e)=>changeVisibility(e)}/>
                            <Label htmlFor="public">Available Public</Label>
                        </div>
                        {movie.isPublic && <div className='hover:cursor-pointer'>
                            <button onClick={share}>
                            <Share/>
                            </button>
                        </div>}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-6">
                        {movie.movies.length === 0 ? <Nomovie />: movie.movies.map(e => (
                            <Link to={`/movie/${e.id}`}>
                            <div key={e.pkid} className="w-64">

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
                                <div> <button
                                 onClick={async ()=>{
                                       const res = await axios.delete(`${baseurl}movies/delete/${e.pkid}`,{
                                        headers:{
                                            Authorization :`Bearer ${localStorage.getItem("token")}`
                                        }
                                       })
                                       window.location.reload()
                                 }} 
                                
                                ><Trash2 className='text-red-500'/></button></div>
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

export default PlaylistView;
