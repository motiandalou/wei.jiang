import React from "react";

// 统一样式
const buildIcon = (icon) => (
  <span
    style={{
      width: 16,
      height: 16,
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
    key: "PROJECT",
    label: "项目",
    icon: buildIcon(<i className="ri-list-check-3" />),
    path: "project",
  },
  // 博客
  {
    key: "PROJECT",
    label: "博客",
    icon: buildIcon(<i className="ri-news-line" />),
    path: "blog",
  },
  // 公司
  {
    key: "PROJECT",
    label: "公司",
    icon: buildIcon(<i className="bx bx-search-alt" />),
    path: "company",
  },
  // 教育
  {
    key: "PROJECT",
    label: "教育",
    icon: buildIcon(<i className="ri-school-fill" />),
    path: "education",
  },
];

export default menuItems;
