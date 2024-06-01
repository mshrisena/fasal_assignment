import CreatePlaylist from '@/components/CreatePlaylist'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react';
import movieLoader from './../assets/movieLoader.json';
import { getUserPlaylist } from '@/Api/localApi';
import Noplaylist from '@/components/Noplaylist';
function formatedDate(date ){
  const today = new Date(date);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formatter = new Intl.DateTimeFormat('en-GB', options);
  const formattedDate = formatter.format(today);
  return formattedDate
}
function Playlist() {
  if(localStorage.getItem("token") === null){
   window.location.replace("/sign-in")
  }
  const [loading,setLoading] = useState(true)
    const [open,setOpen] = useState(false)
    const [playlist,setPlaylist] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const data = await getUserPlaylist();
        console.log(data.data,"data")
        setPlaylist(data.data);
        setLoading(false);
      };
  
      fetchData();
    }, []);
    if(loading){
      return (
        <div className='flex w-full h-full items-center justify-center bg-gray-800'>
          <Lottie animationData={movieLoader} />
        </div>
      );
    }
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <header className="mb-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Playlists</h1>
      <CreatePlaylist open={open} handleChange={setOpen} onCreation = { ()=>window.location.reload()}/>
    </header>
    <section className="w-full py-12 md:py-16 lg:py-20">
    <div className="container grid gap-8 px-4 md:px-6">
      <div className="grid gap-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Your Playlists</h1>
        <p className="text-gray-500 dark:text-gray-400 md:text-lg">
          Discover and manage your personalized playlists.
        </p>
      </div>
      {
        playlist.length == 0? <Noplaylist /> :
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {
            playlist.map((e)=>{
              console.log(e)
              return <div className="relative group overflow-hidden rounded-lg">
          
              <Link to={`${e.id}`}>
            <p href="#" className="absolute inset-0 z-10">
              <span className="sr-only">View Playlist</span>
            </p>
            </Link>
            <img
              src={`${e.coverImageUrl}`}
              alt="Playlist Cover"
              width={400}
              height={300}
              className="object-cover w-full h-60"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-semibold text-lg md:text-xl">{e.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{`Created on ${formatedDate(e.createdAt)}`}</p>
            </div>
          </div>
            })
          }
        
        
      </div>
      }
    </div>
    
  </section>
  </div>
  )
}

export default Playlist
