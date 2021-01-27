import "./index.scss";

import Button from "../Button";

function Card({ image, title, description, toggleFavorite, favorites, id }) {
  return (
    <div className="card">
      <div className="card__container">
        <img className="card__img" src={image} alt={title}></img>
      </div>
      <div className="card__content">
        <h4 className="card__title">{title}</h4>
        <p className="card__dscrip">{description}</p>
        <Button
          onClick={() => {
            toggleFavorite(id);
          }}
          isTransperent={favorites.includes(id) ? true : false}
        >
          {favorites.includes(id) ? "Remove💔" : "Favorite"}
        </Button>
      </div>
    </div>
  );
}

export default Card;
