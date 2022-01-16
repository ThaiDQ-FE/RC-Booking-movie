import React from "react";
import moment from "moment";
import "./styles.scss";
import { showMessage } from "../../../assets/helper";
function Line(props) {
  const renderDate = () => {
    if (props.info.thongTinPhim) {
      let convertDate = moment(
        props.info.thongTinPhim.ngayChieu,
        "dd/mm/yyyy"
      ).format("dddd, MMM DD YYYY");
      return convertDate;
    }
  };
  const renderTime = () => {
    if (props.info.thongTinPhim) {
      return <>{props.info.thongTinPhim.gioChieu}</>;
    }
  };
  const countDownTime = (duration, display) => {
    let timer = duration,
      minutes,
      seconds;
    var countDown = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;
      if (--timer < 0) {
        clearInterval(countDown);
        showMessage("error", "Đã quá hạn! Vui lòng thử lại");
      }
    }, 1000);
  };
  // window.onload = function () {
  //   let time = 60 * 3,
  //     display = document.querySelector("#countdowntime");
  //   countDownTime(time, display);
  // };
  return (
    <div className="l__section">
      <div className="content__container">
        <div className="l__flex">
          <div className="l__item l__item-1">
            <div>Quay Lại</div>
          </div>
          <div className="l__item l__item-2">
            <span className="l__date">{renderDate()}</span>
            <span className="l__time">{renderTime()}</span>
          </div>
          <div id="countdowntime" className="l__item l__item-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Line;
