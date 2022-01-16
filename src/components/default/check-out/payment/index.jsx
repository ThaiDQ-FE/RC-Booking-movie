import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getLocalStorage,
  getToken,
  showMessage,
} from "../../../../assets/helper";
import { Images } from "../../../../assets/images";
import axios from "axios";

function Payment() {
  const [payment, setPayment] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const checkout = getLocalStorage("checkOut");
    setPayment(checkout);
  }, []);
  const handleClick = () => {
    console.log(payment);
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      data: payment,
      headers: {
        Authorization: `Bearer ${getToken("user")}`,
      },
    })
      .then((res) => {
        showMessage("success", "Đặt Vé Thành Công!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        console.error("Error:", err);
        showMessage("error", "Đặt Vé Thất Bại!");
      });
  };
  return (
    <div className="co__left">
      <div className="co__widget">
        <h5>Thông tin liên hệ</h5>
        <form>
          <div className="co__formGroup">
            <input type="text" placeholder="Họ tên" />
          </div>
          <div className="co__formGroup">
            <input type="email" placeholder="Điền thông tin email của bạn" />
          </div>
          <div className="co__formGroup">
            <input type="number" placeholder="Điền số điện thoại của bạn" />
          </div>
          <div className="co__formGroup">
            <input type="submit" value="Tiếp Tục" className="co__btn" />
          </div>
        </form>
      </div>
      <div className="co__widget">
        <h5>Mã Khuyến Mãi</h5>
        <form>
          <div className="co__formGroup">
            <input type="text" placeholder="Nhập mã khuyến mãi" />
          </div>
          <div className="co__formGroup">
            <input type="submit" value="Xác thực" className="co__btn" />
          </div>
        </form>
      </div>
      <div className="co__widget">
        <h5>Phương Thức Thanh Toán</h5>
        <ul>
          <li className="active">
            <a href="#">
              <img src={Images.CARD} alt="card" />
              <span>Tín Dụng</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Images.CARD} alt="card" />
              <span>Ghi Nợ</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Images.PAYPALOP} alt="card" />
              <span>Paypal</span>
            </a>
          </li>
        </ul>
        <h6>Thông Tin Thẻ</h6>
        <form className="co__payment">
          <div className="co__paymentForm max">
            <label htmlFor="card1">Thông Tin Thẻ</label>
            <input type="text" id="card1" />
          </div>
          <div className="co__paymentForm max">
            <label htmlFor="card2">Tên Trên Thẻ</label>
            <input type="text" id="card2" />
          </div>
          <div className="co__paymentForm">
            <label htmlFor="card3">Ngày Hết Hạn</label>
            <input type="text" id="card3" placeholder="MM/YY" />
          </div>
          <div className="co__paymentForm">
            <label htmlFor="card4">CVV</label>
            <input type="text" id="card4" placeholder="CVV" />
          </div>
          <div className="co__paymentForm check__form">
            <input type="checkbox" id="card5" defaultChecked />
            <label htmlFor="card5">
              <span>Thanh Toán Nhanh</span>
              <span>
                Lưu thông tin thẻ này vào tài khoản Boleto của tôi và thực hiện
                thanh toán nhanh hơn.
              </span>
            </label>
          </div>
          <div className="co__paymentForm">
            <span type="btn" className="co__btn" onClick={handleClick}>
              Thanh Toán
            </span>
          </div>
        </form>
        <p className="co__noti">
          By Clicking "Make Payment" you agree to the{" "}
          <a href="#">Terms and conditions</a>
        </p>
      </div>
    </div>
  );
}

export default Payment;
