
import { Button } from "@/components/ui/button"

export default function Moviecard() {
  return (
    <div className="relative group rounded-lg overflow-hidden">
    <p href="#" className="absolute inset-0 z-10" prefetch={false}>
      <span className="sr-only">View Movie</span>
    </p>
    <img
      src="https://image.tmdb.org/t/p/w780/xAAYm7bUC5LnAj2Hs2hePOMHh2z.jpg"
      alt="Movie Poster"
      width={300}
      height={450}
      className="object-cover w-full aspect-[2/3]"
    />
    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <h3 className="text-white text-lg font-semibold">Movie Title</h3>
      <p className="text-gray-300 text-sm line-clamp-2">This is a brief description of the movie.</p>
      <div className="flex items-center gap-2 mt-2">
        <StarIcon className="w-5 h-5 fill-yellow-500" />
        <span className="text-white text-sm font-medium">4.5</span>
      </div>
    </div>
  </div>
  )
}

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