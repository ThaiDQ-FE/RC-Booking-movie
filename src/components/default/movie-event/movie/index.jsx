import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import { checkPathURL } from "../../../../assets/helper";
import { Images } from "../../../../assets/images";
import "./styles.scss";
import "antd/dist/antd.css";
function HomeMovieSection(props) {
  const navigate = useNavigate();
  const [length, setLength] = useState({
    minValue: 0,
    maxValue: 3,
  });
  const pageSize = 9;
  const [initialState, setInitialState] = useState({
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  useEffect(() => {
    setInitialState({
      ...initialState,
      totalPage: props.listMovie.length / pageSize,
      maxIndex: pageSize,
    });
  }, []);

  const handleChange = (value) => {
    setInitialState({
      ...initialState,
      current: value,
      minIndex: (value - 1) * pageSize,
      maxIndex: value * pageSize,
    });
    window.scrollTo(0, 860);
  };
  const handleClick = (maPhim) => {
    navigate(`/movie-detail/${maPhim}`);
  };
  const renderListMovie = () => {
    if (props.listMovie && props.listMovie.length > 0) {
      if (checkPathURL() === "/movie-all") {
        return props.listMovie?.map(
          (item, index) =>
            index >= initialState.minIndex &&
            index < initialState.maxIndex && (
              <div className="hm__box" key={index}>
                <div className="hm__boxGrid">
                  <div className="hm__thumb">
                    <div
                      className="hm__img"
                      onClick={() => handleClick(item.maPhim)}
                    >
                      <img src={item.hinhAnh} alt={item.tenPhim} />
                    </div>
                  </div>
                  <div className="hm__content">
                    <h5 className="hm__title">
                      <div className="hm__titleLink">{item.tenPhim}</div>
                    </h5>
                    <ul className="hm__rating">
                      <li>
                        <div className="hm__ratingThumb">
                          <img src={Images.TOMATO} alt="tomato" />
                        </div>
                        <span className="hm__ratingSpan">88%</span>
                      </li>
                      <li>
                        <div className="hm__ratingThumb">
                          <img src={Images.CAKE} alt="cake" />
                        </div>
                        <span className="hm__ratingSpan">88%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
        );
      } else {
        return props.listMovie
          .slice(length.minValue, length.maxValue)
          .map((item, index) => (
            <div className="hm__box" key={index}>
              <div className="hm__boxGrid">
                <div className="hm__thumb">
                  <div className="hm__img">
                    <img src={item.hinhAnh} alt={item.tenPhim} />
                  </div>
                </div>
                <div className="hm__content">
                  <h5 className="hm__title">
                    <div className="hm__titleLink">{item.tenPhim}</div>
                  </h5>
                  <ul className="hm__rating">
                    <li>
                      <div className="hm__ratingThumb">
                        <img src={Images.TOMATO} alt="tomato" />
                      </div>
                      <span className="hm__ratingSpan">88%</span>
                    </li>
                    <li>
                      <div className="hm__ratingThumb">
                        <img src={Images.CAKE} alt="cake" />
                      </div>
                      <span className="hm__ratingSpan">88%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ));
      }
    }
  };
  if (checkPathURL() === "/movie-all") {
    return (
      <div className="hm__section">
        <div className="hm__sectionSlide">{renderListMovie()}</div>
        <div className="hm__paging">
          {props.listMovie && props.listMovie.length > 9 ? (
            <Pagination
              pageSize={pageSize}
              current={initialState.current}
              total={props.listMovie.length}
              onChange={handleChange}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="hm__section">
        <div className="hm__sectionHeader">
          <h2>movies</h2>
          <NavLink className="hm__viewAll" to="/movie-all">
            Xem Tất Cả
          </NavLink>
        </div>
        <div className="hm__sectionSlide">{renderListMovie()}</div>
      </div>
    );
  }
}

export default HomeMovieSection;
