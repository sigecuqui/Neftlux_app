import useFetch from "../../hooks/useFetch";

import { Hero, Divider, Card, Button } from "../../components";

function Home({ favorites, toggleFavorite }) {
  const { loading, payload: movies = [] } = useFetch(
    "https://academy-video-api.herokuapp.com/content/free-items"
  );

  return (
    <>
      <Hero />
      <Divider />
      <article className="content">
        <section className="content__wrapper">
          <div className="content__movies">
            {loading && <p>Loading...</p>}
            {movies.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  image={movie.image}
                  title={movie.title}
                  description={movie.description}
                  id={movie.id}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                />
              );
            })}
          </div>
          <Button size="large">Get More Content</Button>
        </section>
      </article>
    </>
  );
}

export default Home;