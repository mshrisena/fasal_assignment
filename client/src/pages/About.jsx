import Moviecard from '@/components/Moviecard'
import { Button } from '@/components/ui/button'
import React from 'react'


function About() {
  return (
    
    <div className="flex flex-col min-h-screen">
     <Moviecard/>
      <main className="flex-1 bg-gray-100 py-8 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="relative group">
            <img
              src="https://images.hdqwalls.com/wallpapers/iron-man-4k-mark-45-jy.jpg"
              alt="Movie Poster"
              width={300}
              height={450}
              className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-semibold">Movie Title</h3>
              <p className="text-gray-300 text-sm line-clamp-2">This is a brief description of the movie.</p>
              <div className="flex items-center gap-2 mt-2">
                <StarIcon className="w-5 h-5 fill-yellow-500" />
                <span className="text-white text-sm font-medium">4.5</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://images.hdqwalls.com/wallpapers/iron-man-4k-mark-45-jy.jpg"
              alt="Movie Poster"
              width={300}
              height={450}
              className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-semibold">Movie Title</h3>
              <p className="text-gray-300 text-sm line-clamp-2">This is a brief description of the movie.</p>
              <div className="flex items-center gap-2 mt-2">
                <StarIcon className="w-5 h-5 fill-yellow-500" />
                <span className="text-white text-sm font-medium">4.5</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://images.hdqwalls.com/wallpapers/iron-man-4k-mark-45-jy.jpg"
              alt="Movie Poster"
              width={300}
              height={450}
              className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-semibold">Movie Title</h3>
              <p className="text-gray-300 text-sm line-clamp-2">This is a brief description of the movie.</p>
              <div className="flex items-center gap-2 mt-2">
                <StarIcon className="w-5 h-5 fill-yellow-500" />
                <span className="text-white text-sm font-medium">4.5</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://images.hdqwalls.com/wallpapers/iron-man-4k-mark-45-jy.jpg"
              alt="Movie Poster"
              width={300}
              height={450}
              className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-semibold">Movie Title</h3>
              <p className="text-gray-300 text-sm line-clamp-2">This is a brief description of the movie.</p>
              <div className="flex items-center gap-2 mt-2">
                <StarIcon className="w-5 h-5 fill-yellow-500" />
                <span className="text-white text-sm font-medium">4.5</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://images.hdqwalls.com/wallpapers/iron-man-4k-mark-45-jy.jpg"
              alt="Movie Poster"
              width={300}
              height={450}
              className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-semibold">Movie Title</h3>
              <p className="text-gray-300 text-sm line-clamp-2">This is a brief description of the movie.</p>
              <div className="flex items-center gap-2 mt-2">
                <StarIcon className="w-5 h-5 fill-yellow-500" />
                <span className="text-white text-sm font-medium">4.5</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://images.hdqwalls.com/wallpapers/iron-man-4k-mark-45-jy.jpg"
              alt="Movie Poster"
              width={300}
              height={450}
              className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-semibold">Movie Title</h3>
              <p className="text-gray-300 text-sm line-clamp-2">This is a brief description of the movie.</p>
              <div className="flex items-center gap-2 mt-2">
                <StarIcon className="w-5 h-5 fill-yellow-500" />
                <span className="text-white text-sm font-medium">4.5</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About




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