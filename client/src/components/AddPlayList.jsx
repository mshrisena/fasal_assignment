import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { addMovieToPlaylist } from "@/Api/localApi";

export default function AddPlayList (props) {
  const [playlist, setPlaylist] = useState(props.data);

  const handleAdd = async (id, playlistId) => {
    const result = await addMovieToPlaylist(playlistId, props.movieid);
    console.log(result,"xcgvh")
    if (result.movie) { 
      const updatedPlaylist = playlist.filter((_, idx) => idx !== id);
      setPlaylist(updatedPlaylist);
      props.handleChange(updatedPlaylist); 
    } else {
      console.log("Failed to add movie to playlist");
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          Add Playlists
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] max-h-[500px] overflow-auto">
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="text-lg font-medium">Playlists</h3>
          <div>
            <XIcon className="h-5 w-5" />
          </div>
        </div>
        <div className="grid grid-flow-row space-y-2">
          {playlist.map((e, idx) => (
            <div key={e.id}>
              <Checkbox id={`playlist-${e.id}`} className="w-[20px] h-[20px] mr-[10px]" onCheckedChange={() => handleAdd(idx, e.id)} />
              <Label htmlFor={`playlist-${e.id}`} className="font-bold text-center">
                {e.name}
              </Label>
            </div>
          ))}
        </div>
        <p className="font-bold pt-[10px]">If the playlist is not listed, then the movie is available in the playlist</p>
      </PopoverContent>
    </Popover>
  );
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
  );
}

function XIcon(props) {
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
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
