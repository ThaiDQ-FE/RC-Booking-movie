import React from "react";
import { Images } from "../../../assets/images";
import "./styles.scss";
function Footer() {
  return (
    <div className="footer__section">
      <div className="footer__wrapper">
        <div className="content__container">
          <div className="footer__background">
            <div className="wrapper__footer">
              <h5 className="footer__subs">Đăng ký Boleto</h5>
              <h3 className="footer__title">
                để nhận được những lợi ích độc quyền
              </h3>
              <form className="footer__form">
                <input type="text" placeholder="Địa Chỉ Email Của Bạn" />
                <button type="submit" disabled>
                  Đăng Ký
                </button>
              </form>
              <p>
                Chúng tôi tôn trọng quyền riêng tư của bạn, vì vậy chúng tôi
                không bao giờ chia sẻ thông tin của bạn
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content__container">
        <div className="footer__final">
          <div className="footer__logo">
            <img src={Images.TICKET} alt="logo" />
          </div>
          <div className="footer__copyright">
            Copyright © 2020.All Rights Reserved By Boleto
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
