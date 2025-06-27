import "./index.less";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Button, Drawer } from "antd";

function Dashboard() {
  // 国际化
  const { t } = useTranslation();

  return (
    <>
      {/* <div className="computer-only">
        <div id="overlay" className="overlay"></div>
        <div id="modal-overlay" style={{ display: "none" }}></div>
        <div id="modal-content" style={{ display: "none" }}>
          <button id="modal-close" type="button">
            ×
          </button>
          <div id="modal-body"></div>
        </div>
      </div> */}

      {/* MOBILE  */}
      <div className="mobile-only">
        <div className="navbar">
          <div
            style={{
              "font-size": "24px",
              "font-family": "'Cinzel Decorative', 'cursive'",
            }}
          >
            W
          </div>
          <i id="menuToggle_mobile" className="ri-menu-line menu-toggle"></i>
        </div>

        <div className="divider">
          <p></p>
        </div>

        {/* 汉堡菜单 */}
        <div className="menu-overlay" id="menuOverlay"></div>
        <div className="menu-content" id="menuContent">
          <a
            href="#"
            className="navbar__link cursor active"
            data-page="project"
          >
            Project
          </a>
          <a href="#Blog" className="navbar__link cursor" data-page="blog">
            Blog
          </a>
          <a
            href="#Company"
            className="navbar__link cursor"
            data-page="company"
          >
            Company
          </a>
          <a
            href="#Education"
            className="navbar__link cursor"
            data-page="education"
          >
            Education
          </a>
        </div>

        {/* 内容展示区  */}
        <div className="mobile-content"></div>

        {/* 博客弹窗 */}
        <div className="blog-modal" id="blogModal">
          <div className="blog-modal__content">
            <span className="close" id="modalClose">
              &times;
            </span>
            <h3 id="modalTitle">博客标题</h3>
            <p className="date" id="modalDate">
              日期
            </p>
            <div id="modalContent">内容</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
