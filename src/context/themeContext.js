import React, { createContext, useState, useEffect } from "react";

// 定义 Context
export const ThemeContext = createContext();

// 主题对应的 CSS 文件
const themes = {
  blue: "/theme/blue.css",
  dark: "/theme/dark.css",
  white: "/theme/white.css",
};

export const ThemeProvider = ({ children }) => {
  // 先从 localStorage 读取主题
  const storedTheme = localStorage.getItem("theme") || "blue";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.getElementById("theme-link").href = themes[theme];
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* 主题文件 */}
      <link id="theme-link" rel="stylesheet" href={themes[theme]} />
      {children}
    </ThemeContext.Provider>
  );
};
