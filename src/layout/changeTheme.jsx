import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { Button } from "antd";

const ThemeSwitcher = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div>
      <Button onClick={() => setTheme("dark")}>黑</Button>
      <Button onClick={() => setTheme("blue")}>蓝</Button>
      <Button onClick={() => setTheme("white")}>白</Button>
    </div>
  );
};

export default ThemeSwitcher;
