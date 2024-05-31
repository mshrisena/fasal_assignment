import React, { useState, useEffect } from 'react';
import Moviecard from '@/components/Moviecard';
import { fetchGenre, fetchMovies } from '@/Api/apicalls';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genre,setGenre] = useState({})

  useEffect(() => { 
    async function getMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data.results);
        const genredata = await fetchGenre()
        let genresample = {}
        for(let i = 0;i<genredata.genres.length;i++){
                 genresample[genredata.genres[i].id] = genredata.genres[i].name
        }
        setGenre((data)=>genresample)
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-[10px] bg-gray-700'>
      {movies.map(movie => (
        <Moviecard key={movie.id} movie={movie} genre = {genre} />
      ))}
    </div>
  );
}

export default Home;
