import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import "./styles.scss";
import { Link } from "react-router-dom";
import { Images } from "../../assets/images";
function AdminRole(props) {
  const { Content, Sider } = Layout;

  const [open, setOpen] = useState(false);
  const onCollapse = () => {
    setOpen(!open);
  };
  console.log(props);
  return (
    <Layout className="ar__wrapper">
      <Sider collapsible collapsed={open} onCollapse={onCollapse}>
        <div className="ar__logo">
          <img src={Images.TICKET} alt="" />
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            Người Dùng
            <Link to="/admin" />
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Phim
            <Link to="/admin/quan-ly-phim" />
          </Menu.Item>
          <Menu.Item key="3" icon={<PoweroffOutlined />}>
            Đăng Xuất
            <Link to="/dang-nhap" />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
}

export default AdminRole;
