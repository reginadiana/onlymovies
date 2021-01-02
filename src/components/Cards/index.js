import React, { useContext } from "react";
import posterIt from "../../assets/poster.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../../context";
import BestMovies from "../BestMovies/index";

const Cards = ({ movies }) => {
  const { search } = useContext(Context);

  const renderMovies = () => {
    return movies.map(({ title }) => {
      var foundSearch = title.toUpperCase().includes(search);

      if (foundSearch) {
        return (
          <div>
            <li>{title}</li>
            <img src={posterIt} alt="Poster do filme" />
          </div>
        );
      }

      return null;
    });
  };

  return (
    <>
      <BestMovies movies={movies} />

      <div>{renderMovies()}</div>
    </>
  );
};

export default Cards;
