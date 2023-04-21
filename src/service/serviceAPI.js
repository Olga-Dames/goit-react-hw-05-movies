import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    api_key: 'e2aff662c395c2714c9c8f21667cff02',
  };

  const fetchTrendingMovies = async () => {
      const response= await axios.get('/trending/all/day'); 
      return response.data.results
    } 

  const fetchSearchedMovie = async (query) => {
    const response = await axios.get(`/search/movie?query=${query}`);
    return response.data
   }

   const fetchMovieById = async (id) => {
    const response = await axios.get(`/movie/${id}`);
    return response.data
   }

   const fetchCast = async (id) => {
    const response = await axios.get(`/movie/${id}/credits`);
    return response.data
   }

   const fetchReviews = async (id) => {
    const response = await axios.get(`/movie/${id}/reviews`);
    return response.data
   }
   
  const api = {
    fetchTrendingMovies,
    fetchSearchedMovie,
    fetchMovieById,
    fetchCast,
    fetchReviews
  };
  
  export default api;