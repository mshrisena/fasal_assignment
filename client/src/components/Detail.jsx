import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

function Detail(props) {
    console.log(props)
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src="/placeholder.svg"
            alt="Movie Poster"
            width={600}
            height={900}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <div>
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Drama, Crime</div>
            <h1 className="text-3xl font-bold mt-2">The Shawshank Redemption</h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-gray-500 dark:text-gray-400">1994</span>
              <span className="text-gray-500 dark:text-gray-400">142 min</span>
            </div>
            <div className="mt-2 text-gray-500 dark:text-gray-400">
              Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of
              common decency.
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="text-2xl font-bold">$28.34M</div>
              <div className="text-gray-500 dark:text-gray-400">Box Office Revenue</div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Director</h2>
            <div className="flex items-center gap-2 mt-2">
              <div>Frank Darabont</div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Cast</h2>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex flex-col items-center">
                <Avatar className="w-16 h-16 border">
                  <img src="/placeholder.svg" alt="Tim Robbins" />
                  <AvatarFallback>TR</AvatarFallback>
                </Avatar>
                <div className="text-sm mt-2">Tim Robbins</div>
              </div>
              <div className="flex flex-col items-center">
                <Avatar className="w-16 h-16 border">
                  <img src="/placeholder.svg" alt="Morgan Freeman" />
                  <AvatarFallback>MF</AvatarFallback>
                </Avatar>
                <div className="text-sm mt-2">Morgan Freeman</div>
              </div>
              <div className="flex flex-col items-center">
                <Avatar className="w-16 h-16 border">
                  <img src="/placeholder.svg" alt="Bob Gunton" />
                  <AvatarFallback>BG</AvatarFallback>
                </Avatar>
                <div className="text-sm mt-2">Bob Gunton</div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            
            <Button
              variant="outline"
              
            >
              Add to Playlist
            </Button>
           
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold">Plot Summary</h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common
          decency.
        </p>
      </div>
    </div>
  )
}

export default Detail
