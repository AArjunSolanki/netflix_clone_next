import React from "react";
import Link from "next/link";
import Image from "next/image";
import PlaceholderImg from "../assets/png/img-placeholder.png";
import "../assets/styles/movieCard.scss";

interface Movie {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  original_title?: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.imdbID}`} className="movie-link-tag">
      <div className="movie-card">
        <div className="movie-card__image">
          <Image
            src={movie.Poster !== "N/A" ? movie.Poster : PlaceholderImg}
            alt={movie.original_title || movie.Title}
            width={300} 
            height={450}
            className="movie-card__image-tag"
            priority
          />
        </div>
        <div className="movie-card__content">
          <h4>{movie.Title}</h4>
          <p>{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
