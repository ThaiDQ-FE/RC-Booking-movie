import React from "react";
import "./styles.scss";
function Banner() {
  return (
    <div className="banner__section">
      <div className="banner__background"></div>
      <div className="content__container">
        <div className="banner__content">
          <h1 className="banner__title">Bạn Chỉ Cần Đặt Vé</h1>
          <p>Mọi thứ còn lại để chúng tôi lo</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
