
import { Button } from "@/components/ui/button"

export default function Moviecard() {
  return (
    <div className="relative group w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-900 text-white">
      <img
        src="https://image.tmdb.org/t/p/w780/xAAYm7bUC5LnAj2Hs2hePOMHh2z.jpg"
        alt="Movie Poster"
        width={400}
        height={600}
        className="w-full aspect-[2/3] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent group-hover:from-black/70 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent group-hover:from-black/80 transition-colors duration-300">
        <h3 className="text-xl font-bold mb-1">Interstellar</h3>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>2014</span>
          <span>•</span>
          <span>Sci-Fi, Drama</span>
        </div>
        <p className="mt-2 line-clamp-3 text-gray-300">
          A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <StarIcon className="w-5 h-5 fill-primary" />
            <span className="font-medium">8.6</span>
          </div>
          <Button variant="outline" size="sm" className="bg-red-600 hover:bg-red-500 text-white">
            Watch Trailer
          </Button>
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