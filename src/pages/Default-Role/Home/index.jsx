import React, { useEffect } from "react";
import Banner from "../../../components/default/banner";
import Footer from "../../../components/default/footer";
import Header from "../../../components/default/header";
import QuickSearch from "../../../components/default/quick-search";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../../../redux/action/movieAction";
import MovieEvent from "../../../components/default/movie-event";
import { messText } from "../../../assets/mess";
import { changeStatusLoading } from "../../../redux/slices/assetSlice";
import Loading from "../../../components/loading";
import { register } from "../../../redux/sagas/child/userSage";
function HomePage() {
  const dispatch = useDispatch();
  const { listOfMovies } = useSelector((state) => state.movie);
  const { loading } = useSelector((state) => state.asset);
  useEffect(() => {
    dispatch(changeStatusLoading(true));
    dispatch({ type: movieAction.FETCH_DATA_SAGA });
  }, []);
  return (
    <div className="hp__wrapper">
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Banner
            title={messText.banner_home_title}
            text={messText.banner_home_text}
          />
          <QuickSearch listMovie={listOfMovies} />
          <MovieEvent listMovie={listOfMovies} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default HomePage;
