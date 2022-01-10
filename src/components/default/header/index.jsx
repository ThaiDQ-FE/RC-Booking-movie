import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import { Images } from "../../../assets/images";
import "./styles.scss";
function Header() {
  window.onscroll = function (e) {
    const headerSection = document.querySelector(".header__section");
    if (e.path[1].scrollY > 0) {
      headerSection.classList.add("header__active");
    } else {
      headerSection.classList.remove("header__active");
    }
  };
  return (
    <div className="header__section">
      <div className="content__container">
        <div className="header__wrapper">
          <div className="header__logo">
            <NavLink className="header__link" to="/">
              <img src={Images.TICKET} alt="logo" />
            </NavLink>
          </div>
          <ul className="header__menu">
            <li>
              <NavLink to="/">Trang Chủ</NavLink>
            </li>
            <li>
              <NavLink to="/">Phim</NavLink>
            </li>
            <li>
              <NavLink to="/">Sự Kiện</NavLink>
            </li>
            <li>
              <NavLink to="/">Liên Hệ</NavLink>
            </li>
            <li>
              <NavLink to="/" className="header__join">
                Tham Gia
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
