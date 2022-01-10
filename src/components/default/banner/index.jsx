import React from "react";
import "./styles.scss";
function Banner(props) {
  return (
    <div className="banner__section">
      <div className="banner__background"></div>
      <div className="content__container">
        <div className="banner__content">
          <h1 className="banner__title">{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
