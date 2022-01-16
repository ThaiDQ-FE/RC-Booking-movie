import React from "react";
import { Images } from "../../../assets/images";
import Detail from "./detail";
import Payment from "./payment";
import "./styles.scss";
function CheckOuts() {
  return (
    <div className="co__section">
      <div className="content__container">
        <div className="co__row">
          <Payment />
          <Detail />
        </div>
      </div>
    </div>
  );
}

export default CheckOuts;
