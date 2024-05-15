import React from "react";

function AlertsView({ show, handleClose, alertData ,userLang}) {
  const getRiskLevel = (riskLevel) => {
    if (riskLevel === "High") {
      return "risklevel-high";
    } else if (riskLevel === "Moderate") {
      return "risklevel-moderate";
    } else if (riskLevel === "Low") {
      return "risklevel-norisk";
    } else {
      return "risklevel-norisk";
    }
  };
  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title">
              <i className="bi bi-file-plus-fill"></i> &nbsp;&nbsp;Alert Message
              for {alertData.location}
            </h6>
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              className="btn"
              onClick={handleClose}
            >
              <i className="bi bi-x-square-fill fs-5 "></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row justify-content-center"></div>

              <div className={`row ${getRiskLevel(alertData.riskLevel)}`}>
                <div className="col-12">
                  <div>
                    <span className="text-muted text-justify font-sm color-brand-1">
                      Location:{" "}
                    </span>
                    <span className="text-muted text-justify font-sm ">
                      {alertData.location}
                    </span>
                  </div>
                  <div></div>
                  <div>
                    <span className="text-muted text-justify font-sm color-brand-1">
                      Alert Date:{" "}
                    </span>
                    <span className="text-muted text-justify font-sm ">
                      {alertData.date}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted text-justify font-sm color-brand-1">
                      Risk Level:{" "}
                    </span>
                    <span className="text-muted text-justify font-sm ">
                      {alertData.riskLevel}
                    </span>
                  </div>
                  <br></br>
                  
                  {userLang === "Chinese" ? (
                     <div>
                     <h6>{alertData.title_zh}</h6>
                     <p className="text-muted text-justify font-sm">
                       <div
                         dangerouslySetInnerHTML={{
                           __html: alertData.description_zh,
                         }}
                       />
                     </p>
                   </div>
                      ) : (
                        <div>
                        <h6>{alertData.title}</h6>
                        <p className="text-muted text-justify font-sm">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: alertData.description,
                            }}
                          />
                        </p>
                      </div>
                      )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertsView;
