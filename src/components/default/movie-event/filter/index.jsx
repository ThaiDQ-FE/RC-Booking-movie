import React from "react";
import "./styles.scss";
function FilterMovie() {
  const listType = [
    "Giật gân",
    "Kinh dị",
    "Kịch",
    "Lãng mạn",
    "Hành động",
    "Hài kịch",
    "Animation",
    "Khoa học",
    "Phiêu lưu",
    "Hư cấu",
  ];
  const renderListCheckBox = () => {
    return listType.map((item, index) => {
      return (
        <div className="fm__form" key={index}>
          <input type="checkbox" name="genre" id={"genre" + index + 1} />
          <label htmlFor={"genre" + index + 1}>{item}</label>
        </div>
      );
    });
  };

  return (
    <div className="fm__certi">
      <div className="fm__certiBox-1">
        <div className="fm__certiBox-1-body">
          <h6 className="fm__title">Thể loại</h6>
          <div className="fm__check">{renderListCheckBox()}</div>
        </div>
      </div>
    </div>
  );
}

export default FilterMovie;
