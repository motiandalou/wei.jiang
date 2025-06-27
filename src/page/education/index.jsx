import React from "react";
import { useTranslation } from "react-i18next";

function Education() {
  // 国际化
  const { t } = useTranslation();
  return (
    <>
      <div id="Education" className="content">
       

        <div className="header">
          <h4>{t("wei.educationTitle")}</h4>
          <p style={{ marginLeft: '.1268rem' }}>{t("wei.educationSubTitle")}</p>
        </div>

        <div id="dataListEducation" className="job-cards"></div>
      </div>
    </>
  );
}

export default Education;
