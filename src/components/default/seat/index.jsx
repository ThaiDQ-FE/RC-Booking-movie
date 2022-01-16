import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getLocalStorage,
  setLocalStorages,
  showMessage,
} from "../../../assets/helper";
import { Images } from "../../../assets/images";
import "./styles.scss";
function Seat(props) {
  const navigate = useNavigate();
  const { maLichChieu } = useParams();
  const [listSeat, setListSeat] = useState();
  let choose = [];
  let price = 0;
  let danhSach = [];
  useEffect(() => {
    setListSeat(props.info.danhSachGhe);
  }, []);
  const handleClick = (seat) => {
    if (!seat.daDat) {
      const filter = choose.filter((choose) => choose === +seat.tenGhe);
      if (filter.length === 0) {
        choose.push(+seat.tenGhe);
        price = price + +seat.giaVe;
        document
          .querySelector(`.s__tenGhe__${seat.tenGhe}`)
          .classList.add("s__dangChon");
        const object = {
          maGhe: seat.maGhe,
          giaVe: seat.giaVe,
        };
        danhSach.push(object);
      } else {
        for (let i = 0; i < choose.length; i++) {
          if (choose[i] === +seat.tenGhe) {
            choose.splice(i, 1);
            price = price - +seat.giaVe;
            document
              .querySelector(`.s__tenGhe__${seat.tenGhe}`)
              .classList.remove("s__dangChon");
            if (danhSach.some((e) => e.maGhe === +seat.maGhe)) {
              const index = danhSach.findIndex((e) => e.maGhe === +seat.maGhe);
              danhSach.splice(index, 1);
            }
          }
        }
      }
      console.log(danhSach);
      let convertPrice = price.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
      document.querySelector(".s__choose").innerHTML = choose;
      document.querySelector(".s__price").innerHTML = convertPrice;
    }
  };
  console.log(price);
  const handleClickBooking = () => {
    const user = getLocalStorage("user");
    if (user === null || user === undefined) {
      navigate("/dang-nhap");
    } else {
      const object = {
        maLichChieu: maLichChieu,
        danhSachVe: danhSach,
        taiKhoanNguoiDung: user.taiKhoan,
      };
      setLocalStorages("infoMovie", props.info.thongTinPhim);
      setLocalStorages("checkOut", object);
      setLocalStorages("chair", choose);
      navigate("/thanh-toan");
    }
  };
  const renderListSeat = () => {
    if (listSeat) {
      return listSeat.map((seat, index) => {
        return (
          <span
            key={index}
            className={
              setClassNameSeat(seat.daDat, seat.dangChon, seat.tenGhe) +
              ` s__seatDefault s__tenGhe__${seat.tenGhe}`
            }
            onClick={() => handleClick(seat)}
          >
            <span>{seat.tenGhe}</span>
          </span>
        );
      });
    }
  };
  const setClassNameSeat = (daDat, dangChon, tenGhe) => {
    if (daDat) {
      return "s__daDat";
    } else {
      if (dangChon) {
        return `s__dangChon_${tenGhe}`;
      } else {
        return "s__default";
      }
    }
  };
  return (
    <div className="s__section">
      <div className="content__container">
        <div className="s__screenArea">
          <h4 className="s__screen">screen</h4>
          <div className="s__screenThumb">
            <img src={Images.SCREEN_THUMB} alt="screen" />
          </div>
        </div>
        <div className="s__seat">{renderListSeat()}</div>
        <div
          className="s__preBook"
          style={{ backgroundImage: `url(${Images.QUICK_SEARCH})` }}
        >
          <div className="s__proBook">
            <div className="s__bookingItem">
              <span>Ghế Bạn Đã Chọn</span>
              <h3 className="s__choose"></h3>
            </div>
            <div className="s__bookingItem">
              <span>Tổng Giá Tiền</span>
              <h3 className="s__price"></h3>
            </div>
            <div className="s__bookingItem">
              <span className="s__booking" onClick={handleClickBooking}>
                Đặt Vé
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seat;
