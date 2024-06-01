import React, { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import AddPlayList from './AddPlayList';
import Lottie from 'lottie-react';
import movieLoader from './../assets/movieLoader.json';
import { fetchPlaylistWithoutMovie } from '@/Api/localApi';
function Detail(props) {
  console.log(props)
    const { data } = props;
    const { title, genre, overview, revenue, runtime, poster, cast, director ,vote,vote_count,images,id} = data;
     const [playlsit,setPlaylist] = useState([])
     const [loading,setLoading] = useState(true)
     useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const data = await fetchPlaylistWithoutMovie(id)
        setPlaylist(data.data);
        // console.log(data.data,"cfhgvjbknl")
        setLoading(false);
      };
  
      fetchData();
    }, []);
    if (loading) {
      return (
        <div className='flex w-full h-full items-center justify-center bg-gray-800'>
          <Lottie animationData={movieLoader} />
        </div>
      );
    }
  
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${poster}`}
                        alt={title}
                        width={600}
                        height={900}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="space-y-6">
                    <div>
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">{genre}</div>
                        <h1 className="text-3xl font-bold mt-2">{title}</h1>
                        <div className="flex items-center gap-4 mt-2">
                            <span className="text-gray-500 dark:text-gray-400">{runtime} min</span>
                        </div>
                        <div className="mt-2 text-gray-500 dark:text-gray-400">
                            {overview}
                        </div>
                        <div className="mt-4 flex items-center gap-4">
                            <div className="text-2xl font-bold">${(revenue / 1000000).toFixed(2)}M</div>
                            <div className="text-gray-500 dark:text-gray-400">Box Office Revenue</div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Director</h2>
                        <div className="flex items-center gap-2 mt-2">
                            <Avatar className="w-20 h-25 border">
                            <AvatarImage src = {`https://image.tmdb.org/t/p/w500${director.photourl}`} />
                                {/* <img src={`https://image.tmdb.org/t/p/w500${director.photourl}`} alt={director.name} /> */}
                                <AvatarFallback>{director.name}</AvatarFallback>
                            </Avatar>
                            <div>{director.name}</div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Cast</h2>
                        <div className="flex items-center gap-4 mt-2">
                            {cast.slice(0, 5).map((actor, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <Avatar className="w-20 h-20 border">
                                        {/* <img src={`https://image.tmdb.org/t/p/w500${actor.photourl}`} alt={actor.name} /> */}
                                        <AvatarImage  src={`https://image.tmdb.org/t/p/w500${actor.photourl}`} />
                                        <AvatarFallback className="text-center">{actor.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className="text-sm mt-2">{actor.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-2">
                            <AddPlayList data={playlsit} movieid={id} handleChange= {setPlaylist}/>
                       
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-2xl font-bold">Plot Summary</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    {overview}
                </p>
            </div>
            <div className="mt-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground text-yellow-500" />
            </div>
            <div className="text-gray-500 dark:text-gray-400">{`${vote.toFixed(1)} (${vote_count} reviews)`}</div>
          </div>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {
            images.slice(0,3).map((e)=>{
              return <img
            src={`https://image.tmdb.org/t/p/w500${e}`}
            alt="Similar Movie 1"
            width={300}
            height={450}
            className="rounded-lg object-cover w-full aspect-[2/3]"
          />
            })
          }
          
          
          
        </div>
      </div>
        </div>
    );
}

export default Detail;



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
  );
}
