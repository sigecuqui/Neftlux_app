import React from "react";

import Hero from "../components/Hero";
import Divider from "../components/Divider";
import Card from "../components/Card";
import Button from "../components/Button";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch("https://academy-video-api.herokuapp.com/content/free-items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ movies: data });
      });
  }

  render() {
    const { movies } = this.state;
    const { favorites, toggleFavorite } = this.props;
    return (
      <>
        <Hero />
        <Divider />
        <article className="content">
          <section className="content__wrapper">
            <div className="content__movies">
              {movies.map((movie) => {
                if (movies.length < 0) {
                  return <p>Loading...</p>;
                }

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
}

export default Home;