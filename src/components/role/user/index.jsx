import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../../redux/action/userAction";
import { changeStatusLoading } from "../../../redux/slices/assetSlice";
import { Table } from "antd";
import Loading from "../../loading";
import "./styles.scss";
import { Images } from "../../../assets/images";
function UserManage() {
  const { loading } = useSelector((state) => state.asset);
  const { listUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeStatusLoading(true));
    dispatch({ type: userAction.FETCH_DATA_USER, payload: "GP01" });
  }, []);
  const addElement = () => {
    if (listUser && listUser.length > 0) {
      const listUserUpdate = listUser?.map((item, index) => ({
        ...item,
        key: ++index,
      }));
      return listUserUpdate;
    }
  };

  const columns = [
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Mật Khẩu",
      dataIndex: "matKhau",
      key: "matKhau",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDt",
      key: "soDt",
    },
    {
      title: "Loại",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
    },
    {
      title: "",
      key: "action",
      render: (record) => (
        <div className="um__button">
          <img src={Images.TRASH} alt="trash" />
          <img src={Images.PENCIL} alt="pencil" />
        </div>
      ),
    },
  ];
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="um__section">
          <div className="um__wrapper">
            <Table columns={columns} dataSource={addElement()} />
          </div>
        </div>
      )}
    </>
  );
}

export default UserManage;
