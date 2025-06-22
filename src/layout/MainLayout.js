import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useSidebarStore } from "../store/sidebarStore.js";
import LanguageSwitcher from "./changeLanguage.jsx";
import ThemeSwitcher from "./changeTheme.jsx";
import { Layout, Avatar, Space } from "antd";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import "./index.less";

const { Header, Content } = Layout;

const MainLayout = () => {
  const [isHeaderImg, setIsHeaderImg] = useState(false);
  const toggle = useSidebarStore((state) => state.toggle);

  // 修改个人密码 / 修改个人信息
  const handleModifyType = (type) => () => {
    console.log("modify type:", type);
  };

  // 函数--修改
  const about = () => {
    console.log("about");
  };

  // 退出登陆
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Content style={{ padding: "80px 20px 20px 20px", background: "#fff" }}>
          {/* 显示路由文件页面 */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
