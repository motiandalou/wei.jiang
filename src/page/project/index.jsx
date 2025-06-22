import React from "react";
import { useTranslation } from "react-i18next";
import "./index.less";
import { projectsList } from "./formData";
import { Pagination } from "antd";

function Project() {
  const { ZH, EN } = projectsList();
  // 国际化
  const { t } = useTranslation();

  return (
    <>
      <div id="Project" className="content">
        <div className="header">
          <h4>{t("wei.projectTitle")}</h4>
          <p>{t("wei.projectSubTitle")}</p>
          <Pagination
            className="pagination"
            defaultCurrent={1}
            total={ZH.length}
            size="small"
          />
        </div>
        <div id="dataListProject" className="job-cards">
          {ZH?.slice(0, 5).map((item) => (
            <div className="card">
              <div className="card-header">
                <div className="job-info">
                  {/* <i className="${item.icon || "ri-price-tag-line"}"></i> */}
                  <div>
                    <h5>
                      {item.title}
                      <span>
                        | {item.time[0] || "-"} - {item.time[1] || "-"}
                      </span>
                    </h5>
                    <span>Front end Development Engineer</span>
                    <p>Shang Hai, China</p>
                  </div>
                </div>
                {item.jump && (
                  <a href={item.jump} target="_blank" rel="noreferrer">
                    <i
                      style={{ fontSize: "0.1408rem" }}
                      className="ri-guide-fill"
                    ></i>
                  </a>
                )}
              </div>
              <div className="card-tags">
                {item.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              <div className="card-desc">{item.content}</div>

              <button id={item.id} className="seeMore cursor">
                <p className="seeMore-text">Read More</p>
                <p className="iconer">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
