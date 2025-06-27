import React from "react";
import { useTranslation } from "react-i18next";

function Blog() {
  // 国际化
  const { t } = useTranslation();
  return (
    <>
      <div id="Blog" className="content">
    
        <div className="header">
          <h4>{t("wei.blogTitle")}</h4>
          <p style={{ marginLeft: '.1268rem' }}>{t("wei.blogSubTitle")}</p>
        </div>
        <div id="dataListBlog" className="job-cards"></div>
      </div>
    </>
  );
}

export default Blog;
