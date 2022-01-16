import React, { useState } from "react";
import { useEffect } from "react";
import { getLocalStorage } from "../../../../assets/helper";
import "./styles.scss";
function Detail() {
  const [payment, setPayment] = useState();
  const [listChair, setListChair] = useState();
  const [information, setInformation] = useState();
  useEffect(() => {
    const info = getLocalStorage("infoMovie");
    const chair = getLocalStorage("chair");
    const checkOut = getLocalStorage("checkOut");
    setPayment(checkOut);
    setListChair(chair);
    setInformation(info);
  }, []);
  const renderChair = () => {
    return listChair?.map((chair, index) => {
      return <span key={index}>{chair}</span>;
    });
  };
  const renderMoney = () => {
    let price = 0;
    if (payment) {
      for (let i = 0; i < payment.danhSachVe.length; i++) {
        price = price + +payment.danhSachVe[i].giaVe;
      }
      let convertPrice = price.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
      return <span>{convertPrice}</span>;
    }
  };
  const finalPrice = () => {
    let price = 0;
    if (payment) {
      for (let i = 0; i < payment.danhSachVe.length; i++) {
        price = price + +payment.danhSachVe[i].giaVe;
      }
      let finalPrice = price + price * 0.1;
      let convertPrice = finalPrice.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
      return <span>{convertPrice}</span>;
    }
  };
  return (
    <div className="co__right">
      <div className="co__booking">
        <h4 className="co__title">Thông Tin vé</h4>
        <h5>{information?.tenCumRap}</h5>
        <ul>
          <li>
            <div className="left">Tên Phim:</div>
            <div className="right">{information?.tenPhim}</div>
          </li>
          <li>
            <div className="left">Rạp Số:</div>
            <div className="right">{information?.tenRap}</div>
          </li>
          <li>
            <div className="left">Ngày Chiếu:</div>
            <div className="right">{information?.ngayChieu}</div>
          </li>
          <li>
            <div className="left">Giờ Chiếu:</div>
            <div className="right">{information?.gioChieu}</div>
          </li>
        </ul>
        <div className="co__hr"></div>
        <ul>
          <li>
            <div className="left">Ghế Đã Chọn</div>
            <div className="right">{renderChair()}</div>
          </li>
        </ul>
        <div className="co__hr"></div>
        <ul>
          <li>
            <div className="left">Tiền</div>
            <div className="right">{renderMoney()}</div>
          </li>
          <li>
            <div className="left">VAT</div>
            <div className="right">10%</div>
          </li>
        </ul>
        <h4 className="final">Tổng Tiền: {finalPrice()}</h4>
      </div>
    </div>
  );
}

export default Detail;
