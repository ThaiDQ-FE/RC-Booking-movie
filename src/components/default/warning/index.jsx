import React from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, removeLocalStorage } from "../../../assets/helper";
import { Images } from "../../../assets/images";
import "./styles.scss";
function Warning(props) {
  const navigate = useNavigate();
  const handleClose = () => {
    props.setWarning(false);
    removeLocalStorage("thoiLuong");
  };
  const handleClick = () => {
    navigate(`/seat-plan/${props.maLichChieu}`);
  };
  return (
    <div className="w__section">
      <div className="w__lay"></div>
      <div className="w__item">
        <h6>Chào Mừng!</h6>
        <h4>Lựa Chọn Ghế Ngồi</h4>
        <div className="w__thumb">
          <img src={Images.SEAT_PLAN} alt="seat plan" />
        </div>
        <div className="w__buttons">
          <div className="w__button" onClick={handleClose}>
            Quay Lại
          </div>
          <div className="w__button" onClick={handleClick}>
            Chọn Ghế
          </div>
        </div>
      </div>
    </div>
  );
}

export default Warning;
