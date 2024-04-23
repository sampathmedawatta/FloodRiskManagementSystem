import React, { useState, useEffect } from "react";

function AdminMap() {
  return (
    <div className="col-xxl-5 col-xl-6 col-lg-6">
      <div className="section-box">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <div className="row">
                <div className="col-md-10">
                  <h6 className="text-left">
                    <i className="bi bi-globe-central-south-asia fs-5" />
                    &nbsp;&nbsp;
                  </h6>
                </div>
                <div className="col-md-2">
                  <p className="text-right font-xs color-text-paragraph-2">
                    {}
                  </p>
                </div>
              </div>
            </div>
            <div className="panel-body">Map</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminMap;
