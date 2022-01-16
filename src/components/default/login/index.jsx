import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLocalStorages, showMessage } from "../../../assets/helper";
import { Images } from "../../../assets/images";
import "./styles.scss";
function Login(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    // dispatch({ type: userAction.FETCH_DATA_USER, payload: user });
    fetch("https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setLocalStorages("user", data);
        showMessage("success", "Đặng Nhập Thành Công!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
        showMessage("error", "Đăng Nhập Thất Bại!");
      });
  };
  const handleSwitch = () => {
    props.setSwitchs(false);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="lg__section"
      style={{ backgroundImage: `url(${Images.REGISTER_BACK})` }}
    >
      <div className="content__container">
        <div className="r__wrapper">
          <div className="r__area">
            <div className="r__header">
              <span>Xin Chào</span>
              <h2>Chào Mừng Trở Lại</h2>
            </div>
            <form className="r__form">
              <div className="r__formGroup">
                <label htmlFor="taiKhoan">
                  Tài Khoản<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nhập tài khoản của bạn"
                  id="taiKhoan"
                  required
                  name="taiKhoan"
                  onChange={handleChange}
                />
              </div>

              <div className="r__formGroup">
                <label htmlFor="matKhau">
                  Mật Khẩu<span>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  id="matKhau"
                  required
                  name="matKhau"
                  onChange={handleChange}
                />
              </div>

              <div className="r__formGroup check">
                <input type="checkbox" id="check" required defaultChecked />
                <label htmlFor="check">Nhớ tài khoản</label>
              </div>
              <div className="r__formGroup button">
                <span onClick={handleClick}>Đăng Nhập</span>
              </div>
            </form>
            <div className="r__option">
              Không có tài khoản? <span onClick={handleSwitch}>Đăng Ký</span>
            </div>
            <div className="r__or">
              <span>Hoặc</span>
            </div>
            <ul className="r__socials">
              <li>
                <img src={Images.FACEBOOK} alt="facebook" />
              </li>
              <li>
                <img src={Images.TWITTER} alt="twitter" />
              </li>
              <li>
                <img src={Images.GOOGLE} alt="google" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
