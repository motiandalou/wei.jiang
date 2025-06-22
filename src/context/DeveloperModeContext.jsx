// 开发者模式
import React, { createContext, useContext, useEffect, useState } from "react";

const DeveloperModeContext = createContext();

export const DeveloperModeProvider = ({ children }) => {
  const initMode = localStorage.getItem("developerMode") === "true";
  const [developerMode, setDeveloperMode] = useState(initMode);

  const toggleDeveloperMode = () => {
    const newMode = !developerMode;
    setDeveloperMode(newMode);
    localStorage.setItem("developerMode", newMode);
  };

  return (
    // 1. 抛出了状态: developerMode
    // 2. 抛出了方法: toggleDeveloperMode
    <DeveloperModeContext.Provider
      value={{ developerMode, toggleDeveloperMode }}
    >
      {children}
    </DeveloperModeContext.Provider>
  );
};

export const useDeveloperMode = () => useContext(DeveloperModeContext);
