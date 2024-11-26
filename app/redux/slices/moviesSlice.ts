import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getMovieDetailsById,
  getPopularMovieByName,
  getPopularMovieList,
} from "../actions/moviesAction";

// Define the types for the state structure
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

interface MoviesState {
  loading: boolean;
  popularMovieList: Movie[];
  totalPopularMoviesPages: number;
  popularMoviePageNo: number;
  movieDetails: MovieDetails | null;
  movieCreditDetails: any | null; // Replace `any` with the actual type if available
}

const initialState: MoviesState = {
  loading: false,
  popularMovieList: [],
  totalPopularMoviesPages: 0,
  popularMoviePageNo: 1,
  movieDetails: null,
  movieCreditDetails: null,
};

// Create the slice
const MoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setPopularMoviePageNo: (state, action: PayloadAction<number>) => {
      state.popularMoviePageNo = action.payload;
    },
    setTotalPopularMoviesPages: (state, action: PayloadAction<number>) => {
      state.totalPopularMoviesPages = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Fetch popular movie list
    builder.addCase(getPopularMovieList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getPopularMovieList.fulfilled,
      (state, action: PayloadAction<{ Search: Movie[] } | undefined>) => {
        state.loading = false;
        state.popularMovieList = action.payload?.Search || [];
      }
    );
    builder.addCase(getPopularMovieList.rejected, (state) => {
      state.loading = false;
    });

    // Fetch movie by name
    builder.addCase(getPopularMovieByName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getPopularMovieByName.fulfilled,
      (state, action: PayloadAction<{ Search: Movie[] } | undefined>) => {
        state.loading = false;
        state.popularMovieList = action.payload?.Search || [];
      }
    );
    builder.addCase(getPopularMovieByName.rejected, (state) => {
      state.loading = false;
    });

    // Fetch movie details by ID
    builder.addCase(getMovieDetailsById.pending, (state) => {
      state.loading = true;
      state.movieDetails = null;
    });
    builder.addCase(
      getMovieDetailsById.fulfilled,
      (state, action: PayloadAction<MovieDetails>) => {
        state.loading = false;
        state.movieDetails = action.payload;
      }
    );
    builder.addCase(getMovieDetailsById.rejected, (state) => {
      state.loading = false;
      state.movieDetails = null;
    });
  },
});

export const { setPopularMoviePageNo, setTotalPopularMoviesPages } =
  MoviesSlice.actions;

export default MoviesSlice.reducer;
