import React from "react";
import { useTranslation } from "react-i18next";

function Blog() {
  // 国际化
  const { t } = useTranslation();
  return (
    <>
      <div id="Blog" className="content">
        <ul></ul>
        <ul className="pagination" id="pagination02"></ul>

        <div className="header">
          <h4>{t("wei.blogTitle")}</h4>
          <p>{t("wei.blogSubTitle")}</p>
        </div>
        <div id="dataListBlog" className="job-cards"></div>
      </div>
    </>
  );
}

export default Blog;
