
import { Link } from "react-router-dom"

export default function Moviecard({key,movie,genre}) {

    console.log(movie.genre_ids)
    var genersString = ""
    for(let i = 0;i< movie.genre_ids.length;i++){
        genersString += genre[movie.genre_ids[i]] + " "
    }
    genersString = genersString.slice(0, -1)
  return (
    <Link to="/share/id">
    <div className="relative group rounded-lg overflow-hidden hover:cursor-pointer">
    <p href="#" className="absolute inset-0 z-10">
      <span className="sr-only">View Movie</span>
    </p>
    <img
      src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
      alt="Movie Poster"
      width={300}
      height={400}
      className="object-cover w-full aspect-[2/3]"
    />
    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
      <h3 className="text-white text-lg font-semibold text-center">{movie.title}</h3>
      <p className="text-gray-300 text-sm line-clamp-2 text-center ">{movie.overview}</p>
      <p className="text-gray-300 line-clamp-2 text-center text-xl">{genersString}</p>
      <div className="flex items-center gap-2 mt-2 justify-center ">
        <StarIcon className="w-5 h-5 fill-yellow-500 text-center" />
        <span className="text-white text-sm font-medium text-center">{movie.vote_average.toFixed(1)}</span>
      </div>
    </div> 
  </div>
  </Link>
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