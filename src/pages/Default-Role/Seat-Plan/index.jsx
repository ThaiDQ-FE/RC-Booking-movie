import React, { useEffect } from "react";
import Header from "../../../components/default/header";
import Footer from "../../../components/default/footer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../../../redux/action/movieAction";
import BannerPlan from "../../../components/default/banner-plan";
import Seat from "../../../components/default/seat";
import Line from "../../../components/default/line";
import Loading from "../../../components/loading";
import { changeStatusLoading } from "../../../redux/slices/assetSlice";
function SeatPlan() {
  const dispatch = useDispatch();
  const { informationSeat, detailMovie } = useSelector((state) => state.movie);
  const { loading } = useSelector((state) => state.asset);
  const { maLichChieu } = useParams();
  useEffect(() => {
    dispatch(changeStatusLoading(true));
    dispatch({
      type: movieAction.FETCH_INFORMATION_SEAT,
      payload: maLichChieu,
    });
  }, []);
  return (
    <div className="sp__wrapper">
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <Header />
          <BannerPlan movie={detailMovie} />
          <Line info={informationSeat} />
          <Seat info={informationSeat} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default SeatPlan;
