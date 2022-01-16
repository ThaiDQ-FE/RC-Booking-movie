import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Images } from "../../../assets/images";
import moment from "moment";
import { Select, Button } from "antd";
import "antd/dist/antd.css";
import "./styles.scss";
import { movieAction } from "../../../redux/action/movieAction";
import { setLocalStorages } from "../../../assets/helper";
function QuickSearch(props) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.asset);
  const { heThongRapChieu } = useSelector(
    (state) => state.movie.informationOfMovie
  );

  const { Option } = Select;
  const listName = [];
  const listTime = {};
  const listCinema = [];
  const listFinalTime = [];
  const [cinema, setCinema] = useState();
  const [count, setCount] = useState(0);
  for (let i = 0; i < props.listMovie.length; i++) {
    listName.push(
      <Option
        key={props.listMovie[i].tenPhim}
        value={props.listMovie[i].maPhim}
      >
        {props.listMovie[i].tenPhim}
      </Option>
    );
  }
  function handleChange(value) {
    setLocalStorages("nameMovie", value);
    dispatch({
      type: movieAction.FETCH_INFORMATION_MOVIE_SAGA,
      payload: value,
    });
    setCount(1);
  }
  const handleChangeCinema = (value) => {
    setCinema(value);
    setLocalStorages("cinema", value);
    setCount(2);
  };
  const handleChangeTime = (value) => {
    setLocalStorages("time", value);
    setCount(3);
  };
  if (heThongRapChieu) {
    for (let i = 0; i < heThongRapChieu.length; i++) {
      for (let j = 0; j < heThongRapChieu[i].cumRapChieu.length; j++) {
        listCinema.push(heThongRapChieu[i].cumRapChieu[j].tenCumRap);
        const time = [];
        for (
          let k = 0;
          k < heThongRapChieu[i].cumRapChieu[j].lichChieuPhim.length;
          k++
        ) {
          const timeFor =
            heThongRapChieu[i].cumRapChieu[j].lichChieuPhim[k]
              .ngayChieuGioChieu;
          var date = moment(timeFor).format("DD-MM-YYYY hh:mm");
          time.push(date);
          const name = heThongRapChieu[i].cumRapChieu[j].tenCumRap;
          listTime[name] = time;
        }
      }
    }
  }
  const handleRenderTime = () => {
    if (listCinema) {
      for (const key in listTime) {
        if (key === cinema) {
          return listTime[key].map((item, index) => {
            return <Option key={index}>{item}</Option>;
          });
        }
      }
    }
  };
  // <Option key={listTime[key]}>{listTime[key]}</Option>
  console.log(listTime);

  return (
    <div className="qs__section padding-top">
      <div className="content__container">
        <div className="qs__tab">
          <div className="qs__titleAndIcon">
            <div className="qs__title">
              <div className="qs__header">
                <h6 className="qs__category">Chào mừng đến với BOLETO</h6>
                <h3 className="qs__titles">Bạn đang tìm kiếm ...</h3>
              </div>
            </div>
            <div className="qs__icon">
              <ul className="qs__tabs">
                <li className="qs__active">
                  <div className="qs__thumbnail">
                    <img src={Images.MOVIE_TAB} alt="movie-tab" />
                  </div>
                  <span>movie</span>
                </li>
                <li>
                  <div className="qs__thumbnail">
                    <img src={Images.EVENT_TAB} alt="event-tab" />
                  </div>
                  <span>event</span>
                </li>
                <li>
                  <div className="qs__thumbnail">
                    <img src={Images.SPORT_TAB} alt="sport-tab" />
                  </div>
                  <span>sport</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="qs__quickSearch">
            <div className="qs__name">
              <Select
                size="large"
                onChange={handleChange}
                placeholder="Hãy chọn phim"
                bordered={false}
              >
                {listName}
              </Select>
            </div>
            <div className="qs__rap">
              <img src={Images.CINEMA} alt="cinema" />
              <Select
                size="large"
                onChange={handleChangeCinema}
                placeholder="Hãy chọn rạp"
                bordered={false}
                loading={loading}
                disabled={loading}
              >
                {listCinema.map((cinema) => (
                  <Option key={cinema}>{cinema}</Option>
                ))}
              </Select>
            </div>
            <div className="qs__time">
              <img src={Images.DATE} alt="time" />
              <Select
                size="large"
                onChange={handleChangeTime}
                placeholder="Hãy chọn thời gian"
                bordered={false}
                loading={loading}
                disabled={loading}
              >
                {handleRenderTime()}
              </Select>
            </div>
            <div className="qs__button">
              <Button type="primary" size="large" disabled={count < 3}>
                Đặt vé
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickSearch;
