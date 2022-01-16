import React, { useState } from "react";
import { Images } from "../../../assets/images";
import VideoPopup from "../video-popup";
import "./styles.scss";
function DetailBanner(props) {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      className="db__section"
      style={{ backgroundImage: `url(${props.movie.hinhAnh})` }}
    >
      <div className="content__container">
        <div className="db__wrapper">
          <div className="db__thumb">
            <img src={props.movie.hinhAnh} alt="hinh anh" />
            <div className="db__play" onClick={showModal}>
              <img src={Images.VIDEO} alt="play" />
            </div>
          </div>
          <div className="db__content">
            <div className="db__title">{props.movie.tenPhim}</div>
            <div className="db__tags">
              <ul>
                <li>genre,</li>
                <li>genre</li>
              </ul>
            </div>
            <span className="db__type">Genre</span>
            <div className="db__time">
              <img src={Images.CALENDAR} alt="calendar" />
              <span>{props.movie.ngayKhoiChieu}</span>
            </div>
          </div>
        </div>
      </div>
      <VideoPopup
        open={open}
        handleClose={handleClose}
        trailer={props.movie.trailer}
      />
    </div>
  );
}

export default DetailBanner;
