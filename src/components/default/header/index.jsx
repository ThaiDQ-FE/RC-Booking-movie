import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
import { getLocalStorage, removeLocalStorage } from "../../../assets/helper";
import { Images } from "../../../assets/images";
import "./styles.scss";
function Header() {
  const navigate = useNavigate();
  window.onscroll = function (e) {
    const headerSection = document.querySelector(".header__section");
    if (e.path[1].scrollY > 0) {
      headerSection.classList.add("header__active");
    } else {
      headerSection.classList.remove("header__active");
    }
  };

  const handleClick = () => {
    navigate("/dang-nhap");
    removeLocalStorage("user");
  };
  const user = getLocalStorage("user");
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
              {user ? (
                <div className="header__login">
                  <span>{user.hoTen}</span>
                  <img
                    src={Images.POWER_ON}
                    alt="logout"
                    onClick={handleClick}
                  />
                </div>
              ) : (
                <NavLink to="/dang-nhap" className="header__join">
                  Tham Gia
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
