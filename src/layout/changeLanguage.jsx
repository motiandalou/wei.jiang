import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Button } from "antd";

const LanguageSwitcher = () => {
  const { changeLanguage } = useContext(LanguageContext);
  // todo this.$store.dispatch("setLang", lang).then(async () => {
  //   const res = await opsApi.setLanguage(lang);
  // });

  return (
    <div>
      <Button onClick={() => changeLanguage("zh-CN")}>中</Button>
      <Button onClick={() => changeLanguage("en")}>英</Button>
      <Button onClick={() => changeLanguage("zh-TW")}>繁</Button>
    </div>
  );
};

export default LanguageSwitcher;
