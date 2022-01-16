import React, { useState } from "react";
import { useEffect } from "react";
import { showMessage } from "../../../assets/helper";
import { Images } from "../../../assets/images";
import "./styles.scss";
function Register(props) {
  const handleSwitch = () => {
    props.setSwitchs(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
    nhapLaiMatKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleClick = () => {
    if (user.matKhau !== user.nhapLaiMatKhau) {
      return showMessage("error", "Nhập lại mật khẩu không chính xác!");
    } else {
      const object = {
        taiKhoan: user.taiKhoan,
        matKhau: user.matKhau,
        email: user.email,
        soDt: user.soDt,
        maNhom: user.maNhom,
        maLoaiNguoiDung: user.maLoaiNguoiDung,
        hoTen: user.hoTen,
      };
      fetch("https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          showMessage("success", "Đặng Ký Thành Công!");
          setTimeout(() => {
            props.setSwitchs(true);
          }, 2000);
        })
        .catch((error) => {
          console.error("Error:", error);
          showMessage("error", "Đăng Ký Thất Bại!");
        });
    }
  };

  return (
    <div
      className="r__section"
      style={{ backgroundImage: `url(${Images.REGISTER_BACK})` }}
    >
      <div className="content__container">
        <div className="r__wrapper">
          <div className="r__area">
            <div className="r__header">
              <span>Chào Mừng</span>
              <h2>đến với Boleto</h2>
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
                <label htmlFor="email">
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  id="email"
                  required
                  name="email"
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

              <div className="r__formGroup">
                <label htmlFor="nhapLaiMatKhau">
                  Nhập Lại Mật Khẩu<span>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  id="nhapLaiMatKhau"
                  required
                  name="nhapLaiMatKhau"
                  onChange={handleChange}
                />
              </div>
              <div className="r__formGroup">
                <label htmlFor="hoTen">
                  Họ và Tên<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nhập họ và tên"
                  id="hoTen"
                  required
                  name="hoTen"
                  onChange={handleChange}
                />
              </div>
              <div className="r__formGroup">
                <label htmlFor="soDienThoai">
                  Số Điện Thoại<span>*</span>
                </label>
                <input
                  type="number"
                  placeholder="Nhập số điện thoại"
                  id="soDienThoai"
                  required
                  name="soDt"
                  onChange={handleChange}
                />
              </div>
              <div className="r__formGroup check">
                <input type="checkbox" id="check" required defaultChecked />
                <label htmlFor="check">
                  Tôi đồng ý với các{" "}
                  <span>Điều Khoản, Chính Sách Bảo Mật </span>
                  và <span>Phí</span>
                </label>
              </div>
              <div className="r__formGroup button">
                <span onClick={handleClick}>Đăng Ký</span>
              </div>
            </form>
            <div className="r__option">
              Đã có tài khoản? <span onClick={handleSwitch}>Đăng Nhập</span>
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

export default Register;
