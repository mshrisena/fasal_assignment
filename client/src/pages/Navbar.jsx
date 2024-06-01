import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import Link from "next/link"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

import Logout from '@/components/Logout'
import { useSearch } from '@/Contextprovider/SearchProvider'
import { searchMovie } from '@/Api/apicalls'



function Navbar() {
  const location = useLocation();

  // Check if the current pathname is '/share'
  // console.log( location.pathname.includes("share"),"dfsdfsdf")
  const isSharePage = location.pathname.includes("share")

  // If it's the Share page, don't render the Navbar
  if (isSharePage) {
    return null;
  }
  
   const {movies,setMovies} = useSearch()
   const [search,setSearch] = useState("")
   const handleSearch = async () =>{
    const data  = await searchMovie(search)
    console.log(data)
    setMovies( e => data.results)
   }
   const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
      // Prevent the default form submission
      
    }
  };
  return (
    <div>
      <header className="bg-black text-[#FF204E] py-4 px-6 flex items-center justify-between">
        <nav className="flex items-center gap-6">
          <span className='text-3xl'>CinemaCanvas</span>
          <Link to="/home">
            <p className="text-lg font-medium hover:text-gray-400">
              Home
            </p>
          </Link>
          <Link to="/playlist">
            <p className="text-lg font-medium hover:text-gray-400">
              Playlist
            </p>
          </Link>
        </nav>
        <div className="flex items-center gap-6">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search movies..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              onKeyDown={ e => handleKeyDown(e)}
              className="bg-gray-800 rounded-[12px] pl-10 pr-4 py-2 text-sm border-black focus:outline-none focus:text-white"
            />
          </div>
         { localStorage.getItem("username") !== null && <div className='text-white text-xl'> Hello,<span className='text-2xl'>{localStorage.getItem("username")}</span></div>
         } <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
           
              <DropdownMenuItem ><Logout/></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
}

export default Navbar;


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
