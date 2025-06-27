import React from "react";
import { useTranslation } from "react-i18next";

function Company() {
  // 国际化
  const { t } = useTranslation();
  return (
    <>
      <div id="Company" className="content">


        <div className="header">
          <h4>{t("wei.companyTitle")}</h4>
          <p style={{ marginLeft: '.1268rem' }}>{t("wei.companySubTitle")}</p>
        </div>

        <div id="dataListCompany" className="job-cards"></div>
      </div>

      
    </>
  );
}

export default Company;
