import React, { createContext, useState, useEffect } from "react";
import { ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";
// antd组件的字体
import zhCN from "antd/locale/zh_CN"; // 简体中文
import enUS from "antd/locale/en_US"; // 英文
import zhTW from "antd/locale/zh_TW"; // 繁体中文
// 引入国际化配置
import "../../public/locales/i18n";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState(zhCN); // 默认简体中文
  const [language, setLanguage] = useState("zh-CN");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "zh-CN"; // 从 localStorage 中获取语言设置
    setLanguage(savedLang);
    // 设置对应的语言和 locale
    switch (savedLang) {
      case "zh-CN":
        setLocale(zhCN);
        break;
      case "zh-TW":
        setLocale(zhTW);
        break;
      case "en":
        setLocale(enUS);
        break;
      default:
        setLocale(zhCN);
        break;
    }
    i18n.changeLanguage(savedLang);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang); // 保存到 localStorage
    i18n.changeLanguage(lang); // 切换 i18next 的语言

    // 设置对应的 locale
    switch (lang) {
      case "zh-CN":
        setLocale(zhCN);
        break;
      case "zh-TW":
        setLocale(zhTW);
        break;
      case "en":
        setLocale(enUS);
        break;
      default:
        setLocale(zhCN);
        break;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      <ConfigProvider locale={locale}>{children}</ConfigProvider>
    </LanguageContext.Provider>
  );
};
