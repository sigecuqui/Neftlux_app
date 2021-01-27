import React from "react";
import "./index.scss";

import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Card from "./components/Card";
import Button from "./components/Button";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      favorites: [],
    };
  }

  toggleFavorite = (id) => {
    const { favorites } = this.state;
    if (favorites.includes(id)) {
      this.setState({
        favorites: favorites.filter((favorite) => favorite !== id),
      });
    } else {
      this.setState({ favorites: favorites.concat(id) });
    }
  };

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
    console.log(this.state.favorites);
    const { movies, favorites } = this.state;
    return (
      <Layout>
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
                    toggleFavorite={this.toggleFavorite}
                    favorites={favorites}
                  />
                );
              })}
            </div>
            <Button size="large">Get More Content</Button>
          </section>
        </article>
      </Layout>
    );
  }
}

export default App;
