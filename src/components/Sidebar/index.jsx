import { useSidebarStore } from "@/store/sidebarStore.js";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useContext } from "react";
import menuItems from "@/routes/menuConfig.js";
import { Layout, Menu, Drawer } from "antd";
import "./index.less";
// 语言切换
import { LanguageContext } from "@/context/LanguageContext";
// 国际化
import { useTranslation } from "react-i18next";
// 侧边栏
const { Sider } = Layout;

const Sidebar = ({ collapsed = useSidebarStore((state) => state.isOpen) }) => {
  // 国际化
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language; // 当前语言
  // 路由位置
  const location = useLocation();
  const [open, setOpen] = useState(false);
  // 抽屉
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);
  // 主题
  const theme = localStorage.getItem("theme") || "dark";

  const processedItems = menuItems
    .filter((item) => !item.menuHidden)
    .map((item) => ({
      key: item.path, // 👈 直接用 path 作为 key
      icon: item.icon,
      label: <Link to={item.path}>{t(item.label)}</Link>,
    }));

  const { changeLanguage } = useContext(LanguageContext);

  return (
    <Sider
      collapsed={collapsed}
      width={250}
    >
      {/* 左上角logo */}
      <a
        href="#"
        className="net_title"
      >
        Life
      </a>
      {/* 侧边栏菜单 */}
      <Menu
        theme={theme}
        mode="inline"
        selectedKeys={[location.pathname.toLowerCase()]} // ✅ 路由自动高亮
        items={processedItems}
      />
      {/* 简历下载 */}
      <div className="side-profile">
        <div className="info">
          <img
            alt="admin"
            src="/images/person.jpg"
          />
          <span>{t("wei.name")}</span>
          <p>{t("wei.career")}</p>
        </div>

        <div className="skills">
          <h5>{t("wei.skills")}</h5>
          <div className="skill-tags">
            <div className="item">
              <p>HTML</p>
            </div>
            <div className="item">
              <p>CSS</p>
            </div>
            <div className="item">
              <p>JavaScript</p>
            </div>
            <div className="item">
              <p>Vue</p>
            </div>
            <div className="item">
              <p>React</p>
            </div>
          </div>
        </div>

        <p className="classify cursor">
          <a href="CV_EN.docx">{t("wei.ResumeDownload")}</a>
        </p>
        {/* 右上角头像以及点击的弹窗 */}
        <div className="container">
          <div className="nav">
            <div
              className="user-info cursor"
              onClick={showDrawer}
            >
              <i
                id="avatar"
                className="ri-user-settings-line"
              ></i>
            </div>
          </div>

          <Drawer
            title={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: 24 }}>
                  {t("wei.userMenu")}
                </span>
                {/* 关闭按钮 */}
                <button
                  onClick={onClose}
                  className="ri-close-fill close-btn cursor"
                ></button>
              </div>
            }
            // 去掉分隔线
            headerStyle={{
              borderBottom: "none",
            }}
            // 不要默认的关闭按钮
            closable={false}
            onClose={onClose}
            open={open}
            width={500}
          >
            <div
              id="sidebar"
              className="sidebar-right"
            >
              <div className="sidebar-right-box">
                <div className="sidebar-right-content">
                  <p>
                    <span>Email</span>：
                  </p>
                  <div className="classify">
                    <p>cn.jiangwei.1997@gmail.com</p>
                  </div>
                </div>

                <div className="sidebar-right-content">
                  <p>
                    <span>Github</span>：
                  </p>
                  <div className="classify">
                    <p>https://github.com/motiandalou</p>
                  </div>
                </div>

                <div className="sidebar-right-content">
                  <p>
                    <span>LinkedIn</span>：
                  </p>
                  <div className="classify">
                    <p>https://www.linkedin.com/in/wei-jiang-a28427366</p>
                  </div>
                </div>
              </div>

              <div className="sidebar-right-box">
                <div className="sidebar-right-content cursor">
                  <p>
                    <i className="icon ri-earth-line"></i>
                    <span>{t("wei.lang")}</span>
                  </p>
                  <p className="classify">
                    <span
                      id="language_zh"
                      className={`btn_click ${
                        currentLang === "zh" ? "active" : ""
                      }`}
                      onClick={() => {
                        changeLanguage("zh");
                        localStorage.setItem("language", "zh");
                      }}
                    >
                      简体
                    </span>
                    <span
                      id="language_en"
                      // className="btn_click"
                      className={`btn_click ${
                        currentLang === "en" ? "active" : ""
                      }`}
                      onClick={() => {
                        changeLanguage("en");
                        localStorage.setItem("language", "en");
                      }}
                    >
                      EN
                    </span>
                  </p>
                </div>

                <div className="sidebar-right-content cursor">
                  <p>
                    <i className="icon ri-t-shirt-line"></i>
                    <span>{t("wei.theme")}</span>
                  </p>
                  <p className="classify">
                    <span
                      id="theme_light"
                      className="btn_click"
                      onClick={() => switchTheme("theme-light.css")}
                    >
                      {t("wei.sun")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
