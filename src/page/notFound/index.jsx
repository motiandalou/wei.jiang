import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.less"; // 引入样式文件
import img404 from "./img/404.svg"; // 注意路径是否正确

const NotFound = () => {
  const navigate = useNavigate();
  const isLogin = true; // 模拟判断是否登录（可接入 Redux、Context）

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="page404">
      <div className="page404-Box">
        <img src={img404} alt="404" />
        <p className="box-title">出错了，请稍后再试！</p>
        <p className="go-back">
          <Button type="primary" onClick={goBack}>
            {isLogin ? "返回首页" : "返回首页"}
          </Button>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
