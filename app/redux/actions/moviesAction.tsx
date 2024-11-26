import { createAsyncThunk } from "@reduxjs/toolkit";
import MovieAPI from "../../services/api/movies";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface APIError {
  message: string;
}

// get popular movie list
export const getPopularMovieList = createAsyncThunk<
  { Search: Movie[] },
  string,
  { rejectValue: APIError }
>("popular-movie-list", async (searchFilter, { rejectWithValue }) => {
  try {
    const response = await MovieAPI.getPopularMoviesApi(searchFilter);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue({ message: error.response.data.message });
    } else {
      return rejectWithValue({ message: error.message });
    }
  }
});

// get movie details by id
export const getMovieDetailsById = createAsyncThunk<
  MovieDetails,
  string,
  { rejectValue: APIError }
>("movie-details", async (id, { rejectWithValue }) => {
  try {
    const response = await MovieAPI.getMovieDetailsByIdApi(id);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue({ message: error.response.data.message });
    } else {
      return rejectWithValue({ message: error.message });
    }
  }
});

// get movie by name
export const getPopularMovieByName = createAsyncThunk<
  { Search: Movie[] },
  string,
  { rejectValue: APIError }
>("popular-movie-by-name", async (searchFilter, { rejectWithValue }) => {
  try {
    const response = await MovieAPI.getPopularMoviesApi(searchFilter);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue({ message: error.response.data.message });
    } else {
      return rejectWithValue({ message: error.message });
    }
  }
});
