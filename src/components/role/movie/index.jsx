import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Images } from "../../../assets/images";
import { movieAction } from "../../../redux/action/movieAction";
import { Table } from "antd";
import moment from "moment";
import "./styles.scss";
function MovieManage() {
  const dispatch = useDispatch();
  const { listOfMovies } = useSelector((state) => state.movie);
  console.log(listOfMovies);
  useEffect(() => {
    dispatch({ type: movieAction.FETCH_DATA_SAGA });
  }, []);
  const addElement = () => {
    if (listOfMovies && listOfMovies.length > 0) {
      const listMovie = listOfMovies?.map((item, index) => ({
        ...item,
        key: ++index,
      }));
      return listMovie;
    }
  };
  const convertDate = (date) => {
    if (listOfMovies && listOfMovies.length > 0) {
      let fmt = "DD/MM/YYYY";
      return moment.utc(date, fmt).local().format(fmt);
    }
  };
  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      key: "maPhim",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (value) => (
        <div className="mm__ava">
          <img src={value} alt="value" />
        </div>
      ),
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
      render: (value) => <div className="mm__over">{value}</div>,
    },
    {
      title: "Bí Danh",
      dataIndex: "biDanh",
      key: "biDanh",
      render: (value) => <div className="mm__over">{value}</div>,
    },
    {
      title: "Mô Tả",
      dataIndex: "moTa",
      key: "moTa",
      render: (value) => <div className="mm__over">{value}</div>,
    },
    {
      title: "Trailer",
      dataIndex: "trailer",
      key: "trailer",
    },
    {
      title: "Ngày Khởi Chiếu",
      dataIndex: "ngayKhoiChieu",
      key: "ngayKhoiChieu",
      render: (value) => <div className="mm__over">{convertDate(value)}</div>,
    },
    {
      title: "Đánh Giá",
      dataIndex: "danhGia",
      key: "danhGia",
    },
    {
      title: "",
      key: "action",
      render: (record) => (
        <div className="mm__button">
          <img src={Images.TRASH} alt="trash" />
          <img src={Images.PENCIL} alt="pencil" />
        </div>
      ),
    },
  ];
  return (
    <div className="mm__section">
      <div className="mm__wrapper">
        <Table columns={columns} dataSource={addElement()} />
      </div>
    </div>
  );
}

export default MovieManage;
