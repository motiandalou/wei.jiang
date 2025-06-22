import { useSidebarStore } from "@/store/sidebarStore.js";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import menuItems from "@/routes/menuConfig.js";
import { Layout, Menu } from "antd";
import "./index.less";
import { useTranslation } from "react-i18next";
import { Button, Drawer } from "antd";

const { Sider } = Layout;

const Sidebar = ({ collapsed = useSidebarStore((state) => state.isOpen) }) => {
  // 国际化
  const { t } = useTranslation();
  // 右侧抽屉开关
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const location = useLocation();

  const [selectedKey, setSelectedKey] = useState(
    localStorage.getItem("selectedMenuKey") || "dashboard"
  );
  const [openKeys, setOpenKeys] = useState(
    JSON.parse(localStorage.getItem("openMenuKeys")) || []
  );

  const theme = localStorage.getItem("theme") || "dark";

  useEffect(() => {
    const currentPath = location.pathname;
    let foundItem = null;
    let parentKey = null;

    menuItems.forEach((item) => {
      if (item.items) {
        item.items.forEach((subItem) => {
          if (subItem.path === currentPath) {
            foundItem = subItem;
            parentKey = item.key;
          }
        });
      } else if (item.path === currentPath) {
        foundItem = item;
      }
    });

    if (foundItem) {
      setSelectedKey(foundItem.key);
      localStorage.setItem("selectedMenuKey", foundItem.key);
      if (parentKey) {
        setOpenKeys([parentKey]);
        localStorage.setItem("openMenuKeys", JSON.stringify([parentKey]));
      }
    }
  }, [location.pathname]);

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
    localStorage.setItem("openMenuKeys", JSON.stringify(keys));
  };

  const processedItems = menuItems.map((item) => {
    if (item.items) {
      return {
        key: item.key,
        icon: item.icon,
        label: item.label,
        children: item.items
          .filter((subItem) => !subItem.menuHidden)
          .map((subItem) => ({
            key: subItem.key,
            label: <Link to={subItem.path}>{subItem.label}</Link>,
          })),
      };
    } else {
      return {
        key: item.key,
        icon: item.icon,
        label: <Link to={item.path}>{item.label}</Link>,
      };
    }
  });

  return (
    <Sider collapsed={collapsed} width={250}>
      <a className="net_title">Life</a>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        items={processedItems}
      />

      <div className="side-profile">
        <div className="info">
          <img alt="admin" src="../../../public/images/person.jpg" />
          <a href="#">{t("wei.name")}</a>
          <p>{t("wei.career")}</p>
        </div>
        <div className="skills">
          <h5>{t("wei.skills")}</h5>
          <div className="skill-tags">
            <div className="item">
              <p>Vue</p>
            </div>
            <div className="item">
              <p>React</p>
            </div>
            <div className="item">
              <p>Flutter</p>
            </div>
            <div className="item">
              <p>HTML / CSS / JavaScript</p>
            </div>
          </div>
        </div>
        <p className="classify cursor">
          <a href="CV_EN.docx">{t("wei.ResumeDownload")}</a>
          {/* <a href="CV_CN.docx" >{t("wei.ResumeDownload")}</a>  */}
        </p>

        {/* 头像 */}
        <div className="container">
          <div className="nav">
            <button id="menuToggle">
              <i className="bx bx-menu"></i>
            </button>
            <div className="user-info cursor" onClick={showDrawer}>
              <i id="avatar" className="ri-user-settings-line"></i>
            </div>
          </div>

          {/* 右侧弹窗 */}
          <Drawer
            title={t("wei.userMenu")}
            closable={{ "aria-label": "Close Button" }}
            onClose={onClose}
            open={open}
          >
            <div id="sidebar" className="sidebar-right">
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
                    <span>linkedin</span>：
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
                      onclick="(()=>{changeLanguage('zh') ; localStorage.setItem('language','zh');langChang()})() "
                    >
                      简体
                    </span>
                    <span
                      id="language_en"
                      className="btn_click"
                      onclick="(()=>{changeLanguage('en') ; localStorage.setItem('language','en');;langChang()})()"
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
                      onclick="switchTheme('theme-light.css')"
                    >
                      {t("wei.sun")}
                    </span>
                    {/* <span id="theme_dark" onclick="switchTheme('theme-dark.css')">{t("wei.moon")}<span>  */}
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
