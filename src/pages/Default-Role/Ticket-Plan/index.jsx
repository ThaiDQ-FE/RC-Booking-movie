import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BannerPlan from "../../../components/default/banner-plan";
import Header from "../../../components/default/header";
import Footer from "../../../components/default/footer";
import TicketPlanComponent from "../../../components/default/ticket-plan";
import { movieAction } from "../../../redux/action/movieAction";

function TicketPlan() {
  const dispatch = useDispatch();
  const { detailMovie, informationShowTimes } = useSelector(
    (state) => state.movie
  );
  const { maPhim } = useParams();
  useEffect(() => {
    dispatch({ type: movieAction.FETCH_DETAIL_MOVIE_SAGA, payload: maPhim });
    dispatch({
      type: movieAction.FETCH_INFORMATION_SHOW_TIMES,
      payload: maPhim,
    });
  }, []);
  return (
    <div className="tp__wrapper">
      <Header />
      <BannerPlan movie={detailMovie} />
      <TicketPlanComponent
        showTime={informationShowTimes.heThongRapChieu}
        tenPhim={informationShowTimes.tenPhim}
      />
      <Footer />
    </div>
  );
}

export default TicketPlan;
