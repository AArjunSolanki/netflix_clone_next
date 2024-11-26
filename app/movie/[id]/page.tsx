"use client"
import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import PlaceholderImg from "../../assets/png/img-placeholder.png";
import { formatDate } from "../../core/utils";
import { toast } from "react-toastify";
import CircularProgressWithLabel from "../../components/UserScore";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailsById } from "../../redux/actions/moviesAction";
import "../../assets/styles/movieDetails.scss";
import { RootState, AppDispatch } from "../../redux/store";


const MovieDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);

  const dispatch: AppDispatch = useDispatch();
  const { movieDetails, loading } = useSelector((state: RootState) => state.movies);

  const getMovieDetails = useCallback(
    (movieId: string) => {
      dispatch(getMovieDetailsById(movieId))
        .unwrap()
        .catch((err: Error) => {
          console.error("Error fetching movie details:", err);
          toast.error(err.message);
        });
    },
    [dispatch]
  );

  useEffect(() => {
    if (id && typeof id === "string") {
      getMovieDetails(id);
    }
  }, [id, getMovieDetails]);

  return (
    <div className="movie-details">
      <div className="container">
        {loading ? (
          <div className="movie-details__loader">Loading...</div>
        ) : (
          <>
            {movieDetails ? (
              <div className="movie-details__content">
                <div className="movie-details__poster">
                  <Image
                    src={
                      movieDetails?.Poster !== "N/A"
                        ? movieDetails?.Poster
                        : PlaceholderImg
                    }
                    alt={movieDetails?.Title || "Movie Poster"}
                    className="movie-details__poster-image"
                    width={300}
                    height={450}
                    layout="responsive"
                    priority
                  />
                  <div className="movie-details__rating">
                    <CircularProgressWithLabel value={movieDetails.imdbRating} />

                    <h2 className="movie-details__title">{movieDetails?.Title}</h2>
                    <div className="movie-details__plot">{movieDetails?.Plot}</div>
                    <div className="movie-details__info">
                      <strong>Release date:</strong> {movieDetails?.Released}
                    </div>
                    <div className="movie-details__info">
                      <strong>Runtime:</strong> {movieDetails?.Runtime}
                    </div>
                    <div className="movie-details__overview">
                      {movieDetails?.Ratings?.map((rate, index) => (
                        <div key={index}>
                          <div>
                            <strong>Source:</strong> {rate.Source}
                          </div>
                          <div>
                            <strong>Value:</strong> {rate.Value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="movie-details__not-found">Data Not Found!</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
