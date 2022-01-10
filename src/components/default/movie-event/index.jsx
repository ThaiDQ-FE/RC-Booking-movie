import React from "react";
import { checkPathURL } from "../../../assets/helper";
import Certification from "./certification";
import FilterMovie from "./filter";
import HomeMovieSection from "./movie";
import "./styles.scss";
function MovieEvent(props) {
  return (
    <div className="me__section">
      <div className="content__container">
        <div className="me__wrapper">
          {checkPathURL() === "/movie-all" ? (
            <FilterMovie />
          ) : (
            <Certification />
          )}

          <div className="me__movieEvent">
            <HomeMovieSection listMovie={props.listMovie} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieEvent;
