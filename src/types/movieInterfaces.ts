export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieDetails {
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

export interface APIError {
  message: string;
}

export interface MoviesState {
  loading: boolean;
  popularMovieList: Movie[];
  totalPopularMoviesPages: number;
  popularMoviePageNo: number;
  movieDetails: MovieDetails | null;
  movieCreditDetails: any | null;
}

export interface NavItem {
  label: string;
  link: string;
}

export interface MovieCardProps {
  movie: Movie;
}

export interface CircularProgressWithLabelProps {
  value: string;
}
