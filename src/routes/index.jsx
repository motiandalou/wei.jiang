import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotFound from "../page/notFound";
import Blog from "../page/blog";
import Project from "../page/project";
import Education from "../page/education";
import Company from "../page/company";
import React from "react";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 默认跳转到 /projects */}
      <Route path="/" element={<Navigate to="/project" replace />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="project" element={<Project />} />
        <Route path="blog" element={<Blog />} />
        <Route path="education" element={<Education />} />
        <Route path="company" element={<Company />} />
      </Route>

      {/* 没匹配到的页面走 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
