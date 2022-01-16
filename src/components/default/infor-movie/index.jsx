import React from "react";
import { Images } from "../../../assets/images";
import "./styles.scss";
function InforMovie(props) {
  return (
    <div className="im__section">
      <div className="content__container">
        <div className="im__wrapper">
          <div className="im__left">
            <div className="im__offer">
              <h3>Ưu Đãi Áp Dụng</h3>
              <div className="im__offerBody">
                <div className="im__offerItem">
                  <div className="im__offerThumb">
                    <img src={Images.AMAZON} alt="amazon" />
                  </div>
                  <div className="im__offerContent">
                    <h6>
                      <a href="#">Ưu đãi hoàn tiền trên Amazon Pay</a>
                    </h6>
                    <p>Kiếm được khoản tiền hoàn lại lên đến 300 Rs *</p>
                  </div>
                </div>
                <div className="im__offerItem">
                  <div className="im__offerThumb">
                    <img src={Images.PAYPAL} alt="paypal" />
                  </div>
                  <div className="im__offerContent">
                    <h6>
                      <a href="#">Ưu đãi PayPal</a>
                    </h6>
                    <p>
                      Giao dịch lần đầu tiên với Paypal và được hoàn tiền 100%
                      lên đến Rs. 500
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="im__right">
            <div className="im__detailMovie">
              <h3>Hình Ảnh</h3>
              <div className="im__detailPhotos">
                <img src={Images.DETAIL_1} alt="detail1" />
                <img src={Images.DETAIL_2} alt="detail2" />
                <img src={Images.DETAIL_3} alt="detail3" />
              </div>
              <span className="im__genneral">Tổng Quan</span>
              <div className="im__infor">{props.movie.moTa}</div>
              <h3 className="im__cast">Diễn Viên</h3>
              <div className="im__detailCast">
                <div className="im__detailCastItem">
                  <div className="im__castThumb">
                    <img src={Images.CAST} alt="cast" />
                  </div>
                  <div className="im__castContent">
                    <h6>nora hardy</h6>
                    <span>actor</span>
                    <p>As Raven</p>
                  </div>
                </div>
                <div className="im__detailCastItem">
                  <div className="im__castThumb">
                    <img src={Images.CAST} alt="cast" />
                  </div>
                  <div className="im__castContent">
                    <h6>nora hardy</h6>
                    <span>actor</span>
                    <p>As Raven</p>
                  </div>
                </div>
                <div className="im__detailCastItem">
                  <div className="im__castThumb">
                    <img src={Images.CAST} alt="cast" />
                  </div>
                  <div className="im__castContent">
                    <h6>nora hardy</h6>
                    <span>actor</span>
                    <p>As Raven</p>
                  </div>
                </div>
                <div className="im__detailCastItem">
                  <div className="im__castThumb">
                    <img src={Images.CAST} alt="cast" />
                  </div>
                  <div className="im__castContent">
                    <h6>nora hardy</h6>
                    <span>actor</span>
                    <p>As Raven</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InforMovie;
