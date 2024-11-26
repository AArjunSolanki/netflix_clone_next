import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import PlaceholderImg from "../../assets/png/img-placeholder.png";
import "../../assets/styles/movieCard.scss";
import { MovieCardProps } from "../../types/movieInterfaces";

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.imdbID}`} className="movie-link-tag">
      <div className="movie-card">
        <div className="movie-card__image">
          <Image
            src={movie.Poster !== "N/A" ? movie.Poster : PlaceholderImg}
            alt={movie.Title}
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
