import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messText } from "../../../assets/mess";
import Banner from "../../../components/default/banner";
import Footer from "../../../components/default/footer";
import Header from "../../../components/default/header";
import MovieEvent from "../../../components/default/movie-event";
import QuickSearch from "../../../components/default/quick-search";
import { movieAction } from "../../../redux/action/movieAction";

function MovieAll() {
  const dispatch = useDispatch();
  const { listOfMovies } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch({ type: movieAction.FETCH_DATA_SAGA });
  }, []);
  return (
    <div className="ma__wrapper">
      <Header />
      <Banner
        title={messText.banner_all_title}
        text={messText.banner_all_text}
      />
      <QuickSearch listMovie={listOfMovies} />
      <MovieEvent listMovie={listOfMovies} />
      <Footer />
    </div>
  );
}

export default MovieAll;
