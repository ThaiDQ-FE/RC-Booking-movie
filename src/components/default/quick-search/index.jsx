import React from "react";
import { Images } from "../../../assets/images";
import "./styles.scss";
function QuickSearch() {
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
        </div>
      </div>
    </div>
  );
}

export default QuickSearch;
