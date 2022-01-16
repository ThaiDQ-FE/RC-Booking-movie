import React from "react";
import "./styles.scss";
function BannerPlan(props) {
  return (
    <div
      className="bp__section"
      style={{ backgroundImage: `url(${props.movie.hinhAnh})` }}
    >
      <div className="content__container">
        <div className="bp__wrapper">
          <h3 className="bp__title">{props.movie.tenPhim}</h3>
          <div className="bp__tags">
            <span>genre</span>
            <span>genre</span>
            <span>genre</span>
            <span>genre</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerPlan;
