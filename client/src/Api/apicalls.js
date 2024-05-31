import axios from 'axios';

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
