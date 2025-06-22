import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; // 用于动态加载 JSON 语言包
import LanguageDetector from "i18next-browser-languagedetector"; // 浏览器语言检测

i18n
  .use(Backend) // 允许从 public/locales 目录加载语言文件
  .use(LanguageDetector) // 检测用户语言
  .use(initReactI18next) // 绑定 React
  .init({
    // 读取本地存储(默认语言为中文)
    fallbackLng: localStorage.getItem("language") || "zh-CN",
    // 生产环境关闭调试
    debug: false,
    // 避免 XSS 保护问题
    interpolation: { escapeValue: false },
    backend: {
      // 1. 在大型项目中，语言包会变得很大，将其拆分为独立 JSON 文件可以减少主包体积，并支持动态加载
      // 2. i18next-http-backend 默认会从 public/locales/ 目录加载 JSON 文件
      // 语言文件路径
      loadPath: "/locales/{{lng}}.json",
    },
  });

export default i18n;
