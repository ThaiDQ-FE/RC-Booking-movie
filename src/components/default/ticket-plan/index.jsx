import React, { useState } from "react";
import Warning from "../warning";
import moment from "moment";
import "./styles.scss";
import { setLocalStorages } from "../../../assets/helper";
function TicketPlanComponent(props) {
  const [warning, setWarning] = useState(false);
  const [maLichChieu, setMaLichChieu] = useState();
  const handleClick = (item) => {
    console.log(item);
    setWarning(true);
    setMaLichChieu(item.maLichChieu);
    setLocalStorages("thoiLuong", item.thoiLuong);
  };
  const renderTime = (time) => {
    return time.map((item, index) => {
      var date = moment(item.ngayChieuGioChieu).format("DD-MM-YYYY hh:mm");
      return (
        <span
          className="tp__bookingTime"
          key={index}
          onClick={() => handleClick(item)}
        >
          {date}
        </span>
      );
    });
  };
  const renderCinema = (cinema) => {
    return cinema.map((item, index) => {
      return (
        <div className="tp__contentWrapper" key={index}>
          <div className="tp__cinema">{item.tenCumRap}</div>
          <div className="tp__time">{renderTime(item.lichChieuPhim)}</div>
        </div>
      );
    });
  };
  const renderFinal = () => {
    return props.showTime?.map((item, index) => {
      return (
        <li key={index} className="tp__li">
          <div className="tp__logo">
            <div className="tp__logoName">
              <img src={item.logo} alt="logo" />
              <p>{item.maHeThongRap}</p>
            </div>
          </div>
          <div className="tp__content">{renderCinema(item.cumRapChieu)}</div>
        </li>
      );
    });
  };
  return (
    <div className="tp__section">
      {warning === true ? (
        <Warning setWarning={setWarning} maLichChieu={maLichChieu} />
      ) : (
        <></>
      )}
      <div className="content__container">
        <ul className="tp__ul">{renderFinal()}</ul>
      </div>
    </div>
  );
}

export default TicketPlanComponent;
