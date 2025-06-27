
import { Layout } from "antd";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
import React from "react";


const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 侧边栏 */}
      <Sidebar />
      {/* 主页面 */}
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
