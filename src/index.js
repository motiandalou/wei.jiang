import { LanguageProvider } from "./context/LanguageContext"; // 引入语言管理
import { ThemeProvider } from "./context/themeContext"; // 引入主题管理
import { HashRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./assets/css/global.less"; // 引入公共样式
// import "./assets/css/reset.less"; // 引入自定义样式(比如antd修改基础样式)
import App from "./App";
import React from "react";
import "./utils/flexible";



ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
  </Router>
);
