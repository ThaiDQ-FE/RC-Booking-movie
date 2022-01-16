import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Images } from "../../../assets/images";
import "./styles.scss";
function QuickBooking(props) {
  const navigate = useNavigate();
  const handleClick = (maPhim) => {
    navigate(`/ticket-plan/${maPhim}`);
  };
  return (
    <div className="qb__section">
      <div className="content__container">
        <div className="qb__wrapper">
          <div className="qb__side">
            <div className="qb__item">
              <div className="qb__itemHeader">
                <div className="qb__thumb">
                  <img src={Images.TOMATO2} alt="tomato" />
                </div>
                <div className="qb__counter">
                  <span>88%</span>
                </div>
              </div>
              <p>Đánh Giá Tệ</p>
            </div>
            <div className="qb__item">
              <div className="qb__itemHeader">
                <div className="qb__thumb">
                  <img src={Images.CAKE2} alt="cake" />
                </div>
                <div className="qb__counter">
                  <span>88%</span>
                </div>
              </div>
              <p>Đánh Giá Tốt</p>
            </div>
            <div className="qb__item">
              <div className="qb__itemHeader">
                <div className="qb__counter">
                  <span>5.0</span>
                </div>
                <div className="qb__thumb qb__heart">
                  <img src={Images.HEART} alt="cake" />
                  <img src={Images.HEART} alt="cake" />
                  <img src={Images.HEART} alt="cake" />
                  <img src={Images.HEART} alt="cake" />
                  <img src={Images.HEART} alt="cake" />
                </div>
              </div>
              <p>Đánh Giá Của Người Xem</p>
            </div>
          </div>
          <div
            className="qb__booking"
            onClick={() => handleClick(props.movie.maPhim)}
          >
            Đặt vé
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickBooking;
