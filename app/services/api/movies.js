import axios from "axios";
import { API_KEY, BASE_URL } from "../../core/constants";

const MovieAPI = {
  // get trending movie list api
  getPopularMoviesApi(searchFilter) {
    return axios.get(`${BASE_URL}?apiKey=${API_KEY}&s=${searchFilter}`);
  },

  // get movie details by id api
  getMovieDetailsByIdApi(id) {
    return axios.get(`${BASE_URL}?apiKey=${API_KEY}&i=${id}`);
  },
};

export default MovieAPI;
