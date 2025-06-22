import { DeveloperModeProvider } from "./context/DeveloperModeContext";
import { LanguageProvider } from "./context/LanguageContext"; // 引入语言管理
import { ThemeProvider } from "./context/themeContext"; // 引入主题管理
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./assets/css/global.less"; // 引入公共样式
import "./assets/css/reset.less"; // 引入自定义样式(比如antd修改基础样式)
import App from "./App";
import React from "react";

// 开发环境使用mock数据
if (process.env.NODE_ENV === "development") {
  const { worker } = await import("./mocks/browser.js");
  await worker.start();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DeveloperModeProvider>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </DeveloperModeProvider>
  </BrowserRouter>
);
