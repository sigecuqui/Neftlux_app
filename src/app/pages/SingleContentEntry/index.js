import { useRef, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import "./index.scss";
import useFetch from "../../hooks/useFetch";
import { Button, Modal } from "../../components";

function SingleContentEntry({
  loading,
  movies,
  token,
  onSuccess,
  onFailure,
  onStart,
  favorites,
  toggleFavorite,
}) {
  console.log(movies)
  const { itemId } = useParams();
  const movie = movies.filter((movie) => movie.id === itemId)[0];

  const fetchOptions = useRef({
    headers: { authorization: token },
  });
  console.log(`this is movie ${movie}`);

  useFetch({
    url: `https://academy-video-api.herokuapp.com/content/items/${itemId}`,
    fetchOptions: fetchOptions.current,
    onStart,
    onSuccess,
    onFailure,
    condition: !movie,
  });

  const [modal, toggleModal] = useState(false);
  
  return (
    <>
      <article className="content">
        <section className="content__wrapper">
          {loading && <p>Loading...</p>} 
          {movie && <div className="movie"> 
            <img
              className="movie__image"
              src={movie.image}
              alt={`${movie.title}_image`}
            />
            <div className="movie__content">
              <h1 className="movie__title">{movie.title}</h1>
              <p className="movie__descrip">{movie.description}</p>
              <Button
                onClick={() => {
                  toggleFavorite(movie.id);
                }}
                isTransperent={favorites.includes(movie.id) ? true : false}
              >
                {favorites.includes(movie.id) ? "Remove 👌🏻" : "Favorite"}
              </Button>
              <Button
                onClick={() => {
                  toggleModal(true);
                }}
              >
                Watch
              </Button>
            </div>
          </div>
          }
          {modal && (
            <Modal
              toggleModal={toggleModal}
              id={movie.id}
              video={movie.video}
            />
          )}
        </section>
      </article>
    </>
  );
}

function mapState({ content, auth }) {
  return {
    favorites: content.favorites,
    movies: content.movies.data,
    token: auth.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onStart: () => {
      dispatch({ type: "GET_SINGLE_MOVIE" });
    },
    onSuccess: (json) => {
      dispatch({ type: "GET_SINGLE_MOVIE_SUCCESS", payload: json });
    },
    onFailure: (error) => {
      dispatch({ type: "GET_SINGLE_MOVIE_FAILURE", payload: error });
    },
    toggleFavorite: (id) => {
      dispatch({ type: "TOGGLE_FAVORITE", payload: id });
    },
  };
}

export default connect(mapState, mapDispatchToProps)(SingleContentEntry);