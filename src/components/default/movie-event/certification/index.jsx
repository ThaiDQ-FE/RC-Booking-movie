import React from "react";
import { Images } from "../../../../assets/images";

function Certification() {
  return (
    <div className="me__certi">
      <div className="me__certiBox-1">
        <div className="me__certiBox-1-body">
          <ul>
            <li>
              <span className="img">
                <img src={Images.CARE} alt="care" />
              </span>
              <span className="text">Chăm sóc 24X7</span>
            </li>
            <li>
              <span className="img">
                <img src={Images.ASSURANCE} alt="assurance" />
              </span>
              <span className="text">Đảm bảo 100%</span>
            </li>
            <li>
              <span className="img">
                <img src={Images.PROMISE} alt="promise" />
              </span>
              <span className="text">Lời hứa</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Certification;
