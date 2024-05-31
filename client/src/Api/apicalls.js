import axios from 'axios';
import res from 'express/lib/response';
import { generatePath } from 'react-router-dom';

const options = {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDQxYzMyYzY4NjQ5MTA4MjI3MDZmZjhjMjlmOGRiOCIsInN1YiI6IjY2NTk5ZDhjYTlhYWRjMmQzMjJkNWFlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-yl1WY2fDlUbbrpLU5kGHaWvbhqhQSbcBJrNpjXOISI'
    }
};

export async function fetchMovies() {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=${Math.floor(Math.random() * 10) + 1}&sort_by=popularity.desc`;
  try {
    const response = await axios.get(url, options);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('error:', error);
    throw error; // Rethrow the error if you want to handle it further up the call stack
  }
}
export async function fetchGenre(){
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    try {
        const response = await axios.get(url, options);
        // console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('error:', error);
        throw error; // Rethrow the error if you want to handle it further up the call stack
      }

}

export async function searchMovie(query){
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=truee&language=en-US&page=1`;

  try {
      const response = await axios.get(url, options);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('error:', error);
      throw error; // Rethrow the error if you want to handle it further up the call stack
    }

}

export async function fetchMovieDetails(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  

  try {
    // Fetch movie details
    let detailsResponse = await axios.get(url, options);
    let details = detailsResponse.data;

    // Extract genres
    let genreString = details.genres.map(genre => genre.name).join(', ');

    // Construct result object
    const result = {
      genre: genreString,
      title: details.title,
      overview: details.overview,
      revenue: details.revenue,
      runtime: details.runtime,
      poster: details.poster_path,
    };

    // Fetch cast and crew details
    let castResponse = await axios.get(castUrl, options);
    let castData = castResponse.data;

    // Extract cast details
    let cast = castData.cast
      .filter(member => member.known_for_department === 'Acting')
      .map(member => ({
        name: member.original_name,
        photourl: member.profile_path,
      }));

    // Extract director details
    let director = castData.crew.find(
      member => member.known_for_department === 'Directing'
    );
    let directorDetails = director
      ? { name: director.original_name, photourl: director.profile_path }
      : {};

    result.cast = cast;
    result.director = directorDetails;

    return result;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error; // Re-throw the error to be handled by the calling function
  }
}