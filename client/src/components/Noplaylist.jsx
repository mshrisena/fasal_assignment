
import { Button } from "@/components/ui/button"
import CreatePlaylist from "./CreatePlaylist"
import { useState } from "react"

export default function Noplaylist() {
    const [open, setopen] = useState(false)
 
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-gray-100 p-6 rounded-lg dark:bg-gray-800 max-w-md w-full">
        <div className="flex justify-center mb-4">
          <MusicIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">No Playlists Available</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          It looks like you haven't created any playlists yet. Get started by clicking the "Create Playlist" button
          below.
        </p>
        <div className="flex justify-center">
         <CreatePlaylist open={open} handleChange={setopen} onCreation = {()=>window.location.reload()}/>
        </div>
      </div>
    </div>
  )
}

function MusicIcon(props) {
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
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}
