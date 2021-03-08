import { useRef, useState } from "react";
import { useParams } from "react-router-dom";

import "./index.scss";
import useFetch from "../../hooks/useFetch";
import { Button, Modal } from "../../components";

function SingleContentEntry({ favorites, toggleFavorite }) {
  const { itemId } = useParams();

  const fetchOptions = useRef({
    headers: { authorization: localStorage.getItem("token") },
  });
  const { loading, payload: movie = [] } = useFetch(
    `https://academy-video-api.herokuapp.com/content/items/${itemId}`,
    fetchOptions.current
  );
  const [modal, toggleModal] = useState(false);

  console.log(movie);

  return (
    <>
      <article className="content">
        <section className="content__wrapper">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="movie">
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
          )}
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

export default SingleContentEntry;