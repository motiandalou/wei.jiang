import React from "react";


// 统一样式
const buildIcon = (icon) => (
  <span
    style={{
      fontSize:'20px',
      display: "inline-block",
      textAlign: "center",
    }}
  >
    {icon}
  </span>
);

const menuItems = [
  // 项目
  {
    key: "/project",
    label: "wei.project",
    icon: buildIcon(<i className="ri-list-check-3" />),
    path: "/project",
  },
  // 博客
  {
    key: "/blog",
    label: "wei.blog",
    icon: buildIcon(<i className="ri-news-line" />),
    path: "/blog",
  },
  // 公司
  {
    key: "/company",
    label: "wei.company",
    icon: buildIcon(<i className="bx bx-search-alt" />),
    path: "/company",
  },
  // 教育
  {
    key: "/education",
    label: "wei.education",
    icon: buildIcon(<i className="ri-school-fill" />),
    path: "/education",
  },
];

export default menuItems;
