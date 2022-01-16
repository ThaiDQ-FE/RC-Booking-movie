import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailBanner from "../../../components/default/detail-banner";
import Footer from "../../../components/default/footer";
import Header from "../../../components/default/header";
import InforMovie from "../../../components/default/infor-movie";
import QuickBooking from "../../../components/default/quick-booking";
import Loading from "../../../components/loading";
import { movieAction } from "../../../redux/action/movieAction";
import "./styles.scss";
function MovieDetail(props) {
  const dispatch = useDispatch();
  const { detailMovie } = useSelector((state) => state.movie);
  const { maPhim } = useParams();
  const { loading } = useSelector((state) => state.asset);
  useEffect(() => {
    dispatch({ type: movieAction.FETCH_DETAIL_MOVIE_SAGA, payload: maPhim });
  }, []);
  return (
    <div className="detailm__wrapper">
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <Header />
          <DetailBanner movie={detailMovie} />
          <QuickBooking movie={detailMovie} />
          <InforMovie movie={detailMovie} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default MovieDetail;
